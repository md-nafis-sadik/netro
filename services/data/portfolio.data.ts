import ProjectDescription from "@/components/projects/ProjectDescription";
import { images } from "../assets";

// Portfolio Categories
export const portfolioCategories = [
  { category: "Branding" },
  { category: "Web Development" },
  { category: "Mobile App" },
  { category: "Digital Marketing" },
  { category: "UI/UX Design" },
];

// Portfolio Items
export const portfolios = [
  {
    _id: "simigo-esim-branding-and-digital-marketing",
    title: "Simigo - A Vibrant eSIM Brand",
    subtitle:
      "The brand focused on youth centric packages, connectivity & flexibility.",
    metaTitle: "Simigo - A Vibrant eSIM Brand | Netro Portfolio",
    metaDescription:
      "We have designed architecture of the brand that brings youthfulness and energy in your roaming experience.",
    category: "Branding",
    clientOrigin: "United States",
    timeline: "4 Months",
    liveUrl: "https://www.simigo.com/",
    backgroundImageUrl: "/images/project/simigo-bg.webp",
    topImage: images.simigoTop,
    backgroundColor: "lightgray",
    projectDescription:
      "Simigo is a smart eSIM app that lets you stay connected without a physical SIM. Instantly buy, activate, and manage affordable data plans",
    descriptionImages: [
      images.simigoLaptop,
      images.simigoPhone,
      images.simigoShopping,
    ],
    detailPoints: [
      {
        title: "Client origin",
        points: ["United States"],
      },
      {
        title: "Industry",
        points: ["Telecom", "eSIM"],
      },
      {
        title: "Tech Stack",
        points: ["Node.Js", "React.Js", "Flutter"],
      },
      {
        title: "Platforms",
        points: ["PWA", "Android App", "iOS App"],
      },
      {
        title: "Timeline",
        points: ["4 Months"],
      },
    ],
    problemIdentification:
      "Most eSIM platforms struggle with fragmented carrier integrations, where inconsistent APIs increase development and maintenance.",
    problemIdentificationPoints: [
      {
        number: "1",
        title: "Complex Carrier",
        description:
          "Multiple carriers mean inconsistent APIs, custom logic, and high maintenance overhead.",
        position: "left",
      },
      {
        number: "2",
        title: "Activation Flow",
        description:
          "Provisioning delays and failed activations create edge cases that are difficult to debug and support.",
        position: "right",
      },
      {
        number: "3",
        title: "Usage Visibility",
        description:
          "Lack of real-time data usage APIs makes monitoring, alerts, and auto top-ups unreliable.",
        position: "left",
      },
      {
        number: "4",
        title: "Scaling Regions",
        description:
          "Handling traffic spikes, multi-region routing, and cost optimization remains technically challenging.",
        position: "right",
      },
    ],
    solutionDescription:
      "Simigo’s architecture simplifies activation flows, reduces integration overhead, and enables scalable multi-region deployments—allowing teams to launch faster, operate efficiently, and optimize costs without added technical complexity.",
    solutionPoints: [
      {
        title: "Solution 1",
        points: ["Improved eSIM provision with a single button clicked"],
      },
      {
        title: "Solution 2",
        points: [
          "Youth-focused UI design, Vibrant and growth focused UX implemented",
        ],
      },
      {
        title: "Solution 3",
        points: [
          "Advance and lightweight codebase ensures lower server maintenance cost and interrupted service.",
        ],
      },
      {
        title: "Solution 4",
        points: [
          "Cost saving system architecture and automation helps reducing maintenance cost and company can offer MOST AFFORDABLE eSIM PLANS!",
        ],
      },
    ],
    solutionImage: images.simigoSolution,
    softwareBrandingDetails:
      "Keeping mind the brand essence and real market research we have build such a UX that can impact user’s usage behavior. Here you can see a glimpse.",
    brandingImages: [images.simigoBranding1, images.simigoBranding2],
    wireframeDetails:
      "It might seems weird but we do practices this kind of a standard practice.",
    wireframeImages: [images.simigoWireframe1],
    url: "/portfolio/simigo-esim-branding-and-digital-marketing",
  },
  {
    _id: "unisavi-branding-and-digital-marketing",
    title: "UniSavi - Global Higher Education Platform",
    metaTitle: "UniSavi - Global Higher Education | Netro Portfolio",
    metaDescription:
      "Keeping Flexibility with State-Of-Art Technology We Have Built UniSavi that Eases Higher Education.",
    category: "Web Development",
    clientOrigin: "United Kingdom",
    timeline: "6 Months",
    liveUrl: "https://www.unisavi.com/",
    backgroundImage: images.unisavi,
    topImage: images.unisavi,
    backgroundColor: "linear-gradient(180deg, #F9D20E 0%, #F99B0E 100%)",
    thumbnail: images.unisavi,
    featuredImage: images.unisavi,
    url: "/portfolio/unisavi-branding-and-digital-marketing",
    projectImages: [images.unisavi],
    tagList: "Web Development, EdTech, Platform",
    content: `
      <h2>Project Overview</h2>
      <p>UniSavi is a comprehensive platform designed to simplify the higher education journey for students worldwide. We built a flexible and technologically advanced solution that connects students with educational opportunities.</p>
      
      <h3>Technical Implementation</h3>
      <p>The platform was built using cutting-edge technologies to ensure scalability, security, and optimal performance. We implemented advanced search algorithms and personalized recommendation systems.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Advanced university search and filtering</li>
        <li>Application tracking system</li>
        <li>Document management</li>
        <li>Real-time notifications</li>
        <li>Secure payment gateway integration</li>
        <li>Multi-language support</li>
      </ul>
      
      <h3>Impact</h3>
      <p>UniSavi has helped thousands of students navigate their higher education journey, connecting them with universities across the globe.</p>
    `,
  },
  {
    _id: "telzen-branding-and-digital-marketing",
    title: "Telzen - VPN, eSIM & More!",
    metaTitle: "Telzen - VPN & eSIM Solutions | Netro Portfolio",
    metaDescription:
      "Nature Inspired Advanced Technology That Comes With Affordable Roaming eSIM Data, VPN and Physical SIM.",
    category: "Branding",
    clientOrigin: "Canada",
    timeline: "4 Months",
    liveUrl: "https://www.telzen.com/",
    backgroundImage: images.telzen,
    topImage: images.telzen,
    backgroundColor: "linear-gradient(180deg, #00DE71 0%, #014A43 100%)",
    thumbnail: images.telzen,
    featuredImage: images.telzen,
    url: "/portfolio/telzen-branding-and-digital-marketing",
    projectImages: [images.telzen],
    tagList: "Branding, VPN, eSIM, Telecom",
    content: `
      <h2>Project Overview</h2>
      <p>Telzen combines nature-inspired design with advanced telecommunications technology to offer affordable VPN and eSIM solutions. We created a brand that reflects trust, security, and environmental consciousness.</p>
      
      <h3>Brand Strategy</h3>
      <p>The brand identity draws inspiration from nature, using organic shapes and earth tones to communicate reliability and sustainability. This approach helped position Telzen as an eco-conscious alternative in the telecom space.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Nature-inspired brand identity</li>
        <li>Comprehensive VPN solution</li>
        <li>Global eSIM coverage</li>
        <li>Affordable pricing plans</li>
        <li>User-friendly mobile applications</li>
      </ul>
      
      <h3>Achievements</h3>
      <p>Telzen successfully launched in multiple markets with positive user feedback on both design and functionality.</p>
    `,
  },
  {
    _id: "kangabooking-branding-and-digital-marketing",
    title: "Kanga - Business Slot Booking Platform",
    metaTitle: "KangaBooking - Appointment Management | Netro Portfolio",
    metaDescription:
      "Customers search for local businesses and book slots directly. Businesses manage customers, accounts, and staff in one place — that's what Kanga is!",
    category: "Web Development",
    clientOrigin: "Australia",
    timeline: "5 Months",
    liveUrl: "https://www.kangabooking.com/",
    backgroundImage: images.kanga,
    topImage: images.kanga,
    backgroundColor: "linear-gradient(180deg, #FF6B9D 0%, #C06C84 100%)",
    thumbnail: images.kanga,
    featuredImage: images.kanga,
    url: "/portfolio/kangabooking-branding-and-digital-marketing",
    projectImages: [images.kanga],
    tagList: "Web Development, Booking System, SaaS",
    content: `
      <h2>Project Overview</h2>
      <p>Kanga is an all-in-one business management and appointment booking platform that connects customers with local businesses. We developed a comprehensive solution that streamlines operations for both parties.</p>
      
      <h3>Technical Features</h3>
      <p>The platform includes advanced scheduling algorithms, real-time availability updates, and automated reminder systems to reduce no-shows and improve customer satisfaction.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Smart appointment scheduling</li>
        <li>Customer management system</li>
        <li>Staff scheduling and management</li>
        <li>Automated notifications and reminders</li>
        <li>Payment processing</li>
        <li>Analytics and reporting dashboard</li>
        <li>Multi-location support</li>
      </ul>
      
      <h3>Business Impact</h3>
      <p>Kanga has helped hundreds of businesses reduce administrative overhead by 40% while increasing their booking rates by 60%.</p>
    `,
  },
  {
    _id: "nlc-branding-and-digital-marketing",
    title: "NLC Fund - Loan Management Platform",
    metaTitle: "NLC Fund - Loan Management System | Netro Portfolio",
    metaDescription:
      "First Time ever we have made this platform that eases loan application, term-sheet generation, loan execution and so many!",
    category: "Web Development",
    clientOrigin: "United States",
    timeline: "8 Months",
    liveUrl: "https://www.nlcfund.com/",
    backgroundImage: images.nlc,
    topImage: images.nlc,
    backgroundColor: "linear-gradient(180deg, #4A90E2 0%, #2C3E50 100%)",
    thumbnail: images.nlc,
    featuredImage: images.nlc,
    url: "/portfolio/nlc-branding-and-digital-marketing",
    projectImages: [images.nlc],
    tagList: "Web Development, FinTech, Loan Management",
    content: `
      <h2>Project Overview</h2>
      <p>NLC Fund is a revolutionary loan management platform that simplifies every aspect of the lending process, from application to execution. We built a secure and efficient system that serves both lenders and borrowers.</p>
      
      <h3>System Architecture</h3>
      <p>The platform features a robust architecture with advanced security protocols, automated workflows, and comprehensive document management. We implemented blockchain technology for enhanced transparency and security.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Streamlined loan application process</li>
        <li>Automated term-sheet generation</li>
        <li>Digital signature integration</li>
        <li>Document management system</li>
        <li>Risk assessment tools</li>
        <li>Compliance management</li>
        <li>Real-time reporting and analytics</li>
        <li>Secure communication channels</li>
      </ul>
      
      <h3>Innovation</h3>
      <p>NLC Fund represents a significant advancement in fintech, reducing loan processing time by 70% while maintaining the highest security standards. The platform has processed millions in loan applications with zero security incidents.</p>
    `,
  },
];

// Helper function to get portfolio by ID/title
export const getPortfolioById = (id: string) => {
  return portfolios.find((portfolio) => portfolio._id === id);
};

// Helper function to get portfolios by category
export const getPortfoliosByCategory = (category: string) => {
  if (category.toLowerCase() === "all") {
    return portfolios;
  }
  return portfolios.filter(
    (portfolio) => portfolio.category.toLowerCase() === category.toLowerCase(),
  );
};
