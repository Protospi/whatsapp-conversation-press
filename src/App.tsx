import React, { useState, useRef } from 'react';
import { MessageInput } from './components/MessageInput';
import { ChatBubble } from './components/ChatBubble';
import { NameInput } from './components/NameInput';
import { ChatHeader } from './components/ChatHeader';
import { AvatarInput } from './components/AvatarInput';
import { DownloadButton } from './components/DownloadButton';

interface Message {
  text: string;
  isUser: boolean;
}

function App() {
  const [assistantName, setAssistantName] = useState('Assistente');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const phoneRef = useRef<HTMLDivElement>(null);

  const handleAssistantMessage = (text: string) => {
    setMessages([...messages, { text, isUser: false }]);
  };

  const handleUserMessage = (text: string) => {
    setMessages([...messages, { text, isUser: true }]);
  };

  return (
    <div className="min-h-screen bg-[#eae6df] flex">
      {/* Left Column - Controls */}
      <div className="w-1/2 p-8 flex flex-col gap-8">
        <h1 className="text-3xl font-bold text-gray-800">Apresentação de Conversas SmartTalks</h1>
        
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Configurações do Chat</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Assistente</label>
              <NameInput
                value={assistantName}
                onChange={setAssistantName}
                placeholder="Nome do Assistente"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Imagem do Avatar</label>
              <AvatarInput onAvatarChange={setAvatarUrl} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Controle de Mensagens</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem do Assistente</label>
              <MessageInput
                onSend={handleAssistantMessage}
                placeholder={`Digite como ${assistantName}...`}
                align="left"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem do Usuário</label>
              <MessageInput
                onSend={handleUserMessage}
                placeholder="Digite uma mensagem..."
                align="left"
              />
            </div>
          </div>
        </div>

        <div>
          <DownloadButton phoneRef={phoneRef} />
        </div>
      </div>

      {/* Right Column - Phone Preview */}
      <div className="w-1/2 p-8 flex items-center justify-center">
        <div ref={phoneRef} className="relative w-[380px] h-[780px] bg-black rounded-[55px] shadow-xl overflow-hidden border-8 border-black">
          {/* iPhone Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-[20px] z-20"></div>
          
          <ChatHeader avatarUrl={avatarUrl} name={assistantName} />

          {/* Messages Container */}
          <div className="h-[calc(100%-120px)] overflow-y-auto p-4 bg-[#e5ddd5]">
            {messages.map((msg, index) => (
              <ChatBubble
                key={index}
                message={msg.text}
                isUser={msg.isUser}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;