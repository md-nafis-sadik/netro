import ProductFilterItems from "@/components/products/ProductFilterItems";
import ProjectHomeCard from "@/components/projects/ProjectHomeCard";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { cn } from "@/lib/utils";
import { projectsData } from "@/services/data";

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
      <section className="pt-10 pb-10 sm:pb-16 md:pb-20 lg:pb-30">
        <div className="containerX">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-10 md:gap-16 lg:gap-20">
            {projectsData.map((item, index) => (
              <ProjectHomeCard
                key={index}
                item={item}
                className={cn(
                  "relative bg-transparent",
                  (index + 1) % 3 === 0 ? "md:col-span-2" : ""
                )}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default PortfolioPage;
