import Image, { StaticImageData } from "next/image";

function CareerTeamItem({
  item,
}: {
  item: {
    _id: string;
    image: StaticImageData;
    title: string;
    description: string;
  };
}) {
  return (
    <div className="flex sm:flex-col gap-x-2 sm:gap-4 md:gap-10 py-6 sm:py-8 md:py-10 sm:[&:nth-child(2)]:!border-none font-inter">
      <Image
        src={item?.image}
        alt={item?.title}
        width={200}
        height={200}
        className="w-6 sm:w-10 md:w-16 lg:w-20 h-6 sm:h-10 md:h-16 lg:h-20 object-contain"
      />
      <div>
        <h4 className="text-white titleMd">
          {item?.title}
        </h4>
        <p className="text-xs sm:text-base md:text-2xl text-text-200 mt-4 leading-[140%]">
          {item?.description}
        </p>
      </div>
    </div>
  );
}

export default CareerTeamItem;
