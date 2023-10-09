import { BillBoardClient } from "./components/client";
import prismadb from "@/lib/prismadb";

const BillBoardsPage = async ({ params }) => {
  const billboards = await prismadb.billBoard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillBoardClient data = {billboards}/>
      </div>
    </div>
  );
};

export default BillBoardsPage;
