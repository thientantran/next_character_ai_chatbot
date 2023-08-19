'use client'

import ChatMessage, { ChatMessageProps } from "@/components/ChatMessage";
import { Companion } from "@prisma/client";
import { ElementRef, useEffect, useRef, useState } from "react";
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
  const scrollRef = useRef<ElementRef<"div">>(null);
  // tạo 1 cái để ref, rồi add nó vào cuối cùng cái ở dưới, messsages càng nhiều thì cái tham chiếu vẫn ở dưới cùng, rồi sẽ tự động scroll xuống đó
  const [fakeLoading, setFakeLoading] = useState(messages.length === 0 ? true : false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  useEffect(()=>{
    scrollRef?.current?.scrollIntoView({behavior:'smooth'});
  }, [messages.length])
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage
        src={companion.src}
        role="system"
        content={`Hello, I am ${companion.name}, ${companion.description}`}
        isLoading={fakeLoading}
      />
      {messages.map((message) => (
        <ChatMessage
          key={message.content}
          src={companion.src}
          content={message.content}
          role={message.role}
        />
      ))}
      {/* khi ma loading thi se hien cai nay */}
      {isLoading && (
        <ChatMessage
          src={companion.src}
          role="system"
          isLoading
        />
      )}
      <div ref={scrollRef}/>
    </div>
  )
}
