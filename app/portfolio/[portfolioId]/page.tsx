import DiscoverMoreProjectsSkeleton from "@/components/projects/DiscoverMoreProjectsSkeleton";
import DiscoverMoreProjectsWrapper from "@/components/projects/DiscoverMoreProjectsWrapper";
import ProjectDetailsSkeleton from "@/components/projects/ProjectDetailsSkeleton";
import ProjectDetailsWrapper from "@/components/projects/ProjectDetailsWrapper";
import { getGeneratedMetadata } from "@/lib/metadata";
import { purifyUrl } from "@/services";
import { Suspense } from "react";

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

  return (
    <main className="mt-[60px]">
      <Suspense fallback={<ProjectDetailsSkeleton />}>
        <ProjectDetailsWrapper id={portfolioId} />
      </Suspense>
      <Suspense fallback={<DiscoverMoreProjectsSkeleton />}>
        <DiscoverMoreProjectsWrapper id={portfolioId} />
      </Suspense>
    </main>
  );
}

export default PortfolioDetails;

{
  /* <main className="min-h-screen font-inter">
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
             CORE FEATURES
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
             NOTE WITH WARNING 
            <div className="border border-dashed border-secondary-950 bg-secondary-50 py-6 px-4 md:px-6 flex flex-row gap-2 md:gap-4 mt-6 md:mt-12">
              <WarningSignIcon className="w-10 h-10 md:w-20 md:h-20" />
              <div className="">
                <p className="font-scoutcond text-2xl sm:text-3xl lg:text-4xl font-bold !leading-[0.9] text-text-900 uppercase">
                  Jazakallah needs OpenAI API Key
                </p>
                <ul className="list-disc list-outside mt-4 ms-2 md:ms-4">
                  {noteList.map((note, index) => (
                    <li className="marker:text-text-500" key={index}>
                      <span className="text-sm md:text-base font-bold md:font-normal !leading-[1.6] text-text-500">
                        {note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            ADMIN LOGIN CREDENTIALS 
            <div className="border border-dashed border-neutral-300 bg-transparent py-6 px-4 md:px-6 flex flex-row gap-2 md:gap-4 mt-6 md:mt-12">
              <PersonIcon className="w-10 h-10 md:w-20 md:h-20" />
              <div className="">
                <p className="font-scoutcond text-2xl sm:text-3xl lg:text-4xl font-bold !leading-[0.9] text-text-900 uppercase">
                  Admin Login
                </p>
                <ul className="list-disc list-outside mt-4 ms-2 md:ms-4">
                  {adminCredentials.map((creds, index) => (
                    <li className="marker:text-text-500" key={index}>
                      <span className="text-sm md:text-base font-bold md:font-normal !leading-[1.6] text-text-500">
                        {creds}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            DOCUMENTATION 
            <div className="border border-dashed border-neutral-300 bg-transparent py-6 px-4 md:px-6 flex flex-row gap-2 md:gap-4 mt-6 md:mt-12">
              <TextSnippetIcon className="w-10 h-10 md:w-20 md:h-20" />
              <div className="">
                <p className="font-scoutcond text-2xl sm:text-3xl lg:text-4xl font-bold !leading-[0.9] text-text-900 uppercase">
                  Documentation
                </p>
                <ul className="list-disc list-outside mt-4 ms-2 md:ms-4">
                  {adminCredentials.map((creds, index) => (
                    <li className="marker:text-text-500" key={index}>
                      <span className="text-sm md:text-base font-bold md:font-normal !leading-[1.6] text-text-500">
                        {creds}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            CTA 
            <p className="text-sm md:text-lg font-normal !leading-[1.6] text-text-700 mt-6 md:mt-12">
              To check out all the features and the smothness of the app and UI,
              download the app now!
            </p>
            ACTION BUTTONS 
            <div className="mt-6 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="flex flex-row items-center gap-4 bg-main-500 hover:bg-main-600 transition_common p-[12px_24px_12px_17px] cursor-pointer min-h-[58px]">
                <Download3DIcon className="h-auto w-5 md:w-[30px] !shrink-0" />
                <span className="text-2xl font-normal !leading-[1.1] text-white-100">
                  DOWNLOAD <span className="font-bold">APP</span>
                </span>
              </button>
              <button className="flex flex-row items-center gap-4 bg-main-100 hover:bg-main-200 transition_common px-6 py-3 cursor-pointer min-h-[58px]">
                <span className="text-2xl font-normal !leading-[1.1] text-text-900">
                  TRY ADMIN PANEL
                </span>
              </button>
            </div>
             NOTE 
            <div className="mt-6 md:mt-10 lg:mt-12">
              <p className="font-scoutcond text-2xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold !leading-[0.9] uppercase text-text-900">
                Note
              </p>
              <p className="text-sm md:text-lg font-normal !leading-[1.6] text-text-700 mt-6 md:mt-12">
                There are a few things you need for this project to work.
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
          </div>
          <div className="min-h-full relative w-full lg:w-2/5">
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
        <ProjectDetailsExploreMoreProducts />
      </main> */
}
