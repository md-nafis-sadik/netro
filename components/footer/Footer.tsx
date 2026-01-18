import { cn } from "@/lib/utils";
import {
  AtTheRateIcon,
  CallIcon,
  DividerFadingDashes,
} from "@/services/assets/svgs";
import { footerData } from "@/services/data/shared.data";
import Link from "next/link";
import GoTopButton from "../navigation/GoTopButton";
import { images } from "@/services";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-darkbg py-10 md:py-20 relative overflow-hidden" data-bg-theme="light">
      <div className="containerX relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 min-[1120px]:grid-cols-11 gap-10 md:gap-6">
          {/* Inquiries */}
          <div className="col-span-2 md:col-span-3 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.inquiries.title}
            </p>
            <p
              className={cn(
                "footer_el_text mt-4 md:mt-8 text-center sm:text-start font-inter"
              )}
            >
              {footerData.inquiries.address}
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-6">
              <div className="h-8 w-8 rounded-full bg-natural-100 flex_center">
                <CallIcon className="h-[14px] w-[14px] !shrink-0" />
              </div>
              <a
                href={`tel:${footerData.inquiries.phone}`}
                className="footer_el_text hover:underline"
              >
                {footerData.inquiries.phone}
              </a>
            </div>
            <div className="flex items-center gap-6 mt-4">
              <div className="h-8 w-8 rounded-full bg-natural-100 flex_center">
                <AtTheRateIcon className="h-[14px] w-[14px] !shrink-0" />
              </div>
              <a
                href={`mailto:${footerData.inquiries.email}`}
                className="footer_el_text hover:underline"
              >
                {footerData.inquiries.email}
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div className="col-span-2 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.companyInfo.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.companyInfo.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "footer_el_text block mb-4 text-center sm:text-start font-inter hover:text-main-300 transition_common"
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-2 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.services.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "footer_el_text block mb-4 text-center sm:text-start font-inter hover:text-main-300 transition_common"
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-2 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.support.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.support.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "footer_el_text block mb-4 text-center sm:text-start font-inter hover:text-main-300 transition_common"
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-2 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scoutcond"
              )}
            >
              {footerData.resources.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.resources.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "footer_el_text block mb-4 text-center sm:text-start font-inter hover:text-main-300 transition_common"
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>

            <GoTopButton className="mt-4 md:mt-10 pe-6" />
          </div>
        </div>

        {/* DIVIDER */}
        <DividerFadingDashes className="w-full my-10 md:my-[60px]" />

        {/* Copyright */}
        <p className={cn("footer_el_text text-center font-inter")}>
          {footerData.copyright}
        </p>

        <div className="flex flex-row items-center justify-center flex-wrap gap-[10px] md:gap-3 mt-12">
          {footerData.socialLinks.map(({ href, icon }, index) => (
            <a
              className="bg-natural-100 flex_center h-10 w-10 md:h-12 md:w-12 rounded-full hover:bg-black transition_common group"
              href={href}
              key={index}
              target="_blank"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <Image src={images.footerBgPattern} alt="Footer Background Pattern" className="absolute inset-0 z-10 w-[1448px] h-[1086px] object-contain opacity-100 left-[10%] pointer-events-none bottom-0" />
      <div className="absolute top-[60%] z-0 w-[1710px] h-[1001px] rounded-full bg-[#6766FF] blur-[218px]"></div>
    </footer>
  );
};

export default Footer;