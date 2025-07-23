import ContactUsDetails from "@/components/contact-us/ContactUsDetails";
import ContactUsForm from "@/components/contact-us/ContactUsForm";

async function ContactUs({
  searchParams,
}: {
  searchParams: Promise<{ budget?: string }>;
}) {
  const query = (await searchParams)?.budget;
  return (
    <section className="mt-20 md:mt-16">
      <ContactUsForm query={query} />
      <ContactUsDetails />
    </section>
  );
}

export default ContactUs;
