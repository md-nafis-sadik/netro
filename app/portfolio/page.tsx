import ProductFilterItems from "@/components/products/ProductFilterItems";
import PageThumbnail from "@/components/shared/PageThumbnail";

async function PortfolioPage({
  searchParams,
}: {
  searchParams: Promise<{ filteredBy?: string }>;
}) {
  const query = (await searchParams)?.filteredBy || "All";

  return (
    <main className="relative">
      <PageThumbnail title="Our Projects" description="showcase" />
      <ProductFilterItems query={query} />
    </main>
  );
}

export default PortfolioPage;
