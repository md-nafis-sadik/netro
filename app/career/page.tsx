import TextFadeIn from "@/components/animations/TextFadeIn";
import CareerTeams from "@/components/career/CareerTeams";
import JobPosts from "@/components/career/JobPosts";
import PageThumbnail from "@/components/shared/PageThumbnail";
import ViewAbout from "@/components/view/ViewAbout";
import { cn } from "@/lib/utils";
import { aboutViewData } from "@/services/data";
import Image from "next/image";
import Link from "next/link";

function Career() {
  return (
    <>
      <PageThumbnail
        title="Current openings"
        description="Available Opportunities"
      />
      <JobPosts />
      <CareerTeams />
      <ViewAbout reverse={true} />
    </>
  );
}

export default Career;
