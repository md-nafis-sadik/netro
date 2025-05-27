import ProjectDetailsImageStagger from "@/components/projects/ProjectDetailsImageStagger";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { fetchWithDelay } from "@/lib/apiHandler";
import { getGeneratedMetadata } from "@/lib/metadata";
import { purifyUrl, toTwoDigits } from "@/services";
import { WarningSignIcon } from "@/services/assets/svgs";

interface PortfolioDetailsResponse {
  data: any;
  [key: string]: any;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ portfolioId: string }>;
}) {
  const { portfolioId } = await params;
  const purifiedPortfolioId = purifyUrl({ urlString: portfolioId });
  const url = `/portfolios/find-by-title/${purifiedPortfolioId}`;
  return await getGeneratedMetadata({
    apiUrl: url,
    metaTitle: purifiedPortfolioId,
  });
}

async function PortfolioDetails({
  params,
}: {
  params: Promise<{ portfolioId: string }>;
}) {
  let { portfolioId } = await params;
  portfolioId = purifyUrl({ urlString: portfolioId });

  let portfolioDetails = (await fetchWithDelay(
    `/portfolios/find-by-title/${portfolioId}`
  )) as PortfolioDetailsResponse;

  // TEMP DATA
  const coreFeatures = [
    "Tasbih Counting",
    "Iftar Timings",
    "Dua",
    "Quran",
    "Hadis",
    "Islamic Calendar",
  ];

  const noteList = [
    "The App comes with a customized backend and Admin Panel. Credentials has been shared.",
    "Flutter Code. iOS App needs to run.",
    "On Mac device with XCode (Expertise required)",
    "Ad Network, Payment Methods are subject to setup yourself.",
    "Installation is not included in 6 months support.",
  ];
  // TEMP DATA

  return (
    <main className="min-h-screen font-inter">
      <div className="containerX">
        <Breadcrumbs
          breadcrumbs={[
            {
              name: "Product",
              link: "/portfolio",
            },
            {
              name: "Product description",
              // link: `/portfolio/${portfolioId}`,
            },
          ]}
          wrapperClassName="pt-2 sm:pt-6 pb-8 sm:pb-8 md:py-10"
        />
      </div>

      <div className="flex flex-row gap-20 containerX">
        <div className="flex flex-col w-full lg:w-3/5 ">
          <ProjectDetailsImageStagger data={portfolioDetails?.data} />
          <p className="text-sm md:text-lg font-normal !leading-[1.6] mt-4 md:mt-6 text-text-700">
            {portfolioDetails?.data?.metaDescription}
          </p>

          {/* CORE FEATURES */}
          <div className="mt-6 md:mt-10 lg:mt-12">
            <p className="font-scoutcond text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold !leading-[0.9] uppercase text-text-900">
              Core Features
            </p>

            <div className="mt-4 md:mt-6">
              {coreFeatures.map((feature, index) => (
                <p
                  className="flex items-center gap-6 md:gap-10 lg:gap-12 my-3 whitespace-pre-wrap"
                  key={index}
                >
                  <span className="text-base md:text-lg !leading-[1.2] md:!leading-[1.4] font-semibold text-text-200">
                    {toTwoDigits(index + 1)}
                  </span>
                  <span className="text-sm md:text-lg font-normal !leading-[1.6] text-text-900">
                    {feature}
                  </span>
                </p>
              ))}
            </div>
          </div>

          {/* NOTE WITH WARNING */}
          <div className="border border-dashed border-secondary-950 bg-secondary-50 py-6 px-4 md:px-6 flex flex-row mt-6 md:mt-12">
            <WarningSignIcon className="w-10 h-10 md:w-20 md:h-20" />

            <div className="">
              <p className="font-scoutcond text-2xl sm:text-3xl lg:text-4xl font-bold !leading-[0.9] text-text-900 uppercase">
                Jazakallah needs OpenAI API Key
              </p>

              <ul className="list-disc list-inside">
                {noteList.map((note, index) => (
                  <li
                    className="flex items-center gap-6 md:gap-10 lg:gap-12 my-3 whitespace-pre-wrap"
                    key={index}
                  >
                    <span className="text-sm md:text-lg font-normal !leading-[1.6] text-text-900">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="h-full relative w-full lg:w-2/5">
          <div className="border border-dashed border-natural-300 p-6 md:p-8 lg:p-10 sticky top-10">
            <p className="font-scoutcond text-2xl md:text-4xl lg:text-5xl font-bold !leading-[0.9] uppercase">
              {portfolioDetails?.data?.title}
            </p>
            <p className="text-sm md:text-lg !leading-[1.4] md:!leading-[1.6] mt-2 md:mt-4">
              {portfolioDetails?.data?.metaDescription}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PortfolioDetails;

{
  /* <>
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
    </> */
}
