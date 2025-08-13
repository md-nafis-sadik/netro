import { images } from "@/services";
import {
  ArrowLongTailIcon,
  ExclemetionIcon,
  FileListIcon,
  ReactIcon,
  UserIcon,
} from "@/services/assets/svgs";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function ProductDetails({
  imageIndex = 0,
  data,
}: {
  imageIndex: number;
  data: any;
}) {

  return (
    <section className="pb-10 sm:pb-16 md:pb-20 lg:pb-30 ">
      <div className="containerX">
        <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-10 lg:gap-16 xl:gap-20 font-inter">
          <div className="w-full">
            {/* <ProductsGallery
              className="hidden md:flex"
              images={data?.images}
              showImage={imageIndex}
            /> */}
            <Image
              src={data.image}
              alt="product"
              width={2952}
              height={1476}
              className="w-full h-auto object-fill hidden md:block"
            />
            <p className="text-sm sm:text-base md:text-lg text-text-700 mt-4 sm:mt-6">
              {data?.description}
            </p>
            <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 mt-6 sm:mt-10 md:mt-12">
              <div>
                <h4 className="titleLg">CORE FEATURES</h4>
                <ul className="mt-4 sm:mt-6">
                  {(data?.features ?? []).map(
                    (feature: string, index: number) => (
                      <li
                        className="flex items-center gap-6 sm:gap-10 md:gap-12"
                        key={index}
                      >
                        <span className="text-base sm:text-lg text-text-200 font-semibold">
                          {index > 9 ? index : `0${index}`}
                        </span>
                        <span className="flex-1  py-3 border-b border-dashed border-natural-300 text-sm sm:text-base md:text-lg text-text-900">
                          {feature}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* <div className="flex gap-4 px-4 py-6 sm:p-6 bg-secondary-50 border border-dashed border-secondary-950">
                <ExclemetionIcon className="w-20 h-20 hidden md:block" />
                <div>
                  <div className="flex items-center gap-4">
                    <ExclemetionIcon className="w-10 h-10 sm:w-16 sm:h-16 md:hidden" />
                    <h4 className="titleMd md:text-4xl">
                      {data?.apiKeys?.title}
                    </h4>
                  </div>

                  <ul className="list-disc mt-4 pl-4">
                    {(data?.apiKeys?.infos ?? []).map(
                      (info: string, index: number) => (
                        <li
                          className="text-sm sm:text-base text-text-500"
                          key={index}
                        >
                          {info}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div> */}

              {/* <div className="flex gap-4 px-4 py-6 sm:p-6 border border-dashed border-natural-300">
                <FileListIcon className="w-20 h-20 hidden md:block" />
                <div>
                  <div className="flex items-center gap-4">
                    <FileListIcon className="w-10 h-10 sm:w-16 sm:h-16 md:hidden" />
                    <h4 className="titleMd md:text-4xl">Documentation</h4>
                  </div>

                  <ul className="list-disc mt-4 pl-4">
                    <li className="text-sm sm:text-base text-text-500 ">
                      <span>Check The Product Documentation:</span>{" "}
                      <span className="font-bold text-text-900">
                        Google Drive Link
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-text-700">
                To check out all the features and the smothness of the app and
                UI, download the app now!
              </p>
              <div className="w-full flex flex-col sm:flex-row gap-3 flex-wrap">
                <button
                  type="button"
                  className="relative pl-4 pr-6 py-3 bg-main-500 flex items-center gap-4 w-full sm:max-w-max"
                >
                  <Image
                    src={images.download}
                    alt="Download"
                    width={200}
                    height={200}
                    className="w-8"
                  />
                  <p className="text-2xl font-inter font-normal text-white leading-[110%]">
                    DOWNLOAD <span className="font-bold">APP</span>
                  </p>
                </button>
                <button
                  type="button"
                  className="relative pl-4 pr-6 py-3 bg-main-100 border border-main-500 gap-4 w-full max-w-[285px]text-2xl font-inter font-normal text-text-900 leading-[110%] text-center sm:max-w-[285px] h-14"
                >
                  DOWNLOAD
                </button>
              </div>
              <div>
                <h4 className="titleLg">Note</h4>
                <p className="text-sm sm:text-base md:text-lg text-text-700 mt-2 sm:mt-3 md:mt-4 mb-4">
                  There are a few things you need for this project to work.
                </p>
                <ul className="mt-4 sm:mt-6">
                  {(data?.notes ?? []).map((feature: string, index: number) => (
                    <li
                      className="flex items-center gap-6 sm:gap-10 md:gap-12"
                      key={index}
                    >
                      <span className="text-base sm:text-lg text-text-200 font-semibold">
                        01
                      </span>
                      <span className="flex-1  py-3 border-b border-dashed border-natural-300 text-sm sm:text-base md:text-lg text-text-900">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div> */}
            </div>
          </div>
          <div className="w-full md:max-w-[462px]">
            {/* <ProductsGallery
              className="mb-6 md:hidden"
              images={data?.images}
              showImage={imageIndex}
            /> */}
            <Image
              src={data.image}
              alt="product"
              width={2952}
              height={1476}
              className="w-full h-auto object-fill mb-6 md:hidden block"
            />
            <div className="w-full px-4 sm:px-7 py-6 sm:py-8 md:p-10 border border-dashed border-natural-300 font-inter flex flex-col sticky top-10">
              {data.title && (
                <h2 className="titleMd text-text-900">{data.title}</h2>
              )}
              {data.shortDescription && (
                <p className="text-sm sm:text-base md:text-lg font-inter text-text-600 mt-2 sm:mt-3 md:mt-4">
                  {data.shortDescription}
                </p>
              )}
              {/* <ul className="flex items-center gap-2 max-w-max mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-9 md:mb-12">
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
              </ul> */}
              {(data.price || data.downloadAppLink || data.adminPanelLink) && (
                <div className="flex flex-col items-center gap-2">
                  {data.price && (
                    <h3 className="flex items-center gap-3 titleMd">
                      <span className="text-text-200 line-through font-normal">
                        ${data.price}
                      </span>
                      <span className="blackGradient">${data.price}</span>
                    </h3>
                  )}

                  {data.downloadAppLink && (
                    <Link href={data.downloadAppLink} className="w-full">
                    <Button className="w-full group mt-12">
                      <Image
                        src={images.download}
                        alt="Download"
                        width={200}
                        height={200}
                        className="w-8"
                        
                      />
                      <p className="text-sm md:text-lg font-inter font-normal text-white leading-[110%]">
                        DOWNLOAD <span className="font-bold">APP</span>
                      </p>
                    </Button>
                    </Link>
                  )}
                  {data.adminPanelLink && (
                    <Link
                      href={data.adminPanelLink}
                      className="relative inline-block rounded-full p-[1px] hover:-translate-y-[2px] transition-all duration-300 bg-gradient-to-r from-[#483BDC] via-[#FFA8A9] to-[#82D3A4] w-full mt-1"
                    >
                      <span className="block text-center rounded-full text-sm md:text-lg bg-white px-6 py-4 text-gray-800 hover:bg-gray-50">
                        TRY ADMIN PANEL
                      </span>
                    </Link>
                  )}
                </div>
              )}
              {data.auth && (
                <div className="flex gap-4 px-4 py-6 sm:p-6 border border-dashed border-natural-300 mt-8">
                  <UserIcon className="w-12 h-12 hidden md:block" />
                  <div>
                    <div className="flex items-center gap-4">
                      <UserIcon className="w-10 h-10 sm:w-16 sm:h-16 md:hidden" />
                      <h4 className="titleMd md:text-4xl">Admin Login</h4>
                    </div>

                    <ul className="list-disc mt-4 pl-4">
                      <li className="text-sm sm:text-base text-text-500">
                        E-mail: {data?.auth?.email}
                      </li>
                      <li className="text-sm sm:text-base text-text-500">
                        Password: {data?.auth?.password}
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              {data.note && (
                <p className="text-xs text-text-600 font-inter">{data.note}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
