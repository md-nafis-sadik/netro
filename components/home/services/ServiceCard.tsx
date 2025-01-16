import { images } from "@/services";
import Image from "next/image";

const ServiceCard = () => {
  return (
    <div className="h-[394px] w-[394px] relative bg-black">
      <Image
        src={images.doubleLCrystal}
        alt="Double L Crystal"
        className="absolute -right-4 bottom-3 w-[194px] h-auto"
      />
    </div>
  );
};

export default ServiceCard;
