import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import NavBar from "@/components/navbar";

async function DashboardLayout({ children, params }) {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });
  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div><NavBar /></div>
      {children}
    </>
  );
}

export default DashboardLayout;