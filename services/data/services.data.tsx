import { images } from "../assets";
import {
  AiIcon,
  AIMenuIcon,
  APIYellowIcon,
  AppMenuIcon,
  BrandingMenuIcon,
  CloudYellowIcon,
  DBYellowIcon,
  LangChainYellowIcon,
  LLMYellowIcon,
  PSQLYellowIcon,
  PythonYellowIcon,
  ReactYellowIcon,
  SAASMenuIcon,
  SQAMenuIcon,
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
    deliverablesTitle: "WHAT WE DELIVER",
    deliverablesDescription: "Our services cover both greenfield AI builds and augmentation of existing platforms.",
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
        description: "We integrate AI into CRMs, ERPs, SaaS platforms, and proprietary systems without requiring full rewrites.",
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
        description: "We build systems that execute tasks end-to-end with minimal human input:",
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
    title: "SaaS Development & SQA",
    slug: "saas-development-sqa",
    subtitle: "Expertise over 5 years with 30+ apps",
    descTitle: "AI-Powered Software Engineering",

    description:
      "Building a SaaS product or MVP isn't about writing the most code. It's about validating the right idea quickly, engineering it properly, and setting yourself up to scale without painful rewrites later.",
    image: images.service2,
    featuredImage: images.service2,
    icon: <SAASMenuIcon color="#FF7036" />,
    link: "/services/saas-development-sqa",
    tags: [
      "SaaS Development",
      "MVP Development",
      "Software Quality Assurance",
      "Scalable Solutions",
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
    title: "Software Development",
    slug: "software-development",
    subtitle: "We develop apps with craftsmanship",
    descTitle: "AI-Powered Software Engineering",

    description:
      "Great apps aren't just about features—they're about performance, usability, and reliability. We design and build mobile and web applications that feel intuitive, scale smoothly, and integrate seamlessly with modern backend and AI systems.",
    image: images.service3,
    featuredImage: images.service3,
    icon: <AppMenuIcon color="#7AD58D" />,
    link: "/services/software-development",
    tags: [
      "Custom Software",
      "Web Development",
      "Enterprise Solutions",
      "API Development",
    ],
    content: `
      <h2>Custom Software Development Built for Your Business</h2>
      <p>Whether you need a custom web application, enterprise software, or complex backend systems, we deliver solutions that are robust, scalable, and tailored to your specific requirements.</p>
      
      <h3>Technologies We Work With:</h3>
      <ul>
        <li><strong>Frontend:</strong> React, Next.js, Vue.js, Angular, TypeScript</li>
        <li><strong>Backend:</strong> Node.js, Python, .NET, Java, PHP</li>
        <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis</li>
        <li><strong>Cloud:</strong> AWS, Azure, Google Cloud, DigitalOcean</li>
        <li><strong>Mobile:</strong> React Native, Flutter</li>
      </ul>
      
      <h3>Our Development Approach:</h3>
      <p>We follow industry best practices including clean code principles, SOLID design patterns, test-driven development, and continuous integration. Every line of code we write is maintainable, documented, and built to last.</p>
      
      <p>From startups to enterprises, we've helped businesses across industries build software that drives growth and operational efficiency.</p>
    `,
    metaTitle: "Custom Software Development Services | Netro Systems",
    metaDescription:
      "Professional software development with craftsmanship. Web apps, enterprise solutions, and scalable backend systems.",
  },
  {
    _id: "service-04",
    title: "3D Product Animation",
    slug: "3d-product-animation",
    subtitle: "Bring your products to life with stunning visuals",
    descTitle: "AI-Powered Software Engineering",

    description:
      "High-quality 3D product animations transform how you showcase your products online. Whether it's for marketing, e-commerce, or presentations, our 3D animation services help you stand out and engage your audience.",
    image: images.service4,
    featuredImage: images.service4,
    icon: <VibeMenuIcon color="#8F73FF" />,
    link: "/services/3d-product-animation",
    tags: [
      "3D Animation",
      "Product Visualization",
      "3D Modeling",
      "Visual Effects",
    ],
    content: `
      <h2>Bring Your Products to Life with 3D Animation</h2>
      <p>High-quality 3D product animations can transform how you showcase your products online. Whether it's for marketing, e-commerce, or presentations, our 3D animation services help you stand out and engage your audience.</p>
      
      <h3>Our 3D Animation Services:</h3>
      <ul>
        <li><strong>Product Visualization:</strong> Create photorealistic 3D models and animations of your products</li>
        <li><strong>360° Product Views:</strong> Interactive product displays that customers can rotate and explore</li>
        <li><strong>Exploded View Animations:</strong> Show how products are assembled or how they work internally</li>
        <li><strong>Marketing Videos:</strong> Engaging animated videos for advertising and social media</li>
        <li><strong>AR/VR Integration:</strong> Bring 3D models into augmented and virtual reality experiences</li>
      </ul>
      
      <p>We use industry-leading tools like Blender, Cinema 4D, and Three.js to create stunning visuals that captivate your audience and drive conversions.</p>
    `,
    metaTitle: "3D Product Animation Services | Netro Systems",
    metaDescription:
      "Professional 3D product animation and visualization services. Create stunning product showcases for marketing and e-commerce.",
  },
  {
    _id: "service-05",
    title: "Product Design (UI/UX Design)",
    slug: "product-design-ui-ux-design",
    subtitle: "We don't leave you even after development",
    descTitle: "AI-Powered Software Engineering",

    description:
      "Good design isn't just how a product looks. It's how it behaves, how easily users move through it, and how confidently they achieve their goals. We design user experiences that are intuitive, scalable, and aligned with real business outcomes.",
    image: images.service5,
    featuredImage: images.service5,
    icon: <SQAMenuIcon color="#FFC400" />,
    link: "/services/product-design-ui-ux-design",
    tags: ["UI/UX Design", "Product Design", "User Research", "Prototyping"],
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
    title: "App Development",
    slug: "app-development",
    subtitle: "Years of expertise and proven portfolio",
    descTitle: "AI-Powered Software Engineering",

    description:
      "Great software isn't just built—it's tested, deployed, monitored, and supported in the real world. We help teams make sure their applications are reliable, secure, and ready for growth long after the first release.",
    image: images.service6,
    featuredImage: images.service6,
    icon: <UIMenuIcon color="#FF7036" />,
    link: "/services/app-development",
    tags: [
      "Mobile Apps",
      "iOS Development",
      "Android Development",
      "Cross-Platform",
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
    descTitle: "AI-Powered Software Engineering",

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
