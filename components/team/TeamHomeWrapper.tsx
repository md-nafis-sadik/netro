import { ReactNode } from "react";
import Team from "./Team";

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
const TeamHomeWrapper = () => {
  return <Team />;
};

export default TeamHomeWrapper;
