const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const envs = require('../envs.js');
const { launch, getStream, wss } = require("puppeteer-stream");
const fs = require("fs");
const filePath = './data/test.webm';
const file = fs.createWriteStream(filePath);
const { Writable } = require('stream');
const { performance } = require('perf_hooks')
// Imports the Google Cloud client library
const speech = require('@google-cloud/speech');
// Creates a client
const client = new speech.SpeechClient();

const encoding = 'WEBM_OPUS';
const sampleRateHertz = 16000;
const languageCode = 'en-US';
const transcripts = [];
const transcript = "";

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}
const request = {
    config: {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
    },
    interimResults: true, // If you want interim results, set this to true
};

const processData = ((dataResults) => {
    let data = `${dataResults}`
    if (data == 'END') {
        console.log('END, press CTRL C');
    } else {
        console.log(data);
        if (transcripts.length != 0) {
            if (data.includes(transcripts[-1])) {
                //has a repeat
                if (data.length > transcripts[-1].length) {
                    newWords = data.slice(transcripts[-1].length)
                    //add the new words to transcript state
                    transcript += newWords;
                }
            } else {
                //not a repeat
                //add to transcript state
                transcript += data
            }
            transcripts.push(data)
        }
    }
})

const recognizeStream = client
  .streamingRecognize(request)
  .on('error', console.error)
  .on('data', data =>
    processData(
      data.results[0] && data.results[0].alternatives[0]
        ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
        : 'END'
    )
);




puppeteer.use(StealthPlugin());
const run = (async () => {
    const browser = await launch({
        ignoreDefaultArgs: ["--mute-audio"],
        defaultViewport: {
            width: 1920,
            height: 1080,
        },
        channel: "chrome",
    });

    // going to sign-in page
    const page = await browser.newPage();
    const navigationPromise = page.waitForNavigation();
    await page.goto("https://accounts.google.com/");

    const context = browser.defaultBrowserContext();
    await context.overridePermissions(
        "https://meet.google.com/", ["microphone", "camera", "notifications"]
    );

    await navigationPromise;

    // typing out email
    await page.waitForSelector('input[type="email"]');
    await page.click('input[type="email"]');
    await navigationPromise;
    await page.keyboard.type(`${envs.EMAIL}@gmail.com`, { delay: 50 + Math.floor(Math.random() * 10) });
    await delay(1000 + Math.floor(Math.random() * 50));

    await page.waitForSelector("#identifierNext");
    await page.click("#identifierNext");

    // typing out password
    await delay(3000 + Math.floor(Math.random() * 50));
    await page.keyboard.type(`${envs.PASSWORD}`, { delay: 20 + Math.floor(Math.random() * 10) });
    await delay(800 + Math.floor(Math.random() * 40));
    await page.keyboard.press('Enter');
    await navigationPromise;

    // going to Meet after signing in
    await delay(3000 + Math.floor(Math.random() * 50));
    await page.goto("https://meet.google.com/");
    await page.waitForSelector('input[type="text"]');
    await page.click('input[type="text"]');
    await delay(1000 + Math.floor(Math.random() * 50));
    await page.keyboard.type(`eeg-fehh-roy`, { delay: 100 + Math.floor(Math.random() * 10) });  // replace aaa-bbbb-ccc with the required Google Meet Code
    await delay(1500 + Math.floor(Math.random() * 50));
    await page.keyboard.press('Enter');
    await navigationPromise;

    // turn off cam using Ctrl+E
    await delay(8000 + Math.floor(Math.random() * 50));
    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('KeyE');
    await page.keyboard.up('ControlLeft');
    await delay(100 + Math.floor(Math.random() * 50));

    //turn off mic using Ctrl+D
    await delay(100 + Math.floor(Math.random() * 50));
    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('KeyD');
    await page.keyboard.up('ControlLeft');
    await delay(400 + Math.floor(Math.random() * 50));
    
    // Join Now
    var i;
    for (i=1; i<=10; i++) {
        await page.keyboard.press('Tab');
        await delay(500 + Math.floor(Math.random() * 10));
    }
    await page.keyboard.press('Enter');
    await navigationPromise;

    //listen in to audio
    const audioConstraints = {
        mandatory: {
            bitsPerSecond: 128000,
            sampleRate: 12000
        }
    };
    const stream = await getStream(page, { audio: true, video: false, mimeType: "audio/webm;codecs=opus", audioBitsPerSecond: 128000, audioConstraints: audioConstraints });
	console.log("recording");

	stream.pipe(recognizeStream);
    setTimeout(async () => {
		await stream.destroy();
		//file.close();
		console.log("finished");

		await browser.close();
		(await wss).close();
	}, 1000 * 45);
});

exports.runBot = run();