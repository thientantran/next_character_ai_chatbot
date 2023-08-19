'use client'

import ChatMessage from "@/components/ChatMessage"

export default function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto pr-4">
      <ChatMessage />
    </div>
  )
}
