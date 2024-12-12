import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface MessageInputProps {
  onSend: (message: string) => void;
  placeholder: string;
  align: 'left' | 'right';
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend, placeholder, align }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`flex gap-2 ${align === 'right' ? 'justify-end' : 'justify-start'}`}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className="w-64 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-green-500"
        />
        <button
          type="submit"
          className="p-2 rounded-full bg-[#00A884] text-white hover:bg-[#008f6f] transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};