'use client'

import { Input } from "@/components/ui/input"
import { SendHorizonal } from "lucide-react"
import { Button } from "./ui/button"

export default function ChatForm() {
  return (
    <form className="border-t border-primary/10 py-4 flex items-center gap-x-2">
      <Input
        placeholder="Type a message here..."
        className="rounded-lg bg-primary/10"
      />
      <Button variant='ghost'>
        <SendHorizonal className="w-6 h-6" />
      </Button>
    </form>
  )
}
