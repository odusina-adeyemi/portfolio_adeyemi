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
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Web Developer",
    job: "Full Time",
    date: "2022-2023",
    contents: [
      "Automated frontend processes by integrating with external BPA workflows. This provided streamlined business processes to enterprise clients, resulting in a 15% increase in the onboarding process.",
      "Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "Ensured data privacy for customers and partners through industry-compliant protocols.",
      "Delivered remote features like real time updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Frontend Developer",
    date: "2024-Present",
    job: "Full Time",
    contents: [
      "Developed and maintained the Property Manager, Admin Portal, and Community Portal, ensuring seamless user experience and improved functionality",

      "Collaborated with cross-functional teams to enhance the app's performance by 30% through debugging and optimization of the codebase.",
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
