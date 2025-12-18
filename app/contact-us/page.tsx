import ContactUsDetails from "@/components/contact-us/ContactUsDetails";
import ContactUsForm from "@/components/contact-us/ContactUsForm";
import { Metadata } from "next";

const OG_IMAGE_URL = "https://netrosystems.com/images/og-image.jpg";

export const metadata: Metadata = {
  title: "Contact Netro | Get in Touch with Our Team",
  description: "Have questions or need support? Contact Netro’s team for project inquiries, service assistance, or sales discussions. We’re here to help you anytime.",
  keywords: "Netro contact, contact Netro, Netro support, Netro sales inquiry, Netro services, contact form, get in touch, business communication, request assistance",

  openGraph: {
    title: "Contact Netro | Get in Touch with Our Team",
    description: "Have questions or need support? Contact Netro’s team for project inquiries, service assistance, or sales discussions. We’re here to help you anytime.",
    url: "https://netrosystems.com/contact-us",
    siteName: "Netro Systems",
    images: [{ url: OG_IMAGE_URL, width: 1200, height: 630, alt: "Contact Netro Systems" }],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Netro | Get in Touch with Our Team",
    description: "Have questions or need support? Contact Netro’s team for project inquiries, service assistance, or sales discussions. We’re here to help you anytime.",
    images: [OG_IMAGE_URL],
    creator: "@netrosystems",
  },
};


async function ContactUs({
  searchParams,
}: {
  searchParams: Promise<{ budget?: string }>;
}) {
  const query = (await searchParams)?.budget;
  return (
    <section className="mt-[60px]">
      <ContactUsForm query={query} />
      <ContactUsDetails />
    </section>
  );
}

export default ContactUs;
