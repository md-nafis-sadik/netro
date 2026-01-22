import { images } from "@/services";

export const bannerIcons = [
  {
    id: "01",
    title: "Android",
    icon: images.js,
  },
  {
    id: "02",
    title: "JavaScript",
    icon: images.android,
  },
  {
    id: "05",
    title: "Swift",
    icon: images.swift,
  },
  {
    id: "03",
    title: "PHP",
    icon: images.php,
  },
  {
    id: "04",
    title: "Python",
    icon: images.python,
  },
];

export const faqData = [
  {
    question: "What services does Netro Systems offer?",
    answer:
      "Netro Systems partners with startups and SaaS innovators to build high-performance, scalable digital products from the ground up. We offer full-stack development for custom applications, responsive web platforms, and cross-platform mobile apps, all optimized for rapid deployment and iterative growth. Our expertise spans cloud-native architectures, API integrations, and automated DevOps pipelines, enabling fast MVP delivery and cost-efficient scaling. With a strong focus on UX, performance, and maintainability, we help founders transform ideas into robust, market-ready solutions.",
  },
  {
    question: "What industries does Netro Systems specialise in?",
    answer:
      "Netro Systems delivers cutting-edge solutions across Telecommunications, eCommerce, AI, and FinTech. We build scalable telecom platforms, AI-powered eCommerce solutions, intelligent automation systems, and secure, compliant financial applications. Leveraging cloud-native architectures, API-driven integrations, and advanced analytics, we help businesses innovate, optimize operations, and stay ahead in the digital era.",
  },
  {
    question: "What is Netro Systems's development process?",
    answer:
      "At Netro Systems, we follow an Agile-driven development process combined with DevOps practices to ensure speed, flexibility, and quality. Our approach begins with in-depth discovery and requirement analysis, followed by strategic planning and architecture design. We prioritize iterative development through short sprints, supported by continuous integration and automated testing for seamless delivery. With robust QA, cloud-native deployment, and proactive monitoring, we guarantee reliability and scalability. Post-launch, our ongoing maintenance and optimization ensure that solutions evolve with your business needs.",
  },
  {
    question: "How does Netro Systems handle data security and privacy?",
    answer:
      "Netro Creative adheres to industry-leading security standards and privacy regulations to ensure complete protection of client and user data. We implement a multi-layered security approach, including end-to-end encryption, role-based access control, and secure API integrations. All applications are developed following OWASP best practices to mitigate vulnerabilities such as SQL injection, XSS, and CSRF. For sensitive data, we enforce encryption both at rest and in transit using AES-256 and TLS 1.3 protocols. Our infrastructure is deployed on secure cloud environments with compliance to ISO 27001, GDPR, and, where applicable, PCI DSS standards. Continuous security audits, penetration testing, and real-time monitoring further safeguard against threats, ensuring data integrity, confidentiality, and availability at every stage of the development lifecycle.",
  },
  {
    question: "Does Netro Systems provide ongoing support and maintenance?",
    answer:
      "Yes. Netro Creative provides comprehensive ongoing support and maintenance to ensure your software remains secure, up-to-date, and fully optimized. Our services include performance monitoring, bug fixes, security updates, feature enhancements, and 24/7 technical assistance to keep your solution running seamlessly.",
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
