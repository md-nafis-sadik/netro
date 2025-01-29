import { images } from "@/services";
import SliderContainer from "../shared/SlideContainer";
import ProductCardItem from "./ProductCardItem";

function OtherProducts() {
  const data = [
    {
      _id: "1",
      name: "Yoowifi",
      description:
        "A cutting-edge telecom project delivering seamless connectivity solutions.",
      imageUrl: images.blog1,
      tags: ["UX/UI Design", "Software Development"],
    },
    {
      _id: "2",
      name: "Indemnif.ai",
      description:
        "A cutting-edge telecom project delivering seamless connectivity solutions.",
      imageUrl: images.blog1,
      tags: ["Software Development", "SaaS Development"],
    },
    {
      _id: "3",
      name: "Artistry",
      description:
        "A cutting-edge telecom project delivering seamless connectivity solutions.",
      imageUrl: images.blog1,
      tags: ["SaaS Development"],
    },
    {
      _id: "4",
      name: "kanga",
      description:
        "A cutting-edge telecom project delivering seamless connectivity solutions.",
      imageUrl: images.blog1,
      tags: ["App Development"],
    },
  ];
  return (
    <div className="">
      <h2 className="title blackGradient text-center">Explore More Products</h2>
      <div className="containerX overflow-hidden pt-6 pb-10 sm:mt-8 sm:pb-16 md:pt-20 md:pb-20">
        <SliderContainer className="relative">
          <div className="w-full min-h-fit flex flex-row gap-6 sm:gap-10 md:gap-15">
            {data?.map((item, index) => (
              <ProductCardItem
                className="min-w-[200px] sm:min-w-96 md:min-w-[455px]"
                wrapper="h-[262px] sm:h-[400px] md:h-[610px]"
                item={item}
                key={index}
              />
            ))}
          </div>
        </SliderContainer>
      </div>
    </div>
  );
}

export default OtherProducts;
