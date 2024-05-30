"use client";
import Userprompt from "../components/Userprompt";
import Assistantresponse from "../components/Assistantresponse";
import ChatResponseLoading from "../components/ChatResponseLoading";
import { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  // VARIABLES
  const [prompt, setPrompt] = useState("");
  const [chatLogs, setChatLogs] = useState([]);
  const [chatResponseLoading, setChatResponseLoading] = useState(false);
  const [threadId, setThreadId] = useState(null);
  const chatContainerRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const getChatResponse = async (prompt) => {
    setChatResponseLoading(true);
    try {
      const chatResponse = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, threadId }),
      });

      const data = await chatResponse.json();
      const assistantMessage = data.payload;
      setThreadId(data.threadId); // Save the threadId from the response
      setChatLogs((prevLogs) => [...prevLogs, assistantMessage]);
    } catch (error) {
      console.log(error);
    } finally {
      setChatResponseLoading(false);
    }
  };

  const preDefinedPrompt = (prompt) => {
    setChatLogs((prevLogs) => [...prevLogs, prompt]);
    getChatResponse(prompt);
    setPrompt("");
  };

  const handleSendMessage = () => {
    if (prompt.length > 0 && chatResponseLoading === false) {
      setChatLogs((prevLogs) => [...prevLogs, prompt]);
      getChatResponse(prompt);
      setPrompt("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const isEven = (number) => {
    return number % 2 === 0;
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatLogs]);

  return (
    <div className="min-h-screen flex flex-col justify-between pt-[8rem]">
      <div
        className="flex flex-col gap-6 sm:h-[74vh] h-[75vh] overflow-y-auto md:text-xl text-lg"
        ref={chatContainerRef}
      >
        {chatLogs.map((chatItem, index) => {
          if (isEven(index) === true) {
            return <Userprompt key={index} text={chatItem} />;
          }
          if (isEven(index) === false) {
            return <Assistantresponse key={index} text={chatItem} />;
          }
        })}
        {chatResponseLoading && <ChatResponseLoading />}

        {chatLogs.length < 1 && (
          <div className="m-auto">
            <h4 className="mx-auto w-fit mb-5">
              Designed To Help You Explore.
            </h4>
            <button
              className="p-3 border-gray-500 border-[1px] border-dashed w-[10rem] hidden lg:inline mx-2 hover:bg-zinc-100 transition-all duration-150"
              onClick={() => preDefinedPrompt("What Services Do You Offer?")}
            >
              <svg
                baseProfile="tiny"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.2em"
                width="1.2em"
                className="text-red-300"
              >
                <path d="M20 20H4c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h16c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3zM4 6c-.551 0-1 .449-1 1v10c0 .551.449 1 1 1h16c.551 0 1-.449 1-1V7c0-.551-.449-1-1-1H4zm6 9H6a1 1 0 110-2h4a1 1 0 110 2zm0-4H6a1 1 0 110-2h4a1 1 0 110 2z" />
                <path d="M18 10.5 A2 2 0 0 1 16 12.5 A2 2 0 0 1 14 10.5 A2 2 0 0 1 18 10.5 z" />
                <path d="M16 13.356c-1.562 0-2.5.715-2.5 1.429 0 .357.938.715 2.5.715 1.466 0 2.5-.357 2.5-.715 0-.714-.98-1.429-2.5-1.429z" />
              </svg>
              <p className="text-start text-gray-500 mt-2 text-sm ">
                What Services Do You Offer?
              </p>
            </button>

            <button className=" p-3 border-gray-500 border-[1px] border-dashed w-[10rem]  hidden lg:inline mx-2 hover:bg-zinc-100 transition-all duration-150" onClick={() => preDefinedPrompt("Tell Me About This AI?")}>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1.2em"
                width="1.2em"
                className="text-blue-300"
              >
                <path d="M6 12.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 004.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 01-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 013 9.219V8.062zm4.542-.827a.25.25 0 00-.217.068l-.92.9a24.767 24.767 0 01-1.871-.183.25.25 0 00-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 00.189-.071l.754-.736.847 1.71a.25.25 0 00.404.062l.932-.97a25.286 25.286 0 001.922-.188.25.25 0 00-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 00-.166.076l-.754.785-.842-1.7a.25.25 0 00-.182-.135z" />
                <path d="M8.5 1.866a1 1 0 10-1 0V3h-2A4.5 4.5 0 001 7.5V8a1 1 0 00-1 1v2a1 1 0 001 1v1a2 2 0 002 2h10a2 2 0 002-2v-1a1 1 0 001-1V9a1 1 0 00-1-1v-.5A4.5 4.5 0 0010.5 3h-2V1.866zM14 7.5V13a1 1 0 01-1 1H3a1 1 0 01-1-1V7.5A3.5 3.5 0 015.5 4h5A3.5 3.5 0 0114 7.5z" />
              </svg>
              <p className="text-start text-gray-500 mt-2 text-sm">
                Tell Me About This AI?
              </p>
            </button>

            <button className=" p-3 border-gray-500 border-[1px] border-dashed w-[10rem] mx-2 hover:bg-zinc-100 transition-all duration-150" onClick={() => preDefinedPrompt("Tell Me About Your Company?")}>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1.2em"
                width="1.2em"
                className="text-green-300"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M3 21h18M3 7v1a3 3 0 006 0V7m0 1a3 3 0 006 0V7m0 1a3 3 0 006 0V7H3l2-4h14l2 4M5 21V10.85M19 21V10.85M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
              </svg>
              <p className="text-start text-gray-500 mt-2 text-sm">
                Tell Me About Your Company?
              </p>
            </button>

            <button className="p-3 border-gray-500 border-[1px] border-dashed w-[10rem] mx-2 hover:bg-zinc-100 transition-all duration-150" onClick={() => preDefinedPrompt("How Can You Help My Business?")}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1.2em"
                width="1.2em"
                className="text-purple-300"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M2 5.5V3.993A1 1 0 012.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V19h18V7.3l-8 7.2-10-9zM0 10h5v2H0v-2zm0 5h8v2H0v-2z" />
              </svg>
              <p className="text-start text-gray-500 mt-2 text-sm">
                How Can You Help My Business
              </p>
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center w-[767px] max-w-[92%] bg-zinc-100 sm:mx-auto py-3 px-6 rounded-xl items-center mb-10 mx-4">
        <input
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full outline-none bg-transparent md:text-xl text-lg"
          placeholder="How can we help"
        />
        <button
          className="hover:text-gray-500 text-zinc-800 transition-all duration-150"
          onClick={handleSendMessage}
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
