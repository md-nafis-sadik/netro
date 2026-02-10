import { images } from "../assets";
import {
  AiIcon,
  AIMenuIcon,
  APIYellowIcon,
  AppMenuIcon,
  AwsYellowIcon,
  BrandingMenuIcon,
  CloudYellowIcon,
  DBYellowIcon,
  FirebaseYellowIcon,
  FlutterYellowIcon,
  KotlinYellowIcon,
  KubernatesYellowIcon,
  LangChainYellowIcon,
  LLMYellowIcon,
  MongoYellowIcon,
  NodeJsYellowIcon,
  PSQLYellowIcon,
  PythonYellowIcon,
  ReactNativeYellowIcon,
  ReactYellowIcon,
  SAASMenuIcon,
  SQAMenuIcon,
  SwiftYellowIcon,
  TSYellowIcon,
  UIMenuIcon,
  VibeMenuIcon,
} from "../assets/svgs";
import {
  PythonIcon,
  TypeScriptIcon,
  AIIcon as AITechIcon,
  DatabaseIcon,
  PostgreSQLIcon,
  APIIcon,
  ReactIcon,
  CloudIcon,
  LLMIcon,
} from "@/components/services/ServiceIcons";
import { IService } from "../types";

// Helper function to find service by slug or title
export const findServiceBySlug = (slug: string): IService | undefined => {
  return servicesData.find(
    (service) =>
      service.slug === slug ||
      service.title.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase() ||
      service.title.toLowerCase() === slug.toLowerCase(),
  );
};

export const findServiceByTitle = (title: string): IService | undefined => {
  return servicesData.find(
    (service) =>
      service.title.toLowerCase() === title.toLowerCase() ||
      service.slug === title.toLowerCase().replace(/\s+/g, "-"),
  );
};

export const coreStrengthsServicesData = [
  {
    serial: "01",
    title: "Enterprise",
    text: "Powering businesses with scalable and innovative enterprise solutions.",
  },
  {
    serial: "02",
    title: "Fintech",
    text: "Delivering secure, scalable, and innovative fintech solutions.",
  },
  {
    serial: "03",
    title: "Crypto & Web3",
    text: "Powering secure, scalable, and innovative Crypto & Web3 solutions.",
  },
  {
    serial: "04",
    title: "Technology",
    text: "Transforming ideas into cutting-edge technology solutions.",
  },
  {
    serial: "05",
    title: "Ecommerce",
    text: "Crafting seamless, scalable, and innovative eCommerce experiences.",
  },
  {
    serial: "06",
    title: "Startups & VC",
    text: "Clean design for seamless startup and VC experiences.",
  },
  {
    serial: "07",
    title: "Healthcare",
    text: "Clean, intuitive design for modern, user-centric healthcare solutions.",
  },
  {
    serial: "08",
    title: "Teleco",
    text: "Modern design for seamless, user-focused telecom experiences.",
  },
];

