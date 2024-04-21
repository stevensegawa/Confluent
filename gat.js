//Make sure connection established
//console.log('Hello, World!');

//Allow for Google Gen AI I think
const { GoogleGenerativeAI } = require("@google/generative-ai");

//Access environmental variable Gemini API key. Make sure to put the file in Gitignore so that it stays private!
const env = require("./bot/envs.js")

const API_KEY=env.API_KEY  // For Unix-based systems (Linux, macOS)


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function translateText(language, audio_to_text) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    //language = "English"
    //audio_to_text = "日本は四季があり、春は桜が咲き、夏は緑が豊かになり、秋は紅葉が美しく、冬は雪景色が見られます"
    const prompt = ("Translate to " + language + " and format as sentences: " + audio_to_text);
  
    const result = await model.generateContentStream(prompt);
  
    let text = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      console.log(chunkText);
      text += chunkText;
    }
  }
  
  translateText(language = "English", 
  audio_to_text = `the aroma of freshlyBaked bread filled the kitchen as the golden loaves emerged from the oventhe curious child peered through the telescope her eyes wide with wonder as she gazed at the distant starsthe rhythmic sound of rain pattered against thewindowpane creating a sense of peaceful tranquilitywith a determined glint in his eye the athlete pUshed himself further during his grueling training sessionthe vibrant colors of the autumn leaves painted a brEathtaking landscape across the rolling hillsthe melody of the violin serenaded the audience transporting Them to a world of emotional depththe aroma of freshly brewed coffee invigorated the sleepy office workers as they began their daYthe playful puppy chased its tail in circles its boundless energy radiating pure joythe wise elder shared stories of his life experiences offering valuable insights to the younger generationthe artist meticulously applied delicate brushstrokes to the canvas bringing`);