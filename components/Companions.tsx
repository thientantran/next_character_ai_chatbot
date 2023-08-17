import { Companion } from "@prisma/client";

interface CompanionProps {
  data: (Companion & {
    _count: {
      messages: number
    }
  })[];
}
export default function Companions({ data }: CompanionProps) {
  console.log(data)
  return (
    <div>Companions</div>
  )
}
