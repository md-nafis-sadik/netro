import OtherProducts from "@/components/products/OtherProducts";
import ProductDetails from "@/components/products/ProductDetails";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

async function SingleProductDetails({
  params,
  searchParams,
}: {
  params: Promise<{ productId: string[] }>;
  searchParams: Promise<{ image_index?: string }>;
}) {
  const { productId } = await params;
  const { image_index } = await searchParams;
  const breadcrumbs = [
    { link: "/products", name: "Product" },
    { link: `/products/${productId}`, name: "Product description" },
  ];

  return (
    <>
      <div className="py-4 sm:py-6 md:py-10">
        <div className="containerX">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>
      <ProductDetails imageIndex={Number(image_index || 0)} />
      <OtherProducts />
    </>
  );
}

export default SingleProductDetails;
