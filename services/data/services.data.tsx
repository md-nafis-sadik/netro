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
    // points: [
    //   "Automate work and reduce cost",
    //   "Build AI-driven products and features",
    //   "Extend legacy systems",
    // ],
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
    atGlanceDescription:
      "AI-Powered Software Engineering is not a generic software engineering service what we are offering. It&apos;s a complete AI solution for your business or startups.",
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
    // points: [
    //   "Transparency to your legacy operations",
    //   "Build with passion and professionalism",
    //   "Scalable that brings piece of mind",
    // ],
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
          description: "Many startups invest heavily before proving demand.",
        },
        {
          title: "Scaling Issues Later",
          description: "Poor architecture leads to performance bottlenecks.",
        },
        {
          title: "Time-to-Market Pressure",
          description: "Delays can cost market opportunities.",
        },
        {
          title: "User Adoption & Retention",
          description: "Even good products fail without great UX.",
        },
      ],
    },
    deliverablesTitle: "WHAT WE DELIVER",
    deliverablesDescription:
      "Our services cover both greenfield AI builds and augmentation of existing platforms.",
    deliverables: [
      {
        title: "MVP & SaaS Product Development",
        description:
          "We design and build scalable SaaS products and MVPs that move from idea to launch quickly while ensuring long-term technical stability.",
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
    atGlanceDescription:
      "We help startups and enterprises move from concept to cloud-ready SaaS platforms with speed, clarity, and confidence.",
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
        ],
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
        ],
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
        ],
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
        ],
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
        ],
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
    // points: [
    //   "Clean architecture followed",
    //   "Works with any of your platform",
    //   "Scalable that brings piece of mind",
    // ],
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
          desc: "Cloud-Ready Deployment",
          link: "/services/app-development",
          featuredImage: images.serviceOffer5,
        },
        {
          title: "App Maintenance",
          desc: "Continuous Improvement & Scaling",
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
          description: "Many startups invest heavily before proving demand.",
        },
        {
          title: "Scaling Issues Later",
          description: "Poor architecture leads to performance bottlenecks.",
        },
        {
          title: "Time-to-Market Pressure",
          description: "Delays can cost market opportunities.",
        },
        {
          title: "User Adoption & Retention",
          description: "Even good products fail without great UX.",
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
        description:
          "We design and build modern, scalable applications tailored for performance, usability, and long-term maintainability.",
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
        description:
          "We enhance existing applications with modern integrations, automation, and architectural improvements without disrupting business operations.",
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
        description:
          "We ensure applications remain secure, reliable, and continuously evolving with modern DevOps practices and cloud-native infrastructure.",
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
    atGlanceDescription:
      "Mobile App Development today requires more than just coding — it demands performance, seamless user experience, scalability, and platform reliability.",
    atGlance: [
      {
        title: "APPLICATION ARCHITECTURE",
        description:
          "Mobile App Development today requires more than just coding — it demands performance, seamless user experience, scalability, and platform reliability.",
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
    image: images.service5,
    featuredImage: images.vibeCode,
    icon: <VibeMenuIcon color="#8F73FF" />,
    link: "/services/vibe-coding-assistance",
    tags: [
      "AI Development",
      "MVP Development",
      "Rapid Prototyping",
      "SaaS Development",
    ],
    // points: [
    //   "Quickest with the help of AI development",
    //   "Convert your idea into SaaS",
    //   "Show your investors, show to the world",
    // ],
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
          description: "Many startups invest heavily before proving demand.",
        },
        {
          title: "Scaling Issues Later",
          description: "Poor architecture leads to performance bottlenecks.",
        },
        {
          title: "Time-to-Market Pressure",
          description: "Delays can cost market opportunities.",
        },
        {
          title: "User Adoption & Retention",
          description: "Even good products fail without great UX.",
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
      {
        title: "AI Integration for Development Workflows",
        description:
          "We integrate AI into your existing engineering ecosystem without disrupting your tools, pipelines, or processes.",
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
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription:
      "Mobile App Development today requires more than just coding — it demands performance, seamless user experience, scalability, and platform reliability.",
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
    title: "SQA, Deployment",
    slug: "sqa-deployment-support",
    subtitle: "We don't let you even after delivery",
    descTitle: "SQA, Deployment",
    description:
      "Great software isn't just built—it's tested, deployed, monitored, and supported in the real world. We help teams make sure their applications are reliable, secure, and ready for growth long after the first release.",
    image: images.service4,
    featuredImage: images.sqaDep,
    icon: <SQAMenuIcon color="#FFC400" />,
    link: "/services/sqa-deployment-support",
    tags: ["Quality Assurance", "Testing", "Deployment", "DevOps"],
    servicesOffer: {
      title: "What we offer",
      description:
        "Reliable software doesn't stop at development. We ensure your applications are thoroughly tested, smoothly deployed, continuously monitored, and fully supported — so they perform consistently, scale confidently, and deliver long-term value.",
      data: [
        {
          title: "Quality Assurance",
          desc: "Quality Assurance & Testing",
          link: "/services/sqa-deployment-support",
          featuredImage: images.serviceFrame1,
        },
        {
          title: "CI/CD & Deployment",
          desc: "CI/CD & Deployment Automation",
          link: "/services/sqa-deployment-support",
          featuredImage: images.serviceFrame2,
        },
        {
          title: "Performance Monitoring",
          desc: "Performance & Security Monitoring",
          link: "/services/sqa-deployment-support",
          featuredImage: images.serviceOffer15,
        },
        {
          title: "Release Management",
          desc: "Release Management & Optimization",
          link: "/services/sqa-deployment-support",
          featuredImage: images.serviceOffer16,
        },
        {
          title: "Post-Launch Support",
          desc: "Post-Launch Support & Reliability",
          link: "/services/sqa-deployment-support",
          featuredImage: images.serviceOffer5,
        },
      ],
    },
    relatedWorks: {
      title: "Related Works",
    },
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Ensuring software reliability, security, and performance requires comprehensive testing, smooth deployment, and continuous operational support.",
      challenges: [
        {
          title: "Untested Software Releases",
          description:
            "Comprehensive testing strategies catch issues before they reach users.",
        },
        {
          title: "Deployment Failures & Downtime",
          description:
            "Automated CI/CD pipelines ensure smooth, repeatable releases.",
        },
        {
          title: "Performance & Security Vulnerabilities",
          description:
            "Continuous monitoring identifies and resolves issues proactively.",
        },
        {
          title: "Lack of Post-Launch Support",
          description:
            "Ongoing maintenance keeps systems reliable and optimized long-term.",
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
      "We ensure your software performs reliably beyond development — through structured testing, seamless deployment, and continuous operational support that keeps your product stable, secure, and ready to scale.",
    deliverables: [
      {
        title: "Quality Assurance & Testing",
        description:
          "We design comprehensive testing strategies to ensure your software performs flawlessly before release.",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "Functional, regression, and integration testing",
          "Automated test pipelines for faster releases",
          "Performance and load testing",
          "Security and vulnerability testing",
          "Usability and cross-platform validation",
        ],
      },
      {
        title: "Deployment & Release Engineering",
        description:
          "We streamline deployment processes so your releases are smooth, repeatable, and risk-free.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "CI/CD pipeline setup and optimization",
          "Cloud, on-premise, and hybrid deployments",
          "Version control and release management",
          "Rollback and disaster recovery planning",
          "Infrastructure and environment configuration",
        ],
      },
      {
        title: "Monitoring, Maintenance & Support",
        description:
          "We provide ongoing oversight and improvements to keep your systems reliable long after launch.",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "Performance monitoring and alerting",
          "Security monitoring and compliance checks",
          "Bug fixing and stability enhancements",
          "System optimization and updates",
          "Continuous operational support",
        ],
      },
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription:
      "Delivering reliable software requires more than development — it demands rigorous testing, seamless deployment, continuous monitoring, and strong operational support to ensure performance, security, and long-term scalability.",
    atGlance: [
      {
        title: "QUALITY ASSURANCE & TESTING EXCELLENCE",
        description: "",
        items: [
          "Functional, regression, and integration testing",
          "Automated testing frameworks and pipelines",
          "Performance and load testing strategies",
          "Security and vulnerability assessments",
          "Cross-platform and usability validation",
        ],
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance1,
      },
      {
        title: "DEPLOYMENT & RELEASE ENGINEERING",
        description: "",
        items: [
          "CI/CD pipeline design and automation",
          "Cloud, hybrid, and on-prem deployment support",
          "Version control and release coordination",
          "Rollback and recovery strategies",
          "Infrastructure configuration management",
        ],
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance2,
      },
      {
        title: "MONITORING & PERFORMANCE OPTIMIZATION",
        description: "",
        items: [
          "Real-time performance monitoring",
          "Error tracking and alert systems",
          "System health and uptime monitoring",
          "Scalability readiness assessment",
          "Continuous optimization recommendations",
        ],
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance3,
      },
      {
        title: "DEVOPS & WORKFLOW AUTOMATION",
        description: "",
        items: [
          "Automated build and deployment pipelines",
          "Integration with development toolchains",
          "Environment consistency management",
          "Infrastructure automation support",
          "Workflow efficiency optimization",
        ],
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance4,
      },
      {
        title: "SECURITY, COMPLIANCE & RELIABILITY",
        description: "",
        items: [
          "Secure deployment practices",
          "Compliance readiness support",
          "Data protection and access governance",
          "Risk mitigation strategies",
          "Long-term reliability assurance",
        ],
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance5,
      },
    ],

    content: `
    <h2>Ensure Software Reliability From Testing to Production</h2>
    <p>Great software requires more than just development — it needs rigorous testing, smooth deployment, and continuous support. Our SQA and deployment services ensure your applications are reliable, secure, and ready to scale in production environments.</p>
    
    <h3>Our SQA & Deployment Services:</h3>
    <ul>
      <li><strong>Quality Assurance:</strong> Comprehensive testing strategies including functional, performance, and security testing</li>
      <li><strong>Test Automation:</strong> Automated test pipelines for faster, more reliable releases</li>
      <li><strong>CI/CD Implementation:</strong> Streamlined deployment pipelines for smooth releases</li>
      <li><strong>Infrastructure Management:</strong> Cloud, on-premise, and hybrid deployment support</li>
      <li><strong>Monitoring & Support:</strong> Continuous performance monitoring and operational support</li>
      <li><strong>Security & Compliance:</strong> Ongoing security assessments and compliance readiness</li>
    </ul>
    
    <p>We don't stop at delivery — we ensure your software continues to perform reliably, securely, and efficiently long after launch.</p>
  `,
    metaTitle: "SQA, Deployment & Support Services | Netro Systems",
    metaDescription:
      "Comprehensive software quality assurance, deployment automation, and ongoing support. Ensure your applications are reliable, secure, and production-ready.",
  },
  {
    _id: "service-06",
    title: "UIUX Design",
    slug: "ui-ux-design",
    subtitle: "Years of expertise and proven portfolio",
    descTitle: "UIUX Design",
    description:
      "Good design isn't just how a product looks. It's how it behaves, how easily users move through it, and how confidently they achieve their goals. We design user experiences that are intuitive, scalable, and aligned with real business outcomes.",
    image: images.service6,
    featuredImage: images.uiux,
    icon: <UIMenuIcon color="#FF7036" />,
    link: "/services/ui-ux-design",
    tags: ["UI/UX Design", "User Research", "Design Systems", "Prototyping"],
    servicesOffer: {
      title: "What we offer",
      description:
        "We craft digital experiences where usability, aesthetics, and strategic thinking intersect — transforming complex ideas into intuitive, engaging, and high-performing interfaces.",
      data: [
        {
          title: "User Research",
          desc: "User-Centered Interface Design",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer5,
        },
        {
          title: "Wireframing & IA",
          desc: "Experience Strategy & UX Architecture",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer15,
        },
        {
          title: "UI Design",
          desc: "Visual Identity & UI Systems",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer10,
        },
        {
          title: "Prototyping",
          desc: "Prototype & Interaction Design",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer12,
        },
        {
          title: "Design Systems",
          desc: "Usability Optimization & Refinement",
          link: "/services/ui-ux-design",
          featuredImage: images.serviceOffer18,
        },
      ],
    },
    relatedWorks: {
      title: "Related Works",
    },
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Ensuring software reliability goes beyond development. We help teams overcome testing gaps, deployment risks, and operational uncertainties to deliver stable, scalable, and production-ready applications.",
      challenges: [
        {
          title: "Quality Risks Before Release",
          description:
            "We implement structured QA strategies, automation, and thorough validation before every release.",
        },
        {
          title: "Deployment Complexity",
          description:
            "We build reliable CI/CD pipelines and deployment workflows that reduce risk and ensure smooth releases.",
        },
        {
          title: "Performance & Scaling Challenges",
          description:
            "Continuous monitoring, performance tuning, and proactive system optimization keep applications stable as they scale.",
        },
        {
          title: "Post-Launch Maintenance Pressure",
          description:
            "Ongoing support, monitoring, and maintenance ensure long-term software stability and performance.",
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
      "Our UI/UX design services transform how users interact with your digital products, from strategy to visual execution.",
    deliverables: [
      {
        title: "Experience Design Foundations",
        description:
          "We shape user experiences from insight to structure — ensuring every interaction is intentional, intuitive, and aligned with product goals.",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "User research synthesis & behavioral insights",
          "Information architecture & UX flow mapping",
          "Wireframes across key product journeys",
          "Interaction logic & usability planning",
          "Persona development & journey scenarios",
          "Early-stage usability validation",
          "Accessibility-first UX considerations",
          "Cross-platform experience consistency",
          "UX documentation for product teams",
          "Experience optimization recommendations",
        ],
      },
      {
        title: "Interface Design & Visual Systems",
        description:
          "We craft cohesive visual interfaces that balance clarity, brand expression, and scalable design consistency.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "High-fidelity UI layouts & screen designs",
          "Design systems & scalable component libraries",
          "Visual style exploration & refinement",
          "Responsive web & mobile interface design",
          "Typography, color & visual hierarchy definition",
          "Iconography & micro-visual elements",
          "Interactive prototype demonstrations",
          "Developer-ready UI specifications",
          "Brand alignment within product interfaces",
          "Continuous visual system evolution",
        ],
      },
      {
        title: "Product Experience Optimization",
        description:
          "We refine and elevate digital products through iterative testing, performance insights, and experience improvements.",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "Usability testing & behavioral analysis",
          "UX audit reports & improvement roadmaps",
          "Interaction refinement & friction reduction",
          "Conversion-focused design enhancements",
          "Accessibility and inclusivity improvements",
          "Prototype validation before development",
          "Experience consistency across touchpoints",
          "Performance-oriented UX adjustments",
          "Data-informed design recommendations",
          "Ongoing product experience support",
        ],
      },
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription:
      "Modern digital products succeed when design goes beyond visuals — blending usability, accessibility, interaction logic, and brand consistency into seamless user experiences.",
    atGlance: [
      {
        title: "USER EXPERIENCE STRATEGY",
        description: "",
        items: [
          "User research insights & behavior mapping",
          "Information architecture planning",
          "User journey & interaction flow design",
          "Usability-first product structuring",
          "Experience validation through testing",
        ],
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance3,
      },
      {
        title: "INTERFACE DESIGN SYSTEMS",
        description: "",
        items: [
          "High-fidelity UI design for web & mobile",
          "Scalable design systems & components",
          "Visual hierarchy & layout optimization",
          "Brand-consistent interface styling",
          "Developer-ready UI specifications",
        ],
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance1,
      },
      {
        title: "PROTOTYPING & INTERACTION DESIGN",
        description: "",
        items: [
          "Interactive clickable prototypes",
          "Motion & micro-interaction design",
          "Rapid concept visualization",
          "Usability testing prototypes",
          "Stakeholder validation support",
        ],
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance4,
      },
      {
        title: "PRODUCT EXPERIENCE OPTIMIZATION",
        description: "",
        items: [
          "UX audits & usability evaluations",
          "Conversion and engagement improvements",
          "Accessibility optimization guidance",
          "Interface refinement iterations",
          "Data-informed design enhancements",
        ],
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance10,
      },
      {
        title: "DESIGN COLLABORATION & HANDOFF",
        description: "",
        items: [
          "Structured developer handoff assets",
          "Design documentation & guidelines",
          "Cross-team collaboration workflows",
          "Continuous design support cycles",
          "Product evolution design consulting",
        ],
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance8,
      },
    ],

    content: `
    <h2>Design Experiences That Users Love</h2>
    <p>Great UI/UX design is the foundation of successful digital products. We combine user research, strategic thinking, and visual craft to create interfaces that are both beautiful and highly functional.</p>
    
    <h3>Our Design Services:</h3>
    <ul>
      <li><strong>User Research & Strategy:</strong> Understand your users and define the right experience direction</li>
      <li><strong>Information Architecture:</strong> Structure content and flows for intuitive navigation</li>
      <li><strong>UI Design:</strong> Create visually stunning interfaces that reflect your brand</li>
      <li><strong>Prototyping:</strong> Build interactive prototypes for testing and validation</li>
      <li><strong>Design Systems:</strong> Establish scalable design systems for consistency</li>
      <li><strong>Usability Testing:</strong> Validate designs with real users to optimize experiences</li>
    </ul>
    
    <h3>Why Choose Us:</h3>
    <p>With years of expertise and a proven portfolio, we deliver designs that not only look great but drive measurable business results through improved user engagement and conversion.</p>
  `,
    metaTitle: "UI/UX Design Services | User Experience Design | Netro Systems",
    metaDescription:
      "Professional UI/UX design services. Create intuitive, engaging user experiences with years of proven expertise.",
  },
  {
    _id: "service-07",
    title: "Branding Design",
    slug: "branding-design",
    subtitle: "We build visually appealing brands",
    descTitle: "Branding Design",
    description:
      "Your brand is often the first experience people have with your product or company. We help you shape that experience through clear, consistent, and memorable branding that works across digital products, marketing, and everyday business touchpoints.",
    image: images.service7,
    featuredImage: images.branding,
    icon: <BrandingMenuIcon color="#7AD58D" />,
    link: "/services/branding-design",
    tags: [
      "Brand Identity",
      "Logo Design",
      "Visual Identity",
      "Brand Strategy",
    ],
    challengesSolution: {
      title: "CHALLENGES AND SOLUTION",
      description:
        "Building a strong brand requires more than visuals — it demands clarity, consistency, and strategic positioning that resonates across every customer interaction.",
      challenges: [
        {
          title: "Unclear Brand Positioning",
          description:
            "Without a defined identity, brands struggle to stand out and communicate value effectively.",
        },
        {
          title: "Inconsistent Brand Presence",
          description:
            "Fragmented branding weakens recognition; cohesive design systems ensure clarity and trust.",
        },
        {
          title: "Low Audience Connection",
          description:
            "Strong visuals alone aren't enough — meaningful brand storytelling drives engagement.",
        },
        {
          title: "Scaling Brand Consistency",
          description:
            "As brands grow, structured guidelines maintain coherence across platforms and teams.",
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
        title: "Brand Identity Design",
        description:
          "We craft strong visual identities that express your brand's personality, positioning, and long-term vision.",
        bgColor: "#97C0FF",
        textColor: "#000000",
        features: [
          "Logo design & visual identity systems",
          "Typography, color & visual language definition",
          "Brand style guides & usage frameworks",
          "Iconography & graphic asset creation",
          "Scalable identity systems for digital & print",
          "Brand expression consistency guidelines",
          "Visual storytelling direction",
          "Brand differentiation strategy support",
          "Identity refinement & evolution planning",
          "Multi-platform identity adaptability",
        ],
      },
      {
        title: "Brand Experience & Communication",
        description:
          "We design how your brand communicates — ensuring clarity, consistency, and emotional connection across channels.",
        bgColor: "#FFA77C",
        textColor: "#000000",
        features: [
          "Brand voice & messaging frameworks",
          "Marketing visual direction systems",
          "Social & digital brand expression design",
          "Campaign identity design support",
          "Presentation & collateral design systems",
          "Website & product brand alignment",
          "Customer touchpoint consistency design",
          "Brand perception enhancement strategies",
          "Visual communication optimization",
          "Experience-driven brand positioning",
        ],
      },
      {
        title: "Brand Strategy & Evolution",
        description:
          "We help brands grow strategically while maintaining consistency, relevance, and adaptability over time.",
        bgColor: "#7FFBAF",
        textColor: "#000000",
        features: [
          "Brand positioning & differentiation mapping",
          "Competitive brand landscape analysis",
          "Rebranding & brand refresh strategies",
          "Brand architecture structuring",
          "Sub-brand & product identity alignment",
          "Long-term brand governance frameworks",
          "Brand consistency monitoring guidance",
          "Expansion-ready identity systems",
          "Brand performance insight support",
          "Ongoing brand design consultation",
        ],
      },
    ],
    atGlanceTitle: "SERVICE AT A GLANCE",
    atGlanceDescription:
      "Modern digital products succeed when design goes beyond visuals — blending usability, accessibility, interaction logic, and brand consistency into seamless user experiences.",
    atGlance: [
      {
        title: "BRAND STRATEGY & POSITIONING",
        description: "",
        items: [
          "Brand discovery workshops & research insights",
          "Market positioning & differentiation mapping",
          "Audience persona & brand voice definition",
          "Competitive brand landscape analysis",
          "Core messaging & narrative development",
        ],
        bgColor: "#3654FF",
        textColor: "#FFFFFF",
        image: images.atAGlance14,
      },
      {
        title: "VISUAL IDENTITY SYSTEMS",
        description: "",
        items: [
          "Logo design & identity exploration",
          "Color, typography & visual language creation",
          "Brand style guides & usage frameworks",
          "Iconography & graphic asset development",
          "Scalable identity systems for all platforms",
        ],
        bgColor: "#FFC400",
        textColor: "#000000",
        image: images.atAGlance12,
      },
      {
        title: "BRAND EXPERIENCE DESIGN",
        description: "",
        items: [
          "Marketing & digital brand expression design",
          "Website and product brand alignment",
          "Campaign visual identity support",
          "Presentation & communication design assets",
          "Customer touchpoint consistency design",
        ],
        bgColor: "#00DE71",
        textColor: "#FFFFFF",
        image: images.atAGlance11,
      },
      {
        title: "BRAND EVOLUTION & REFRESH",
        description: "",
        items: [
          "Rebranding & brand modernization strategies",
          "Identity refinement for growing businesses",
          "Sub-brand & product brand structuring",
          "Brand consistency monitoring guidance",
          "Expansion-ready brand frameworks",
        ],
        bgColor: "#FFA77C",
        textColor: "#000000",
        image: images.atAGlance10,
      },
      {
        title: "BRAND COLLABORATION & SUPPORT",
        description: "",
        items: [
          "Design handoff documentation & guidelines",
          "Cross-team brand implementation support",
          "Continuous brand design consulting",
          "Brand governance frameworks",
          "Long-term brand consistency planning",
        ],
        bgColor: "#F1571B",
        textColor: "#FFFFFF",
        image: images.atAGlance13,
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
      <li><strong>Brand Experience:</strong> Design how your brand communicates across all touchpoints</li>
      <li><strong>Brand Evolution:</strong> Refresh and modernize your brand for growth</li>
    </ul>
    
    <p>Whether you're a startup building your brand from scratch or an established company looking for a refresh, we'll help you create a visual identity that resonates with your target audience and sets you apart from the competition.</p>
  `,
    metaTitle: "Branding & Identity Design Services | Netro Systems",
    metaDescription:
      "Professional branding and identity design. Create a memorable visual identity that stands out and connects with your audience.",
  },
]);
