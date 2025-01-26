import PageThumbnail from "@/components/shared/PageThumbnail";
import { images } from "@/services";
import Image from "next/image";

function PrivacyPolicy() {
  return (
    <section className="">
      <PageThumbnail title="Terms & Conditions" description="Guide" />
      <div className="pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-16 md:pb-20 lg:pb-30 border-t border-dashed border-natural-300 ">
        <div className="containerX grid sm:grid-cols-2 gap-10 sm:gap-16 md:gap-20">
          <Image
            src={images.termc}
            width={572}
            height={605}
            className="w-full max-h-max object-cover sm:sticky sm:top-16"
            alt="privacy policy"
          />
          <div className="flex flex-col gap-10 sm:gap-16 md:gap-20">
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Introduction
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                NetroSystems is a design and development agency specializing in
                UX/UI design, software development, and related services. These
                terms outline the rules and regulations for the use of our
                services and website.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Acceptance of Terms
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                By engaging with NetroSystems, you acknowledge that you have
                read, understood, and agreed to be bound by these Terms and
                Conditions. If you do not agree, please refrain from using our
                services.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Services Provided
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                NetroSystems offers services including, but not limited to:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  UX/UI design
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Software development
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  SaaS solutions
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Branding and 3D product animation
                </li>
              </ul>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                Specific terms related to each service will be provided upon
                agreement.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Client Responsibilities
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                To ensure a smooth collaboration, clients are required to:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Provide accurate and complete project information.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Respond to communication promptly.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Review and approve deliverables within agreed timelines.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Comply with payment schedules as stated in the agreement.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Intellectual Property
              </h3>

              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  All materials created by NetroSystems remain our intellectual
                  property until full payment is received.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Upon full payment, the ownership rights of final deliverables
                  are transferred to the client, unless stated otherwise.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  NetroSystems reserves the right to showcase completed projects
                  in our portfolio, unless restricted by a prior agreement.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Payment Terms
              </h3>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Invoices are issued according to the agreed payment schedule.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Late payments may result in project delays or additional
                  charges.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Payments are non-refundable once the project phase is
                  approved.
                </li>
              </ul>
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
                Confidentiality
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                NetroSystems ensures the confidentiality of all client
                information and project details. We will not disclose any
                sensitive information to third parties without prior consent.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Limitation of Liability
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                NetroSystems will not be held responsible for:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Any delays caused by client inaction or third-party
                  dependencies.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Losses or damages arising from the use of deliverables beyond
                  their intended purpose.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  Technical issues resulting from unauthorized modifications to
                  deliverables.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Termination
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                Either party may terminate the agreement by providing written
                notice. In the event of termination:
              </p>
              <ul className="list-disc pl-6">
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  The client is responsible for payment of completed work.
                </li>
                <li className="text-text-700 text-sm sm:text-base md:text-lg">
                  All in-progress work remains the property of NetroSystems
                  until payment is made.
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Updates to Terms
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                NetroSystems reserves the right to update these Terms and
                Conditions at any time. Clients will be notified of any changes,
                and continued use of our services constitutes acceptance of the
                updated terms.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-text-900 font-scoutcond">
                Governing Law
              </h3>
              <p className="text-text-700 text-sm sm:text-base md:text-lg">
                These Terms and Conditions are governed by and construed in
                accordance with the laws of [Your Jurisdiction].
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
