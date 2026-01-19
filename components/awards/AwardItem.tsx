import {
  AwardBigIcon,
  PrizeBigIcon,
  StarBigIcon,
} from "@/services/assets/svgs";

interface AwardItemProps {
  icon: "star" | "prize" | "award";
  title: string;
  description: string;
  year: string;
}

const iconComponents = {
  star: StarBigIcon,
  prize: PrizeBigIcon,
  award: AwardBigIcon,
};

const AwardItem = ({ icon, title, description, year }: AwardItemProps) => {
  const IconComponent = iconComponents[icon];

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 group">
      {/* Icon Container */}
      <div className="flex-shrink-0 overflow-hidden relative w-16 h-16 md:w-20 md:h-20 bg-[#16153F] rounded-2xl flex_center transition-transform group-hover:scale-110">
        <IconComponent
          className="w-8 h-8 md:w-10 md:h-10 z-10 relative"
          color="white"
        />
        <span className="absolute bottom-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="28"
            viewBox="0 0 80 28"
            fill="none"
          >
            <g filter="url(#filter0_f_3426_24909)">
              <ellipse
                cx="40.0002"
                cy="38.0803"
                rx="32.7248"
                ry="18.0803"
                fill="#6766FF"
              />
              <ellipse
                cx="40.0002"
                cy="38.0803"
                rx="32.7248"
                ry="18.0803"
                fill="url(#paint0_linear_3426_24909)"
                fillOpacity="0.2"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_3426_24909"
                x="-12.7246"
                y="0"
                width="105.449"
                height="76.1602"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10"
                  result="effect1_foregroundBlur_3426_24909"
                />
              </filter>
              <linearGradient
                id="paint0_linear_3426_24909"
                x1="40.1524"
                y1="20"
                x2="40.1524"
                y2="56.1606"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
        <div className="flex-1">
          <h3 className="text-2xl md:text-4xl font-medium text-white mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-lg text-gray-200 font-inter">
            {description}
          </p>
        </div>

        {/* Year */}
        <div className="flex-shrink-0">
          <p className="text-sm md:text-lg text-gray-200 font-inter">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default AwardItem;
