"use client";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

function ProductsGallery({
  images = [],
  showImage = 0,
  className = "",
}: {
  images: StaticImageData[];
  showImage: number;
  className?: string;
}) {
  const router = useRouter();

  const handleTabClick = (tabName: string) => {
    const query = new URLSearchParams();
    query.set("image_index", tabName);
    const newPath = `?${query.toString()}`;
    router.push(newPath);
  };
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 sm:h-[400px] lg:h-[500px]",
        className
      )}
    >
      <div className="w-full sm:w-1/5 flex flex-row sm:flex-col items-start gap-2 sm:gap-4 md:gap-6 h-full overflow-hidden">
        {images?.map((img, index) => (
          <div
            className="relative w-full flex-1 h-10 sm:min-h-0 cursor-pointer"
            key={index}
            onClick={() => handleTabClick(index?.toString())}
          >
            <Image
              src={img}
              alt="product"
              width={600}
              height={600}
              className="w-full h-full object-fill"
            />
          </div>
        ))}
      </div>
      <Image
        src={images[showImage]}
        alt="product"
        className="w-full sm:w-4/5 h-44 sm:h-full object-fill"
        width={600}
        height={600}
      />
    </div>
  );
}

export default ProductsGallery;
