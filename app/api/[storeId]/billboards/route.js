import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

export async function POST(req, { params }) {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { label, imageUrl } = body;
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!label) {
      return new NextResponse("Label is required", { status: 400 });
    }
    if (!imageUrl) {
      return new NextResponse("Image is Required", { status: 400 });
    }
    if (!params.storeId) {
      return new NextResponse("StoreId is Required", { status: 400 });
    }
    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      },
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }
    const billboard = await prismadb.billboard.create({
      data: {
        label,
        imageUrl,
        storeId: params.storeId,
      },
    });
    return NextResponse.json(billboard);
  } catch (error) {
    console.log(`billboard_POST ${error}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
export async function GET({ params }) {
  try {
    if (!params.storeId) {
      return new NextResponse("StoreId is Required", { status: 400 });
    }

    const billboards = await prismadb.billboard.findMany({
      data: {
        storeId: params.storeId,
      },
    });
    return NextResponse.json(billboards);
  } catch (error) {
    console.log(`billboard_GET ${error}`);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
