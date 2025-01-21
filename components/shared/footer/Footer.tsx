import { footerData } from "@/lib/data";
import { inter, scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { DividerFadingDashes } from "@/services/assets/svgs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-10 md:py-20">
      <div className="containerX">
        <div className="grid grid-cols-11 gap-10 md:gap-6">
          <div className="col-span-3">
            <p className={cn(scoutCond.className, "footer_el_title")}>
              {footerData.inquiries.title}
            </p>
            <p className={cn(inter.className, "footer_el_text mt-4 md:mt-8")}>
              {footerData.inquiries.address}
            </p>
          </div>

          {/* Company Info */}
          <div className="col-span-2">
            <p className={cn(scoutCond.className, "footer_el_title")}>
              {footerData.companyInfo.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.companyInfo.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(inter.className, "footer_el_text block mb-2")}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-2">
            <p className={cn(scoutCond.className, "footer_el_title")}>
              {footerData.services.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(inter.className, "footer_el_text block mb-2")}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-2">
            <p className={cn(scoutCond.className, "footer_el_title")}>
              {footerData.support.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.support.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(inter.className, "footer_el_text block mb-2")}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-2">
            <p className={cn(scoutCond.className, "footer_el_title")}>
              {footerData.resources.title}
            </p>
            <ul className="mt-4 md:mt-10">
              {footerData.resources.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={cn(inter.className, "footer_el_text block mb-2")}
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
        <p className={cn(inter.className, "footer_el_text text-center")}>
          {footerData.copyright}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
