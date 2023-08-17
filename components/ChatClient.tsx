import { Companion, Message } from "@prisma/client";


interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    }
  };
};

export default function ChatClient({ companion }: ChatClientProps) {
  return (
    <div>ChatClient</div>
  )
}
