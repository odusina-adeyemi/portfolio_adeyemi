export const myProjects = [
  {
    id: 1,
    title: "Burtech",
    description:
      "Burtech is a B2B e-commerce platform designed for sourcing laboratory equipment, scientific accessories, and technical supplies, providing businesses with a secure, scalable, and efficient procurement experience tailored to enterprise needs.",
    subDescription: [
      "Built a scalable B2B e-commerce application using Next.js, leveraging server-side rendering and modern routing for fast page loads and smooth navigation.",
      "Implemented secure authentication and user management with Supabase Auth, supporting business accounts and role-based access for enterprise users.",
      "Designed a PostgreSQL-backed data layer using Supabase, enabling structured product catalogs, order management, and transactional integrity.",
      "Integrated core commerce features including advanced search, filtering, cart management, and checkout workflows to support efficient purchasing and localization requirements.",
    ],
    href: "https://burtechproducts.com/",
    logo: "",
    image: "/assets/labaccessoriesEcomm.png",
    tags: [
      {
        id: 1,
        name: "NextJS",
        path: "/assets/nextjs-icon.svg",
      },

      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/postgresql.png",
      },
    ],
  },
  {
    id: 2,
    title: "Authentication",
    description:
      "A secure authentication developed with Node.JS and React, providing robust user login and registration functionalities.",
    subDescription: [
      "Developed backend authentication using Node.js, Express, and Auth0 for secure user management.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience, to interact with implemented authentication .",
      "Connected to a secure MongoDB database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/authpage.png",
    tags: [
      {
        id: 1,
        name: "NodeJS",
        path: "/assets/nodeIcon.png",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongoDB.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 3,
    title: "AI Summarizer Web App",
    description:
      "A modern, AI Summarizing web app  built with React,that helps you summarize your articles in one click. All you need to do is insert your link to get summary from any webpage on the internet.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using React.",
      "Implemented API Integration using OpenAI to generate accurate article summaries.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Managed application state efficiently using Redux Toolkit.",
    ],
    href: "https://aisummarizee.netlify.app/",
    logo: "",
    image: "/assets/summarizer.png",

    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Redux",
        path: "/assets/ReduxIcon.png",
      },

      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Open AI",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },

  {
    id: 6,
    title: "Perkflow",
    description:
      "Perkflow is a digital Reward Web App is a performance-driven rewards platform for corporate organizations, enabling teams to recognize employee contributions, incentivize collaboration, and align achievements with organizational goals through redeemable digital gift cards.",
    subDescription: [
      "Built a scalable web application using Next.js, leveraging server-side rendering (SSR) and static site generation (SSG) for optimal performance and SEO",
      "Designed and implemented responsive UI components with Tailwind CSS, ensuring a seamless user experience across devices.",
      " Developed an interactive quiz and assessment system with dynamic question generation and real-time grading to track participation and performance.",
      "Integrated Stripe for secure payment processing, enabling seamless purchase and redemption of digital gift cards within the platform.",
    ],
    href: "https://app.perkflow.io/",
    logo: "",
    image: "/assets/perkflow.png",
    tags: [
      {
        id: 1,
        name: "NextJS",
        path: "/assets/nextjs-icon.svg",
      },

      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Stone Community Platform",
    description:
      "A large-scale community web platform optimized for performance and scalability, delivering fast, reliable user experiences for thousands of active users.",
    subDescription: [
      "Led frontend performance optimization initiatives that reduced initial application load time from over 5 minutes to seconds.",
      "Refactored critical rendering paths using efficient state management, component memoization, and lazy loading strategies.",
      "Integrated secure authentication and authorization flows using Node.js, Express, and Auth0 with role-based access control (RBAC).",
      "Built and maintained a React-based UI with Tailwind CSS, ensuring responsive design and consistent user experience across devices.",
    ],
    href: "https://stonecommunity.limestone.ng/",
    logo: "",
    image: "/assets/stoneCommunity2.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "NodeJS",
        path: "/assets/nodeIcon.png",
      },
      {
        id: 3,
        name: "Auth0",
        path: "/assets/auth0.png",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongoDB.png",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },

  {
    id: 2,
    title: "Stone School",
    description:
      "Stone School is a comprehensive school management platform that digitizes core academic and administrative processes, enabling schools to manage students, staff, academics, and operations efficiently from a single, unified system.",
    subDescription: [
      "Designed and optimized a high-performance frontend, reducing initial application load time from several minutes to a few seconds through targeted performance improvements",
      "Refactored critical rendering paths using efficient state management, component memoization, and lazy loading to enhance responsiveness and scalability.",
      "Implemented secure authentication and authorization workflows with Node.js, Express, including role-based access control (RBAC) for students, teachers, and administrators",
      "Built and maintained a responsive, user-friendly React interface styled with Tailwind CSS, ensuring consistent experiences across desktop and mobile devices.",
    ],
    href: "",
    logo: "",
    image: "/assets/stoneSchool.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "NodeJS",
        path: "/assets/nodeIcon.png",
      },

      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/postgresql2.jpg",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/2348093543519",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/adeyemi-odusina-282191110/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/odusina-adeyemi",
    icon: "/assets/socials/github.png",
  },
];

export const experiences = [
  {
    title: "Frontend Developer (React / Next.js)",
    job: "Full Time",
    date: "Feb 2024 - Present",
    contents: [
      "Built and maintained core portals: Property Manager, Community Manager, and an Admin Portal used by SASS service providers.",
      "Implemented responsive, reusable UI components and consistent layout/state patterns to reduce duplication and improve maintainability.",
      "Improved performance by 10% by diagnosing bottlenecks (render-heavy pages, slow interactions, inefficient state updates, redundant api calls) and applying targeted optimizations.",
      "Integrated APIs end-to-end: auth/session flows, data tables, pagination, filtering, loading/error/empty states, and resilient UX under real usage.",
      "Collaborated with product/design/backend to translate requirements into stable releases and measurable improvements.",
      "Minified JavaScript and CSS bundles, implemented code splitting and lazy loading, thereby improving performance by 25%, ensuring stable and faster load time",
    ],
  },
  {
    title: "Centbit - Remote (US) | React/Next Developer",
    job: "Full Time",
    date: "2023 - 2024",
    contents: [
      "Delivered production-grade UI features using Next.js (App Router), React, TypeScript, Tailwind CSS, MUI, and Redux, with emphasis on performance and scalability.",
      "Built maintainable, reusable component systems for data-heavy pages and operational dashboards, reducing duplication and improving development velocity.",
      "Leveraged Next.js server-side rendering (SSR), static generation (SSG), and client/server component separation to optimize page load times and SEO.",
      "Integrated Supabase for authentication, data storage, and real-time updates, owning the database and application architecture from concept through development and deployment.",
      "Collaborated with product and backend stakeholders to translate requirements into scalable Next.js implementations aligned with business goals.",
    ],
  },
  {
    title: "Dipole - Nigeria | Web Developer",
    date: "June 2022 -  Dec 2022",
    job: "Full Time",
    contents: [
      "Integrated workflow-driven frontend experiences with external BPA systems to automate business processes for enterprise clients.",
      "Reduced onboarding friction and improved onboarding outcomes by 15% by stabilizing workflow steps and UI integration behavior.",
    ],
  },
  {
    title: "Decagon - Nigeria | Software Engineer Intern (Frontend)",
    date: "March 2022 - June 2022",
    job: "Full Time",
    contents: [
      "Built product features in React/TypeScript within a structured engineering environment (code reviews, teamwork, delivery cycles).",
      "Developed an e-Health Web Application with responsive UI, role-based flows, and API-driven pages (appointments, patient records, dashboards).",
      "Focused on UI architecture, reusable components, and stable API integration patterns.",
      "Built user flows for doctors and patients, including authentication-driven navigation, dashboards, and appointment management.",
    ],
  },

  {
    title: "Bridge Digital | Digital Marketer/Tracking specialist ",
    date: "April 2019 - Jan  2022",
    job: "Full Time",
    contents: [
      " Implemented and maintained website conversion tracking with JavaScript snippets and tag-based setups across landing pages and campaigns.",
      "Configured Meta Pixel-style events (page view, lead, complete registration, purchase equivalents) and validated event firing across devices and browsers.",
      "Supported campaign attribution by working with UTMs, click-to-conversion flows, and partner requirements; debugged broken tracking links and missing conversions.",
      "Built and updated lightweight landing pages (HTML/CSS) for campaigns, prioritizing speed, clarity, and reliability.",
      "Provided hands-on technical support for tracking issues via Slack, coordinating with stakeholders to confirm fixes.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
