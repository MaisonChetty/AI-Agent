import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  text: string;
  id: number;
}

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageId, setMessageId] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, id: messageId },
      ]);
      setMessage("");
      setMessageId((prevId) => prevId + 1);
    }
  };

  return (
    <div className="h-full w-full flex flex-col ">
      <motion.div
        className="h-full w-full flex flex-col max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl text-[#f0f0f0] font-bold text-start p-2">Chat AI</h2>

        {/* Message Display Box */}
        <div className="flex-1 overflow-auto p-4 rounded-lg space-y-4 mb-4 bg-[#f1ebeb] dark:bg-[#38393f]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-[#0bd15d] dark:bg-blue-400 text-[#f0f0f0] p-3 rounded-md shadow-md"
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Chat Input Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#f0f0f0] text-sm mb-2">Enter your message:</label>
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="w-full p-3 rounded-md bg-[#ffffff] dark:bg-[#ffffff] text-[#747272] focus:outline-none focus:ring-2 focus:ring-[#6e3b6f]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#0bd15d] dark:bg-blue-400 text-[#f0f0f0] hover:bg-[#6e3b6f]/80 py-3 rounded-lg shadow-lg"
          >
            Send Message
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default ChatForm;
