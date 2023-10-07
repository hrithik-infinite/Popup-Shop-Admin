import prismadb from "@/lib/prismadb";

const DashboardPage = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>{store?.name}</div>;
};
export default DashboardPage;
