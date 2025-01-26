import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  AtTheRateIcon,
  CallIcon,
  DividerFadingDashes,
} from "@/services/assets/svgs";
import { footerData } from "@/services/data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-10 md:py-20">
      <div className="containerX">
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-7 min-[1120px]:grid-cols-11 gap-10 md:gap-6">
          {/* Inquiries */}
          <div className="col-span-2 md:col-span-3 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scout-cond"
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
              <p className="footer_el_text">{footerData.inquiries.phone}</p>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-2">
              <div className="h-8 w-8 rounded-full bg-natural-100 flex_center">
                <AtTheRateIcon className="h-[14px] w-[14px] !shrink-0" />
              </div>
              <p className="footer_el_text">{footerData.inquiries.email}</p>
            </div>
          </div>

          {/* Company Info */}
          <div className="col-span-2 flex items-center sm:items-start flex-col">
            <p
              className={cn(
                "footer_el_title text-center sm:text-start font-scout-cond"
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
                      "footer_el_text block mb-2 text-center sm:text-start font-inter"
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
                "footer_el_title text-center sm:text-start font-scout-cond"
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
                      "footer_el_text block mb-2 text-center sm:text-start font-inter"
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
                "footer_el_title text-center sm:text-start font-scout-cond"
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
                      "footer_el_text block mb-2 text-center sm:text-start font-inter"
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
                "footer_el_title text-center sm:text-start font-scout-cond"
              )}
            >
              {footerData.resources.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.resources.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(
                      "footer_el_text block mb-2 text-center sm:text-start font-inter"
                    )}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
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
            <Link
              className="bg-natural-100 flex_center h-10 w-10 md:h-12 md:w-12 rounded-full hover:bg-natural-300 transition_common"
              href={href}
              key={index}
            >
              {icon}
            </Link>
          ))}
        </div>

        <p className="text-sm font-normal !leading-[1.7] text-text-600 text-center mt-10 md:mt-[60px]">
          Netro Systems is a leading software design and development company
          dedicated to transforming ideas into innovative digital solutions.
          Specializing in **UI/UX design**, **web development**, **mobile
          applications**, and **SaaS solutions**, we combine creativity with
          cutting-edge technology to deliver exceptional user experiences and
          high-performing products. At Netro, we partner with startups,
          enterprises, and businesses of all sizes to build custom software that
          drives growth, efficiency, and digital transformation. Our approach is
          rooted in collaboration, ensuring that every project aligns with the
          client&appos;s vision, goals, and audience needs. <br />
          <br /> With a team of skilled designers, developers, and strategists,
          Netro Systems has successfully delivered solutions across industries
          such as **e-commerce**, **healthcare**, **finance**, and
          **technology**. We pride ourselves on our agile methodologies,
          user-centered design principles, and a commitment to excellence. From
          crafting minimum viable products (MVPs) for startups to developing
          enterprise-level software, Netro Systems ensures scalability,
          security, and performance. Our mission is to empower businesses to
          thrive in a rapidly evolving digital landscape. By prioritizing
          **innovation**, **quality**, and **client satisfaction**, we aim to be
          the dynamic force driving your success. Let Netro Systems be your
          partner in building the future—one solution at A time. **Your vision,
          our innovation.**
        </p>
      </div>
    </footer>
  );
};

export default Footer;
