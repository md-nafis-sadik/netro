import colors from "@/lib/colors";
import { images } from "@/services";
import { LinkedinOutlinedIcon } from "@/services/assets/svgs";

export const marqueeHomeData = [
  {
    image: images.companyWhite1,
    darkImage: images.companyBlack1,
  },
  {
    image: images.companyWhite2,
    darkImage: images.companyBlack2,
  },
  {
    image: images.companyWhite3,
    darkImage: images.companyBlack3,
  },
  {
    image: images.companyWhite4,
    darkImage: images.companyBlack4,
  },
  {
    image: images.companyWhite5,
    darkImage: images.companyBlack5,
  },
  {
    image: images.companyWhite6,
    darkImage: images.companyBlack6,
  },
];

export const projectsData = [
  {
    name: "Telzen",
    description:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    image: images.projectBannerTelzen,
    icon: images.telzenIcon,
  },
  {
    name: "Yoowifi",
    description:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    image: images.projectBannerYooWifi,
    icon: images.yoowifiIcon,
  },
  {
    name: "Yoowifi",
    description:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    image: images.blog1,
    icon: images.yoowifiIcon,
  },
  {
    name: "Yoowifi",
    description:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    image: images.blog2,
    icon: images.yoowifiIcon,
  },
  {
    name: "Yoowifi",
    description:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    image: images.blog3,
    icon: images.yoowifiIcon,
  },
];

export const servicesHomeData = [
  {
    title: "Software Development",
    text: "Building robust solutions to power your business growth.",
    link: "",
    imageComponent: {
      src: images.doubleLCrystal,
      alt: "Double L Crystal",
      className: "!max-w-[142px] md:!max-w-[194px] h-auto",
    },
  },
  {
    title: "UXUI \nDesign",
    text: "Designing seamless and intuitive digital experiences.",
    link: "",
    imageComponent: {
      src: images.gemCrystal,
      alt: "Gem crystal image",
      className: "!max-w-[96px] md:!max-w-[135px] h-auto",
    },
  },
  {
    title: "AI Apps Custom LLMs",
    text: "Building intelligent applications that revolutionize user experiences.",
    link: "",
    imageComponent: {
      src: images.starMixerCrystal,
      alt: "",
      className: "!max-w-[133px] md:!max-w-[156px] h-auto",
    },
  },
  {
    title: "Branding Solution",
    text: "Building identities that leave a lasting impression.",
    link: "",
    imageComponent: {
      src: images.starCrystal,
      alt: "",
      className: "!max-w-[136px] md:!max-w-[184px] h-auto",
    },
  },
  {
    title: "Server Maintenance",
    text: "24/7 server care to prevent downtime and ensure efficiency.",
    link: "",
    imageComponent: {
      src: images.honeycombCrystal,
      alt: "",
      className: "!max-w-[116px] md:!max-w-[180px] h-auto",
    },
  },
];

export const productsData = [
  {
    name: "Yoowifi",
    description:
      "A cutting-edge telecom project delivering seamless connectivity solutions.",
  },
  {
    name: "Indemnif.ai",
    description:
      "A cutting-edge telecom project delivering seamless connectivity solutions.",
  },
  {
    name: "Artistry",
    description:
      "A cutting-edge telecom project delivering seamless connectivity solutions.",
  },
  {
    name: "kanga",
    description:
      "A cutting-edge telecom project delivering seamless connectivity solutions.",
  },
];

