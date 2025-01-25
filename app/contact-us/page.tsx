import ContactUsDetails from "@/components/contact-us/ContactUsDetails";
import ContactUsForm from "@/components/contact-us/ContactUsForm";

async function ContactUs({
  searchParams,
}: {
  searchParams: Promise<{ budget?: string }>;
}) {
  const query = (await searchParams)?.budget;
  return (
    <section>
      <ContactUsForm query={query} />
      <ContactUsDetails />
    </section>
  );
}

export default ContactUs;
