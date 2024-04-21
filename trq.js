//Transcript Question
//Make sure connection established
//console.log('Hello, World!');

//Allow for Google Gen AI I think
import { GoogleGenerativeAI } from "@google/generative-ai";

//Access environmental variable Gemini API key. Make sure to put the file in Gitignore so that it stays private!
//import env from "./bot/envs.js"
import { API_KEY } from "./bot/envs.js";
//const API_KEY=env.API_KEY  // For Unix-based systems (Linux, macOS)

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

async function askQuestion(transcript, question, setResponse) {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    const prompt = ("Answer this question: " + question + "\nGiven this meeting transcript: " + transcript);
  
    const result = await model.generateContentStream(prompt);
  
    let text = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      text += chunkText;

      // Update response state (if using state management)
      if (setResponse) {
        setResponse(text);
      } else {
        console.log(text); // Fallback to console logging if no state management
      }
    }
    //module.exports() = askQuestion;
  }
  export default askQuestion;
  
  // askQuestion(transcript = `(## Zoom Meeting Transcript - Project Brainstorming Session

  // **Date:** April 20, 2024
  
  // **Participants:**
  
  // * Alice (Meeting Host) - Marketing Manager
  // * Bob - Software Developer
  // * Charlie - Graphic Designer
  // * Diana - Project Manager
  
  // **Alice:** Good morning everyone, and thanks for joining our brainstorming session for the upcoming marketing campaign. Let's get started by going over the project goals.
  
  // **Diana:** Sure, Alice. As you know, the goal of this campaign is to increase brand awareness for our new product launch by 20% within the next quarter. We're targeting a younger demographic, so we need creative and engaging marketing materials.
  
  // **Alice:** Exactly. Bob, do you have any ideas for the core message we want to convey in the campaign?
  
  // **Bob:** Sure! We could focus on the innovative features of the product and how it solves a specific problem for our target audience. Perhaps a tagline like "Simplify your life with [Product Name]" or something along those lines.
  
  // **Charlie:** That's a good starting point, Bob. We could also incorporate some visually appealing elements in the marketing materials. Maybe a short animation showcasing the product's features or some eye-catching graphics for social media posts.
  
  // **Alice:** Those are great suggestions! Diana, do you have any thoughts on the specific channels we should target for this campaign?
  
  // **Diana:** Absolutely. Since we're aiming for a younger demographic, social media platforms like Instagram and TikTok would be ideal. We could also consider influencer marketing to reach a wider audience.
  
  // **Bob:** Interesting. Maybe we could develop a short, engaging video ad specifically for these platforms. Something that quickly grabs attention and highlights the product's benefits.
  
  // **Alice:** That sounds promising, Bob. We can discuss the video concept in more detail later. Let's jot down some keywords related to the campaign theme and target audience. This will help us with content creation and social media optimization.
  
  // **[Brainstorming session continues... ]**
  
  // **Alice:** Alright everyone, we've covered a lot of ground today. Thanks for your valuable input! Let's summarize the key takeaways:
  
  // * Core message: Focus on the product's innovation and how it solves a specific problem.
  // * Target audience: Younger demographic, active on social media.
  // * Marketing channels: Social media platforms (Instagram, TikTok), influencer marketing (potential).
  // * Content ideas: Short video ad, engaging social media posts, eye-catching graphics.
  
  // **Diana:** Sounds good, Alice. I'll create a detailed project plan based on our discussion and assign tasks to each team member. We can schedule a follow-up meeting next week to discuss the next steps.
  
  // **Alice:** Perfect, Diana. Thanks everyone for your participation. Let's keep the momentum going!
  
  // **[Meeting ends]**`, 
  // question = "How old is Alice? and What is the goal again? What year did Julius Ceasar die? Can you give me a summary of the meeting so far?");