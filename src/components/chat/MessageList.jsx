import React from "react";

const MessageList = ({ messages }) => (
  <div className="space-y-3">
    {messages.map((msg, i) => (
      <div
        key={i}
        className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
      >
        <div
          className={`px-4 py-2 rounded-lg max-w-xs ${
            msg.from === "me" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          {msg.text}
        </div>
      </div>
    ))}
  </div>
);

export default MessageList;
