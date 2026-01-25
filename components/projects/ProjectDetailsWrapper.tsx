import { getPortfolioById } from "@/services/data/portfolio.data";
import ProjectDetails from "./ProjectDetails";
import ProjectsDetailsPreview from "./ProjectsDetailsPreview";
import { notFound } from "next/navigation";
import ProjectDescription from "./ProjectDescription";
import ProjectSolution from "./ProjectSolution";
import ProjectBranding from "./ProjectBranding";
import CustomCardGrid from "../shared/CustomCardGrid";
import { images } from "@/services";
import { countries } from "@/services/data/countries";

const ProjectDetailsWrapper = async ({ id: portfolioId }: { id: string }) => {
  const portfolioData = getPortfolioById(portfolioId);

  if (!portfolioData) {
    notFound();
  }

  const portfolioDetails = {
    data: portfolioData,
  };

  return (
    <>
      <ProjectDetails project={portfolioDetails} />
      <ProjectDescription project={portfolioDetails} />
      <ProjectSolution project={portfolioDetails} />
      <ProjectBranding project={portfolioDetails} />
      <CustomCardGrid
        card1={{
          value: 200,
          suffix: "%",
          duration: 5,
          title: "Customer Growth Rate",
          description:
            "After implementation of the new platform Simigo witnesses a massive user growth for integrated architecture and seamless experience.",
          backgroundImage: images.about3,
        }}
        card2={{
          title: "Less Support Emails",
          description:
            "From deployment to production we have witness a 30% drop is support email about system failure.",
          avatars: [
            { src: images.support1.src, alt: "postman icon", fallback: "PM" },
            {
              src: images.support2.src,
              alt: "integration icon",
              fallback: "SE",
            },
            { src: images.support3.src, alt: "Jira icon", fallback: "JS" },
          ],
        }}
        card3={{
          title: "User Growth in Countries",
          description:
            "Users from Europe to US, Asia to Africa are experiencing Simigo.",
          countries: countries,
        }}
        card4={{
          value: 99,
          suffix: "%",
          duration: 5,
          title: "Client Satisfaction",
          description:
            "Rated 4.85 over all the platforms. Over the time we have ensured exactly what your business aims for.",
          backgroundImage: images.about4,
        }}
        card5={{
          value: 3,
          suffix: "X",
          duration: 5,
          title: "Raised Funding",
          description:
            "Because of the stable software and technological standpoint Simigo gets 3x more funding than expected.",
          backgroundImage: images.about5,
        }}

        className="p-12 md:p-24 lg:p-32"
      />
    </>
  );
};

export default ProjectDetailsWrapper;
