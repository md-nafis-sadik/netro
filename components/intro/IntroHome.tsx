import { images } from "@/services";
import { AppLogoIcon } from "@/services/assets/svgs";
import { countries } from "@/services/data/countries";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function IntroHome() {
  return (
    <section data-bg-theme="light" className="py-10 md:py-15 font-inter">
      <div className="container2X">
        <div className="flex gap-44 items-start">
          <AppLogoIcon className="w-28 shrink-0" />
          <div className="text-4xl text-black-800 align-middle leading-[110%] max-w-[994px] ml-auto">
            We are{" "}
            <Image
              src={images.logo}
              className="size-12 object-contain inline-block"
              alt="logo icon"
              title="logo icon"
            />
            Netro Systems fosters innovation, collaboration, diversity, and
            growth, creating{" "}
            <div className="inline-flex items-center -space-x-3 -mt-4 translate-y-3">
              <Image
                src={images.about1}
                className="size-12 object-contain shrink-0"
                alt="logo icon"
                title="logo icon"
              />
              <Image
                src={images.about2}
                className="size-12 object-contain shrink-0"
                alt="logo icon"
                title="logo icon"
              />
            </div>
            impactful software solutionsin a vibrant, inclusive culture.
          </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-5 gap-4 mt-11">
          {/* Projects Delivered */}
          <div className="col-span-4 row-span-5 flex flex-col justify-between gap-6 p-6 relative">
            <h3 className="text-[4rem] leading-[120%] text-black-800 font-bold relative z-50">
              70+
            </h3>
            <div className="relative z-50">
              <p className="text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Projects Delivered
              </p>
              <p className="line-clamp-3 text-base text-text-700 leading-[120%] mt-2">
                Including FinTech, SaaS, Telecom,
                <br /> HealthCare, <br />
                AI technology, MVP, eCommerce and many
              </p>
            </div>
            <Image
              src={images.about3}
              alt="projects delivered"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />
          </div>
          {/* Support 24/7, Guaranteed! */}
          <div className="col-span-4 col-start-5 flex items-center justify-between gap-3 border border-black-50 px-6 py-5">
            <div>
              <p className="text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Support 24/7, Guaranteed!
              </p>
              <p className="text-sm text-text-700 leading-[120%] mt-1">
                From deployment to production our dedicated team ensures your
                support.
              </p>
            </div>
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage
                  src={images.support1.src}
                  alt="postman icon"
                  className="size-10"
                />
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src={images.support2.src}
                  alt="integration icon"
                  className="size-10"
                />
                <AvatarFallback>SE</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src={images.support3.src}
                  alt="Jira icon"
                  className="size-10"
                />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
            </div>
          </div>
          {/* Our Clients in 19+ Countries */}
          <div className="col-span-8 col-start-5 row-start-5 flex items-center justify-between gap-6 border border-black-50 px-6 py-5">
            <div>
              <p className="text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Our Clients in 19+ Countries
              </p>
              <p className="text-sm text-text-700 leading-[120%] mt-1">
                We collaborate with startups and businesses across the US,
                Europe, and Asia.
              </p>
            </div>
            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale border rounded-full p-1">
              {countries?.map((country) => (
                <Avatar key={country?.code}>
                  <AvatarImage
                    src={country?.image.src}
                    alt={country?.name}
                    className="size-10"
                  />
                  <AvatarFallback>{country?.code}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          {/* Client Satisfaction */}
          <div className="col-span-4 row-span-3 col-start-5 row-start-2 flex flex-col justify-between gap-6  px-6 py-5 relative">
            <h3 className="text-[4rem] leading-[120%] text-black-800 font-bold relative z-50">
              99%
            </h3>
            <div className="relative z-50">
              <p className="text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Client Satisfaction
              </p>
              <p className="line-clamp-3 text-base text-text-700 leading-[120%] mt-2">
                Rated 4.85 over all the platforms. Over the time we have ensured
                exactly what your business aims for.
              </p>
            </div>
            <Image
              src={images.about4}
              alt="projects delivered"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />
          </div>
          {/* Positive Outcomes */}
          <div className="col-span-4 row-span-4 col-start-9 row-start-1 flex flex-col justify-between gap-6 p-6 relative">
            <h3 className="text-[4rem] leading-[120%] text-black-800 font-bold relative z-50">
              35X
            </h3>
            <div className="relative z-50">
              <p className="text-base md:text-lg text-black-800 font-semibold leading-[140%]">
                Positive Outcomes
              </p>
              <p className="line-clamp-3 text-base text-text-700 leading-[120%] mt-2">
                Your investment on scalable software always pay backs with great
                ROI.
              </p>
            </div>
            <Image
              src={images.about5}
              alt="projects delivered"
              width={1000}
              height={1000}
              className="absolute top-0 left-0 w-full h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntroHome;
