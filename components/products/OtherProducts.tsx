import { images } from "@/services";
import SliderContainer from "../shared/SlideContainer";
import OtherProductCard from "./OtherProductsCard";

function OtherProducts() {
  // Map productsData to ProjectCard-compatible structure
  const productsData = [
    // {
    //   id: "01",
    //   image: images.product1,
    //   title: "Trivialy",
    //   description:
    //     "Boosts up to 40% eCommerce sales via customer engagement activities. Try this FREEMIUM tool! Currently available for Wordpress only.",
    //   url: "https://trivialy.co",
    // },
    {
      id: "02",
      image: images.telzenPreview1,
      title: "Telzen- telecom brand",
      description:
        "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
      url: "https://dokani.products8.com",
    },
    {
      id: "03",
      image: images.jazakallahPreview1,
      title: "JazakAllah MMP",
      description:
        "From the religion responsibility we have created a solution that automates and makes easier to manage your Mosque. It also comes with a complete user app for practitioners.",
      url: "https://codecanyon.net/item/jazakallah-tasbih-counter-app/44905917",
    },
    {
      id: "04",
      image: images.smartPathshalaPreview1,
      title: "Smart pathshala",
      description:
        "Smart Pathshala is one of the apps that made by the brilliant people with ability to automate the educational Institute. Ask your Institute admin for onboarding!",
      url: "https://play.google.com/store/apps/details?id=com.netrocreative.qurioapp&pcampaignid=web_share",
    },
    {
      id: "05",
      image: images.rimozenAIPreview1,
      title: "Rimozen AI",
      description:
        "Generative app that can generate stunning images, motions and music.",
      url: "https://play.google.com/store/apps/details?id=com.netrocreative.geniepers&pcampaignid=web_share",
    },
    {
      id: "06",
      image: images.dokaniERPPreview1,
      title: "Dokani ERP",
      description:
        "Might saw lot of ERP or inventory management solution but what if we bring a product that created for dealers only with good traction in sales and multi-location stores.",
      url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    },
    {
      id: "07",
      image: images.kidsAIPreview1,
      title: "KIds AI",
      description:
        "Dedicated counsellors for Parenting, powered by Artificial Intelligence. The app can be a guide for your parenting and make you feel better even when kids are tantruming.",
      url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    },
    {
      id: "08",
      image: images.kiddzLearnPreview1,
      title: "Kiddz Learn",
      description:
        "Immersive application that helps learning lill' stars with drawing, learning words or even doing simple maths. but remember its for Kids under 10!",
      url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    },
    {
      id: "09",
      image: images.eventusPreview1,
      title: "Eventus",
      description:
        "Must be thinking it's nothing but a even booking platform? Wrong, it's something that no one solved the problem. Why don't you explore their website?",
      url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    },
    {
      id: "10",
      image: images.proAIPreview1,
      title: "Pro AI",
      description:
        "Day-To-Day Ai app that eases your tasks like writing an email reply, writing an leave application or even writing an appraisal request letter too? Why don’t yo try today?",
      url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    },
  ];

  const data = productsData.map((product) => ({
    _id: product.id,
    title: product.title,
    metaDescription: product.description,
    featuredImage: product.image,
    tagList: "", // no tags provided, leave blank or add categories if needed
    author: {
      profileImage: product.image, // could be same as featuredImage
    },
    url: product.url, // keep original link
  }));

  return (
    <div className="pt-6 pb-10 sm:mt-16 sm:pb-32 md:pt-40 md:pb-20">
      <h2 className="title blackGradient text-center">Explore More Products</h2>
      <div className="containerX overflow-hidden pt-6 pb-10 sm:mt-8 sm:pb-16 md:pt-20 md:pb-20">
        <SliderContainer className="relative">
          <div className="w-full min-h-fit flex flex-row gap-6 sm:gap-10 md:gap-15">
            {data.map((item, index) => (
              <OtherProductCard item={item} key={index}/>
            ))}
          </div>
        </SliderContainer>
      </div>
    </div>
  );
}

export default OtherProducts;
