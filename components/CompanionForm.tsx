import { Category, Companion } from "@prisma/client";

interface CompanionFormProps {
  categories: Category[];
  initialData: Companion | null;
};
export default function CompanionForm({
  categories,
  initialData
}: CompanionFormProps) {
  return (
    <div>CompanionForm</div>
  )
}
