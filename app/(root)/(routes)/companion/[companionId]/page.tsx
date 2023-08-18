import CompanionForm from "@/components/CompanionForm";
import prismadb from "@/lib/prismadb";
import { auth, redirectToSignIn } from "@clerk/nextjs";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
};
export default async function CompanionIdPage({ params }: CompanionIdPageProps) {
  const { userId } = auth()
  // kiem tra xem co user hay ko, neu ko co the redirect
  if (!userId) {
    return redirectToSignIn()
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      id: params.companionId,
      userId
      // phai dung user tao ra companion thi moi fetch dc data, de edit lai
    }
  });
  const categories = await prismadb.category.findMany();
  return (
    <CompanionForm initialData={companion} categories={categories} />
  )
}
