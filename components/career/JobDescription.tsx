import { ArrowLongTailIcon } from "@/services/assets/svgs";
import { Button } from "../ui/button";

function JobDescription() {
  const data = [
    {
      _id: "1",
      title: "Key Responsibilities",
      lists: [
        "Assist in the design, development, and maintenance of web and mobile applications.",
        "Collaborate with teams to implement new features, troubleshoot bugs, and enhance system performance.",
        "Work closely with senior engineers to improve coding standards, documentation, and testing.",
        "Contribute to software architecture discussions and improvements.",
        "Participate in code reviews and provide feedback to ensure quality and best practices.",
      ],
    },
    {
      _id: "2",
      title: "Requirements",
      lists: [
        "Bachelor’s degree in Computer Science, Information Technology, or a related field.",
        "1-2 years of experience in software development or relevant internships.",
        "Strong understanding of programming languages such as JavaScript, Python, or Java.",
        "Basic knowledge of front-end and back-end development.",
        "Familiarity with version control systems (Git).",
        "Strong problem-solving and analytical skills.",
        "Excellent communication skills and ability to work collaboratively.",
      ],
    },
    {
      _id: "3",
      title: "Skills",
      lists: [
        "Programming Languages: JavaScript, Python, or Java",
        "Web Technologies: HTML/CSS, React, Angular, or similar frameworks.",
        "Databases: SQL, NoSQL, or cloud-based databases.",
        "Version Control: Git/GitHub",
        "Agile Development Practices.",
        "Troubleshooting and debugging skills.",
      ],
    },
    {
      _id: "4",
      title: "Why You Might Not Be a Fit",
      lists: [
        "Lack of foundational knowledge in key programming languages or frameworks.",
        "Limited experience with software development tools like Git or version control.",
        "Not comfortable working in a collaborative, team-oriented environment.",
        "Unwillingness to learn and grow in a fast-paced tech environment.",
        "Inability to adapt to Agile methodologies or continuous improvement practices.",
      ],
    },
    {
      _id: "5",
      title: "Benefits",
      lists: [
        "Competitive salary and performance-based bonuses.",
        "Flexible working hours and remote options.",
        "Opportunities for professional development through training and certifications.",
        "A supportive and inclusive work environment.",
        "Access to cutting-edge tools and technologies.",
        "Health, dental, and vision benefits.",
      ],
    },
  ];
  return (
    <section className="pb-10 sm:pb-16 md:pb-20 lg:pb-30 font-inter">
      <div className="containerX">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-16 md:gap-20">
          <div className="w-full max-w-[462px] ">
            <div className="w-full px-4 sm:px-7 py-6 sm:py-8 md:p-10 border border-dashed border-natural-300 font-inter flex flex-col gap-6 sticky top-10">
              <div>
                <h2 className="titleMd text-text-900">Jr. Software EngineeR</h2>
                <p className="para mt-3">
                  We’re looking for passionate Junior Software Engineers ready
                  to make an impact.
                </p>
              </div>
              <div className="flex flex-col gap-4 border-t border-dashed border-natural-300 pt-6">
                <div>
                  <p className="text-sm text-text-600 uppercase">Location</p>
                  <p className="para text-text-900 font-semibold mt-2">
                    Rajshahi, Bangladesh
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-600 uppercase">Type</p>
                  <p className="para text-text-900 font-semibold mt-2">
                    Full Time
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-600 uppercase">Salary</p>
                  <p className="para text-text-900 font-semibold mt-2">
                    20K-25K BDT
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-600 uppercase">
                    Application Deadline
                  </p>
                  <p className="para text-text-900 font-semibold mt-2">
                    30 Dec, 2024
                  </p>
                </div>
              </div>

              <Button className="group max-w-max">
                <span className="!leading-none">Apply now</span>
                <ArrowLongTailIcon className="h-auto w-5 md:w-6 group-hover:translate-x-2 transition_common" />
              </Button>
              <p className="para text-xs">
                Please, read the job description clearly before apply.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 sm:gap-16 md:gap-20">
            {data?.map((item) => (
              <div key={item._id}>
                <h2 className="titleMd text-text-900">{item?.title}</h2>
                <ul className="mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4">
                  {item?.lists?.map((txt, listIdx) => (
                    <li
                      className="flex items-start gap-6 sm:gap-8 md:gap-10"
                      key={listIdx}
                    >
                      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-text-200">
                        {listIdx + 1}
                      </span>
                      <p className="text-sm sm:text-base md:text-lg text-text-700 pb-4 border-b border-dashed border-natural-300">
                        {txt}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobDescription;
