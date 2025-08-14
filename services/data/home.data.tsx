import colors from "@/lib/colors";
import { images } from "@/services";
import { LinkedinOutlinedIcon } from "@/services/assets/svgs";

export const marqueeHomeData = [
  images.companyBlack1,
  images.companyBlack2,
  images.companyBlack3,
  images.companyBlack4,
  images.companyBlack5,
  images.companyBlack6,
  images.companyBlack7,
  images.companyBlack8,
  images.companyBlack9,
  images.companyBlack10,
  images.companyBlack11,
  images.companyBlack12,
  images.companyBlack13,
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
      "Boosts up to 40% eCommerce sales via customer engagement activities. Try this FREEMIUM tool! Currently available for Wordpress only.",
    url: "https://trivialy.co",
    // detailsUrl: "/products/trivialy",
  },
  {
    id: "02",
    image: images.product2,
    otherImage: images.telzenPreview1,
    title: "Telzen- telecom brand",
    description:
      "When you travel you must need a roaming enabled eSIM into your phone. Don't you? Then try our cutting edge product.",
    url: "https://dokani.products8.com",
    detailsUrl: "/products/telzen",
  },
  {
    id: "03",
    image: images.product3,
    otherImage: images.jazakallahPreview1,
    title: "JazakAllah MMP",
    description:
      "From the religion responsibility we have created a solution that automates and makes easier to manage your Mosque. It also comes with a complete user app for practitioners.",
    url: "https://codecanyon.net/item/jazakallah-tasbih-counter-app/44905917",
    detailsUrl: "/products/jazakallah",
  },
  {
    id: "04",
    image: images.product5,
    otherImage: images.smartPathshalaPreview1,
    title: "Smart pathshala",
    description:
      "Smart Pathshala is one of the apps that made by the brilliant people with ability to automate the educational Institute. Ask your Institute admin for onboarding!",
    url: "https://play.google.com/store/apps/details?id=com.netrocreative.qurioapp&pcampaignid=web_share",
    detailsUrl: "/products/smart-pathshala",
  },
  {
    id: "05",
    image: images.product4,
    otherImage: images.rimozenAIPreview1,
    title: "Rimozen AI",
    description:
      "Generative app that can generate stunning images, motions and music.",
    url: "https://play.google.com/store/apps/details?id=com.netrocreative.geniepers&pcampaignid=web_share",
    detailsUrl: "/products/rimozen-ai",
  },
  {
    id: "06",
    image: images.product6,
    otherImage: images.dokaniERPPreview1,
    title: "Dokani ERP",
    description:
      "Might saw lot of ERP or inventory management solution but what if we bring a product that created for dealers only with good traction in sales and multi-location stores.",
    url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    detailsUrl: "/products/dokani-erp",
  },
  {
    id: "07",
    image: images.product7,
    otherImage: images.kidsAIPreview1,
    title: "KIds AI",
    description:
      "Dedicated counsellors for Parenting, powered by Artificial Intelligence. The app can be a guide for your parenting and make you feel better even when kids are tantruming.",
    url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    detailsUrl: "/products/kids-ai",
  },
  {
    id: "08",
    image: images.product8,
    otherImage: images.kiddzLearnPreview1,
    title: "Kiddz Learn",
    description:
      "Immersive application that helps learning lill' stars with drawing, learning words or even doing simple maths. but remember its for Kids under 10!",
    url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    detailsUrl: "/products/kiddz-learn",
  },
  {
    id: "09",
    image: images.product9,
    otherImage: images.eventusTop,
    title: "Eventus",
    description:
      "Must be thinking it's nothing but a even booking platform? Wrong, it's something that no one solved the problem. Why don't you explore their website?",
    url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    detailsUrl: "/products/eventus",
  },
  {
    id: "10",
    image: images.product10,
    otherImage: images.proAIPreview1,
    title: "Pro AI",
    description:
      "Day-To-Day Ai app that eases your tasks like writing an email reply, writing an leave application or even writing an appraisal request letter too? Why don’t yo try today?",
    url: "https://codecanyon.net/item/prochat-the-ultimate-ai-assistant/44970962",
    detailsUrl: "/products/pro-ai",
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
      "Netro Systems partners with startups and SaaS innovators to build high-performance, scalable digital products from the ground up. We offer full-stack development for custom applications, responsive web platforms, and cross-platform mobile apps, all optimized for rapid deployment and iterative growth. Our expertise spans cloud-native architectures, API integrations, and automated DevOps pipelines, enabling fast MVP delivery and cost-efficient scaling. With a strong focus on UX, performance, and maintainability, we help founders transform ideas into robust, market-ready solutions.",
  },
  {
    question: "What industries does Netro Creative specialise in?",
    answer:
      "Netro Systems delivers cutting-edge solutions across Telecommunications, eCommerce, AI, and FinTech. We build scalable telecom platforms, AI-powered eCommerce solutions, intelligent automation systems, and secure, compliant financial applications. Leveraging cloud-native architectures, API-driven integrations, and advanced analytics, we help businesses innovate, optimize operations, and stay ahead in the digital era.",
  },
  {
    question: "What is Netro Creative's development process?",
    answer:
      "At Netro Systems, we follow an Agile-driven development process combined with DevOps practices to ensure speed, flexibility, and quality. Our approach begins with in-depth discovery and requirement analysis, followed by strategic planning and architecture design. We prioritize iterative development through short sprints, supported by continuous integration and automated testing for seamless delivery. With robust QA, cloud-native deployment, and proactive monitoring, we guarantee reliability and scalability. Post-launch, our ongoing maintenance and optimization ensure that solutions evolve with your business needs.",
  },
  {
    question: "How does Netro Creative handle data security and privacy?",
    answer:
      "Netro Creative adheres to industry-leading security standards and privacy regulations to ensure complete protection of client and user data. We implement a multi-layered security approach, including end-to-end encryption, role-based access control, and secure API integrations. All applications are developed following OWASP best practices to mitigate vulnerabilities such as SQL injection, XSS, and CSRF. For sensitive data, we enforce encryption both at rest and in transit using AES-256 and TLS 1.3 protocols. Our infrastructure is deployed on secure cloud environments with compliance to ISO 27001, GDPR, and, where applicable, PCI DSS standards. Continuous security audits, penetration testing, and real-time monitoring further safeguard against threats, ensuring data integrity, confidentiality, and availability at every stage of the development lifecycle.",
  },
  {
    question: "Does Netro Creative provide ongoing support and maintenance?",
    answer:
      "Yes. Netro Creative provides comprehensive ongoing support and maintenance to ensure your software remains secure, up-to-date, and fully optimized. Our services include performance monitoring, bug fixes, security updates, feature enhancements, and 24/7 technical assistance to keep your solution running seamlessly.",
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
