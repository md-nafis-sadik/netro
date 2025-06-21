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
    title: "Telzen",
    metaDescription:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    featuredImage: images.projectBannerTelzen,
    author: { profileImage: images.telzenIcon },
  },
  {
    title: "Yoowifi",
    metaDescription:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    featuredImage: images.projectBannerYooWifi,
    author: { profileImage: images.yoowifiIcon },
  },
  {
    title: "Yoowifi",
    metaDescription:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    featuredImage: images.projectBannerTelzen,
    author: { profileImage: images.yoowifiIcon },
  },
  {
    title: "Yoowifi",
    metaDescription:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    featuredImage: images.projectBannerYooWifi,
    author: { profileImage: images.yoowifiIcon },
  },
  {
    title: "Yoowifi",
    metaDescription:
      "Empowering brands with user-focused designs and seamless development.",
    tagList: "Case Study, Mobile App, Telco, Design, Development",
    featuredImage: images.projectBannerTelzen,
    author: { profileImage: images.yoowifiIcon },
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
    id: "01",
    image: images.product1,
    title: "Trivialy",
    description:
      "Trivialy introduces a whole new way to boost your sales and engagements.",
    url: "https://trivialy.co",
  },
  {
    id: "02",
    image: images.product2,
    title: "Dokani",
    description:
      "A ERP that created for SMB and SMEs. Flexibility and easy operation is key.",
    url: "https://dokani.products8.com",
  },
  {
    id: "03",
    image: images.product3,
    title: "Jazakallah",
    description:
      "A complete Islamic app that comes with all your needed religious need.",
    url: "https://codecanyon.net/item/jazakallah-tasbih-counter-app/44905917",
  },
  {
    id: "04",
    image: images.product4,
    title: "Rimozen AI",
    description:
      "Generative app that can generate stunning images, motions and music.",
    url: "https://play.google.com/store/apps/details?id=com.netrocreative.geniepers&pcampaignid=web_share",
  },
  {
    id: "05",
    image: images.product5,
    title: "Qurio",
    description:
      "For the kids from Pre-Play to Class 3 can learn things using Qurio.",
    url: "https://play.google.com/store/apps/details?id=com.netrocreative.qurioapp&pcampaignid=web_share",
  },
  {
    id: "06",
    image: images.product6,
    title: "ProChat AI",
    description:
      "ChatGPT 4.o enabled personal assistant that eases your tasks like never before.",
    url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
  },
];

export const teamData = [
  //  Asiq Mohammed
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
  //  Altamira Tripty
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
  //  Sultan Mahmud
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
  //  Ahmed Lincon
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
  //  Abdullah Al MahMud
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
  //  Muhtasim Jeet
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
  //  Ridoy Haque
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
  //  Naimur Rahman
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
  //  Hasibul Hasan Rasel
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
  //  Ismail Jabiulla
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
  //  Soumik Ahammed
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
  //  Sheikh Md Maruf
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
  //  Saheduzzaman Shamim
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
  //  M. Zahid Ahamed Tusar
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
  //  Ektiar Alam
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
  //  Khondaker Akib Anwar
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
  //  Mir Saroar Hossain
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
  //  Fozlay Rabbi
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
  //  Raihanul Islam
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
  //  Jannatun Hur Maria
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
  //  Anika Ebnath
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
    link: "journal/1",
  },
  {
    title: "Vision for creative excellence vision",
    image: images.blog2,
    date: "30 November, 2024",
    link: "journal/2",
  },
  {
    title: "Vision for creative excellence vision",
    image: images.blog3,
    date: "30 November, 2024",
    link: "journal/3",
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
