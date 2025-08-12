import OtherProducts from "@/components/products/OtherProducts";
import ProductDetails from "@/components/products/ProductDetails";
import ProjectsHome from "@/components/projects/ProjectsHome";
import ProjectsHomeWrapper from "@/components/projects/ProjectsHomeWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { images } from "@/services";
import { productsData } from "@/services/data/product.data";
import { Suspense } from "react";

export default function SingleProductDetails({
  params,
  searchParams,
}: {
  params: { productId: string | string[] };
  searchParams: { image_index?: string };
}) {
  const productKey = Array.isArray(params.productId)
    ? params.productId[0]
    : params.productId;

  const productData = productsData[productKey?.toLowerCase()];

  if (!productData) {
    return <div className="mt-20 text-center">Product not found</div>;
  }

  const breadcrumbs = [
    { link: "/products", name: "Product" },
    { link: `/products/${productKey}`, name: productData.title },
  ];

  const projectImages = {
    data: [
      { featuredImage: images.jazakallahPreview1 },
      { featuredImage: images.jazakallahPreview2 },
      { featuredImage: images.jazakallahPreview3 },
      { featuredImage: images.jazakallahPreview4 },
    ],
  };

  return (
    <>
      <div className="py-4 sm:py-6 md:py-10 mt-20">
        <div className="containerX">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>
      <ProductDetails
        data={productData}
        imageIndex={Number(searchParams.image_index || 0)}
      />
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading projects...
          </div>
        }
      >
        <ProjectsHome data={projectImages} />
      </Suspense>
      <OtherProducts />
    </>
  );
}
