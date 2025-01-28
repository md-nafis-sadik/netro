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
    features: [
      "Tasbih Counter",
      "Iftar Timings",
      "Dua",
      "Hadis",
      "Azkar",
      "Al – Quran",
      "Qibla Compass",
      "Islamic Calender",
      "Mosque Locator",
      "Makka Live",
      "Daily Prayer Notification",
      "Islamic Wallpapers",
      "Zakat Calculator",
      "Islamic Baby Name Generator",
      "Prayer Timings",
      "Islamic AI Chat Bot",
      "MultiLingual (Arabic, Bangla, English, French, Hindi, Tuskish, Urdu)",
    ],
    notes: [
      "Java 8 and 17 (JDK)",
      "Flutter 3.19",
      "Dart version 3.3.0",
      "Google Maps API",
      "Google Places API",
      "One Signal",
      "Firebase",
      "RevenueCat",
      "Chat GPT API",
      "Google Play Store For In App Purchase",
      "Node.js 19.9.0",
      "Npm 10.2.4",
      "Php 8.2",
      "Domain & Hosting",
      "Terminal Enabled on CPanel",
    ],
    apiKeys: {
      title: "Islamic AI needs OpenAI API Key",
      infos: [
        "The App comes with a customized backend and Admin Panel. Credentials has been shared.",
        "Flutter Code. iOS App needs to run",
        "on Mac device with XCode (Expertise required)",
        "Ad Network, Payment Methods are subject to setup yourself.",
        "Installation is not included in 6 months support.",
      ],
    },
    auth: {
      email: "test@netrocreative.com",
      password: "test1234",
    },
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
            <div className="flex flex-col gap-6 sm:gap-10 md:gap-12 mt-6 sm:mt-10 md:mt-12">
              <div>
                <h4 className="titleLg">CORE FEATURES</h4>
                <ul className="mt-4 sm:mt-6">
                  {data?.features?.map((feature, index) => (
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
              </div>
              <div className="flex gap-4 px-4 py-6 sm:p-6 bg-secondary-50 border border-dashed border-secondary-950">
                <ExclemetionIcon className="w-20 h-20 hidden md:block" />
                <div>
                  <div className="flex items-center gap-4">
                    <ExclemetionIcon className="w-10 h-10 sm:w-16 sm:h-16 md:hidden" />
                    <h4 className="titleMd md:text-4xl">
                      {data?.apiKeys?.title}
                    </h4>
                  </div>

                  <ul className="list-disc mt-4 pl-4">
                    {data?.apiKeys?.infos?.map((info, index) => (
                      <li
                        className="text-sm sm:text-base text-text-500"
                        key={index}
                      >
                        {info}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 px-4 py-6 sm:p-6 border border-dashed border-natural-300">
                <UserIcon className="w-20 h-20 hidden md:block" />
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
              <div className="flex gap-4 px-4 py-6 sm:p-6 border border-dashed border-natural-300">
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
                  {data?.notes?.map((feature, index) => (
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
              </div>
            </div>
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
