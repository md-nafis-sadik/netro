import { images } from "@/services";
import Image from "next/image";

function PrivacyPolicy() {
  return (
    <section className="">
      <div className="containerX">
        <div className="pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-10 sm:pb-16 md:pb-20">
          <h1 className="title blackGradient">Privacy & Policy</h1>
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-text-600 uppercase leading-[140%] mt-6 md:mt-5">
            Guide
          </p>
        </div>
      </div>
      <div className="pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-16 md:pb-20 lg:pb-30 border-t border-dashed border-natural-300 ">
        <div className="containerX grid sm:grid-cols-2 gap-10 sm:gap-16 md:gap-20">
          <Image
            src={images.pvc}
            width={572}
            height={605}
            className="w-full max-h-max object-cover sm:sticky sm:top-16"
            alt="privacy policy"
          />
          <div className="flex flex-col gap-10 sm:gap-16 md:gap-20">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Information We Collect
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                We collect the following types of information:
              </p>
              <p className="text-sm sm:text-base md:text-lg text-text-900 font-bold">
                a.Personal Information:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Name, email address, phone number, and other contact details
                  provided when you interact with us.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Billing information for processing payments.
                </li>
              </ul>
              <p className="text-sm sm:text-base md:text-lg text-text-900 font-bold">
                b. Non-Personal Information:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Usage data such as IP address, browser type, and device
                  information to enhance your experience on our website.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Cookies and tracking technologies to monitor website activity
                  and preferences.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                How We Use Your Information
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                We use the collected data to:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Provide and manage our services.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Communicate with you regarding your inquiries, projects, or
                  updates.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Improve our website, products, and services.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Comply with legal obligations and enforce our Terms and
                  Conditions.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Sharing Your Information
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                NetroSystems does not sell, rent, or share your personal
                information with third parties except:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  With service providers who assist in delivering our services
                  (e.g., payment processors, hosting providers).
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  When required by law or to protect our legal rights.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  With your explicit consent for specific purposes.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Data Security
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                We implement robust security measures to protect your
                information from unauthorized access, alteration, or disclosure.
                While we strive to secure your data, no method of transmission
                over the internet is entirely secure.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Your Rights
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                You have the right to:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Access, update, or delete your personal information.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Opt-out of marketing communications.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Request a copy of the data we hold about you.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Withdraw consent for data processing where applicable.
                </li>
              </ul>

              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                To exercise these rights, contact us at
                <br />
                <span className="font-semibold">privacy@netrosystems.com.</span>
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Cookies & Tracking Technologies
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                We use cookies to:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Enhance website functionality.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Analyze website usage.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Tailor content and advertisements to your preferences.
                </li>
              </ul>

              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                You can manage or disable cookies through your browser settings,
                but doing so may affect your website experience.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Third-Party Links
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                Our website may contain links to third-party sites. We are not
                responsible for the privacy practices of these sites. We
                encourage you to review their privacy policies before sharing
                any information.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Children’s Privacy
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                NetroSystems does not knowingly collect personal information
                from individuals under 13. If we become aware of such data, we
                will take immediate steps to delete it.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Changes to This Policy
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with the updated effective date. Continued
                use of our services constitutes acceptance of the updated
                policy.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Contact Us
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                For any questions or concerns regarding these Terms and
                Conditions, <br />
                please contact us at: <br />
                Email: support@netrosystems.com
                <br />
                Phone: +1 789 567 890
                <br />
                Address: 290737 York House Green Lane West, Garstang, Preston,
                Lancashire, England, PR3 1NJ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
