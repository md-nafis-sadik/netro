import AllProducts from "@/components/products/AllProducts";
import PageThumbnail from "@/components/shared/PageThumbnail";

async function Products({
  searchParams,
}: {
  searchParams: Promise<{ filteredBy?: string }>;
}) {
  const query = (await searchParams)?.filteredBy || "All";

  return (
    <div className="mt-[60px]">
      <PageThumbnail title="Our Products" description="showcase" />
      {/* <ProjectFilterItems query={query} /> */}
      <AllProducts query={query} />
    </div>
  );
}

export default Products;
