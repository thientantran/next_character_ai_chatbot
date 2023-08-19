'use client'

import { Input } from "@/components/ui/input";
import { ChatRequestOptions } from 'ai';
import { SendHorizonal } from "lucide-react";
import { ChangeEvent, FormEvent } from "react";
import { Button } from "./ui/button";
interface ChatFormProps {
  input: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>, chatRequestOptions?: ChatRequestOptions | undefined) => void;
  isLoading: boolean;
}


export default function ChatForm({ input, handleInputChange, onSubmit, isLoading }: ChatFormProps) {
  return (
    <form onSubmit={onSubmit} className="border-t border-primary/10 py-4 flex items-center gap-x-2">
      <Input
        onChange={handleInputChange}
        value={input}
        disabled={isLoading}
        placeholder="Type a message here..."
        className="rounded-lg bg-primary/10"
      />
      <Button disabled={isLoading} variant='ghost'>
        <SendHorizonal className="w-6 h-6" />
      </Button>
    </form>
  )
}
