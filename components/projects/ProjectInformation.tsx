function ProjectInformation({
  information,
}: {
  information: {
    clientOrigin: string;
    timeline: string;
    tags: string[];
    description: string;
    title: string;
  };
}) {
  return (
    <section className="pt-10 sm:pt-16 md:pt-20 pb-10 sm:pb-16 md:pb-20 lg:pb-30 font-inter">
      <div className="containerX">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-16 md:gap-20">
          <div className="w-full max-w-[462px]">
            <div className="w-full px-4 sm:px-7 py-6 sm:py-8 md:p-10 border border-dashed border-natural-300 font-inter flex flex-col gap-6 sticky top-10">
              <h2 className="titleMd text-text-900">Project Info</h2>
              <div className="flex flex-col gap-4 border-t border-dashed border-natural-300 pt-6">
                <div>
                  <p className="text-sm text-text-600 uppercase">
                    Client origin
                  </p>
                  <p className="para text-text-900 font-semibold mt-2">
                    {information?.clientOrigin}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-600 uppercase">Timeline</p>
                  <p className="para text-text-900 font-semibold mt-2">
                    {information?.timeline}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-600 uppercase">Tags</p>
                  <ul className="flex flex-col gap-1 mt-2">
                    {information?.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="para text-text-900 font-semibold"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 sm:gap-16 md:gap-20">
            <h4 className="titleMd font-inter normal-case leading-[140%] text-text-900">
              {information?.description}
            </h4>
            <div>
              <h4 className="titleLg text-text-900 whitespace-pre-wrap">
                {information?.title}
              </h4>
              <p className="para md:text-xl lg:text-2xl mt-6">
                Telzen offers a range of features designed for the modern,
                connected youth. With flexible mobile plans tailored to your
                needs, you can easily manage your account, track usage, and pay
                bills. Earn rewards through gamified experiences and access
                exclusive deals for everyday savings. Enjoy 24/7 customer
                support and stay in control of your connectivity with Telzen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectInformation;
