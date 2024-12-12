import React from 'react';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-[#DCF8C6] rounded-tr-none'
            : 'bg-white rounded-tl-none'
        } shadow`}
      >
        <p className="text-[#303030] text-sm">{message}</p>
      </div>
    </div>
  );
};