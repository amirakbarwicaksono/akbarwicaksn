import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Amir",
  lastName: "Akbar Wicaksono",
  name: `Amir Akbar Wicaksono`,
  role: "Academic Design Innovator",
  avatar: "/images/avatar.jpg",
  email: "amir.akbar@trisakti.ac.id",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/amirakbarwicaksono',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://id.linkedin.com/in/amir-akbar-wicaksono',
    },
    {
        name: 'Thread',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:amirakbarwicaksono@gmail.com',
    },
]

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Integrating Teaching, Innovation, and Design in Higher Education</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Once UI</strong>
      </>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I am Akbar, a dedicated lecturer at <strong>Universitas Trisakti</strong>, where I actively contribute to the Tridarma Perguruan Tinggi through teaching, research, and community engagement. Beyond my academic responsibilities, I pursue advanced research in drones, Internet of Things (IoT), and the intersection of technology and art.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    icon: "instagram",
    label: "@detalab.io",
    link: "https://instagram.com/detalab.io",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Akbar is a Jakarta-based lecturer at Universitas Trisakti, dedicated to advancing the Tridarma Perguruan Tinggi through innovative teaching, cutting-edge research, and community engagement. His work seamlessly integrates education with pioneering research in Drones, Internet of Things (IoT), and the intersection of technology and creative arts, transforming complex technical challenges into impactful solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Lion Group (Airlines Division)",
        timeframe: "2024 - 2025",
        role: "Auditor - Full Stack Data Analyst",
        achievements: [
          <>
            Audited end-to-end internal control processes to improve accuracy, efficiency, and drive continuous improvement. (First 4 months)
          </>,
          <>
            Developed multiple web-based systems using MongoDB, Golang, and Next.js — reducing a 2-day process to 30 minutes and optimizing other similar workflows. (Remaining period)
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/lionair.jpg",
            alt: "Lion Air Group",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "ADR Group (Automotive Division)",
        timeframe: "2019 - 2024",
        role: "Automation Engineer",
        achievements: [
          <>
            Automated core processes across departments, reducing manual workload by 70%.
          </>,
          <>
            Contributed to workforce efficiency initiatives that led to a 60+ headcount reduction over 5 years.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universitas Trisakti",
        description: <>Master Of Engineering</>,
      },
      {
        name: "Purwadhika Digital Technology School",
        description: <>Data Analytics DALS04</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Development Stack",
        description: <>Proficient in utilizing MongoDB, Golang, and Next.js for building scalable, 
        high-performance web applications, specializing in creating efficient backend systems,
         RESTful APIs, and dynamic, server-rendered frontends to deliver seamless user experiences.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Full Stack Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "EDA Stack",
        description: <>Proficient in utilizing Excel, SQL, Python, Tableau, and Power BI for Exploratory Data Analysis (EDA),
        specializing in Uncovering Patterns, Analyzing Trends, And Delivering Actionable Insight through impactful visualizations to support.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Data Analysis Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "IoT Stack",
        description: <>Proficient in utilizing the MING stack (MQTT, InfluxDB, Node-RED, Grafana) for IoT solutions, specializing in creating
        efficient data pipelines, real-time monitoring systems, and interactive dashboard with exceptional speed and accuracy</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "IoT Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Electrical Engineering Stack",
        description: <>Proficient in utilizing EasyEDA for circuit design, PCB fabrication for creating reliable printed circuit boards, 
        and commissioning processes to ensure seamless deployment and testing of electronic systems, 
        specializing in delivering robust and efficient hardware solutions.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-05.jpg",
            alt: "IoT Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const music = {
  display: true,
  title: "Never Playing To Anybody",
  label: "Music",
  description: 'My "Never playing in front of anybody" Playlist',
  embedUrl: "https://open.spotify.com/embed/playlist/4hMdlf53ajrifAfhmfgrnf?utm_source=generator",
};

export { person, social, newsletter, home, about, blog, work, gallery, music };
