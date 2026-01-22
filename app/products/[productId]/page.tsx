import OtherProducts from "@/components/products/OtherProducts";
import ProductDetails from "@/components/products/ProductDetails";
import ProjectsHome from "@/components/projects/ProjectsHome";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { productDetailssData } from "@/services/data/product.data";
import { Suspense } from "react";

export default async function SingleProductDetails({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string | string[] }>;
  searchParams: Promise<{ image_index?: string }>;
}) {
  // Await the params and searchParams first
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const productKey = Array.isArray(resolvedParams.productId)
    ? resolvedParams.productId[0]
    : resolvedParams.productId;

  const productData = productDetailssData[productKey?.toLowerCase()];

  if (!productData) {
    return <div className="mt-20 text-center">Product not found</div>;
  }

  const breadcrumbs = [
    { link: "/products", name: "Product" },
    { link: `/products/${productKey}`, name: productData.title },
  ];

  return (
    <>
      <div className="py-4 sm:py-6 md:py-10 mt-[60px]">
        <div className="containerX">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>
      <ProductDetails
        data={productData}
        imageIndex={Number(resolvedSearchParams.image_index || 0)}
      />
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading products...
          </div>
        }
      >
        <ProjectsHome />
      </Suspense>
      <OtherProducts />
    </>
  );
}
