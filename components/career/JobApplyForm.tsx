import { FileIcon } from "@/services/assets/svgs";
import { ChevronRight } from "lucide-react";
import { GradientButton } from "../ui/gradient-button";

function JobApplyForm() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-black">
      <div className="containerX">
        <h2 className="titleMd text-white">Application form</h2>
        <form
          action="#"
          className="flex flex-col gap-10 sm:gap-16 md:gap-20 items-center mt-6 sm:mt-10 md:mt-16 lg:mt-20"
        >
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-10  w-full truncate">
            <input type="text" className="inputDark" placeholder="Full Name" />
            <input type="text" className="inputDark" placeholder="Adress" />
            <input
              type="number"
              className="inputDark"
              placeholder="Eg: 01XXX-XXXXXX"
            />
            <input
              type="email"
              className="inputDark"
              placeholder="Email Address, eg: user@website.com"
            />
            <input
              type="text"
              className="inputDark"
              placeholder="Year's of experience"
            />
            <input
              type="text"
              className="inputDark"
              placeholder="Previous Company"
            />
            <input
              type="text"
              className="inputDark"
              placeholder="Current Monthly Salary"
            />
            <input
              type="text"
              className="inputDark"
              placeholder="Expected Monthly Salary"
            />
            <input
              type="text"
              className="inputDark"
              placeholder="Add Portfolio URL (Dribbble, Behance, Github, Drive)"
            />
            <label
              className="inputDark border-dashed flex items-center justify-between gap-2 overflow-hidden truncate"
              htmlFor="file"
            >
              <input type="file" name="file" id="file" hidden />
              <p className="w-full text-text-700 truncate">
                Upload Resume Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Quis suscipit eius quasi odit odio iusto nulla
                vel minus laborum esse?
              </p>
              <FileIcon className="min-w-6 min-h-6" />
            </label>
          </div>
          <GradientButton className="!px-8">
            <span className="text-white">Submit</span>
            <ChevronRight size={24} />
          </GradientButton>
        </form>
      </div>
    </section>
  );
}

export default JobApplyForm;
