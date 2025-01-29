import OtherProjects from "@/components/projects/OtherProjects";
import ProjectInformation from "@/components/projects/ProjectInformation";
import ProjectVideo from "@/components/projects/ProjectVideo";
import PageThumbnail from "@/components/shared/PageThumbnail";
import { cn } from "@/lib/utils";
import { images } from "@/services";
import { aboutViewData } from "@/services/data";
import Image from "next/image";

async function PortfolioDetails({
  params,
}: {
  params: Promise<{ portfolioId: string }>;
}) {
  const { portfolioId } = await params;
  const data = {
    projectInfo: {
      clientOrigin: "Germany",
      timeline: "90 Days",
      tags: [
        "UX/UI Design",
        "Interaction Design",
        "Illustration",
        "Animations",
        "Video Production",
      ],
      description:
        "Telzen is a vibrant telco platform for youth, offering flexible plans, rewards, and seamless account management in an intuitive app.",
      title: "Your Connected,\n Rewarded Lifestyle",
      subDescription:
        "Telzen offers a range of features designed for the modern, connected youth. With flexible mobile plans tailored to your needs, you can easily manage your account, track usage, and pay bills. Earn rewards through gamified experiences and access exclusive deals for everyday savings. Enjoy 24/7 customer support and stay in control of your connectivity with Telzen.",
    },
  };
  return (
    <>
      <PageThumbnail title="telzen - A Telecom Brand" description="GUIDE" />
      <ProjectVideo />
      <ProjectInformation information={data?.projectInfo} />
      <section className="containerX pb-10 sm:pb-16 md:pb-20">
        <div className="w-full aspect-[12/9] relative overflow-hidden flex_center">
          <Image
            src={images.project3}
            alt="office image 2"
            className="absolute_center min-h-full min-w-full"
            height={1280}
            width={1920}
          />
        </div>
      </section>
      <section className="containerX pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-20 md:pb-30 lg:pb-40">
        <div className="w-full max-w-[738px] ml-auto">
          <h4 className="titleLg text-text-900 whitespace-pre-wrap">
            {"Designed to Inspire,\nBuilt for the Modern Youth"}
          </h4>
          <p className="para md:text-xl lg:text-2xl mt-6">
            Telzen’s UI combines sleek, modern aesthetics with youth-focused
            functionality, delivering a visually stunning and intuitive
            experience.
          </p>
        </div>
      </section>
      <section className="py-8 sm:py-16 md:py-20 lg:py-28 bg-black">
        <div className="containerX">
          <div className="w-full aspect-[12/6] relative overflow-hidden flex_center">
            <Image
              src={images.project4}
              alt="office image 2"
              className="absolute_center min-h-full min-w-full"
              height={1280}
              width={1920}
            />
          </div>
        </div>
      </section>
      <section className="containerX pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-20 md:pb-30 lg:pb-40">
        <div className="w-full max-w-[738px] ml-auto">
          <p className="para md:text-xl lg:text-2xl mt-6">
            We developed Telzen’s branding by focusing on a modern, youthful
            aesthetic that reflects the platform’s focus on simplicity,
            connectivity, and rewards. The design emphasizes a clean and
            intuitive user experience, with vibrant colors and dynamic visuals
            that resonate with the target audience. Through consistent messaging
            and a cohesive visual identity, we captured Telzen’s mission to
            empower users with seamless mobile connectivity and personalized
            benefits.
          </p>
          <h4 className="titleLg text-text-900 whitespace-pre-wrap mt-6 sm:mt-8 md:mt-10">
            {"Empower Your Mobile\n Experience with Telzen"}
          </h4>
          <p className="para md:text-xl lg:text-2xl mt-6">
            Telzen empowers the modern generation with seamless connectivity,
            rewarding experiences, and effortless account management, ensuring
            you stay in control of your mobile experience.
          </p>
        </div>
      </section>
      <section className="overflow-hidden">
        <div className="containerX">
          <div className="flex gap-2 sm:gap-4 items-center justify-center w-full">
            {aboutViewData.map((item, index) => (
              <div
                className={cn(
                  "relative h-max min-w-40",
                  index == 0 && "justify-self-start",
                  index == 2 && "justify-self-start"
                )}
                key={index}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  aria-label={item.description}
                  width={1280}
                  height={1280}
                  className={cn(
                    " w-full h-full c",
                    index == 1 ? "aspect-[4/5]" : "aspect-[4/4]"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="containerX pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-20 md:pb-30 lg:pb-40">
        <div className="w-full max-w-[738px] ml-auto">
          <h4 className="titleLg text-text-900 whitespace-pre-wrap">
            {"From Concept\n to Creation"}
          </h4>
          <p className="para md:text-xl lg:text-2xl mt-6">
            We began Telzen’s journey by identifying the core needs of our
            target audience—young, connected users seeking seamless mobile
            experiences. Through extensive research and collaboration, we laid
            the foundation with detailed wireframes, designing user-friendly
            interfaces that emphasized simplicity and functionality. Our goal
            was to create an intuitive platform that empowers users with
            flexible plans, rewarding experiences, and effortless account
            management. From concept to execution, every step was guided by
            Telzen’s vision to enhance connectivity and deliver value to its
            users.
          </p>
        </div>
      </section>
      <section className="py-8 sm:py-16 md:py-20 bg-black">
        <div className="containerX">
          <div className="w-full aspect-[9/13] relative overflow-hidden flex_center">
            <Image
              src={images.project5}
              alt="office image 2"
              className="absolute_center min-h-full min-w-full"
              height={1280}
              width={1920}
            />
          </div>
        </div>
      </section>
      <section className="containerX pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-20 md:pb-30 lg:pb-40">
        <div className="w-full max-w-[738px] ml-auto">
          <h4 className="titleLg text-text-900 whitespace-pre-wrap">
            {"Consistency in\nBranding & UI Elements"}
          </h4>
          <p className="para md:text-xl lg:text-2xl mt-6">
            Our design guidelines ensure a cohesive and consistent brand
            experience. We prioritize clean typography, using modern fonts that
            enhance readability and reflect Telzen’s youthful and dynamic
            identity. Color palettes are carefully curated to evoke trust,
            energy, and engagement, with vibrant accents that resonate with our
            audience. Every design element—from layout to iconography—is crafted
            to maintain a seamless, user-friendly experience while staying true
            to Telzen’s vision.
          </p>
        </div>
      </section>
      <section className="bg-main-100">
        <div className="w-full aspect-[14/10] relative overflow-hidden flex_center">
          <Image
            src={images.project6}
            alt="office image 2"
            className="absolute_center min-h-full min-w-full"
            height={1280}
            width={1920}
          />
        </div>
      </section>
      <OtherProjects />
    </>
  );
}

export default PortfolioDetails;
