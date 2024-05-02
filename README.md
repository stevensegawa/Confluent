# 💥 - How it started

With one of our close friend’s first-generation parents, we noticed the struggles they had engaging with their school due to the language barrier. His parents couldn't participate in his education because they didn't speak English. Digging deeper, we noticed story after story of families struggling with this same issue. According to a survey by ClassDojo, 56% of teachers worry that parents of non-native English speaking students can’t effectively participate in online parent-teacher conferences and other aspects of school communication. However, schools aren’t doing enough to accommodate. For instance, 77% of school districts in Orange County are receiving monthly requests for interpreting and translation.

Witnessing their frustration, our initial inspiration was to create a bridge for these parents to attend meetings and absorb critical information that was previously lost in translation. But we noticed that the impact would be much bigger. From streamlining international business meetings to cultural events, a real-time translation bot enhances communication and collaboration across language barriers. So we built Confluent - a platform that utilizes Gemini to translate dialogue in online meetings in real time.

# 📖 - What it does

Confluent allows users to call in an external bot as your personal meeting sidekick, giving you the ability to translate the meeting in real time or ask questions based on what has been said in the meeting. See the user flow below:

[Confluent user flow](https://ibb.co/FxGf8DR)

# 🔧 - How we built it

- The speech of the Google Meets’ users is tracked in raw AudioBuffer data by a customized bot coded based on the Puppeteer API Reference.
- With Google Cloud’s Speech-to-Text API, we were able to transcribe the audio from a user to text in their spoken language in real time.
- The text string will be concatenated for around 2-3 seconds and translated utilizing Gemini 1.5 Pro’s multilinguality improvements and new long-context text, video, and audio functionality.
- The translated text will show in real time in the frontend of our web application which was prototyped using Figma and encoded in React.

# 🚩 - Challenges we ran into

- The integration of React elements
- Translating our text in real time
- Inexperience with integrating frontend and backend

# 📝 - What we learned

- This weekend, we had an amazing experience working together as a team for the first time!
- For some members, this was their first in-person hackathon which was an amazing learning experience for them. They learned how to connect react components with the backend, creating user flows, and how to execute the design process in short amounts of time.
- For other experienced hackathon members, they learned how to interconnect different APIs to create a sophisticated and unique backend. They ran into a lot of problems with creating the connections, but it was a rewarding moment as they were able to finish it off in the final hours of the hackathon.

Overall, learning, failing, and connecting with each other throughout this hackathon was a challenging experience, but one we thoroughly enjoyed working through together!

# ✈️ - What's next for Confluent

Given more time, we would have loved to develop Confluent in phases!

**PHASE 1: DEVELOPMENT**

Goals:
- Adding additional information about the translations:
- Speaker Identification
- Translation Timestamps
- Original transcription comparisons
- Improving design and user experience

**PHASE 2: EXPANSION**

- Furthering the development of our models to become even more accurate
- Improving the LLM to pull transcriptions from previous meetings when asking questions

**PHASE 3: IMPLEMENTATION**

- Integrating Confluent as a third-party add-on to Google Meet
- Expanding to include even more languages
