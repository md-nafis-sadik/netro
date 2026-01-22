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
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { images } from "@/services";

function ContactUsFormV2() {
  const searchParams = useSearchParams();
  const query = "";
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
    <div className="relative">
      <div
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          backgroundImage: "url('/images/contact-bg.webp')",
          backgroundSize: "152.318% 152.318%",
          backgroundPosition: "-49.593px -197.87px",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
          transform: "scaleX(-1)",
        }}
      />

      <Image
        src={images.contactImage}
        alt="Contact Image"
        width={360}
        height={474}
        className="block md:hidden w-full h-auto aspect-[360/474]"
      />

      <div className="containerX bg-[#060023] md:bg-transparent pb-10 md:pb-16 lg:pb-20 pt-10 md:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 justify-between -mt-4 md:mt-0">
          <div className="lg:col-span-6"></div>
          <div className="w-full lg:col-span-5 lg:col-start-8">
            <h1 className="title-v2 text-white">Contact Us</h1>
            <p className="text-sm sm:text-base md:text-base lg:text-lg text-white leading-[140%]">
              Tell us your concern and queries
            </p>
            <form
              action="#"
              className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6 mt-4 md:mt-6 lg:mt-8 xl:mt-10"
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
                defaultValue={searchParams.get("email") || ""}
              />
              <textarea
                name="message"
                className="input h-30"
                placeholder="Tell Us About Your Quires"
              />
              <div className="">
                <p className="text-base text-white leading-[120%] font-medium">
                  Project Budget
                </p>
                <BudgetTags query={query} />
              </div>
              <Button
                className="w-full md:w-fit group min-w-[195px] mt-6"
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
                className={`text-white flex items-center p-2 gap-2 opacity-0 select-none pointer-events-none`}
              >
                {/* <SuccessSvg />
                <span>All Ok</span> */}
              </p>
            )}
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default ContactUsFormV2;
