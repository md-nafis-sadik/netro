import JobApplyForm from "@/components/career/JobApplyForm";
import JobDescription from "@/components/career/JobDescription";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

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
    <>
      <div className="py-4 sm:py-6 md:py-10">
        <div className="containerX">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>
      <JobDescription />
      <JobApplyForm />
    </>
  );
}

export default CareerDetails;
