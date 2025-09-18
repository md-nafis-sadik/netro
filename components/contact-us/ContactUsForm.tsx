"use client";
import {
  ArrowLongTailIcon,
  ErrorSvg,
  MailIcon,
  SpinningIcon,
  SuccessSvg,
  WhatsappOutlinedIcon,
} from "@/services/assets/svgs";
import { Button } from "../ui/button";
import BudgetTags from "./BudgetTags";
import ContactItem from "./ContactItem";
import { Fragment, useState } from "react";
import { baseUrl, contactData } from "@/services/data/shared.data";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";

function ContactUsForm({ query = "" }: { query: string | undefined }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLInputElement)
      ?.value;
    const formData = new FormData();
    const data = {
      email,
      message,
    };
    formData.append("data", JSON.stringify(data));
    if (query) {
      formData.append("budget", query);
    }
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);

    fetch(`${baseUrl}/leads/create`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res?.ok) {
          setIsError(false);
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(false);
          }, 1000);

          toast.success("Thank You!", {
            description: "We'll contact you shortly.",
            action: {
              label: "Got it",
              onClick: () => {},
              actionButtonStyle: {
                fontSize: "1rem",
                fontWeight: 600,
              },
            },
            icon: <SuccessSvg />,
            position: "top-right",
          });
        } else {
          setIsError(true);
          setTimeout(() => {
            setIsError(false);
          }, 3000);
        }
      })
      .finally(() => {
        (event.target as HTMLFormElement).reset();
        setIsLoading(false);
      });
  };

  return (
    <div className="pt-10 sm:pt-16 md:pt-20 pb-8 sm:pb-16 md:pb-20 lg:pb-30">
      <div className="containerX">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between">
          <div className="lg:col-span-6">
            <h1 className="title blackGradient">Get in touch</h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-text-600 uppercase leading-[140%] mt-6 md:mt-5">
              Contact with us
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10">
              <ContactItem
                icon={
                  <WhatsappOutlinedIcon
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    color="#000000"
                  />
                }
                title="Whatsapp Link"
                linkText={contactData.netroWhatsappLink}
                link={contactData.netroWhatsappLink}
              />
              {/* <ContactItem
                icon={
                  <TelegramOutlinedIcon
                    className="w-6 h-6 sm:w-8 sm:h-8"
                    color="#000000"
                  />
                }
                title="Telegram Link"
                linkText="https://t.me/netrosystems"
                link="https://t.me/netrosystems"
              /> */}
              <ContactItem
                icon={<MailIcon className="w-6 h-6 sm:w-8 sm:h-8" />}
                title="Email Us"
                linkText={contactData.netroContactMail}
                link={`mailto:${contactData.netroContactMail}`}
                isBordered={false}
              />
            </div>
          </div>
          <div className="w-full lg:col-span-5 lg:col-start-8">
            <form
              action="#"
              className="w-full px-4 sm:px-7 md:px-10 py-6 sm:py-8 md:py-10 border border-dashed border-natural-300 flex flex-col gap-6 sm:gap-8 md:gap-10"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="username"
                className="input"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Your Email"
              />
              <textarea
                name="queries"
                className="input h-30"
                placeholder="Tell Us About Your Quires"
              />
              <div className="">
                <p className="text-base text-text-700 leading-[120%] font-medium">
                  Project Budget
                </p>
                <BudgetTags query={query} />
              </div>
              <Button
                className="w-fit group min-w-[195px]"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Fragment>
                    <span className="!leading-none">Sending...</span>
                    <SpinningIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </Fragment>
                ) : (
                  <Fragment>
                    <span className="!leading-none">Send Message</span>
                    <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
                  </Fragment>
                )}
              </Button>
            </form>
            {isError ? (
              <p className={`text-status-error flex items-center p-2 gap-2`}>
                <ErrorSvg />
                <span>An error occurred. Please try again.</span>
              </p>
            ) : (
              <p
                className={`text-black flex items-center p-2 gap-2 opacity-0 select-none pointer-events-none`}
              >
                <SuccessSvg />
                <span>All Ok</span>
              </p>
            )}
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default ContactUsForm;
