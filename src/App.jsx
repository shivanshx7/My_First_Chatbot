import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [inputtext , setInputText] = useState("")
  const [content , contentSetTo] = useState("")
  
  
  const HF= async ()=>{

    	const response = await fetch(
		"https://router.huggingface.co/v1/chat/completions",
		{
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_HF_API_KEY}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ 
  messages: [
    {
      role: "user",
      content : inputtext ,
    },
  ],
  model: "Qwen/Qwen2.5-1.5B-Instruct:featherless-ai",
}),
		}
	);
	const result = await response.json();
  // const answer = await result.content;
	contentSetTo(result.choices[0].message.content);
  }



  return (
    <>
      <h1>My First React Chatbot</h1>
      <input type='text' placeholder='type your question here'
      onChange={(e)=> setInputText(e.target.value)}
      ></input>
      <button onClick={HF}>click here</button>
      <p>{content}</p>
    </>
  )
}

export default App
