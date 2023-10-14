import prismadb from "@/lib/prismadb";
import { BillBoardsForm } from "./components/billboard-form";

const BillboradPage = async ({ params }) => {
  const billboard = await prismadb.billBoard.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillBoardsForm initialData={billboard}></BillBoardsForm>
      </div>
    </div>
  );
};

export default BillboradPage;
