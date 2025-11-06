import React from "react";
import ChatWindow from "../components/chat/ChatWindow";


const ChatPage = () => {
    const params = new URLSearchParams(window.location.search);
    const roomId = params.get("room") || "skill-1";
    const user = params.get("user") || "Unknown user";
    console.log("ChatPage Params:", roomId, user);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
            <ChatWindow roomId={roomId} user = {user}/>
        </div>
    );
};

export default ChatPage;