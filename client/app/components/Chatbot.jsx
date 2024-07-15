"use client";
import Userprompt from "../components/Userprompt";
import Assistantresponse from "../components/Assistantresponse";
import ChatResponseLoading from "../components/ChatResponseLoading";
import ChatbotIntroCards from "./ChatbotIntroCards";
import { useState, useEffect, useRef } from "react";
import io from 'socket.io-client'
const socket = io.connect(("https://kgptserver-7f2c4c1b9377.herokuapp.com/"))
// const socket = io.connect(("http://localhost:3001"))

const Chatbot = () => {
  // VARIABLES
  const [prompt, setPrompt] = useState("");
  const [chatLogs, setChatLogs] = useState([]);
  const [chatResponseLoading, setChatResponseLoading] = useState(false);
  const [chatResponseComplete, setChatResponseComplete] = useState(true)
  const chatContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [currentResponseIndex, setCurrentResponseIndex] = useState(null);
  const citationPattern = /【\d+:\d+†source】/g;

  console.log('chat response loading: ', chatResponseComplete)

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && chatResponseComplete) {
      sendPrompt()
    }
  };

  const sendPrompt = () => {
    if (chatResponseComplete === true) {
      setChatResponseComplete(false)
      socket.emit('send_prompt', { prompt: prompt})
      setChatLogs((prevLogs) => {
        const newLogs = [...prevLogs, { user: prompt, bot: '' }];
        setCurrentResponseIndex(newLogs.length - 1); // Track the index of the new prompt
        return newLogs;
      });
      setPrompt("")
    } else {
      console.log('condition note met ')
    }
  }

  useEffect(() => {
    socket.on('responseComplete', () => {
      console.log('resposne completed')
      setChatResponseComplete(true)
    })

    socket.on('textCreated', () => {
      console.log('text created')
      setChatResponseComplete(false)
    })

    socket.on('textDelta', (data) => {
      setChatLogs((prevLogs) => {
        const updatedLogs = prevLogs.map((log, index) => {
          if (index === currentResponseIndex) {
            const cleanedText = data.textDelta.value.replace(citationPattern, '');
            return { ...log, bot: log.bot + cleanedText };
          }
          return log;
        });
        return updatedLogs;
      });
    });

    return () => {
      socket.off('send_message');
      socket.off('textCreated');
      socket.off('textDelta');
    };
  }, [currentResponseIndex])

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatLogs]);

  return (
    <div className="min-h-screen flex flex-col justify-between sm:pt-[8rem] pt-[4rem]">
      <p className = {`text-[11px] text-center text-gray-500 bg-zinc-100 p-1 sm:mt-0 mt-3 ${chatLogs.length < 1 ? 'block' : 'hidden'}`}>Disclaimer: AI may not guarantee full accuracy. Please verify.</p>
      
      <div
        className="flex flex-col gap-6 sm:h-[74vh] h-[75vh] overflow-y-auto md:text-xl text-lg"
        ref={chatContainerRef}
      >

        {chatLogs.map((chatItem, index) => {
          return <>
            <Userprompt key={`${index}user`} text={chatItem.user} />
            <Assistantresponse key={`${index}bot`} text={chatItem.bot} />
            {/* {chatResponseLoading && <ChatResponseLoading key = {`${index}loading`}/>} */}
          </>
        })}


        {chatLogs.length < 1 && (
          <div className="m-auto">
            <h4 className="mx-auto w-fit text-6xl ">
              AI
            </h4>
            <p className = 'mx-auto w-fit text-gray-500'>Designed to help you explore Centonis</p>
          </div>
        )}
      </div>
      <div className="flex justify-center w-[767px] max-w-[93%] bg-zinc-100 sm:mx-auto py-4 px-7 items-center mb-10 mx-4">
        <input
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full outline-none bg-transparent md:text-xl text-lg"
          placeholder="Find out anything about us"
        />
        <button
          className="hover:text-gray-500 text-zinc-800 transition-all duration-150"
          onClick={sendPrompt}
        >
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
