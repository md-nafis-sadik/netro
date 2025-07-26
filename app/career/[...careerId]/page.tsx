import JobApplyForm from "@/components/career/JobApplyForm";
import JobDescriptionSkeleton from "@/components/career/JobDescriptionSkeleton";
import JobDescriptionWrapper from "@/components/career/JobDescriptionWrapper";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Suspense } from "react";

async function CareerDetails({
  params,
}: {
  params: Promise<{ careerId: string[] }>;
}) {
  const { careerId } = await params;
  const id = careerId[0];

  const breadcrumbs = [
    { link: "/career", name: "Career" },
    { link: `/career/${id}`, name: "Job description" },
  ];

  return (
    <main className="relative mt-20 md:mt-24">
      <div className="py-4 sm:py-6 md:py-10">
        <div className="containerX">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>

      <Suspense fallback={<JobDescriptionSkeleton />}>
        <JobDescriptionWrapper id={id} />
      </Suspense>
      <JobApplyForm jobId={id} />
    </main>
  );
}

export default CareerDetails;