export const teamData = [
  // 1
  {
    name: "Asiq Mohammed",
    position: "Managing Director & CEO",
    image: images.ashiqMahmed,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 2
  {
    name: "Altamira Tripty",
    position: "Chief Marketing Officer (CMO)",
    image: images.altamiraTripty,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 3
  {
    name: "Sultan Mahmud",
    position: "Chief Operations Officer (COO)",
    image: images.sultanMahmud,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 4
  {
    name: "Ahmed Lincon",
    position: "Chief Technology Officer (CTO)",
    image: images.ahammedLincon,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 5
  {
    name: "Ismail Jabiulla",
    position: "Software Engineer",
    image: images.ismailJabiulla,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 6
  {
    name: "Hasibul Hasan Rasel",
    position: "Software Engineer",
    image: images.hasibulHasanRasel,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 7
  {
    name: "Ektiar Alam",
    position: "Chief Operations Officer (COO)",
    image: images.ektiarAlam,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 8
  {
    name: "Khondaker Akib Anwar",
    position: "Chief Technology Officer (CTO)",
    image: images.khondakerAkibAnwar,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 9
  {
    name: "Mir Saroar Hossain",
    position: "Chief Technology Officer (CTO)",
    image: images.mirSaroarHossain,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 10
  {
    name: "Fozlay Rabbi",
    position: "Chief Technology Officer (CTO)",
    image: images.fozlayRabbi,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 11
  {
    name: "Abdullah Al MahMud",
    position: "Chief Technology Officer (CTO)",
    image: images.abdullahAlMahmud,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 12
  {
    name: "Muhtasim Jeet",
    position: "Chief Technology Officer (CTO)",
    image: images.muhtasimJeet,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 13
  {
    name: "Ridoy Haque",
    position: "Chief Technology Officer (CTO)",
    image: images.ridoyHaque,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 14
  {
    name: "Naimur Rahman",
    position: "Chief Technology Officer (CTO)",
    image: images.naimurRahman,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 15
  {
    name: "Soumik Ahammed",
    position: "Chief Technology Officer (CTO)",
    image: images.soumikAhammed,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 16
  {
    name: "Saheduzzaman Shamim",
    position: "Chief Technology Officer (CTO)",
    image: images.shaheduzzamanShamim,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 17
  {
    name: "Jannatun Hur Maria",
    position: "Chief Technology Officer (CTO)",
    image: images.jannatunHurMaria,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 18
  {
    name: "Raihanul Islam",
    position: "Chief Technology Officer (CTO)",
    image: images.raihanulIslam,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 19
  {
    name: "Sheikh Md Maruf",
    position: "Chief Technology Officer (CTO)",
    image: images.seikhMdMaruf,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 20
  {
    name: "Anika Ebnath",
    position: "Chief Technology Officer (CTO)",
    image: images.anikaEbnath,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
  // 21
  {
    name: "M. Zahid Ahamed Tusar",
    position: "Chief Technology Officer (CTO)",
    image: images.mZahidAhamedTusar,
    socials: [
      {
        type: "linkedin",
        link: "",
        icon: (
          <LinkedinOutlinedIcon
            color={colors.black}
            className="!h-[14px] !w-[14px] !shrink-0"
          />
        ),
      },
    ],
  },
];

export const faqData = [
  {
    question: "What services does Netro Creative offer?",
    answer:
      "Netro Creative offers a wide range of services including custom software development, mobile app development, web application development, enterprise software solutions, software consulting, and ongoing maintenance and support.",
  },
  {
    question: "What industries does Netro Creative specialize in?",
    answer:
      "Netro Creative specializes in a wide range of industries, including finance, healthcare, e-commerce, education, and more. We tailor our services to meet the unique needs of each industry.",
  },
  {
    question:
      "How does Netro Creative ensure the quality of its software products?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "What is Netro Creative's development process?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "How does Netro Creative handle data security and privacy?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "Does Netro Creative provide ongoing support and maintenance?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "What are Netro Creative's pricing models?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
  {
    question: "How can I get started with Netro Creative?",
    answer:
      "You can reach out to Netro Creative by email at 0o9oX@example.com or by filling out the contact form on our website. We look forward to hearing from you and discussing your project needs.",
  },
];

export const journalData = [
  {
    title: "Vision for creative excellence vision",
    image: images.blog1,
    date: "30 November, 2024",
    link: "",
  },
  {
    title: "Vision for creative excellence vision",
    image: images.blog2,
    date: "30 November, 2024",
    link: "",
  },
  {
    title: "Vision for creative excellence vision",
    image: images.blog3,
    date: "30 November, 2024",
    link: "",
  },
];

export const pricingData = [
  {
    title: "UI/UX Design",
    subtitle: "For personal or Industrial",
    price: 29,
    period: "per hour",
    popular: false,
    features: [
      "Ensured proper UX",
      "Followed guide or create",
      "Modern softwares",
      "Scalable and ready to develop",
      "Collaborative",
    ],
  },
  {
    title: "Development",
    subtitle: "For personal or Industrial",
    price: 49,
    period: "per hour",
    popular: true,
    features: [
      "Frontend Development",
      "Backend Development",
      "Database, Server Setup",
      "DevOps and Deploy",
      "Bug Fixing",
      "After sales service",
    ],
  },
  {
    title: "Branding",
    subtitle: "For personal or Industrial",
    price: 19,
    period: "per hour",
    popular: false,
    features: [
      "Logo from scratch",
      "Brand Guideline",
      "Animation and Graphical assets",
      "3D Animation",
      "Brand Assets preparation",
    ],
  },
];
