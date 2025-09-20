import { ArrowLongTailIcon } from "@/services/assets/svgs";
import { Button } from "../ui/button";
import { getReadableDate, toTwoDigits } from "@/services";
import Link from "next/link";

function JobDescription({ job }: any) {
  return (
    <section className="pb-10 sm:pb-16 md:pb-20 lg:pb-30 font-inter">
      <div className="containerX">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-16 md:gap-20">
          {/* LEFT PORTION */}
          <div className="w-full max-w-[462px]">
            <div className="w-full px-4 sm:px-7 py-6 sm:py-8 md:p-10 border border-dashed border-natural-300 font-inter flex flex-col gap-6 sticky top-20">
              <div>
                <h2 className="titleMd text-text-900"> {job?.data?.title}</h2>
                <p className="para mt-3">
                  We&apos;re looking for passionate {job?.data?.title} ready to
                  make an impact.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-t border-dashed border-natural-300 pt-6">
                <div>
                  <p className="text-sm text-text-600 uppercase">Location</p>
                  <p className="para text-text-900 font-semibold mt-2">
                    Level 6B, Hi-Tech Park Rajshahi
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-600 uppercase">Type</p>
                  <p className="para text-text-900 font-semibold mt-2">
                    Full Time
                  </p>
                </div>
                {/* <div>
                  <p className="text-sm text-text-600 uppercase">Salary</p>
                  <p className="para text-text-900 font-semibold mt-2">
                    20K-25K BDT
                  </p>
                </div> */}
                <div>
                  <p className="text-sm text-text-600 uppercase">
                    Application Deadline
                  </p>
                  <p className="para text-text-900 font-semibold mt-2">
                    {getReadableDate(job?.data?.deadline)}
                  </p>
                </div>
              </div>

              <Link href={"#applyForm"} className="w-fit">
                <Button className="group max-w-max">
                  <span className="!leading-none">Apply now</span>
                  <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
                </Button>
              </Link>
              <p className="para text-xs">
                Please, read the job description clearly before applying.
              </p>
            </div>
          </div>

          {/* RIGHT PORTION */}
          <div className="flex flex-col gap-10 sm:gap-16 md:gap-20">
            {/* DESCRIPTION */}
            <div>
              <h2 className="titleMd text-text-900">Description</h2>
              <div
                className="mt-6 sm:mt-8 md:mt-10"
                dangerouslySetInnerHTML={{ __html: job?.data?.details }}
              />
            </div>

            {/* MINIMUM */}
            <div>
              <h2 className="titleMd text-text-900">Minimum Qualification</h2>
              <ul className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4">
                {job?.data?.minimum?.map((txt: string, listIdx: number) => (
                  <li
                    className="flex items-start gap-6 sm:gap-8 md:gap-10"
                    key={listIdx}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-text-200">
                      {toTwoDigits(listIdx + 1)}
                    </span>
                    <p className="text-sm sm:text-base md:text-lg text-text-700 pb-4 border-b border-dashed border-natural-300">
                      {txt}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* PREFERRED */}
            <div>
              <h2 className="titleMd text-text-900">Preferred Qualification</h2>
              <ul className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4">
                {job?.data?.preferred?.map((txt: string, listIdx: number) => (
                  <li
                    className="flex items-start gap-6 sm:gap-8 md:gap-10"
                    key={listIdx}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-text-200">
                      {toTwoDigits(listIdx + 1)}
                    </span>
                    <p className="text-sm sm:text-base md:text-lg text-text-700 pb-4 border-b border-dashed border-natural-300">
                      {txt}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* BENEFITS */}
            <div>
              <h2 className="titleMd text-text-900">Company Benifits</h2>
              <ul className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4">
                {job?.data?.benefits?.map((txt: string, listIdx: number) => (
                  <li
                    className="flex items-start gap-6 sm:gap-8 md:gap-10"
                    key={listIdx}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-text-200">
                      {toTwoDigits(listIdx + 1)}
                    </span>
                    <p className="text-sm sm:text-base md:text-lg text-text-700 pb-4 border-b border-dashed border-natural-300">
                      {txt}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDescription;
