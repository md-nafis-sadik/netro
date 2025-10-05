import Image from "next/image";
import PageThumbnail from "../shared/PageThumbnail";
import { images } from "@/services";

const HeroAbout = () => {
  const url = "/videos/netro-video.mp4";

  return (
    <section className="">
      <PageThumbnail
        title="The Story"
        description="our success"
        titleClassName="about_us_othe_story w-fit"
      />

      {/* <div className="min-h-full min-w-full overflow-hidden">
        <video
          src={url}
          controls={false}
          autoPlay
          playsInline
          muted
          loop
          height="100%"
          width="100%"
        />
      </div> */}
      <div className="containerX">
        <Image
          src={images.officeImage7}
          alt="about netro"
          width={1280}
          height={1280}
          className="min-h-full h-full min-w-full w-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroAbout;
