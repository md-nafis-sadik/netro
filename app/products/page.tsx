import AllProducts from "@/components/products/AllProducts";
import ProductFilterItems from "@/components/products/ProductFilterItems";
import PageThumbnail from "@/components/shared/PageThumbnail";

async function Products({
  searchParams,
}: {
  searchParams: Promise<{ filteredBy?: string }>;
}) {
  const query = (await searchParams)?.filteredBy || "All";

  return (
    <>
      <PageThumbnail title="Our Products" description="showcase" />
      <ProductFilterItems query={query} />
      <AllProducts query={query} />
    </>
  );
}

export default Products;
