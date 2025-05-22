import { images } from "@/services";
import Image from "next/image";

function NotFound() {
  return (
    <div className=" pt-28 sm:pt-32 md:pt-40 px-6 pb-20">
      <div className="containerX text-center">
        <Image
          src={images.notFound}
          width={365}
          height={210}
          alt="not found"
          className="w-full max-w-[208px] sm:max-w-[365px] mx-auto"
          loading="lazy"
        />
        <h2 className="text-black-900 text-2xl sm:text-4xl md:text-6xl mt-6 sm:mt-8 mb-2 sm:mb-4 md:mt-10 md:mb-6">
          Oops! Something is wrong.
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-black-700">
          The page you're looking for might have taken a detour. Don't worry,
          we've got a map! Drop Us a Line
        </p>
      </div>
    </div>
  );
}

export default NotFound;
