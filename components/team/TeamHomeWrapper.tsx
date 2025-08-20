import { fetchWithDelay } from "@/lib/apiHandler";
import Team from "./Team";
import { ReactNode } from "react";
import { FacebookIcon, LinkedinOutlinedIcon, TwitterIcon } from "@/services/assets/svgs";
import colors from "@/lib/colors";

// Your TeamMember type
type TeamMember = {
  image: string;
  name: string;
  position: string;
  socials: {
    type: string;
    link: string;
    icon: ReactNode;
  }[];
};

// Wrapper component
const TeamHomeWrapper = async () => {
  // Step 1: fetch data
  const response: unknown = await fetchWithDelay(`/teams/all`);

  // Step 2: type guard to ensure response has `data` array
  const isValidResponse = (obj: any): obj is { data: any[] } =>
    obj && typeof obj === "object" && Array.isArray(obj.data);

  const teamData: TeamMember[] = isValidResponse(response)
    ? response.data.map((member: any) => ({
        name: member.name,
        position: member.designation,
        image: member.image,
        socials: [
          member.facebook && { type: "facebook", link: member.facebook, icon: <FacebookIcon color={colors.black}
                      className="!h-[14px] !w-[14px] !shrink-0"/> },
          member.twitter && { type: "twitter", link: member.twitter, icon: <TwitterIcon color={colors.black}
                      className="!h-[14px] !w-[14px] !shrink-0"/>},
          member.linkedin && { type: "linkedin", link: member.linkedin, icon: <LinkedinOutlinedIcon
                      color={colors.black}
                      className="!h-[14px] !w-[14px] !shrink-0"
                    /> },
        ].filter(Boolean) as TeamMember["socials"],
      }))
    : [];

  return <Team teamData={teamData} />;
};

export default TeamHomeWrapper;
