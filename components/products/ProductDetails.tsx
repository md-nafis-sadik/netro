import { images } from "@/services";
import { ArrowLongTailIcon, ReactIcon } from "@/services/assets/svgs";
import { Button } from "../ui/button";
import ProductsGallery from "./ProductsGallery";

function ProductDetails({ imageIndex = 0 }: { imageIndex: number }) {
  const data = {
    images: [
      images.blog1,
      images.blog2,
      images.blog3,
      images.blog1,
      images.blog2,
    ],
    description:
      "JazakAllah is the ultimate app for muslims, with Iftar Timings, Dua, Hadis, Azkar, Al-Quran, Tasbih Counting, Qibla Compass, Mosque Locator, Daily Prayer Notification, Islamic Calender, Makka Live, Islamic Wallpapers, Zakat Calculator, Islamic AI Chat Bot, Islamic Baby Name Generator and progress tracking. Stay connected to your faith, deepen your spiritual practice.",
  };

  return (
    <section className="pb-10 sm:pb-16 md:pb-20 lg:pb-30 ">
      <div className="containerX">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-20 font-inter">
          <div className="w-full">
            <ProductsGallery
              className="hidden md:flex"
              images={data?.images}
              showImage={imageIndex}
            />
            <p className="text-sm sm:text-base md:text-lg text-text-700 mt-4 sm:mt-6">
              {data?.description}
            </p>
          </div>
          <div className="w-full md:max-w-[462px]">
            <ProductsGallery
              className="mb-6 md:hidden"
              images={data?.images}
              showImage={imageIndex}
            />
            <div className="w-full px-4 sm:px-7 py-6 sm:py-8 md:p-10 border border-dashed border-natural-300 font-inter flex flex-col sticky top-10">
              <h2 className="titleMd text-text-900">
                Jazakallah - The Complete Islamic App
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-inter text-text-600 mt-2 sm:mt-3 md:mt-4">
                Jazakallah is a complete Islamic app with prayer times, Quran,
                duas, and tools to support your faith and daily worship.
              </p>
              <ul className="flex items-center gap-2 max-w-max mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-9 md:mb-12">
                <li className="h-10 rounded-full px-2 py-2 flex items-center gap-1 border border-natural-300 select-none overflow-hidden hover:w-full max-w-max w-10 group duration-500 shrink-0">
                  <ReactIcon
                    className="shrink-0 "
                    fillClass="group-hover:fill-main-350"
                    strokeClass="group-hover:stroke-main-350"
                  />
                  <span className="opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 whitespace-nowrap">
                    React JS
                  </span>
                </li>
                <li className="h-10 rounded-full px-2 py-2 flex items-center gap-1 border border-natural-300 select-none overflow-hidden hover:w-full max-w-max w-10 group duration-500 shrink-0">
                  <ReactIcon
                    className="shrink-0"
                    fillClass="group-hover:fill-main-350"
                    strokeClass="group-hover:stroke-main-350"
                  />
                  <span className="opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 whitespace-nowrap">
                    React JS
                  </span>
                </li>
                <li className="h-10 rounded-full px-2 py-2 flex items-center gap-1 border border-natural-300 select-none overflow-hidden hover:w-full max-w-max w-10 group duration-500 shrink-0">
                  <ReactIcon
                    className="shrink-0"
                    fillClass="group-hover:fill-main-350"
                    strokeClass="group-hover:stroke-main-350"
                  />
                  <span className="opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 whitespace-nowrap">
                    React JS
                  </span>
                </li>
                <li className="h-10 rounded-full px-2 py-2 flex items-center gap-1 border border-natural-300 select-none overflow-hidden hover:w-full max-w-max w-10 group duration-500 shrink-0">
                  <ReactIcon
                    className="shrink-0"
                    fillClass="group-hover:fill-main-350"
                    strokeClass="group-hover:stroke-main-350"
                  />
                  <span className="opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 whitespace-nowrap">
                    React JS
                  </span>
                </li>
              </ul>
              <div className="flex items-center justify-between gap-2 mb-6 sm:mb-8">
                <h3 className="flex items-center gap-3 titleMd">
                  <span className="text-text-200 line-through font-normal">
                    $34
                  </span>
                  <span className="blackGradient">$34</span>
                </h3>
                <Button className="w-fit group">
                  <span className="!leading-none">Buy now</span>
                  <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
                </Button>
              </div>
              <p className="text-xs text-text-600 font-inter">
                Price is in US dollars and excludes tax and handling fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
