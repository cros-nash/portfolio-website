import {
    mobile,
    backend,
    creator,
    web,

    html,
    css,
    python,
    java,
    reactjs,
    django,
    nodejs,
    threejs,
    tailwind,
    git,
    docker,
    c,
    assembly,
    langchain,
    pytorch,
    sklearn,
    tensorflow,

    outlier,
    helloteam,
    carrent,
    jobit,
    tripguide,
    scrapegraph,
    creditcardfraud,
    humanaiclass,
    puzzlesolver,
    ecommerce,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Machine Learning Engineer",
      icon: backend,
    },
    {
      title: "AI/ML Pipeline Designer",
      icon: mobile,
    }
  ];

  
  const technologies = [
    { name: "Python", icon: python },
    { name: "Java", icon: java },
    { name: "React JS", icon: reactjs },
    { name: "Django", icon: django },
    { name: "Node JS", icon: nodejs },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Git", icon: git },
    { name: "C", icon: c },
    { name: "LangChain", icon: langchain },
    { name: "PyTorch", icon: pytorch },
    { name: "scikit-learn", icon: sklearn },
    { name: "TensorFlow", icon: tensorflow },
  ];

  
const experiences = [
  {
    title: "Software Engineer – AI Training Data",
    company_name: "Outlier",
    icon: outlier,
    iconBg: "#383E56",
    date: "May 2024 – August 2024",
    points: [
      "Curated high-quality training data for AI models used by OpenAI and Meta, ensuring dataset integrity.",
      "Reviewed and refined AI-generated code to improve model performance and reliability.",
      "Conducted quality assurance assessments on outputs, resolving logical and syntactic issues.",
    ],
  },
  {
    title: "Customer Success Intern",
    company_name: "HelloTeam",
    icon: helloteam,
    iconBg: "#E6DEDD",
    date: "May 2023 – August 2023",
    points: [
      "Debugged and optimized internal demo software for enhanced functionality and presentation.",
      "Suggested UX improvements to improve engagement and software usability.",
      "Collaborated with teams to identify actionable feedback from clients.",
    ],
  },
];

  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
  {
    name: "ScrapeGraph AI Pipeline",
    description:
      "A Django-based web app that allows users to generate custom Crawlee web scrapers via natural language prompts. Features schema editing, live logs, and script downloads. Uses LangChain and a RAG module to feed Crawlee documentation into the prompt context.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "crawlee",
        color: "pink-text-gradient",
      },
      {
        name: "llm",
        color: "purple-text-gradient",
      },
    ],
    image: scrapegraph,
    source_code_link: "https://github.com/cros-nash/ScrapeGraph-Crawlee-Pipeline",
  },
  {
    name: "Human vs AI Face Classification",
    description:
      "Engineered a pipeline using PyTorch, scikit-learn, and PCA-reduced FaceNet embeddings to compare human and ML model performance in distinguishing real and synthetic faces. Achieved near-identical accuracy with prototype and exemplar classifiers.",
    tags: [
      {
        name: "pytorch",
        color: "red-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "facenet",
        color: "green-text-gradient",
      },
      {
        name: "pca",
        color: "pink-text-gradient",
      },
    ],
    image: humanaiclass,
    source_code_link: "https://github.com/cros-nash/Human-ML-Real-Fake-Performance",
  },
{
    name: "E-Commerce Django Platform",
    description:
      "Developed a multi-tier Django commerce application from scratch, incorporating object-oriented design, SQL relational models, and robust user authentication. Automated the build and deployment process to AWS ECR/ECS Fargate using Docker and GitHub Actions for continuous integration and delivery.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
      {
        name: "github-actions",
        color: "orange-text-gradient",
      },
      {
        name: "docker",
        color: "cyan-text-gradient",
      },
      {
        name: "aws-ecs",
        color: "yellow-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/cros-nash/django-ecommerce",
  },
  {
    name: "Credit Card Fraud Detection",
    description:
      "Built a complete fraud detection pipeline using XGBoost and advanced feature engineering techniques. Achieved a 0.90 F1 score on Kaggle using SHAP-based interpretability, performance tuning, and recursive feature elimination on an imbalanced financial dataset.",
    tags: [
      {
        name: "xgboost",
        color: "green-text-gradient",
      },
      {
        name: "shap",
        color: "purple-text-gradient",
      },
      {
        name: "pandas",
        color: "blue-text-gradient",
      },
      {
        name: "sklearn",
        color: "red-text-gradient",
      },
      {
        name: "eda",
        color: "orange-text-gradient",
      },
    ],
    image: creditcardfraud,
    source_code_link: "https://github.com/cros-nash/CreditCardFraud",
  },
  {
    name: "PuzzleSolver",
    description:
      "A Python library and CLI tool for solving the classic 8-puzzle problem using state-space search algorithms. Implements BFS, DFS, A*, and Greedy Best-First Search with heuristic options and supports interactive play and batch performance testing.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "a* search",
        color: "green-text-gradient",
      },
      {
        name: "heuristics",
        color: "purple-text-gradient",
      },
      {
        name: "bfs/dfs",
        color: "red-text-gradient",
      },
      {
        name: "cli",
        color: "orange-text-gradient",
      },
    ],
    image: puzzlesolver,
    source_code_link: "https://github.com/cros-nash/PuzzleSolver",
  },
];

  
  export { services, technologies, experiences, testimonials, projects };