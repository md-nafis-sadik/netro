import { images } from "@/services";
import CareerTeamItem from "./CareerTeamItem";

function CareerTeams() {
  const data = [
    {
      _id: "1",
      image: images.career1,
      title: "Flexible Work Environment",
      description:
        "Balance work and life with flexible hours and remote options.",
    },
    {
      _id: "2",
      image: images.career2,
      title: "Career  Growth",
      description:
        "Grow your career with workshops, certifications, and mentorship.",
    },
    {
      _id: "3",
      image: images.career3,
      title: "Competitive Compensation",
      description:
        "Enjoy industry-leading pay, bonuses, and performance rewards.",
    },
    {
      _id: "4",
      image: images.career4,
      title: "Health & Wellness Benefits",
      description:
        "Health plans and wellness programs for a balanced lifestyle.",
    },
    {
      _id: "5",
      image: images.career5,
      title: "Collaborative Culture ",
      description:
        "Join a supportive, innovative team that values creativity and ideas.",
    },
    {
      _id: "6",
      image: images.career6,
      title: "Learning and Development",
      description:
        "Stay ahead in your field with access to the latest tools and training",
    },
  ];
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-30 bg-black">
      <div className="containerX">
        <h2 className="title whiteGradient text-center">Being our teammate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-dashed divide-natural-900 pt-0 sm:pr-8 md:mt-10 sm:gap-5">
          {data?.map((item) => (
            <CareerTeamItem key={item?._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerTeams;