export const servicesData: readonly IService[] = Object.freeze([
  {
    _id: "service-01",
    title: "AI-Powered Development",
    slug: "ai-powered-development",
    subtitle: "Integrate AI into your products",
    descTitle: "AI-Powered Software Engineering",
    description:
      "We help startups, enterprises, and global brands integrate AI into their products, workflow, and infrastructure through end-to-end engineering.",
    image: images.service1,
    featuredImage: images.aiPowered,
    icon: <AIMenuIcon color="#FFC400" />,
    link: "/services/ai-powered-development",
    tags: [
      "Artificial Intelligence",
      "Machine Learning",
      "AI Integration",
      "Automation",
    ],
    points: [
      "Automate work and reduce cost",
      "Build AI-driven products and features",
      "Extend legacy systems",
    ],
    servicesOffer: {
      title: "What we offer",
      description:
        "Unified engineering for the AI era. From strategy and prototyping to production-grade rollouts, we help organizations:",
      data: [
        {
          title: "AI Consulting",
          desc: "Automate work and reduce cost",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer1,
        },
        {
          title: "AI Consulting",
          desc: "Build AI-driven products and features",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer2,
        },
        {
          title: "AI Consulting",
          desc: "Extend legacy systems with intelligence",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer3,
        },
        {
          title: "AI Consulting",
          desc: "Accelerate software delivery using AI- dev.",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer4,
        },
        {
          title: "AI Consulting",
          desc: "Achieve compliance for regulated industries",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer5,
        },
        {
          title: "AI Consulting",
          desc: "Integrate multi-model architectures, agents",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer6,
        },
      ],
    },
    relatedWorks: {
      title: "Related Works",
    },
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Turning AI complexity into reliable, scalable, and compliant software solutions.",
      challenges: [
        {
          title: "AI Adoption Without Clear ROI",
          description:
            "We identify high-impact use cases and design solutions that deliver measurable business outcomes, not experiments.",
        },
        {
          title: "Legacy Systems That Can't Leverage AI",
          description:
            "Crafting intuitive and engaging user experiences that blend aesthetics with usability.",
        },
        {
          title: "Unstructured & Fragmented Data",
          description:
            "We transform scattered documents, logs, and databases into AI-ready, searchable knowledge systems.",
        },
        {
          title: "Scaling AI from PoC to Production",
          description:
            "We engineer production-grade architectures with monitoring, cost control, and performance optimization.",
        },
        {
          title: "Security, Privacy & Regulatory Risks",
          description:
            "We embed governance, access control, and compliance (GDPR, SOC2, ISO) into every AI system.",
        },
        {
          title: "Unreliable Outputs & Hallucinations",
          description:
            "We apply retrieval, validation, guardrails, and evaluation frameworks to ensure trustworthy AI behavior.",
        },
      ],
    },
    commitment: {
      title: "Our commitment",
      description:
        "As an organization we are committed to deliver best practiced software solution to you. It's not only quality we maintain, It's commitment we have. Always!",
      cards: [
        {
          title: "Communication",
          description:
            "Our dedicated customer relationship managers will always keep you aware about your project and progress.",
          image: images.belowCard,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
          imageAlt: "Communication notification",
        },
        {
          title: "We don't hide",
          description:
            "We never lie or hide truth about development. We disclose every details about code structure and your engineering barriers.",
          image: images.belowContent,
          bg: images.belowBg1,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "Code transparency",
        },
        {
          title: "Growth Focused UX",
          description:
            "Our Growth focused UX ensures maximum scalability and ensures growth. We always surprises client with growth and result not with buggy UI at delivery!",
          image: images.belowUser,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "UX Designer profile",
        },
        {
          innerText: "Trust Netro Systems <br> because we care your money!",
          bg: images.belowBg,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
        },
      ],
    },
    deliverablesTitle: "WHAT WE DELIVER",
    deliverablesDescription:
      "Our services cover both greenfield AI builds and augmentation of existing platforms.",
    deliverables: [
      {
        title: "AI Application Development",
        description: "We design and build AI-native applications such as:",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "AI copilots & productivity agents",
          "Enterprise search & knowledge systems",
          "Recommendation & personalization engines",
          "Model orchestration & agent design",
          "Retrieval-Augmented Generation (RAG)",
          "Predictive analytics & forecasting models",
          "Document & contract intelligence (OCR + NLP)",
          "AI chat & voice contact automation",
          "Vector databases & embeddings",
          "Knowledge graph integration",
        ],
      },
      {
        title: "AI Integration for Existing Software",
        description:
          "We integrate AI into CRMs, ERPs, SaaS platforms, and proprietary systems without requiring full rewrites.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "AI onboarding flows inside existing products",
          "Automated ticket classification for support tools",
          "AI-generated insights inside analytics dashboards",
          "Intelligent recommendations for e-commerce platforms",
          "REST / GraphQL extension layers",
          "Microservices with async event buses",
          "Multi-model routing & fallback patterns",
          "Cloud-hosted MLOps pipelines (Azure, AWS, GCP)",
          "BYOM (Bring-Your-Own-Model) or vendor LLMs",
        ],
      },
      {
        title: "Autonomous & Multi-Agent Systems",
        description:
          "We build systems that execute tasks end-to-end with minimal human input:",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "DevOps task automation",
          "Procurement agents",
          "HR and recruiting automation",
          "Data enrichment & research agents",
          "Email + document triage",
          "Compliance & auditing automation",
          "Task decomposition & planning",
          "Multi-agent orchestration frameworks",
          "Latency-aware tool calling",
          "Workflow/state persistence",
        ],
      },
    ],
    content: `
      <h2>Transform Your Business with AI-Powered Solutions</h2>
      <p>At Netro, we specialize in integrating cutting-edge artificial intelligence into your products, workflows, and infrastructure. Our team of experienced AI engineers and data scientists work closely with you to identify opportunities where AI can drive meaningful business outcomes.</p>
      
      <h3>Our AI Development Services Include:</h3>
      <ul>
        <li><strong>Custom AI Model Development:</strong> Build tailored machine learning models that solve your specific business challenges</li>
        <li><strong>Natural Language Processing:</strong> Implement chatbots, sentiment analysis, and text processing solutions</li>
        <li><strong>Computer Vision:</strong> Develop image recognition, object detection, and visual inspection systems</li>
        <li><strong>Predictive Analytics:</strong> Leverage AI to forecast trends and make data-driven decisions</li>
        <li><strong>AI Integration:</strong> Seamlessly integrate AI capabilities into your existing applications and workflows</li>
      </ul>
      
      <p>We work with modern AI frameworks including TensorFlow, PyTorch, OpenAI, and more to deliver scalable, production-ready AI solutions. Whether you're looking to automate processes, enhance user experiences, or unlock insights from your data, we have the expertise to make it happen.</p>
    `,
    metaTitle: "AI-Powered Development Services | Netro Systems",
    metaDescription:
      "Integrate AI into your products with our end-to-end AI development services. Custom ML models, NLP, computer vision, and more.",
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription: "AI-Powered Software Engineering is not a generic software engineering service what we are offering. It&apos;s a complete AI solution for your business or startups.",
    atGlance: [
      {
        title: "DATA, MODELS & INFRASTRUCTURE",
        description: "Models & Foundation Model Support",
        items: [
          "We support open-source & closed-source models:",
          "OpenAI GPT-series",
          "Claude / Anthropic",
          "Meta Llama",
          "Google Gemini",
          "Mistral",
          "DeepSeek",
        ],
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance1,
      },
      {
        title: "DATA LAYER & STORAGE",
        description: "",
        items: [
          "Vector databases: Pinecone, Weaviate, Milvus, Chroma, pgvector",
          "KB setups: Neo4j, TypeDB, Elastic/Kibana",
          "Data lakes & warehouses: Snowflake, BigQuery, Databricks",
        ],
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance2,
      },
      {
        title: "AGENT & ORCHESTRATION FRAMEWORKS",
        description: "",
        items: [
          "LangChain / LangGraph",
          "LlamaIndex",
          "OpenAI Functions & Tools",
          "Azure AI Studio",
          "Workflow orchestrators (Temporal, Airflow, Prefect)",
        ],
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance3,
      },
      {
        title: "MLOPS & DEPLOYMENT",
        description: "",
        items: [
          "Model serving",
          "Autoscaling & inference optimization",
          "Fine-tuning & LoRA adapters",
          "Prompt & dataset evaluation",
          "CI/CD for ML pipelines",
          "Monitoring (latency, hallucination, costs)",
        ],
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance4,
      },
      {
        title: "SECURITY, COMPLIANCE & GOVERNANCE (CRITICAL FOR US/EU BUYERS)",
        description: "",
        items: [
          "GDPR & data locality",
          "SOC 2 & ISO-27001 alignment",
          "Audit logging & traceability",
          "PII redaction & anonymization",
          "Model guardrails & content filters",
          "Role-based access control",
        ],
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance5,
      },
    ],
    techStacks: [
      {
        icon: <PythonYellowIcon />,
        title: "Python",
        description:
          "Our primary language for AI and backend services due to its mature ecosystem and rapid development speed",
        color: "#FFC400",
      },
      {
        icon: <TSYellowIcon />,
        title: "TypeScript",
        description:
          "Used across frontend and backend to build scalable, maintainable applications.",
        color: "#3178C6",
      },
      {
        icon: <LLMYellowIcon />,
        title: "Large Language Models",
        description:
          "State-of-the-Art AI Models - We work with leading LLMs such as OpenAI, Anthropic, Meta, and Mistral.",
        color: "#FFC400",
      },
      {
        icon: <LangChainYellowIcon />,
        title: "LangChain & LlamaIndex",
        description:
          "LLM Workflow Orchestration - These frameworks help structure prompts, tools, and retrieval pipelines.",
        color: "#FFC400",
      },
      {
        icon: <PSQLYellowIcon />,
        title: "PostgreSQL",
        description:
          "A trusted relational database for transactional and structured data. Its extensibility supports modern AI.",
        color: "#336791",
      },
      {
        icon: <DBYellowIcon />,
        title: "Vector Databases",
        description:
          "Used for embedding storage and similarity search over unstructured data. They power accurate AI responses",
        color: "#FFC400",
      },
      {
        icon: <APIYellowIcon />,
        title: "FastAPI & NestJS",
        description:
          "Frameworks for building high-performance, cloud-native APIs. They enforce clean architecture and strong validation.",
        color: "#FFC400",
      },
      {
        icon: <ReactYellowIcon />,
        title: "React & Next.js",
        description:
          "Our preferred stack for fast, responsive, and SEO-friendly web applications. It integrates seamlessly with AI-driven features.",
        color: "#61DAFB",
      },
      {
        icon: <CloudYellowIcon />,
        title: "Cloud & Containerization",
        description:
          "We deploy using AWS, Azure, or GCP with Docker and Kubernetes. This ensures high availability, scalability, and compliance with regional requirements.",
        color: "#FFC400",
      },
    ],
  },
  {
    _id: "service-02",
    title: "SaaS, MVP Development",
    slug: "saas-development-sqa",
    subtitle: "Expertise over 5 years with 30+ apps",
    descTitle: "SaaS, MVP Development",
    description:
      "Building a SaaS product or MVP isn’t about writing the most code. It’s about validating the right idea quickly, engineering it properly, and setting yourself up to scale without painful rewrites later.",
    image: images.service2,
    featuredImage: images.saas,
    icon: <SAASMenuIcon color="#FF7036" />,
    link: "/services/saas-development-sqa",
    tags: [
      "SaaS Development",
      "MVP Development",
      "Software Quality Assurance",
      "Scalable Solutions",
    ],
    points: [
      "Transparency to your legacy operations",
      "Build with passion and professionalism",
      "Scalable that brings piece of mind",
    ],
    servicesOffer: {
      title: "What we offer",
      description:
        "Unified engineering for the AI era. From strategy and prototyping to production-grade rollouts, we help organizations:",
      data: [
        {
          title: "AI Consulting",
          desc: "Launch Scalable MVPs Faster",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer7,
        },
        {
          title: "AI Consulting",
          desc: "Design Scalable SaaS Platforms",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer9,
        },
        {
          title: "AI Consulting",
          desc: "Build Conversion-Focused UX",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer8,
        },
        {
          title: "AI Consulting",
          desc: "Integrate Essential SaaS Ecosystems",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer10,
        },
        {
          title: "AI Consulting",
          desc: "Cloud-Native Deployment & DevOps",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer5,
        },
        {
          title: "AI Consulting",
          desc: "Continuous Product Evolution",
          link: "/services/ai-consulting",
          featuredImage: images.serviceOffer3,
        },
      ],
    },
    commitment: {
      title: "Our commitment",
      description:
        "As an organization we are committed to deliver best practiced software solution to you. It's not only quality we maintain, It's commitment we have. Always!",
      cards: [
        {
          title: "Communication",
          description:
            "Our dedicated customer relationship managers will always keep you aware about your project and progress.",
          image: images.belowCard,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
          imageAlt: "Communication notification",
        },
        {
          title: "We don't hide",
          description:
            "We never lie or hide truth about development. We disclose every details about code structure and your engineering barriers.",
          image: images.belowContent,
          bg: images.belowBg1,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "Code transparency",
        },
        {
          title: "Growth Focused UX",
          description:
            "Our Growth focused UX ensures maximum scalability and ensures growth. We always surprises client with growth and result not with buggy UI at delivery!",
          image: images.belowUser,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "UX Designer profile",
        },
        {
          innerText: "Trust Netro Systems <br> because we care your money!",
          bg: images.belowBg,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
        },
      ],
    },
    relatedWorks: {
      title: "Related Works",
    },
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Turning ideas into reliable, scalable, and compliant software solutions.",
      challenges: [
        {
          title: "Overbuilding Before Validation",
          description:
            "Many startups invest heavily before proving demand.",
        },
        {
          title: "Scaling Issues Later",
          description:
            "Poor architecture leads to performance bottlenecks.",
        },
        {
          title: "Time-to-Market Pressure",
          description:
            "Delays can cost market opportunities.",
        },
        {
          title: "User Adoption & Retention",
          description:
            "Even good products fail without great UX.",
        },
      ],
    },
    deliverablesTitle: "WHAT WE DELIVER",
    deliverablesDescription:
      "Our services cover both greenfield AI builds and augmentation of existing platforms.",
    deliverables: [
      {
        title: "MVP & SaaS Product Development",
        description: "We design and build scalable SaaS products and MVPs that move from idea to launch quickly while ensuring long-term technical stability.",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "Rapid MVP development & validation",
          "SaaS web app and dashboard development",
          "Multi-tenant SaaS architecture design",
          "Subscription, billing & user management",
          "API-first backend systems",
          "Scalable cloud deployment",
          "Document & contract intelligence (OCR + NLP)",
        ],
      },
      {
        title: "SaaS Integration & Platform Expansion",
        description:
          "We extend existing platforms or new SaaS products with integrations, automation, and ecosystem connectivity for seamless growth.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "Third-party API integrations",
          "Payment gateway & subscription systems",
          "CRM, analytics & automation integrations",
          "Microservices & modular architecture",
          "Performance optimization & scaling",
          "Microservices with async event buses",
          "Multi-model routing & fallback patterns",
          "Cloud-hosted pipelines (Azure, AWS, GCP)",
        ],
      },
      {
        title: "Cloud, Security & Continuous Evolution",
        description:
          "We ensure your SaaS product stays secure, reliable, and ready to scale with ongoing optimization and infrastructure support.",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "Cloud-native deployment & DevOps",
          "CI/CD pipeline setup",
          "Security, compliance & access control",
          "Data enrichment & research agents",
          "Monitoring, logging & reliability engineering",
          "Feature enhancements & iteration support",
          "Long-term product scaling strategy",
        ],
      },
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription: "We help startups and enterprises move from concept to cloud-ready SaaS platforms with speed, clarity, and confidence.",
    atGlance: [
      {
        title: "PRODUCT STRATEGY & MVP DESIGN",
        description: "Models & Foundation Model Support",
        items: [
          "We help you build the right product from day one:",
          "MVP scoping & feature prioritization",
          "Product-market fit validation",
          "User journey mapping",
          "Rapid prototyping & wireframing",
          "UX-first SaaS architecture planning",
          "Business model & monetization strategy",
        ]
        ,
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance7,
      },
      {
        title: "APPLICATION ARCHITECTURE",
        description: "",
        items: [
          "We design scalable SaaS systems built for growth:",
          "Multi-tenant SaaS architecture design",
          "Modular, scalable backend systems",
          "API-first development approach",
          "Microservices or monolith strategy guidance",
          "Performance optimization planning",
          "Future scaling considerations built-in",
        ]
        ,
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance1,
      },
      {
        title: "FRONTEND & USER EXPERIENCE",
        description: "",
        items: [
          "We craft modern SaaS experiences users love:",
          "Responsive SaaS dashboards & portals",
          "Modern web app interfaces",
          "Intuitive onboarding experiences",
          "Accessibility-focused design",
          "Performance-driven UI development",
          "Cross-device compatibility",
        ]
        ,
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance4,
      },
      {
        title: "BACKEND, APIs & INTEGRATIONS",
        description: "",
        items: [
          "We build secure, integration-ready SaaS backends:",
          "Secure backend infrastructure",
          "REST & GraphQL API development",
          "Third-party integrations (payments, CRM, analytics)",
          "Authentication & authorization systems",
          "Workflow automation integrations",
          "Real-time data handling where needed",
        ]
        ,
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance9,
      },
      {
        title: "CLOUD, DEVOPS & DEPLOYMENT",
        description: "",
        items: [
          "We build secure, integration-ready SaaS backends:",
          "Secure backend infrastructure",
          "REST & GraphQL API development",
          "Third-party integrations (payments, CRM, analytics)",
          "Authentication & authorization systems",
          "Workflow automation integrations",
          "Real-time data handling where needed",
        ]
        ,
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance8,
      },
    ],
    techStacks: [
      {
        icon: <ReactYellowIcon />,
        title: "React & Next.js",
        description:
          "Builds fast, interactive UIs with reusable components for modern SaaS apps.",
        color: "#61DAFB",
      },
      {
        icon: <NodeJsYellowIcon />,
        title: "Node.js",
        description:
          "Fast, scalable runtime ideal for real-time apps and rapid SaaS development.",
        color: "#61DAFB",
      },
      {
        icon: <TSYellowIcon />,
        title: "TypeScript",
        description:
          "Used across frontend and backend to build scalable, maintainable applications.",
        color: "#3178C6",
      },
      {
        icon: <APIYellowIcon />,
        title: "FastAPI & NestJS",
        description:
          "Frameworks for building high-performance, cloud-native APIs.",
        color: "#FFC400",
      },
      {
        icon: <PythonYellowIcon />,
        title: "Python",
        description:
          "Our primary language for AI and backend services due to its mature ecosystem and rapid development speed",
        color: "#FFC400",
      },
      {
        icon: <MongoYellowIcon />,
        title: "MongoDB",
        description:
          "Flexible database that supports rapid MVP development and easy scaling.",
        color: "#336791",
      },

      {
        icon: <PSQLYellowIcon />,
        title: "PostgreSQL",
        description:
          "A trusted relational database for transactional and structured data. Its extensibility supports modern AI.",
        color: "#336791",
      },
      {
        icon: <KubernatesYellowIcon />,
        title: "Vector Databases",
        description:
          "Automates deployment and scaling, keeping applications reliable as they grow.",
        color: "#FFC400",
      },

      {
        icon: <CloudYellowIcon />,
        title: "Cloud & Containerization",
        description:
          "We deploy using AWS, Azure, or GCP with Docker and Kubernetes. This ensures high availability, scalability, and compliance with regional requirements.",
        color: "#FFC400",
      },
    ],
    content: `
      <h2>Build Scalable SaaS Products That Last</h2>
      <p>With over 5 years of experience and 30+ successful SaaS applications delivered, we understand what it takes to build products that scale. Our approach focuses on rapid validation, solid engineering practices, and long-term sustainability.</p>
      
      <h3>Our SaaS Development Process:</h3>
      <ul>
        <li><strong>Discovery & Planning:</strong> We work with you to define your product vision, identify core features, and create a roadmap</li>
        <li><strong>Architecture Design:</strong> Design scalable, secure, and maintainable system architecture from day one</li>
        <li><strong>Agile Development:</strong> Build your product iteratively with regular feedback cycles</li>
        <li><strong>Quality Assurance:</strong> Comprehensive testing including unit, integration, and end-to-end tests</li>
        <li><strong>Deployment & DevOps:</strong> Set up CI/CD pipelines, monitoring, and infrastructure automation</li>
        <li><strong>Ongoing Support:</strong> Provide maintenance, updates, and feature enhancements</li>
      </ul>
      
      <h3>Software Quality Assurance (SQA)</h3>
      <p>Quality is not an afterthought—it's built into every stage of development. Our SQA services ensure your SaaS product is reliable, secure, and performs optimally under real-world conditions.</p>
    `,
    metaTitle: "SaaS Development & Quality Assurance Services | Netro Systems",
    metaDescription:
      "Expert SaaS development with 5+ years experience. Build scalable, reliable products with comprehensive QA and testing.",
  },
  {
    _id: "service-03",
    title: "App Development",
    slug: "app-development",
    subtitle: "We develop apps with craftsmanship",
    descTitle: "App Development",
    description:
      "Great apps aren’t just about features—they’re about performance, usability, and reliability. We design and build mobile and web applications that feel intuitive, scale smoothly with tech stacks.",
    image: images.service3,
    featuredImage: images.appDev,
    icon: <UIMenuIcon color="#FF7036" />,
    link: "/services/app-development",
    tags: [
      "Mobile Apps",
      "iOS Development",
      "Android Development",
      "Cross-Platform",
    ],
    points: [
      "Clean architecture followed",
      "Works with any of your platform",
      "Scalable that brings piece of mind",
    ],
    servicesOffer: {
      title: "What we offer",
      description:
        "From native iOS and Android apps to cross-platform solutions, we build mobile experiences that users love:",
      data: [
        {
          title: "Native iOS Development",
          desc: "Build High-Performance Apps",
          link: "/services/app-development",
          featuredImage: images.serviceOffer10,
        },
        {
          title: "Native Android Development",
          desc: "Design User-First Experiences",
          link: "/services/app-development",
          featuredImage: images.serviceOffer11,
        },
        {
          title: "Cross-Platform Apps",
          desc: "Cross-Platform App Development",
          link: "/services/app-development",
          featuredImage: images.serviceOffer8,
        },
        {
          title: "Progressive Web Apps",
          desc: "Integrate Smart Features & APIs",
          link: "/services/app-development",
          featuredImage: images.serviceOffer12,
        },
        {
          title: "App Store Optimization",
          desc: "Continuous Improvement & Scaling",
          link: "/services/app-development",
          featuredImage: images.serviceOffer5,
        },
        {
          title: "App Maintenance",
          desc: "Cloud-Ready Deployment",
          link: "/services/app-development",
          featuredImage: images.serviceOffer17,
        },
      ],
    },
    relatedWorks: {
      title: "Related Works",
    },
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Turning ideas into reliable, scalable, and compliant software solutions.",
      challenges: [
        {
          title: "Overbuilding Before Validation",
          description:
            "Many startups invest heavily before proving demand.",
        },
        {
          title: "Scaling Issues Later",
          description:
            "Poor architecture leads to performance bottlenecks.",
        },
        {
          title: "Time-to-Market Pressure",
          description:
            "Delays can cost market opportunities.",
        },
        {
          title: "User Adoption & Retention",
          description:
            "Even good products fail without great UX.",
        },
      ],
    },
    commitment: {
      title: "Our commitment",
      description:
        "As an organization we are committed to deliver best practiced software solution to you. It's not only quality we maintain, It's commitment we have. Always!",
      cards: [
        {
          title: "Communication",
          description:
            "Our dedicated customer relationship managers will always keep you aware about your project and progress.",
          image: images.belowCard,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
          imageAlt: "Communication notification",
        },
        {
          title: "We don't hide",
          description:
            "We never lie or hide truth about development. We disclose every details about code structure and your engineering barriers.",
          image: images.belowContent,
          bg: images.belowBg1,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "Code transparency",
        },
        {
          title: "Growth Focused UX",
          description:
            "Our Growth focused UX ensures maximum scalability and ensures growth. We always surprises client with growth and result not with buggy UI at delivery!",
          image: images.belowUser,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "UX Designer profile",
        },
        {
          innerText: "Trust Netro Systems <br> because we care your money!",
          bg: images.belowBg,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
        },
      ],
    },
    deliverablesTitle: "WHAT WE DELIVER",
    deliverablesDescription:
      "Our mobile app development services cover the complete lifecycle from design to deployment and beyond.",
    deliverables: [
      {
        title: "Application Development",
        description: "We design and build modern, scalable applications tailored for performance, usability, and long-term maintainability.",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "Custom web & mobile application development",
          "Scalable frontend and backend architecture",
          "REST & GraphQL API development",
          "Cross-platform app development frameworks",
          "Secure authentication & user management",
          "Performance optimization and scalability planning",
        ],
      },
      {
        title: "Platform Integration & Modernization",
        description: "We enhance existing applications with modern integrations, automation, and architectural improvements without disrupting business operations.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "Third-party API & system integrations",
          "Legacy application modernization",
          "Cloud migration & containerization",
          "Microservices architecture adoption",
          "Data synchronization & middleware solutions",
          "Performance tuning and system optimization",
        ],
      },
      {
        title: "Cloud, DevOps & Continuous Delivery",
        description: "We ensure applications remain secure, reliable, and continuously evolving with modern DevOps practices and cloud-native infrastructure.",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "CI/CD pipeline implementation",
          "Cloud-native deployment (AWS, Azure, GCP)",
          "Containerization with Docker & Kubernetes",
          "Monitoring, logging & observability setup",
          "Security best practices & compliance readiness",
          "Continuous updates, scaling & maintenance",
        ],
      },
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription: "Mobile App Development today requires more than just coding — it demands performance, seamless user experience, scalability, and platform reliability.",
    atGlance: [
      {
        title: "APPLICATION ARCHITECTURE",
        description: "Mobile App Development today requires more than just coding — it demands performance, seamless user experience, scalability, and platform reliability.",
        items: [
          "Native & cross-platform mobile architecture",
          "Scalable mobile backend integration",
          "Offline-first and performance-driven design",
          "API-first mobile infrastructure",
          "Secure app session and data handling",
          "Future-ready scalability planning",
        ],
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance6,
      },
      {
        title: "DATA LAYER & STORAGE",
        description: "",
        items: [
          "Mobile-friendly database design",
          "Local storage & cloud synchronization",
          "Secure user data handling",
          "Real-time data integration",
          "Performance caching strategies",
          "Analytics-ready mobile data pipelines",
        ],
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance1,
      },
      {
        title: "FRAMEWORKS & DEVELOPMENT STACK",
        description: "",
        items: [
          "Native development (Swift, Kotlin)",
          "Cross-platform frameworks (Flutter, React Native)",
          "Mobile API integration & SDK development",
          "UI performance optimization frameworks",
          "Push notification & messaging integration",
          "Modular app development standards",
        ],
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance4,
      },
      {
        title: "DEVOPS & APP DEPLOYMENT",
        description: "",
        items: [
          "CI/CD for mobile app releases",
          "App Store & Play Store deployment support",
          "Beta testing workflows",
          "Cloud backend integration",
          "Crash monitoring & performance analytics",
          "Version control & update workflows",
          "Continuous app optimization",
        ],
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance10,
      },
      {
        title: "SECURITY, COMPLIANCE & RELIABILITY",
        description: "",
        items: [
          "Secure authentication & mobile encryption",
          "Compliance-ready mobile architecture",
          "Secure API communication",
          "App performance monitoring",
          "Data privacy best practices",
          "Long-term maintenance & support",
        ],
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance5,
      },
    ],

    techStacks: [
      {
        icon: <SwiftYellowIcon />,
        title: "Swift (iOS Native)",
        description:
          "Apple's native language for building high-performance, secure iOS applications with smooth UX.",
        color: "#FFC400",
      },
      {
        icon: <KotlinYellowIcon />,
        title: "Kotlin (Android Native)",
        description:
          "Modern Android development language offering reliability, speed, and strong Google ecosystem support.",
        color: "#FFC400",
      },
      {
        icon: <FlutterYellowIcon />,
        title: "Flutter",
        description:
          "Google's cross-platform framework for building fast, visually rich apps from a single codebase.",
        color: "#FFC400",
      },
      {
        icon: <ReactNativeYellowIcon />,
        title: "React Native",
        description:
          "Popular JavaScript framework for building iOS & Android apps with shared code and rapid development.",
        color: "#FFC400",
      },
      {
        icon: <NodeJsYellowIcon />,
        title: "Node.js Backend",
        description:
          "Scalable backend runtime ideal for real-time mobile apps, APIs, and cloud-connected services.",
        color: "#FFC400",
      },
      {
        icon: <FirebaseYellowIcon />,
        title: "Firebase",
        description:
          "Complete mobile backend platform with authentication, database, hosting, and analytics tools.",
        color: "#FFC400",
      },
      {
        icon: <AwsYellowIcon />,
        title: "AWS Mobile Services",
        description:
          "Cloud infrastructure for scalable app backends, storage, notifications, and deployment.",
        color: "#FFC400",
      },
      {
        icon: <MongoYellowIcon />,
        title: "MongoDB / NoSQL Databases",
        description:
          "Flexible database solutions suited for dynamic mobile data and rapid app scaling.",
        color: "#FFC400",
      },
      {
        icon: <APIYellowIcon />,
        title: "GraphQL / REST APIs",
        description:
          "Efficient data communication layers enabling smooth mobile app performance and integrations.",
        color: "#FFC400",
      },
    ],
    content: `
      <h2>Mobile Apps That Users Love</h2>
      <p>In today's mobile-first world, your app needs to be fast, intuitive, and reliable. We build native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.</p>
      
      <h3>Mobile Development Services:</h3>
      <ul>
        <li><strong>Native iOS Development:</strong> Swift and Objective-C apps optimized for Apple devices</li>
        <li><strong>Native Android Development:</strong> Kotlin and Java apps for Android ecosystem</li>
        <li><strong>Cross-Platform Development:</strong> React Native and Flutter apps that work everywhere</li>
        <li><strong>Progressive Web Apps:</strong> Web apps that feel like native mobile experiences</li>
        <li><strong>App Store Optimization:</strong> Help your app get discovered and downloaded</li>
        <li><strong>Maintenance & Updates:</strong> Keep your app running smoothly with ongoing support</li>
      </ul>
      
      <h3>Why Choose Us:</h3>
      <p>With years of experience and a proven portfolio of successful apps, we know what it takes to build mobile applications that users engage with daily. From initial concept to App Store submission and beyond, we're with you every step of the way.</p>
    `,
    metaTitle:
      "Mobile App Development Services | iOS & Android | Netro Systems",
    metaDescription:
      "Expert mobile app development for iOS and Android. Native and cross-platform apps built with years of proven expertise.",
  },
  {
    _id: "service-04",
    title: "Vibe Coding Assistance",
    slug: "vibe-coding-assistance",
    subtitle: "Quick yet MVP based to development",
    descTitle: "Vibe Coding Assistance",
    description:
      "Vibe Coding is our rapid MVP delivery approach designed for teams that need to move fast, validate ideas early, and get real user feedback—without sacrificing code quality or future scalability.",
    image: images.service4,
    featuredImage: images.vibeCode,
    icon: <VibeMenuIcon color="#8F73FF" />,
    link: "/services/vibe-coding-assistance",
    tags: [
      "AI Development",
      "MVP Development",
      "Rapid Prototyping",
      "SaaS Development",
    ],
    points: [
      "Quickest with the help of AI development",
      "Convert your idea into SaaS",
      "Show your investors, show to the world",
    ],
    servicesOffer: {
      title: "What we offer",
      description:
        "Vibe Coding Assistance goes beyond code generation — it combines AI-powered development workflows, intelligent tooling, and human expertise to accelerate software delivery while maintaining code quality and engineering standards.",
      data: [
        {
          title: "Faster Development",
          desc: "Faster development cycles",
          link: "/services/vibe-coding-assistance",
          featuredImage: images.serviceOffer13,
        },
        {
          title: "Clean Code",
          desc: "Reduced developer fatigue and Clean code",
          link: "/services/vibe-coding-assistance",
          featuredImage: images.serviceOffer14,
        },
        {
          title: "Engineering Visibility",
          desc: "Better engineering visibility",
          link: "/services/vibe-coding-assistance",
          featuredImage: images.serviceOffer15,
        },
        {
          title: "AI Support",
          desc: "AI-assisted coding & debugging support",
          link: "/services/vibe-coding-assistance",
          featuredImage: images.serviceOffer16,
        },
        {
          title: "Documentation",
          desc: "Automated documentation",
          link: "/services/vibe-coding-assistance",
          featuredImage: images.serviceOffer5,
        },
        {
          title: "Optimization",
          desc: "Continuous optimization",
          link: "/services/vibe-coding-assistance",
          featuredImage: images.serviceOffer17,
        },
      ],
    },
    relatedWorks: {
      title: "Related Works",
    },
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Turning ideas into reliable, scalable, and compliant software solutions.",
      challenges: [
        {
          title: "Overbuilding Before Validation",
          description:
            "Many startups invest heavily before proving demand.",
        },
        {
          title: "Scaling Issues Later",
          description:
            "Poor architecture leads to performance bottlenecks.",
        },
        {
          title: "Time-to-Market Pressure",
          description:
            "Delays can cost market opportunities.",
        },
        {
          title: "User Adoption & Retention",
          description:
            "Even good products fail without great UX.",
        },
      ],
    },
    commitment: {
      title: "Our commitment",
      description:
        "As an organization we are committed to deliver best practiced software solution to you. It's not only quality we maintain, It's commitment we have. Always!",
      cards: [
        {
          title: "Communication",
          description:
            "Our dedicated customer relationship managers will always keep you aware about your project and progress.",
          image: images.belowCard,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
          imageAlt: "Communication notification",
        },
        {
          title: "We don't hide",
          description:
            "We never lie or hide truth about development. We disclose every details about code structure and your engineering barriers.",
          image: images.belowContent,
          bg: images.belowBg1,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "Code transparency",
        },
        {
          title: "Growth Focused UX",
          description:
            "Our Growth focused UX ensures maximum scalability and ensures growth. We always surprises client with growth and result not with buggy UI at delivery!",
          image: images.belowUser,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "UX Designer profile",
        },
        {
          innerText: "Trust Netro Systems <br> because we care your money!",
          bg: images.belowBg,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
        },
      ],
    },
    deliverablesTitle: "WHAT WE DELIVER",
    deliverablesDescription:
      "Our AI-powered coding assistance transforms how you build software, from rapid prototyping to production-ready applications.",
    deliverables: [
      {
        title: "AI Integration for Development Workflows",
        description: "We integrate AI into your existing engineering ecosystem without disrupting your tools, pipelines, or processes.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "IDE, repo & CI/CD integration support",
          "Automated testing & troubleshooting assistance",
          "AI-powered ticket triage & issue classification",
          "Documentation and knowledge base automation",
          "DevOps workflow augmentation",
          "Secure integration with internal codebases",
          "AI-assisted release management insights",
          "Multi-model AI routing for coding tasks",
          "Cloud or on-prem deployment flexibility",
          "Developer collaboration enhancement tools",
        ],
      },
      {
        title: "Autonomous Coding & Engineering Assistance",
        description:
          "We build intelligent coding support systems that proactively assist teams across the entire software development lifecycle.",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "Automated code analysis & improvement suggestions",
          "Intelligent research & code discovery agents",
          "Continuous learning from your codebase",
          "Proactive bug detection & optimization hints",
          "Workflow automation for repetitive dev tasks",
          "Knowledge persistence across projects",
          "Engineering decision-support insights",
          "AI-assisted architectural recommendations",
          "Latency-aware developer tooling",
          "Human-AI collaborative coding environments",
        ],
      },
      {
        title: "AI-Powered Developer Productivity",
        description:
          "We accelerate software development by embedding AI assistance directly into coding workflows and developer environments.",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "AI-assisted coding, debugging & refactoring",
          "Context-aware code suggestions aligned with your stack",
          "Intelligent documentation generation",
          "Faster developer onboarding & knowledge transfer",
          "AI-assisted code reviews & quality checks",
          "Productivity analytics & engineering insights",
          "Coding standards enforcement automation",
          "Developer workflow optimization",
          "Reduced technical debt through smart refactoring",
          "Continuous developer experience improvements",
        ],
      },
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription: "Mobile App Development today requires more than just coding — it demands performance, seamless user experience, scalability, and platform reliability.",
    atGlance: [
      {
        title: "AI-ASSISTED DEVELOPMENT WORKFLOWS",
        description: "",
        items: [
          "AI-powered code completion & generation",
          "Intelligent refactoring and optimization",
          "Automated documentation assistance",
          "Rapid prototyping support",
          "Context-aware coding suggestions",
          "Developer productivity optimization",
        ],
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance3,
      },
      {
        title: "CODE QUALITY & ENGINEERING STANDARDS",
        description: "",
        items: [
          "Automated code reviews and linting",
          "Architecture pattern enforcement",
          "Secure coding best practices",
          "Code maintainability improvements",
          "Technical debt reduction strategies",
          "Continuous code quality monitoring",
        ],
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance1,
      },
      {
        title: "DEVELOPMENT TOOLING & INTEGRATIONS",
        description: "",
        items: [
          "AI coding assistants integration",
          "IDE and DevOps tool connectivity",
          "Repository and version control automation",
          "API development assistance",
          "Testing automation integration",
          "Workflow orchestration tools",
        ],
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance4,
      },
      {
        title: "CI/CD & DELIVERY ACCELERATION",
        description: "",
        items: [
          "Automated build and deployment pipelines",
          "Continuous integration optimization",
          "Test automation and validation flows",
          "Release management support",
          "Performance monitoring integration",
          "DevOps workflow automation",
        ],
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance10,
      },
      {
        title: "SECURITY, COMPLIANCE & GOVERNANCE",
        description: "",
        items: [
          "Secure AI coding practices",
          "Compliance-ready development workflows",
          "Code audit and traceability support",
          "Access control and governance policies",
          "Data protection in AI-assisted coding",
          "Responsible AI development standards",
        ],
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance5,
      },
    ],
    
    content: `
    <h2>Accelerate Development with AI-Powered Coding Assistance</h2>
    <p>Vibe Coding Assistance combines cutting-edge AI technology with proven development practices to help teams build faster without sacrificing quality. Whether you're validating an MVP or scaling production systems, our AI-powered approach keeps you moving at the speed of innovation.</p>
    
    <h3>Our AI Coding Services:</h3>
    <ul>
      <li><strong>AI Integration:</strong> Seamlessly integrate AI assistants into your existing development workflow</li>
      <li><strong>Autonomous Coding:</strong> Intelligent systems that proactively support your engineering team</li>
      <li><strong>Developer Productivity:</strong> AI-powered tools that accelerate coding, debugging, and refactoring</li>
      <li><strong>Code Quality:</strong> Automated reviews and best practice enforcement</li>
      <li><strong>CI/CD Enhancement:</strong> AI-assisted deployment and delivery optimization</li>
    </ul>
    
    <p>We leverage the latest AI coding tools including GitHub Copilot, Claude AI, and specialized developer agents to transform how your team builds software.</p>
  `,
    metaTitle: "AI-Powered Coding Assistance Services | Netro Systems",
    metaDescription:
      "Accelerate software development with AI coding assistance. Integrate intelligent tools into your workflow for faster, cleaner code delivery.",
  },
  {
    _id: "service-05",
    title: "SQA, Deployment & Support",
    slug: "sqa-deployment-support",
    subtitle: "We don't let you even after delivery",
    descTitle: "SQA, Deployment & Support",
    description:
      "Good design isn't just how a product looks. It's how it behaves, how easily users move through it, and how confidently they achieve their goals. We design user experiences that are intuitive, scalable, and aligned with real business outcomes.",
    image: images.service5,
    featuredImage: images.service5,
    icon: <SQAMenuIcon color="#FFC400" />,
    link: "/services/sqa-deployment-support",
    tags: ["UI/UX Design", "Product Design", "User Research", "Prototyping"],
    points: [
      "User-centered design approach",
      "Data-driven UX optimization",
      "Scalable design systems",
    ],
    servicesOffer: {
      title: "What we offer",
      description:
        "From user research to design systems, we create intuitive experiences that users love and that drive business results:",
      data: [
        {
          title: "User Research",
          desc: "Understand your users deeply",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer1,
        },
        {
          title: "Wireframing & IA",
          desc: "Structure content for clarity",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer2,
        },
        {
          title: "UI Design",
          desc: "Create beautiful, on-brand interfaces",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer3,
        },
        {
          title: "Prototyping",
          desc: "Test concepts before development",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer4,
        },
        {
          title: "Design Systems",
          desc: "Build scalable design foundations",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer5,
        },
        {
          title: "Usability Testing",
          desc: "Validate designs with real users",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer6,
        },
      ],
    },
    relatedWorks: {
      title: "Related Works",
    },
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Designing intuitive user experiences that drive engagement and business results.",
      challenges: [
        {
          title: "Poor User Adoption",
          description:
            "We conduct user research to understand needs and design experiences users love.",
        },
        {
          title: "Confusing Navigation",
          description:
            "Clear information architecture ensures users find what they need quickly.",
        },
        {
          title: "Inconsistent Design",
          description:
            "Design systems create consistency across your product and speed up development.",
        },
        {
          title: "Low Conversion Rates",
          description:
            "Data-driven UX optimization improves key metrics and business outcomes.",
        },
        {
          title: "Accessibility Issues",
          description:
            "WCAG-compliant designs ensure your product is usable by everyone.",
        },
        {
          title: "Developer Handoff Problems",
          description:
            "Detailed specs and design systems ensure pixel-perfect implementation.",
        },
      ],
    },
    commitment: {
      title: "Our commitment",
      description:
        "As an organization we are committed to deliver best practiced software solution to you. It's not only quality we maintain, It's commitment we have. Always!",
      cards: [
        {
          title: "Communication",
          description:
            "Our dedicated customer relationship managers will always keep you aware about your project and progress.",
          image: images.belowCard,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
          imageAlt: "Communication notification",
        },
        {
          title: "We don't hide",
          description:
            "We never lie or hide truth about development. We disclose every details about code structure and your engineering barriers.",
          image: images.belowContent,
          bg: images.belowBg1,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "Code transparency",
        },
        {
          title: "Growth Focused UX",
          description:
            "Our Growth focused UX ensures maximum scalability and ensures growth. We always surprises client with growth and result not with buggy UI at delivery!",
          image: images.belowUser,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "UX Designer profile",
        },
        {
          innerText: "Trust Netro Systems <br> because we care your money!",
          bg: images.belowBg,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
        },
      ],
    },
    deliverablesTitle: "WHAT WE DELIVER",
    deliverablesDescription:
      "Our design services create user experiences that are beautiful, intuitive, and drive measurable business outcomes.",
    deliverables: [
      {
        title: "User Research & Strategy",
        description: "We uncover user needs and behaviors to inform design decisions with data-driven insights.",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "User interviews and surveys",
          "Persona development",
          "User journey mapping",
          "Competitive analysis",
          "Analytics review and insights",
          "Heuristic evaluations",
          "Design strategy and roadmap",
          "Stakeholder workshops",
        ],
      },
      {
        title: "UI/UX Design & Prototyping",
        description:
          "We design beautiful, functional interfaces and validate them through interactive prototypes and testing.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "Information architecture",
          "Low and high-fidelity wireframes",
          "Visual design and UI mockups",
          "Interactive prototypes",
          "Micro-interactions and animations",
          "Responsive design for all devices",
          "Accessibility compliance (WCAG)",
          "Usability testing and iteration",
        ],
      },
      {
        title: "Design Systems & Handoff",
        description:
          "We create scalable design systems and ensure pixel-perfect implementation through detailed developer handoff.",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "Component libraries",
          "Design tokens and variables",
          "Style guides and documentation",
          "Pattern libraries",
          "Icon sets and illustrations",
          "Developer handoff specifications",
          "Design system governance",
          "Ongoing design support",
        ],
      },
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription: "We follow a user-centered design process that combines research, creativity, and validation to deliver exceptional experiences.",
    atGlance: [
      {
        title: "RESEARCH & DISCOVERY",
        description: "Understanding users and business goals",
        items: [
          "We start with deep user understanding:",
          "User interviews and surveys",
          "Analytics and data analysis",
          "Competitive research",
          "Persona development",
          "Journey mapping",
          "Pain point identification",
        ],
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance1,
      },
      {
        title: "INFORMATION ARCHITECTURE",
        description: "",
        items: [
          "We structure content for clarity:",
          "Content inventory and audit",
          "Site mapping and navigation",
          "User flow diagrams",
          "Content prioritization",
          "Taxonomy and labeling",
          "Card sorting exercises",
        ],
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance2,
      },
      {
        title: "WIREFRAMING & PROTOTYPING",
        description: "",
        items: [
          "We visualize concepts quickly:",
          "Low-fidelity sketches",
          "High-fidelity wireframes",
          "Interactive prototypes",
          "User flow prototypes",
          "Rapid iteration cycles",
          "Stakeholder feedback loops",
        ],
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance3,
      },
      {
        title: "VISUAL DESIGN",
        description: "",
        items: [
          "We create beautiful, on-brand UI:",
          "Visual design exploration",
          "Color and typography systems",
          "Component design",
          "Responsive layouts",
          "Iconography and illustrations",
          "Micro-interactions",
        ],
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance4,
      },
      {
        title: "TESTING & VALIDATION",
        description: "",
        items: [
          "We validate with real users:",
          "Usability testing sessions",
          "A/B testing setup",
          "Heatmaps and analytics",
          "Accessibility audits",
          "Design iteration based on feedback",
          "Post-launch optimization",
        ],
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance5,
      },
    ],
    techStacks: [
      {
        icon: <UIMenuIcon color="#FFC400" />,
        title: "Figma",
        description:
          "Our primary design tool for UI design, prototyping, and collaborative design work.",
        color: "#FFC400",
      },
      {
        icon: <UIMenuIcon color="#FFC400" />,
        title: "Adobe XD",
        description:
          "Vector-based design tool for creating prototypes and design systems.",
        color: "#FFC400",
      },
      {
        icon: <UIMenuIcon color="#FFC400" />,
        title: "Sketch",
        description:
          "Digital design toolkit for creating high-fidelity interfaces and assets.",
        color: "#FFC400",
      },
      {
        icon: <UIMenuIcon color="#FFC400" />,
        title: "InVision",
        description:
          "Prototyping and collaboration platform for user testing and stakeholder feedback.",
        color: "#FFC400",
      },
      {
        icon: <UIMenuIcon color="#FFC400" />,
        title: "Miro",
        description:
          "Collaborative whiteboard for workshops, journey mapping, and brainstorming.",
        color: "#FFC400",
      },
      {
        icon: <UIMenuIcon color="#FFC400" />,
        title: "Adobe Creative Suite",
        description:
          "Photoshop and Illustrator for advanced graphics and image editing.",
        color: "#FFC400",
      },
      {
        icon: <UIMenuIcon color="#FFC400" />,
        title: "Principle",
        description:
          "Animation tool for designing complex micro-interactions and transitions.",
        color: "#FFC400",
      },
      {
        icon: <UIMenuIcon color="#FFC400" />,
        title: "Maze",
        description:
          "User testing platform for rapid usability testing and feedback collection.",
        color: "#FFC400",
      },
    ],
    content: `
      <h2>Design That Drives Results</h2>
      <p>Great design is invisible—it just works. Our product design team creates intuitive, beautiful interfaces that users love and that drive measurable business results.</p>
      
      <h3>Our Design Process:</h3>
      <ul>
        <li><strong>User Research:</strong> Understand your users through interviews, surveys, and analytics</li>
        <li><strong>Information Architecture:</strong> Structure content and features in a way that makes sense</li>
        <li><strong>Wireframing:</strong> Create low-fidelity layouts to test concepts quickly</li>
        <li><strong>UI Design:</strong> Design beautiful, on-brand interfaces with attention to detail</li>
        <li><strong>Prototyping:</strong> Build interactive prototypes for testing and validation</li>
        <li><strong>Usability Testing:</strong> Validate designs with real users before development</li>
        <li><strong>Design Systems:</strong> Create scalable design systems for consistency across products</li>
      </ul>
      
      <h3>What Sets Us Apart:</h3>
      <p>We don't just make things look pretty—we solve problems. Every design decision is backed by research, tested with users, and measured against business goals. We work closely with developers to ensure designs are implemented pixel-perfect.</p>
    `,
    metaTitle: "UI/UX Design & Product Design Services | Netro Systems",
    metaDescription:
      "Expert UI/UX design services. Create intuitive, beautiful products that users love and that drive business results.",
  },
  {
    _id: "service-06",
    title: "UI/UX Design",
    slug: "ui-ux-design",
    subtitle: "Years of expertise and proven portfolio",
    descTitle: "UI/UX Design",
    description:
      "Great apps aren’t just about features—they’re about performance, usability, and reliability. We design and build mobile and web applications that feel intuitive, scale smoothly with tech stacks.",
    image: images.service6,
    featuredImage: images.appDev,
    icon: <UIMenuIcon color="#FF7036" />,
    link: "/services/ui-ux-design",
    tags: [
      "Mobile Apps",
      "iOS Development",
      "Android Development",
      "Cross-Platform",
    ],
    points: [
      "Clean architecture followed",
      "Works with any of your platform",
      "Scalable that brings piece of mind",
    ],
    servicesOffer: {
      title: "What we offer",
      description:
        "From user research to design systems, we create intuitive experiences that users love and that drive business results:",
      data: [
        {
          title: "User Research",
          desc: "Understand your users deeply",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer1,
        },
        {
          title: "Wireframing & IA",
          desc: "Structure content for clarity",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer2,
        },
        {
          title: "UI Design",
          desc: "Create beautiful, on-brand interfaces",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer3,
        },
        {
          title: "Prototyping",
          desc: "Test concepts before development",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer4,
        },
        {
          title: "Design Systems",
          desc: "Build scalable design foundations",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer5,
        },
        {
          title: "Usability Testing",
          desc: "Validate designs with real users",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer6,
        },
      ],
    },
    relatedWorks: {
      title: "Related Works",
    },
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Turning ideas into reliable, scalable, and compliant software solutions.",
      challenges: [
        {
          title: "Overbuilding Before Validation",
          description:
            "Many startups invest heavily before proving demand.",
        },
        {
          title: "Scaling Issues Later",
          description:
            "Poor architecture leads to performance bottlenecks.",
        },
        {
          title: "Time-to-Market Pressure",
          description:
            "Delays can cost market opportunities.",
        },
        {
          title: "User Adoption & Retention",
          description:
            "Even good products fail without great UX.",
        },
      ],
    },
    commitment: {
      title: "Our commitment",
      description:
        "As an organization we are committed to deliver best practiced software solution to you. It's not only quality we maintain, It's commitment we have. Always!",
      cards: [
        {
          title: "Communication",
          description:
            "Our dedicated customer relationship managers will always keep you aware about your project and progress.",
          image: images.belowCard,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
          imageAlt: "Communication notification",
        },
        {
          title: "We don't hide",
          description:
            "We never lie or hide truth about development. We disclose every details about code structure and your engineering barriers.",
          image: images.belowContent,
          bg: images.belowBg1,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "Code transparency",
        },
        {
          title: "Growth Focused UX",
          description:
            "Our Growth focused UX ensures maximum scalability and ensures growth. We always surprises client with growth and result not with buggy UI at delivery!",
          image: images.belowUser,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "UX Designer profile",
        },
        {
          innerText: "Trust Netro Systems <br> because we care your money!",
          bg: images.belowBg,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
        },
      ],
    },
    deliverablesTitle: "WHAT WE DELIVER",
    deliverablesDescription:
      "Our mobile app development services cover the complete lifecycle from design to deployment and beyond.",
    deliverables: [
      {
        title: "Application Development",
        description: "We design and build modern, scalable applications tailored for performance, usability, and long-term maintainability.",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "Custom web & mobile application development",
          "Scalable frontend and backend architecture",
          "REST & GraphQL API development",
          "Cross-platform app development frameworks",
          "Secure authentication & user management",
          "Performance optimization and scalability planning",
        ],
      },
      {
        title: "Platform Integration & Modernization",
        description: "We enhance existing applications with modern integrations, automation, and architectural improvements without disrupting business operations.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "Third-party API & system integrations",
          "Legacy application modernization",
          "Cloud migration & containerization",
          "Microservices architecture adoption",
          "Data synchronization & middleware solutions",
          "Performance tuning and system optimization",
        ],
      },
      {
        title: "Cloud, DevOps & Continuous Delivery",
        description: "We ensure applications remain secure, reliable, and continuously evolving with modern DevOps practices and cloud-native infrastructure.",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "CI/CD pipeline implementation",
          "Cloud-native deployment (AWS, Azure, GCP)",
          "Containerization with Docker & Kubernetes",
          "Monitoring, logging & observability setup",
          "Security best practices & compliance readiness",
          "Continuous updates, scaling & maintenance",
        ],
      },
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription: "Mobile App Development today requires more than just coding — it demands performance, seamless user experience, scalability, and platform reliability.",
    atGlance: [
      {
        title: "APPLICATION ARCHITECTURE",
        description: "Mobile App Development today requires more than just coding — it demands performance, seamless user experience, scalability, and platform reliability.",
        items: [
          "Native & cross-platform mobile architecture",
          "Scalable mobile backend integration",
          "Offline-first and performance-driven design",
          "API-first mobile infrastructure",
          "Secure app session and data handling",
          "Future-ready scalability planning",
        ],
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance6,
      },
      {
        title: "DATA LAYER & STORAGE",
        description: "",
        items: [
          "Mobile-friendly database design",
          "Local storage & cloud synchronization",
          "Secure user data handling",
          "Real-time data integration",
          "Performance caching strategies",
          "Analytics-ready mobile data pipelines",
        ],
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance1,
      },
      {
        title: "FRAMEWORKS & DEVELOPMENT STACK",
        description: "",
        items: [
          "Native development (Swift, Kotlin)",
          "Cross-platform frameworks (Flutter, React Native)",
          "Mobile API integration & SDK development",
          "UI performance optimization frameworks",
          "Push notification & messaging integration",
          "Modular app development standards",
        ],
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance4,
      },
      {
        title: "DEVOPS & APP DEPLOYMENT",
        description: "",
        items: [
          "CI/CD for mobile app releases",
          "App Store & Play Store deployment support",
          "Beta testing workflows",
          "Cloud backend integration",
          "Crash monitoring & performance analytics",
          "Version control & update workflows",
          "Continuous app optimization",
        ],
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance10,
      },
      {
        title: "SECURITY, COMPLIANCE & RELIABILITY",
        description: "",
        items: [
          "Secure authentication & mobile encryption",
          "Compliance-ready mobile architecture",
          "Secure API communication",
          "App performance monitoring",
          "Data privacy best practices",
          "Long-term maintenance & support",
        ],
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance5,
      },
    ],

    techStacks: [
      {
        icon: <SwiftYellowIcon />,
        title: "Swift (iOS Native)",
        description:
          "Apple's native language for building high-performance, secure iOS applications with smooth UX.",
        color: "#FFC400",
      },
      {
        icon: <KotlinYellowIcon />,
        title: "Kotlin (Android Native)",
        description:
          "Modern Android development language offering reliability, speed, and strong Google ecosystem support.",
        color: "#FFC400",
      },
      {
        icon: <FlutterYellowIcon />,
        title: "Flutter",
        description:
          "Google's cross-platform framework for building fast, visually rich apps from a single codebase.",
        color: "#FFC400",
      },
      {
        icon: <ReactNativeYellowIcon />,
        title: "React Native",
        description:
          "Popular JavaScript framework for building iOS & Android apps with shared code and rapid development.",
        color: "#FFC400",
      },
      {
        icon: <NodeJsYellowIcon />,
        title: "Node.js Backend",
        description:
          "Scalable backend runtime ideal for real-time mobile apps, APIs, and cloud-connected services.",
        color: "#FFC400",
      },
      {
        icon: <FirebaseYellowIcon />,
        title: "Firebase",
        description:
          "Complete mobile backend platform with authentication, database, hosting, and analytics tools.",
        color: "#FFC400",
      },
      {
        icon: <AwsYellowIcon />,
        title: "AWS Mobile Services",
        description:
          "Cloud infrastructure for scalable app backends, storage, notifications, and deployment.",
        color: "#FFC400",
      },
      {
        icon: <MongoYellowIcon />,
        title: "MongoDB / NoSQL Databases",
        description:
          "Flexible database solutions suited for dynamic mobile data and rapid app scaling.",
        color: "#FFC400",
      },
      {
        icon: <APIYellowIcon />,
        title: "GraphQL / REST APIs",
        description:
          "Efficient data communication layers enabling smooth mobile app performance and integrations.",
        color: "#FFC400",
      },
    ],
    content: `
      <h2>Mobile Apps That Users Love</h2>
      <p>In today's mobile-first world, your app needs to be fast, intuitive, and reliable. We build native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android.</p>
      
      <h3>Mobile Development Services:</h3>
      <ul>
        <li><strong>Native iOS Development:</strong> Swift and Objective-C apps optimized for Apple devices</li>
        <li><strong>Native Android Development:</strong> Kotlin and Java apps for Android ecosystem</li>
        <li><strong>Cross-Platform Development:</strong> React Native and Flutter apps that work everywhere</li>
        <li><strong>Progressive Web Apps:</strong> Web apps that feel like native mobile experiences</li>
        <li><strong>App Store Optimization:</strong> Help your app get discovered and downloaded</li>
        <li><strong>Maintenance & Updates:</strong> Keep your app running smoothly with ongoing support</li>
      </ul>
      
      <h3>Why Choose Us:</h3>
      <p>With years of experience and a proven portfolio of successful apps, we know what it takes to build mobile applications that users engage with daily. From initial concept to App Store submission and beyond, we're with you every step of the way.</p>
    `,
    metaTitle:
      "Mobile App Development Services | iOS & Android | Netro Systems",
    metaDescription:
      "Expert mobile app development for iOS and Android. Native and cross-platform apps built with years of proven expertise.",
  },
  {
    _id: "service-07",
    title: "Branding & Stationery",
    slug: "branding-stationery",
    subtitle: "We build visually appealing brands",
    descTitle: "Brand Identity Design",
    description:
      "Good design isn't just how a product looks. It's how it behaves, how easily users move through it, and how confidently they achieve their goals. We design user experiences that are intuitive, scalable, and aligned with real business outcomes.",
    image: images.service7,
    featuredImage: images.service7,
    icon: <BrandingMenuIcon color="#7AD58D" />,
    link: "/services/branding-stationery",
    tags: [
      "Brand Identity",
      "Logo Design",
      "Visual Identity",
      "Brand Strategy",
    ],
    points: [
      "Memorable brand identities",
      "Consistent brand systems",
      "Professional visual presence",
    ],
    servicesOffer: {
      title: "What we offer",
      description:
        "From brand strategy to complete visual identity systems, we create brands that resonate and endure:",
      data: [
        {
          title: "Brand Strategy",
          desc: "Define positioning and messaging",
          link: "/services/branding-stationery",
          featuredImage: images.serviceOffer1,
        },
        {
          title: "Logo Design",
          desc: "Create memorable brand marks",
          link: "/services/branding-stationery",
          featuredImage: images.serviceOffer2,
        },
        {
          title: "Visual Identity",
          desc: "Develop complete brand systems",
          link: "/services/branding-stationery",
          featuredImage: images.serviceOffer3,
        },
        {
          title: "Brand Guidelines",
          desc: "Document brand usage standards",
          link: "/services/branding-stationery",
          featuredImage: images.serviceOffer4,
        },
        {
          title: "Stationery Design",
          desc: "Design professional business materials",
          link: "/services/branding-stationery",
          featuredImage: images.serviceOffer5,
        },
        {
          title: "Marketing Collateral",
          desc: "Create branded marketing assets",
          link: "/services/branding-stationery",
          featuredImage: images.serviceOffer6,
        },
      ],
    },
    relatedWorks: {
      title: "Related Works",
    },
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Creating memorable brand identities that connect with audiences and drive recognition.",
      challenges: [
        {
          title: "Lack of Brand Recognition",
          description:
            "A strong visual identity makes your brand memorable and distinguishable from competitors.",
        },
        {
          title: "Inconsistent Brand Presence",
          description:
            "Comprehensive brand guidelines ensure consistency across all touchpoints.",
        },
        {
          title: "Unprofessional Appearance",
          description:
            "Professional stationery and marketing materials build trust and credibility.",
        },
        {
          title: "Unclear Brand Message",
          description:
            "Strategic brand positioning clarifies what you stand for and who you serve.",
        },
        {
          title: "Limited Visual Assets",
          description:
            "Complete brand packages include logos, colors, typography, and templates.",
        },
        {
          title: "Rebranding Complexity",
          description:
            "We manage smooth brand transitions that maintain customer trust and recognition.",
        },
      ],
    },
    commitment: {
      title: "Our commitment",
      description:
        "As an organization we are committed to deliver best practiced software solution to you. It's not only quality we maintain, It's commitment we have. Always!",
      cards: [
        {
          title: "Communication",
          description:
            "Our dedicated customer relationship managers will always keep you aware about your project and progress.",
          image: images.belowCard,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
          imageAlt: "Communication notification",
        },
        {
          title: "We don't hide",
          description:
            "We never lie or hide truth about development. We disclose every details about code structure and your engineering barriers.",
          image: images.belowContent,
          bg: images.belowBg1,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "Code transparency",
        },
        {
          title: "Growth Focused UX",
          description:
            "Our Growth focused UX ensures maximum scalability and ensures growth. We always surprises client with growth and result not with buggy UI at delivery!",
          image: images.belowUser,
          bgColor: "#86C9FF",
          textColor: "#3654FF",
          imageAlt: "UX Designer profile",
        },
        {
          innerText: "Trust Netro Systems <br> because we care your money!",
          bg: images.belowBg,
          bgColor: "#3654FF",
          textColor: "#86C9FF",
        },
      ],
    },
    deliverablesTitle: "WHAT WE DELIVER",
    deliverablesDescription:
      "Our branding services create cohesive visual identities that build recognition, trust, and lasting impressions.",
    deliverables: [
      {
        title: "Brand Strategy & Identity",
        description: "We define your brand positioning and create visual identities that authentically represent who you are.",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "Brand discovery workshops",
          "Competitive analysis",
          "Brand positioning strategy",
          "Brand personality and voice",
          "Messaging framework",
          "Tagline and value proposition",
          "Target audience definition",
          "Brand architecture planning",
        ],
      },
      {
        title: "Logo & Visual Identity Design",
        description:
          "We design memorable logos and comprehensive visual systems that work across all touchpoints.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "Logo design concepts and refinement",
          "Color palette development",
          "Typography system",
          "Icon and symbol set",
          "Pattern and texture library",
          "Photography and image guidance",
          "Logo variations and lockups",
          "Print and digital file formats",
        ],
      },
      {
        title: "Brand Guidelines & Applications",
        description:
          "We document your brand standards and apply them across business materials for consistent brand presence.",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "Comprehensive brand guidelines",
          "Business card design",
          "Letterhead and envelope design",
          "Email signature templates",
          "Presentation templates",
          "Social media templates",
          "Marketing collateral design",
          "Packaging design (if applicable)",
        ],
      },
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription: "We create distinctive brand identities through strategic thinking and thoughtful design that resonates with your audience.",
    atGlance: [
      {
        title: "BRAND STRATEGY",
        description: "Foundation for strong brands",
        items: [
          "We define your brand foundation:",
          "Discovery and research",
          "Competitive landscape analysis",
          "Brand positioning strategy",
          "Brand personality and attributes",
          "Value proposition development",
          "Messaging framework",
        ],
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance1,
      },
      {
        title: "LOGO DESIGN",
        description: "",
        items: [
          "We create memorable brand marks:",
          "Concept exploration",
          "Multiple design directions",
          "Logo refinement and testing",
          "Scalability testing",
          "Black and white versions",
          "Logo variation lockups",
        ],
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance2,
      },
      {
        title: "VISUAL IDENTITY SYSTEM",
        description: "",
        items: [
          "We build comprehensive brand systems:",
          "Color palette development",
          "Typography and font pairings",
          "Iconography and symbols",
          "Patterns and textures",
          "Photography style",
          "Graphic element library",
        ],
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance3,
      },
      {
        title: "BRAND GUIDELINES",
        description: "",
        items: [
          "We document brand standards:",
          "Logo usage rules",
          "Color specifications",
          "Typography guidelines",
          "Dos and don'ts",
          "Application examples",
          "Digital and print specifications",
        ],
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance4,
      },
      {
        title: "BRAND APPLICATIONS",
        description: "",
        items: [
          "We apply your brand consistently:",
          "Business stationery design",
          "Marketing collateral",
          "Digital templates",
          "Social media assets",
          "Presentation designs",
          "Signage and environmental graphics",
        ],
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance5,
      },
    ],
    techStacks: [
      {
        icon: <BrandingMenuIcon color="#FFC400" />,
        title: "Adobe Illustrator",
        description:
          "Industry-standard vector graphics software for logo and icon design.",
        color: "#FFC400",
      },
      {
        icon: <BrandingMenuIcon color="#FFC400" />,
        title: "Adobe Photoshop",
        description:
          "Professional image editing for photo manipulation and digital artwork.",
        color: "#FFC400",
      },
      {
        icon: <BrandingMenuIcon color="#FFC400" />,
        title: "Adobe InDesign",
        description:
          "Page layout software for creating marketing materials and brand guidelines.",
        color: "#FFC400",
      },
      {
        icon: <BrandingMenuIcon color="#FFC400" />,
        title: "Figma",
        description:
          "Collaborative design tool for creating digital brand assets and templates.",
        color: "#FFC400",
      },
      {
        icon: <BrandingMenuIcon color="#FFC400" />,
        title: "Adobe After Effects",
        description:
          "Motion graphics software for animated logo reveals and brand videos.",
        color: "#FFC400",
      },
      {
        icon: <BrandingMenuIcon color="#FFC400" />,
        title: "Sketch",
        description:
          "Digital design toolkit for creating scalable brand assets.",
        color: "#FFC400",
      },
      {
        icon: <BrandingMenuIcon color="#FFC400" />,
        title: "Pantone",
        description:
          "Color matching system for accurate brand color reproduction across media.",
        color: "#FFC400",
      },
      {
        icon: <BrandingMenuIcon color="#FFC400" />,
        title: "Adobe Fonts",
        description:
          "Typography library for selecting and licensing brand fonts.",
        color: "#FFC400",
      },
    ],
    content: `
      <h2>Build a Brand That Stands Out</h2>
      <p>Your brand is more than just a logo—it's the complete experience your customers have with your company. We create comprehensive brand identities that tell your story and connect with your audience.</p>
      
      <h3>Branding Services:</h3>
      <ul>
        <li><strong>Brand Strategy:</strong> Define your brand positioning, values, and messaging</li>
        <li><strong>Logo Design:</strong> Create memorable, versatile logos that represent your brand</li>
        <li><strong>Visual Identity:</strong> Develop color palettes, typography, and visual systems</li>
        <li><strong>Brand Guidelines:</strong> Document how to use your brand consistently</li>
        <li><strong>Business Stationery:</strong> Business cards, letterheads, envelopes, and more</li>
        <li><strong>Marketing Materials:</strong> Brochures, flyers, presentations, and social media templates</li>
        <li><strong>Packaging Design:</strong> Product packaging that attracts and informs</li>
      </ul>
      
      <p>Whether you're a startup building your brand from scratch or an established company looking for a refresh, we'll help you create a visual identity that resonates with your target audience and sets you apart from the competition.</p>
    `,
    metaTitle: "Branding & Stationery Design Services | Netro Systems",
    metaDescription:
      "Professional branding and stationery design. Create a memorable visual identity that stands out and connects with your audience.",
  },
]);
