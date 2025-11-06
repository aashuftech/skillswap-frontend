import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import VideoCall from "./VideoCall";
import AOS from "aos";
import "aos/dist/aos.css";


const ChatWindow = ({ user }) => {

  useEffect(() => {
              AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
            }, []);

  const [messages, setMessages] = useState([]);
  const [showVideo, setShowVideo] = useState(false);

  const handleSend = (msg) => {
    if (msg.trim() !== "") setMessages([...messages, { text: msg, from: "me" }]);
  };

  return (
    <div data-aos="fade-up" className="bg-white shadow-lg rounded-2xl w-90 max-w-4xl flex flex-col h-[80vh]">
      {/* Header */}
      <div className="flex justify-between items-center border-b p-4">
        <h2 className="font-semibold text-gray-800 text-lg"> { user }</h2>
        <button
          onClick={() => setShowVideo(!showVideo)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {showVideo ? "Close Video" : "📹 Start Sharing"}
        </button>
      </div>

      {/* Chat + Video */}
      <div className="flex flex-col flex-grow overflow-hidden">
        {showVideo && (
          <div className="border-b p-2 bg-gray-100">
            <VideoCall />
          </div>
        )}
        <div className="flex-grow overflow-y-auto p-4">
          <MessageList messages={messages} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t p-3">
        <MessageInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatWindow;
