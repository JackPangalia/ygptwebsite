'use client'
import Userprompt from "../components/Userprompt";
import Assistantresponse from "../components/Assistantresponse";
import { useState } from "react";
import { useEffect } from "react";

const Chatbot = () => {
  // VARIBLES 
  const [prompt, setPrompt] = useState('')
  const [chatLogs, setChatLogs] = useState([])

  const getChatResponse = async () => {
    try{
      const chatResponse = await fetch('/api/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(prompt)
      })
  
      const data = await chatResponse.json()
      const assistantMessage = data.payload
      setChatLogs((prevLogs) => [...prevLogs, assistantMessage]);
    } catch(error) {
      console.log(error)
    }
    
  }

  const handleSendMessage = () => {
    setChatLogs((prevLogs) => [...prevLogs, prompt]);
    getChatResponse()
  }

  const isEven = (number) => {
    return number % 2 === 0;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between pt-[8rem]">
      <div className="flex flex-col gap-6 h-[74vh] overflow-y-auto">
        {chatLogs.map((chatItem, index) => {
          if (isEven(index) === true) {
            return <Userprompt text = {chatItem}/>
          } else {
            return <Assistantresponse text = {chatItem} />
          }
        })}
      </div>
      <div className="flex justify-center w-[767px] bg-zinc-100 mx-auto py-3 px-5 rounded-xl items-center mb-7">
        <input
          value = {prompt}
          onChange = {(event) => setPrompt(event.target.value)}
          className=" w-full outline-none bg-transparent"
          placeholder="How Can We Help You"
        />
        <button className = 'hover:text-gray-500 transition-all duration-150' onClick = {handleSendMessage} >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
          >
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
