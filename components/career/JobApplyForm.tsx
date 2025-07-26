"use client";
import { ErrorSvg, FileIcon } from "@/services/assets/svgs";
import { ChevronRight } from "lucide-react";
import { GradientButton } from "../ui/gradient-button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { baseUrl } from "@/services/data/shared.data";
import CVUploader from "../ui/CVUploader";
import { Toaster } from "../ui/sonner";
import { toast } from "sonner";

function JobApplyForm({ jobId }: { jobId: string }) {
  const router = useRouter();
  const [cv, setCv] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<{ message: string }>({ message: "" });

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement)
      ?.value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement)
      ?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const number = (form.elements.namedItem("number") as HTMLInputElement)
      ?.value;
    const salaryExpectation = (
      form.elements.namedItem("salaryExpectation") as HTMLInputElement
    )?.value;
    const experience = (
      form.elements.namedItem("experience") as HTMLInputElement
    )?.value;
    const previousCompany = (
      form.elements.namedItem("previousCompany") as HTMLInputElement
    )?.value;
    const location = (form.elements.namedItem("location") as HTMLInputElement)
      ?.value;
    const liveUrl = (form.elements.namedItem("liveUrl") as HTMLInputElement)
      ?.value;

    const formData = new FormData();

    if (!firstName || !lastName || !email || !number || !location || !liveUrl) {
      setError({ message: "Please fill all the fields" });
      return;
    }

    if (!cv) {
      setError({ message: "Please upload your CV" });
      toast.error("CV is required!", {
        description: "Please upload your CV.",
        action: {
          label: "Got it",
          onClick: () => {},
          actionButtonStyle: {
            visibility: "hidden",
          },
        },
        icon: <ErrorSvg />,
        position: "top-right",
      });
      return;
    }

    const data = {
      job: jobId,
      name: `${firstName} ${lastName}`,
      email,
      number,
      location,
      salaryExpectation,
      experience,
      previousCompany,
      liveUrl,
    };

    formData.append("single", cv);
    formData.append("data", JSON.stringify(data));
    setIsLoading(true);
    setError({ message: "" });
    setIsSuccess(false);

    fetch(`${baseUrl}/resumes/create`, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res?.ok) {
          (event.target as HTMLFormElement).reset();

          toast("Thank You!", {
            description: "We'll contact you shortly.",
            action: {
              label: "Got it",
              onClick: () => {},
              actionButtonStyle: {
                fontSize: "1rem",
                fontWeight: 600,
                backgroundColor: "#6455FF", // Replace with your main-500 color
                color: "#fff",
              },
            },
            position: "top-right",
          });
        } else {
          setIsLoading(false);
          setIsSuccess(false);
          setError({ message: "An error occurred. Please try again.." });
          setTimeout(() => {
            setError({ message: "" });
          }, 2000);
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
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10  w-full truncate">
            <input
              type="text"
              name="firstName"
              className="inputDark"
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              name="lastName"
              className="inputDark"
              placeholder="Address"
              required
            />
            <input
              type="number"
              name="email"
              className="inputDark"
              placeholder="Mobile Number"
              required
            />
            <input
              type="email"
              name="number"
              className="inputDark"
              placeholder="Email Address, eg: user@website.com"
              required
            />
            <input
              type="text"
              name="salaryExpectation"
              className="inputDark"
              placeholder="Year's of experience"
              required
            />
            <input
              type="text"
              name="experience"
              className="inputDark"
              placeholder="Previous Company"
              required
            />
            <input
              type="text"
              name="previousCompany"
              className="inputDark"
              placeholder="Current Monthly Salary"
              required
            />
            <input
              type="text"
              name="location"
              className="inputDark"
              placeholder="Expected Monthly Salary"
              required
            />
            <input
              type="text"
              name="liveUrl"
              className="inputDark"
              placeholder="Add Portfolio URL (Dribbble, Behance, Github, Drive)"
              required
            />

            <CVUploader setter={setCv} />
          </div>
          <GradientButton type="submit" className="!px-8">
            <span className="text-white">Submit</span>
            <ChevronRight size={24} />
          </GradientButton>
        </form>
      </div>

      <Toaster />
    </section>
  );
}

export default JobApplyForm;
