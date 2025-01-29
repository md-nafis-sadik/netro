import { cn } from "@/lib/utils";
import { images } from "@/services";
import Image from "next/image";

function ProjectVideo() {
  return (
    <div className="w-full aspect-[16/6] relative overflow-hidden flex_center">
      <Image
        src={images.video}
        alt="office image 2"
        className="absolute_center min-h-full min-w-full"
        height={1280}
        width={1920}
      />

      <div className="relative h-[120px] w-[120px] flex_center">
        <Image
          src={images.bubble}
          alt="Bubble image"
          className="h-full w-full object-contain"
          height={400}
          width={400}
        />

        <p
          className={cn(
            "text-[8px] md:text-[32px] font-bold !leading-[1.2] tracking-[0.26px] md:tracking-[0.5px] text-white absolute_center font-scoutcond"
          )}
        >
          Play <br /> Reel
        </p>
      </div>
    </div>
  );
}

export default ProjectVideo;
