import { BillBoardClient } from "./components/client";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
const BillBoardsPage = async ({ params }) => {
  const billboards = await prismadb.billBoard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedBillboard = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillBoardClient data={formattedBillboard} />
      </div>
    </div>
  );
};

export default BillBoardsPage;
