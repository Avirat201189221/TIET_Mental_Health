import React from 'react'
// import { useState } from 'react'
// import './App.css'
import ChatBot from 'react-chatbotify'
import { GoogleGenerativeAI } from "@google/generative-ai";
import GEMINI_API_KEY from "../../../gemini.env"

export default function finBot() {
//   const [count, setCount] = useState(0)
  const genAI = new GoogleGenerativeAI('AIzaSyA1SPKmVtuEuNSyJSHjS6oaWZqHat6CP7o');

  async function run(message) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  
    const prompt =message;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    return text;
  }
    const flow = {
      start: {
        message: "Hello I am TIET_BOT,I'm here to assist you with any information related to thapar or your mental health queries. Let me know if you need anything :)",
        path: "loop"
      },
          loop: {
              message: (params) => run(params.userInput),
              path: "loop"
          },
    }
  return (
    <>
    <div>
          <ChatBot flow={flow}/>
    </div>
    </>
  )
}
