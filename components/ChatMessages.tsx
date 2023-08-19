'use client'

import ChatMessage, { ChatMessageProps } from "@/components/ChatMessage";
import { Companion } from "@prisma/client";
import { useEffect, useState } from "react";
interface ChatMessagesProps {
  messages: ChatMessageProps[];
  isLoading: boolean;
  companion: Companion
}


export default function ChatMessages({
  messages = [],
  isLoading,
  companion
}: ChatMessagesProps) {

  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        src={companion.src}
        role="system"
        content={`Hello, I am ${companion.name}, ${companion.description}`}
        isLoading={fakeLoading}
      />
      <ChatMessage
        role="user"
        content={`anh yeu em`}
        isLoading={fakeLoading}
      />
    </div>
  )
}
