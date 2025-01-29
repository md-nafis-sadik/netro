import ProductFilterItems from "@/components/products/ProductFilterItems";
import PageThumbnail from "@/components/shared/PageThumbnail";

async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ filtered_by?: string }>;
}) {
  const query = (await searchParams)?.filtered_by || "All";

  return (
    <main className="relative">
      <PageThumbnail title="Our Projects" description="showcase" />
      <ProductFilterItems query={query} />
    </main>
  );
}

export default PortfolioPage;
