import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Amir Akbar',
    lastName:  'Wicaksono',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Data Analyst',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Jakarta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bahasa']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

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

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Data & IoT Enthusiast</>,
    subline: <>Hi! I'm Akbarwicaksn, a Full Stack Data Analyst at <InlineCode>Lion Air Group</InlineCode>, where I transform data into actionable insights and craft intuitive visualizations and dashboards to support decision-making. In my spare time, I work on personal projects, exploring innovative ways to harness data and technology.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://api.whatsapp.com/send?phone=6281333519293&text='
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Akbar is a Jakarta-based Full Stack Data Analyst with a passion for transforming complex data challenges into actionable insights and impactful solutions. His work encompasses data visualization, statistical analysis, interactive dashboards, and the integration of data science and technology to drive decision-making and innovation.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Lion Air Group',
                timeframe: '2024 - Present',
                role: 'Full Stack Data Analyst',
                achievements: [
                    <>Developed automation and processing tools using Tech : MongoDB/PostgreSQL - Golang - NextJS, resulting in a 98.44% increase in loopkup process time and 30% faster anylst final data.</>,
                    <>Improved workflows and data accessibility through custom application development, enabling user and management  understanding data faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover_05.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'ADR Group',
                timeframe: '2019 - 2024',
                role: 'Automation Engineer',
                achievements: [
                    <>Develop road map and support implementation of automation, and digitization to adopt digital transformation in industry 4.0</>,
                    <>Planning and co-ordinating system instalation.</>,
                    <>Perform training after testing & commissioning.</>,
                    <>Troubleshoot trouble on site</>,
                    <>Contributed in continuos improvement for line assembly</>,
                    <>Supporting Project Manager to join meeting with Director.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Universitas Trisakti',
                description: <>Master Of Engineering.</>,
            },
            {
                name: 'Purwadhika Digital Technology School',
                description: <>Data Analytics - DALS04</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'EDA Stack',
                description: <>Proficient in utilizing Excel, SQL, Python, Tableau, and Power BI for Exploratory Data Analysis (EDA), specializing in uncovering patterns, analyzing trends, and delivering actionable insights through impactful visualizations to support.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'IoT Stack',
                description: <>Proficient in utilizing the MING stack (MQTT, InfluxDB, Node-RED, Grafana) for IoT solutions, specializing in creating efficient data pipelines, real-time monitoring systems, and interactive dashboards with exceptional speed and accuracy.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
