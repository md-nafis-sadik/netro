import { images } from "@/services";
import ProductCardItem from "./ProductCardItem";
import { productsData } from "@/services/data";

function AllProducts({ query }: { query: string }) {
  // const data = [
  //   {
  //     _id: "1",
  //     name: "Yoowifi",
  //     description:
  //       "A cutting-edge telecom project delivering seamless connectivity solutions.",
  //     imageUrl: images.blog1,
  //     tags: ["UX/UI Design", "Software Development"],
  //   },
  //   {
  //     _id: "2",
  //     name: "Indemnif.ai",
  //     description:
  //       "A cutting-edge telecom project delivering seamless connectivity solutions.",
  //     imageUrl: images.blog1,
  //     tags: ["Software Development", "SaaS Development"],
  //   },
  //   {
  //     _id: "3",
  //     name: "Artistry",
  //     description:
  //       "A cutting-edge telecom project delivering seamless connectivity solutions.",
  //     imageUrl: images.blog1,
  //     tags: ["SaaS Development"],
  //   },
  //   {
  //     _id: "4",
  //     name: "kanga",
  //     description:
  //       "A cutting-edge telecom project delivering seamless connectivity solutions.",
  //     imageUrl: images.blog1,
  //     tags: ["App Development"],
  //   },
  // ];

  const data = productsData.slice(1).map((product) => ({
    _id: product.id,
    name: product.title,
    description: product.description,
    imageUrl: product.image,
    tags: ["App Development"],
    url: product.detailsUrl
  }));
  const filteredByTag = (item: { tags?: string[] }) => {
    if (query === "All") return true;
    return item.tags?.includes(query);
  };

  return (
    <section className="pt-10 pb-10 sm:pb-16 md:pb-20">
      <div className="containerX">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-[60px]">
          {data.filter(filteredByTag)?.map((item, index) => (
            <ProductCardItem item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllProducts;
