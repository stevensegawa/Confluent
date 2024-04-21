// const puppeteer = require("puppeteer-extra");
// const StealthPlugin = require("puppeteer-extra-plugin-stealth");
// const envs = require('../envs.js');
// const { launch, getStream, wss } = require("puppeteer-stream");
// const fs = require("fs");
// const filePath = './data/test.webm';
// const file = fs.createWriteStream(filePath);
// const { Writable } = require('stream');
// const { performance } = require('perf_hooks')
// // Imports the Google Cloud client library
// const speech = require('@google-cloud/speech');
// // Creates a client
// const client = new speech.SpeechClient();

// const encoding = 'WEBM_OPUS';
// const sampleRateHertz = 16000;
// const languageCode = 'en-US';
const transcripts = [];
const transcript = "";
var translated_transcript = `(## Zoom Meeting Transcript - Project Brainstorming Session **Date:** April 20, 2024 **Participants:*** Alice (Meeting Host) - Marketing Manager
    * Bob - Software Developer
    * Charlie - Graphic Designer
    * Diana - Project Manager
    
    **Alice:** Good morning everyone, and thanks for joining our brainstorming session for the upcoming marketing campaign. Let's get started by going over the project goals.
    
    **Diana:** Sure, Alice. As you know, the goal of this campaign is to increase brand awareness for our new product launch by 20% within the next quarter. We're targeting a younger demographic, so we need creative and engaging marketing materials.
    
    **Alice:** Exactly. Bob, do you have any ideas for the core message we want to convey in the campaign?
    
    **Bob:** Sure! We could focus on the innovative features of the product and how it solves a specific problem for our target audience. Perhaps a tagline like "Simplify your life with [Product Name]" or something along those lines.
    
    **Charlie:** That's a good starting point, Bob. We could also incorporate some visually appealing elements in the marketing materials. Maybe a short animation showcasing the product's features or some eye-catching graphics for social media posts.
    
    **Alice:** Those are great suggestions! Diana, do you have any thoughts on the specific channels we should target for this campaign?
    
    **Diana:** Absolutely. Since we're aiming for a younger demographic, social media platforms like Instagram and TikTok would be ideal. We could also consider influencer marketing to reach a wider audience.
    
    **Bob:** Interesting. Maybe we could develop a short, engaging video ad specifically for these platforms. Something that quickly grabs attention and highlights the product's benefits.
    
    **Alice:** That sounds promising, Bob. We can discuss the video concept in more detail later. Let's jot down some keywords related to the campaign theme and target audience. This will help us with content creation and social media optimization.
    
    **[Brainstorming session continues... ]**
    
    **Alice:** Alright everyone, we've covered a lot of ground today. Thanks for your valuable input! Let's summarize the key takeaways:
    
    * Core message: Focus on the product's innovation and how it solves a specific problem.
    * Target audience: Younger demographic, active on social media.
    * Marketing channels: Social media platforms (Instagram, TikTok), influencer marketing (potential).
    * Content ideas: Short video ad, engaging social media posts, eye-catching graphics.
    
    **Diana:** Sounds good, Alice. I'll create a detailed project plan based on our discussion and assign tasks to each team member. We can schedule a follow-up meeting next week to discuss the next steps.
    
    **Alice:** Perfect, Diana. Thanks everyone for your participation. Let's keep the momentum going!
    
    **[Meeting ends]**`;

export var translated_transcript;


// function delay(time) {
//     return new Promise(function(resolve) { 
//         setTimeout(resolve, time)
//     });
// }
// const request = {
//     config: {
//         encoding: encoding,
//         sampleRateHertz: sampleRateHertz,
//         languageCode: languageCode,
//     },
//     interimResults: true, // If you want interim results, set this to true
// };

// const processData = ((dataResults) => {
//     let data = `${dataResults}`
//     if (data == 'END') {
//         console.log('END, press CTRL C');
//     } else {
//         console.log(data);
//         if (transcripts.length != 0) {
//             if (data.includes(transcripts[-1])) {
//                 //has a repeat
//                 if (data.length > transcripts[-1].length) {
//                     newWords = data.slice(transcripts[-1].length)
//                     //add the new words to transcript state
//                     transcript += newWords;
//                 }
//             } else {
//                 //not a repeat
//                 //add to transcript state
//                 transcript += data
//             }
//             transcripts.push(data)
//         }
//     }
// })

// const recognizeStream = client
//   .streamingRecognize(request)
//   .on('error', console.error)
//   .on('data', data =>
//     processData(
//       data.results[0] && data.results[0].alternatives[0]
//         ? `Transcription: ${data.results[0].alternatives[0].transcript}\n`
//         : 'END'
//     )
// );




