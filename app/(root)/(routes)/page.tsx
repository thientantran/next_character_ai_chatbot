import Categories from "@/components/Categories";
import Companions from "@/components/Companions";
import SearchInput from "@/components/SearchInput";
import prismadb from "@/lib/prismadb";

interface RootPageProps {
  // chu y: chu searchParams khac' params
  searchParams: {
    categoryId: string;
    name: string;
  };
};

export default async function RootPage({ searchParams }: RootPageProps) {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      _count: {
        select: {
          messages: true,
        }
      }
    },
  });

  const categories = await prismadb.category.findMany();
  return (
    <div>
      <div className="f-full p-4 space-y-2">
        <SearchInput />
        <Categories data={categories} />
        <Companions data={data} />
      </div>
    </div>
  )
}
