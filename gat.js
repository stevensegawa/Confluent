//Make sure connection established
//console.log('Hello, World!');

//Allow for Google Gen AI I think
const { GoogleGenerativeAI } = require("@google/generative-ai");

//Access environmental variable Gemini API key. Make sure to put the file in Gitignore so that it stays private!
const env = require("./envs.js")

const API_KEY=env.API_KEY  // For Unix-based systems (Linux, macOS)


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function translateText(language, audio_to_text) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    //language = "English"
    //audio_to_text = "日本は四季があり、春は桜が咲き、夏は緑が豊かになり、秋は紅葉が美しく、冬は雪景色が見られます"
    const prompt = ("Translate to " + language + ": " + audio_to_text);
  
    const result = await model.generateContentStream(prompt);
  
    let text = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      text += chunkText;
    }
    console.log(text);
  }
  
  translateText(language = "English", 
  audio_to_text = "日本は四季があり、春は桜が咲き、夏は緑が豊かになり、秋は紅葉が美しく、冬は雪景色が見られます");



//Access your API key as an environment variable (see "Set up your API key" above)

//     async function translateText(language, audio_to_text) {
//         let prompt = ("Translate to " + language + ": " + audio_to_text);
//         result = null;
//         //Content Streaming! Allows us to achieve faster interactions by not waiting for the entire result, and instead use streaming to handle partial results.
//         try {
//             result = await model.generateContentStream(prompt)
//         }
//         catch (error){
//             console.error("Error connecting to Google Generative AI:", error);
//         }
//         let text = '';
//         for await (const chunk of result.stream) {
//             const chunkText = chunk.text();
//             console.log(chunkText);
//             text += chunkText;
//         }
//         console.log("Final Translation:", text);  // Print final translation after all chunks
//     }
//     //...
//     translateText(language = "English", audio_to_text = "日本は四季があり、春は桜が咲き、夏は緑が豊かになり、秋は紅葉が美しく、冬は雪景色が見られます")
// catch (error) {
//     console.error("Error connecting to Google Generative AI:", error);
//      Handle the error here (e.g., display an error message, retry logic)
//   }

// ...
