'use client'
import ChatForm from "@/components/ChatForm";
import ChatHeader from "@/components/ChatHeader";
import ChatMessages from "@/components/ChatMessages";
import { Companion, Message } from "@prisma/client";
import { useCompletion } from 'ai/react';
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    }
  };
};

export default function ChatClient({ companion }: ChatClientProps) {
  const router = useRouter()
  const [messages, setMessages] = useState<any[]>(companion.messages)

  const { input, setInput, isLoading, handleInputChange, handleSubmit } = useCompletion({
    api: `/api/chat/${companion.id}`,
    onFinish(prompt, completion) {
      // message from AI
      const systemMessage = {
        role: "system",
        content: completion
      }

      setMessages((current) => [...current, systemMessage]);
      setInput("");

      router.refresh();
    }
  })

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage = {
      role: "user",
      content: input,
    }

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e)
  }
  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
      {/* messages */}
      <ChatMessages />
      <ChatForm
        isLoading={isLoading}
        input={input}
        handleInputChange={handleInputChange}
        onSubmit={onSubmit}
      />
    </div>
  )
}
