import SliderContainer from "../shared/SlideContainer";
import OtherProductCard from "./OtherProductsCard";
import { productsData } from "@/services/data";

function OtherProducts() {
  const data = productsData.slice(1).map((product) => ({
    _id: product.id,
    title: product.title,
    metaDescription: product.description,
    featuredImage: product.otherImage,
    tagList: "",
    author: {
      profileImage: product.image,
    },
    url: product.detailsUrl,
  }));

  return (
    <div className="pt-6 pb-10 sm:mt-16 sm:pb-32 md:pt-40 md:pb-20">
      <h2 className="title blackGradient text-center">Explore More Products</h2>
      <div className="containerX overflow-hidden pt-6 pb-10 sm:mt-8 sm:pb-16 md:pt-20 md:pb-20">
        <SliderContainer className="relative">
          <div className="w-full min-h-fit flex flex-row gap-6 sm:gap-10 md:gap-15">
            {data.map((item, index) => (
              <OtherProductCard item={item} key={index} />
            ))}
          </div>
        </SliderContainer>
      </div>
    </div>
  );
}

export default OtherProducts;
