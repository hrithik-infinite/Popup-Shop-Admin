import { ColorClient } from "./components/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
const ColorsPage = async ({ params }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedcolors = colors.map((item) => ({
    id: item.id,
    name: item.name,
    value : item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formattedcolors} />
      </div>
    </div>
  );
};

export default ColorsPage;
