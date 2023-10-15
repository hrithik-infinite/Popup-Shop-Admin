import prismadb from "@/lib/prismadb";
import { ProductFrom } from "./components/product-form";

const ProductPage = async ({ params }) => {
  const product = await prismadb.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  const categories = await prismadb.category.finaMany({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductFrom initialData={product} categories={categories}></ProductFrom>
      </div>
    </div>
  );
};

export default ProductPage;
