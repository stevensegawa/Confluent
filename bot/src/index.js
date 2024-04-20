const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const envs = require('../envs.js');
const { launch, getStream, wss } = require("puppeteer-stream");
const fs = require("fs");
const filePath = './data/test.webm';
const file = fs.createWriteStream(filePath);


function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

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
    await page.keyboard.type(`${envs.EMAIL}@gmail.com`, { delay: 100 + Math.floor(Math.random() * 10) });
    await delay(2000 + Math.floor(Math.random() * 50));

    await page.waitForSelector("#identifierNext");
    await page.click("#identifierNext");

    // typing out password
    await delay(3000 + Math.floor(Math.random() * 50));
    await page.keyboard.type(`${envs.PASSWORD}`, { delay: 50 + Math.floor(Math.random() * 10) });
    await delay(800 + Math.floor(Math.random() * 40));
    await page.keyboard.press('Enter');
    await navigationPromise;

    // going to Meet after signing in
    await delay(4000 + Math.floor(Math.random() * 50));
    await page.goto("https://meet.google.com/");
    await page.waitForSelector('input[type="text"]');
    await page.click('input[type="text"]');
    await delay(1000 + Math.floor(Math.random() * 50));
    await page.keyboard.type(`ebb-pufb-wfo`, { delay: 200 + Math.floor(Math.random() * 10) });  // replace aaa-bbbb-ccc with the required Google Meet Code
    await delay(800 + Math.floor(Math.random() * 50));
    await page.keyboard.press('Enter');
    await navigationPromise;

    // turn off cam using Ctrl+E
    await delay(7000 + Math.floor(Math.random() * 50));
    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('KeyE');
    await page.keyboard.up('ControlLeft');
    await delay(500 + Math.floor(Math.random() * 50));

    //turn off mic using Ctrl+D
    await delay(500 + Math.floor(Math.random() * 50));
    await page.keyboard.down('ControlLeft');
    await page.keyboard.press('KeyD');
    await page.keyboard.up('ControlLeft');
    await delay(1000 + Math.floor(Math.random() * 50));
    
    // Join Now
    var i;
    for (i=1; i<=10; i++) {
        await page.keyboard.press('Tab');
        await delay(500 + Math.floor(Math.random() * 10));
    }
    await page.keyboard.press('Enter');
    await navigationPromise;

    //listen in to audio
    const stream = await getStream(page, { audio: true, video: false });
	console.log("recording");

	stream.pipe(process.stdout);
    setTimeout(async () => {
		await stream.destroy();
		//file.close();
		console.log("finished");

		await browser.close();
		(await wss).close();
	}, 1000 * 40);
});

run();