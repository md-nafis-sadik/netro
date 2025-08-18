import { images } from "@/services";
import Image from "next/image";

function ContactUsDetails() {
  return (
    <section className="px-4 sm:px-10 md:px-16 lg:px-20 py-10 sm:py-12 md:py-15 bg-black">
      <div className="grid md:grid-cols-2 gap-10 sm:gap-16 md:gap-20 break-all">
        <div className="flex items-start gap-6 sm:gap-8 md:gap-10 w-full">
          <Image
            src={images.contact}
            className="w-full max-w-28 sm:max-w-40 md:max-w-48 lg:max-w-56 max-h-28 sm:max-h-40 md:max-h-96 object-cover"
            width={300}
            height={300}
            alt="contact"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase leading-[120%] font-scoutcond font-bold">
              Bangladesh
            </h2>
            <p className="text-xs sm:text-sm text-text-200 mt-6 uppercase">
              head office
            </p>
            <p className="text-sm sm:text-base text-text-100 font-semibold leading-[22px] mt-2">
              Level 6B, Hi-Tech Park, Rajshahi-6000, Bangladesh
            </p>
            <p className="text-xs sm:text-sm text-text-200 mt-4 sm:mt-8 md:mt-11  uppercase">
              Email
            </p>
            <p className="text-sm sm:text-base text-text-100 font-semibold leading-[22px] mt-2">
              hello@netrosystems.com
            </p>
            <p className="text-xs sm:text-sm text-text-200 mt-4  uppercase">
              Phone
            </p>
            <p className="text-sm sm:text-base text-text-100 font-semibold leading-[22px] mt-2">
              +880 1724244796
            </p>
            {/* <a href="#" className="flex items-center gap-2 group mt-6">
              <div className="bg-gradientGreen w-9 h-[1px] rounded-full"></div>
              <span className="text-white text-base font-bold group-hover:translate-x-1 duration-300">
                See map
              </span>
            </a> */}
          </div>
        </div>
        <div className="flex items-start gap-6 sm:gap-8 md:gap-10 w-full">
          <Image
            src={images.contact}
            className="w-full max-w-28 sm:max-w-40 md:max-w-48 lg:max-w-56 max-h-28 sm:max-h-40 md:max-h-96 object-cover"
            width={300}
            height={300}
            alt="contact"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white uppercase leading-[120%] font-scoutcond font-bold">
              United Kingdom
            </h2>
            <p className="text-xs sm:text-sm text-text-200 mt-6 uppercase">
              UK Office
            </p>
            <p className="text-sm sm:text-base text-text-100 font-semibold leading-[22px] mt-2">
              290737 York House Green Lane West, Garstang, Preston, Lancashire,
              England, PR3 1NJ
            </p>
            <p className="text-xs sm:text-sm text-text-200 mt-4 sm:mt-8 md:mt-11 uppercase">
              Email
            </p>
            <p className="text-sm sm:text-base text-text-100 font-semibold leading-[22px] mt-2">
              contact@netrosystems.com
            </p>
            <p className="text-xs sm:text-sm text-text-200 mt-4 uppercase">
              Phone
            </p>
            <p className="text-sm sm:text-base text-text-100 font-semibold leading-[22px] mt-2">
              +44 7360251473
            </p>
            {/* <a href="#" className="flex items-center gap-2 group mt-6">
              <div className="bg-gradientGreen w-9 h-[1px] rounded-full"></div>
              <span className="text-white text-base font-bold group-hover:translate-x-1 duration-300">
                See map
              </span>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsDetails;