// puppeteer.use(StealthPlugin());
// const run = (async () => {
//     const browser = await launch({
//         ignoreDefaultArgs: ["--mute-audio"],
//         defaultViewport: {
//             width: 1600,
//             height: 900,
//         },
//         channel: "chrome",
//     });

//     // going to sign-in page
//     const page = await browser.newPage();
//     const navigationPromise = page.waitForNavigation();
//     await page.goto("https://accounts.google.com/");

//     const context = browser.defaultBrowserContext();
//     await context.overridePermissions(
//         "https://meet.google.com/", ["microphone", "camera", "notifications"]
//     );

//     await navigationPromise;

//     // typing out email
//     await page.waitForSelector('input[type="email"]');
//     await page.click('input[type="email"]');
//     await navigationPromise;
//     await page.keyboard.type(`${envs.EMAIL}@gmail.com`, { delay: 50 + Math.floor(Math.random() * 10) });
//     await delay(1000 + Math.floor(Math.random() * 50));

//     await page.waitForSelector("#identifierNext");
//     await page.click("#identifierNext");

//     // typing out password
//     await delay(3000 + Math.floor(Math.random() * 50));
//     await page.keyboard.type(`${envs.PASSWORD}`, { delay: 20 + Math.floor(Math.random() * 10) });
//     await delay(800 + Math.floor(Math.random() * 40));
//     await page.keyboard.press('Enter');
//     await navigationPromise;

//     // going to Meet after signing in
//     await delay(3000 + Math.floor(Math.random() * 50));
//     await page.goto("https://meet.google.com/");
//     await page.waitForSelector('input[type="text"]');
//     await page.click('input[type="text"]');
//     await delay(1000 + Math.floor(Math.random() * 50));
//     await page.keyboard.type(`fks-wyob-edv`, { delay: 100 + Math.floor(Math.random() * 10) });  // replace aaa-bbbb-ccc with the required Google Meet Code
//     await delay(1500 + Math.floor(Math.random() * 50));
//     await page.keyboard.press('Enter');
//     await navigationPromise;

//     // turn off cam using Ctrl+E
//     await delay(8000 + Math.floor(Math.random() * 50));
//     await page.keyboard.down('ControlLeft');
//     await page.keyboard.press('KeyE');
//     await page.keyboard.up('ControlLeft');
//     await delay(100 + Math.floor(Math.random() * 50));

//     //turn off mic using Ctrl+D
//     await delay(100 + Math.floor(Math.random() * 50));
//     await page.keyboard.down('ControlLeft');
//     await page.keyboard.press('KeyD');
//     await page.keyboard.up('ControlLeft');
//     await delay(400 + Math.floor(Math.random() * 50));
    
//     // Join Now
//     var i;
//     for (i=1; i<=10; i++) {
//         await page.keyboard.press('Tab');
//         await delay(500 + Math.floor(Math.random() * 10));
//     }
//     await page.keyboard.press('Enter');
//     await navigationPromise;

//     //listen in to audio
//     const audioConstraints = {
//         mandatory: {
//             bitsPerSecond: 128000,
//             sampleRate: 12000
//         }
//     };
//     const stream = await getStream(page, { audio: true, video: false, mimeType: "audio/webm;codecs=opus", audioBitsPerSecond: 128000, audioConstraints: audioConstraints });
// 	console.log("recording");

// 	stream.pipe(recognizeStream);
//     setTimeout(async () => {
// 		await stream.destroy();
// 		//file.close();
// 		console.log("finished");

// 		await browser.close();
// 		(await wss).close();
// 	}, 1000 * 120);
// });

// exports.runBot = run();

// //GYAT
// const { GoogleGenerativeAI } = require("@google/generative-ai");

// //Access environmental variable Gemini API key. Make sure to put the file in Gitignore so that it stays private!
// const env = require("../envs.js")

// const API_KEY=envs.API_KEY  // For Unix-based systems (Linux, macOS)


// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI(API_KEY);

// async function translateText(language, audio_to_text) {
//     // For text-only input, use the gemini-pro model
//     const model = genAI.getGenerativeModel({ model: "gemini-pro"});
//     //language = "English"
//     //audio_to_text = "日本は四季があり、春は桜が咲き、夏は緑が豊かになり、秋は紅葉が美しく、冬は雪景色が見られます"
//     const prompt = ("Translate to " + language + " and format as sentences: " + transcripts);

//     const result = await model.generateContentStream(prompt);

//     let text = "";
//     for await (const chunk of result.stream) {
//     const chunkText = chunk.text();
//     console.log(chunkText);
//     text += chunkText;
//     translated_transcript += chunkText
//     }
//     transcripts == 0;

// if (Number.isFinite(transcripts) && transcripts > 50) {
//     translateText(languageCode, transcripts)
//     }
// }