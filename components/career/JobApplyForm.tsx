"use client";
import { ErrorSvg, SpinningIcon, SuccessSvg } from "@/services/assets/svgs";
import { ChevronRight } from "lucide-react";
import { GradientButton } from "../ui/gradient-button";
import { Fragment, useState } from "react";
import { baseUrl } from "@/services/data/shared.data";
import CVUploader from "../ui/CVUploader";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";

function JobApplyForm({ jobId }: { jobId: string }) {
  const [cv, setCv] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const location = (form.elements.namedItem("location") as HTMLInputElement)
      ?.value;
    const number = (form.elements.namedItem("number") as HTMLInputElement)
      ?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const experience = (
      form.elements.namedItem("experience") as HTMLInputElement
    )?.value;
    const previousCompany = (
      form.elements.namedItem("previousCompany") as HTMLInputElement
    )?.value;
    const salaryExpectation = (
      form.elements.namedItem("salaryExpectation") as HTMLInputElement
    )?.value;
    const liveUrl = (form.elements.namedItem("liveUrl") as HTMLInputElement)
      ?.value;

    const formData = new FormData();

    if (
      !name ||
      !location ||
      !number ||
      !email ||
      !experience ||
      !previousCompany ||
      !salaryExpectation ||
      !liveUrl
    ) {
      toast.error("Please fill all the fields", {
        description: "All fields are required.",
        icon: <ErrorSvg />,
        position: "top-right",
      });
      return;
    }

    if (!cv) {
      toast.error("CV is required!", {
        description: "Please upload your CV.",
        icon: <ErrorSvg />,
        position: "top-right",
      });
      return;
    }

    const data = {
      job: jobId,
      name,
      email,
      number,
      location,
      experience,
      previousCompany,
      salaryExpectation,
      liveUrl,
    };

    formData.append("single", cv);
    formData.append("data", JSON.stringify(data));
    setIsLoading(true);

    fetch(`${baseUrl}/resumes/create`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res?.ok) {
          (event.target as HTMLFormElement).reset();
          setCv(null);

          toast.success("Thank You for your application!", {
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
          setIsLoading(false);

          toast.error("An error occurred!", {
            description: "Application failed! Please try again later.",
            icon: <ErrorSvg />,
            position: "top-right",
          });
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section className="py-10 sm:py-16 md:py-20 bg-black" id={"applyForm"}>
      <div className="containerX">
        <h2 className="titleMd text-white">Application form</h2>
        <form
          action="#"
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-10 sm:gap-16 md:gap-20 items-center mt-6 sm:mt-10 md:mt-16 lg:mt-20"
        >
          <div className="grid sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-4 sm:gap-x-6 md:gap-x-10 w-full truncate">
            {/* FULL NAME */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-neutral-300">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                className="inputDark"
                placeholder="Full Name"
                required
              />
            </div>

            {/* LOCATION */}
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-neutral-300">
                Address
              </label>
              <input
                type="text"
                name="location"
                className="inputDark"
                placeholder="Address"
                required
              />
            </div>

            {/* MOBILE NUMBER */}
            <div className="flex flex-col gap-2">
              <label htmlFor="number" className="text-neutral-300">
                Mobile Number
              </label>
              <input
                type="number"
                name="number"
                className="inputDark"
                placeholder="Mobile Number"
                required
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-neutral-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="inputDark"
                placeholder="Email Address, eg: user@website.com"
                required
              />
            </div>

            {/* EXPERIENCE */}
            <div className="flex flex-col gap-2">
              <label htmlFor="experience" className="text-neutral-300">
                Experience
              </label>
              <input
                type="text"
                name="experience"
                className="inputDark"
                placeholder="Year's of experience"
                required
              />
            </div>

            {/* PREVIOUS COMPANY */}
            <div className="flex flex-col gap-2">
              <label htmlFor="previousCompany" className="text-neutral-300">
                Previous Company
              </label>
              <input
                type="text"
                name="previousCompany"
                className="inputDark"
                placeholder="Previous Company"
                required
              />
            </div>

            {/* SALARY EXPECTATION */}
            <div className="flex flex-col gap-2">
              <label htmlFor="salaryExpectation" className="text-neutral-300">
                Salary Expectation
              </label>
              <input
                type="text"
                name="salaryExpectation"
                className="inputDark"
                placeholder="Expected Monthly Salary"
                required
              />
            </div>

            {/* PORTFOLIO */}
            <div className="flex flex-col gap-2">
              <label htmlFor="liveUrl" className="text-neutral-300">
                Portfolio
              </label>
              <input
                type="text"
                name="liveUrl"
                className="inputDark"
                placeholder="Add Portfolio URL (Dribbble, Behance, Github, Drive)"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-neutral-300">Upload CV</label>
              <CVUploader setter={setCv} />
            </div>
          </div>
          <GradientButton type="submit" className="!px-8">
            {isLoading ? (
              <Fragment>
                <span className="!leading-none">Applying...</span>
                <SpinningIcon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </Fragment>
            ) : (
              <Fragment>
                <span className="!leading-none">Apply</span>
                <ChevronRight className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
              </Fragment>
            )}
          </GradientButton>
        </form>
      </div>

      <Toaster />
    </section>
  );
}

export default JobApplyForm;
