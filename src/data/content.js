/* ===================================================================
   PORTFOLIO CONTENT — All data centralized for easy editing
   =================================================================== */

export const personalInfo = {
  name: 'Krishnaprasad K',
  firstName: 'Krishna',
  role: 'Marketing & Growth Professional',
  headline: 'Crafting strategies that turn ideas into growth.',
  typedRoles: [
    'Product Marketing',
    'Brand Strategy',
    'Growth Marketing',
    'Digital Marketing',
    'Data-Driven Decisions',
  ],
  subHeadline: 'MBA · Marketer · Product Thinker · Builder',
  bio: "I'm Krishna, an engineer turned marketing professional shaped by curiosity and driven by change. From factory floors to digital dashboards, I've wandered through systems, stories, and strategies — always seeking the logic behind the chaos. I find rhythm in data, structure in words, and purpose in learning.",
  bioExtended: "When not building or analyzing, I lose myself in books, music, and quiet games of chess. I believe the best marketing tells a story that people want to be part of.",
  email: 'asadkrish@gmail.com',
  phone: '+919747901072',
  location: 'India',
  resumeUrl: '/Assets/KrishnaprasadK Resume asad.pdf',
  profileImage: '/Assets/output-onlinepngtools.png',
  aboutImage: '/Assets/About Me Pic 1.jpg',
};

export const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/krishnaprasadkr/', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/asadkrish', icon: 'github' },
  { name: 'X', url: 'https://x.com/krishasadram', icon: 'twitter' },
  { name: 'Email', url: 'mailto:asadkrish@gmail.com', icon: 'mail' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const journey = [
  {
    year: '2015 – 2019',
    title: 'Mechanical Engineering',
    subtitle: 'Govt. Engineering College, Palakkad',
    description: 'Built a strong foundation in engineering, problem-solving, and analytical thinking.',
    icon: '🎓',
  },
  {
    year: '2019 – 2021',
    title: 'Site Engineer',
    subtitle: 'Viyona Marine, Cochin',
    description: 'Managed on-ground operations and honed project management in the marine industry.',
    icon: '⚙️',
  },
  {
    year: '2021 – 2022',
    title: 'Systems Engineer',
    subtitle: 'Infosys, Mysore',
    description: 'Worked on enterprise systems, gaining expertise in technology and large-scale operations.',
    icon: '💻',
  },
  {
    year: '2022 – 2024',
    title: 'MBA (Marketing & Analytics)',
    subtitle: 'IIM Sirmaur',
    description: 'Pivoted to marketing and analytics. Developed business strategy and data-driven thinking.',
    icon: '📊',
  },
  {
    year: '2023 – 2024',
    title: 'Marketing Intern',
    subtitle: 'Outlook Group',
    description: 'Gained hands-on digital marketing experience at a leading Indian media company.',
    icon: '📱',
  },
  {
    year: '2024',
    title: 'Management Trainee',
    subtitle: 'Leap India, Hyderabad',
    description: 'Applied marketing strategy and growth principles in a dynamic environment.',
    icon: '🚀',
  },
  {
    year: 'Present',
    title: 'Building & Growing',
    subtitle: 'Product Marketing & Growth',
    description: 'Building products, creating content, and pursuing roles in product marketing and growth.',
    icon: '✨',
  },
];

export const skills = [
  {
    category: 'Marketing',
    icon: '📣',
    description: 'Driving brand awareness, engagement, and conversion',
    items: [
      'SEO',
      'Brand Strategy',
      'Performance Marketing',
      'Content Marketing',
      'Market Research',
      'Product Marketing',
    ],
  },
  {
    category: 'Analytics',
    icon: '📊',
    description: 'Turning raw data into actionable insights',
    items: [
      'Google Analytics 4',
      'Power BI',
      'MS Excel',
      'SQL',
      'Python',
      'Tableau',
    ],
  },
  {
    category: 'Technical',
    icon: '⚡',
    description: 'Building and designing digital experiences',
    items: [
      'React',
      'Git',
      'Figma',
      'Data Science',
      'Machine Learning',
      'Prompt Engineering',
    ],
  },
  {
    category: 'Strategy',
    icon: '🧠',
    description: 'Thinking big, executing smart',
    items: [
      'Product Thinking',
      'Go-to-Market Strategy',
      'Competitive Analysis',
      'Storytelling',
      'Presentation',
      'Team Leadership',
    ],
  },
];

export const experience = [
  {
    role: 'Management Trainee',
    company: 'Leap India',
    location: 'Hyderabad',
    period: 'Jun 2024 – Aug 2024',
    description:
      'Applied marketing strategy and growth principles across multiple business units in a fast-paced environment.',
    achievements: [
      'Developed go-to-market strategies for new product launches',
      'Analyzed market trends and competitive landscape for strategic decisions',
      'Collaborated with cross-functional teams on brand positioning initiatives',
    ],
  },
  {
    role: 'Marketing Intern',
    company: 'Outlook Group',
    location: 'India',
    period: '2023 – 2024',
    description:
      "Executed digital marketing and content strategy at one of India's leading media companies during MBA.",
    achievements: [
      'Executed digital marketing campaigns across social media platforms',
      'Assisted in content strategy development and editorial planning',
      'Tracked and reported on key campaign performance metrics',
    ],
  },
  {
    role: 'Systems Engineer',
    company: 'Infosys',
    location: 'Mysore',
    period: 'Nov 2021 – Aug 2022',
    description:
      'Worked on enterprise-level technology solutions and software systems at a global IT leader.',
    achievements: [
      'Developed and maintained enterprise software systems',
      'Participated in agile development cycles and sprint planning',
      'Gained expertise in system architecture and deployment',
    ],
  },
  {
    role: 'Site Engineer',
    company: 'Viyona Marine',
    location: 'Cochin',
    period: 'Aug 2019 – Jun 2021',
    description:
      'Managed engineering operations and project delivery in the marine shipbuilding industry.',
    achievements: [
      'Oversaw project timelines, budgets, and resource allocation',
      'Coordinated with vendors and stakeholders for on-time delivery',
      'Implemented quality control processes improving operational efficiency',
    ],
  },
];

export const projects = [
  {
    title: 'Spotify Song Recommendations',
    subtitle: 'Advanced ML Algorithm',
    description:
      'Built an advanced recommendation algorithm using collaborative filtering and content-based techniques to suggest personalized music experiences.',
    problem: 'Generic music recommendations fail to capture individual listening nuances.',
    solution: 'Hybrid ML model combining collaborative filtering with audio feature analysis.',
    impact: 'Achieved improved recommendation accuracy using real Spotify dataset.',
    tags: ['Python', 'Machine Learning', 'Data Science', 'Spotify API'],
    image: '/Assets/spotify 1.jpg',
    github: 'https://github.com/asadkrish',
    demo: null,
    featured: true,
  },
  {
    title: 'Community Safety App',
    subtitle: 'Real-time Data Analytics',
    description:
      'Developed a safety application leveraging real-time data from San Francisco jails to provide community safety insights and awareness.',
    problem: 'Lack of accessible, real-time community safety information for residents.',
    solution: 'Data pipeline processing live jail records into actionable safety insights.',
    impact: 'Created an intuitive interface for real-time safety awareness.',
    tags: ['Data Analytics', 'Python', 'API Integration', 'Visualization'],
    image: '/Assets/project-2.png',
    github: 'https://github.com/asadkrish',
    demo: null,
    featured: true,
  },
  {
    title: 'Automobile Industry Analysis',
    subtitle: 'Market Research & Strategy',
    description:
      'Comprehensive analysis of the automobile industry covering market trends, competitive landscape, consumer behavior, and growth opportunities.',
    problem: 'Need for data-driven understanding of the evolving auto market landscape.',
    solution: 'Multi-dimensional analysis using industry data and strategic frameworks.',
    impact: 'Delivered actionable insights on market positioning and growth strategies.',
    tags: ['Market Research', 'Excel', 'Data Visualization', 'Strategy'],
    image: '/Assets/AutoMobile Industry.jpg',
    github: 'https://github.com/asadkrish',
    demo: null,
    featured: true,
  },
  {
    title: 'ERP at Nestlé',
    subtitle: 'Business Case Study',
    description:
      'In-depth case study analyzing the successful implementation of ERP systems at Nestlé, covering challenges, strategies, and measurable business impact.',
    problem: 'Understanding critical success factors in large-scale ERP implementations.',
    solution: 'Systematic analysis of Nestlé\'s ERP journey using business frameworks.',
    impact: 'Identified key learnings applicable to enterprise technology adoption.',
    tags: ['Case Study', 'ERP', 'Business Strategy', 'Operations'],
    image: '/Assets/project-3.png',
    github: 'https://github.com/asadkrish',
    demo: null,
    featured: true,
  },
];

export const certifications = [
  {
    title: 'Machine Learning Professional',
    issuer: 'Professional Certification',
    year: '2025',
    level: 'Advanced',
    color: '#6366f1',
  },
  {
    title: 'Data Analytics Professional',
    issuer: 'Google',
    year: '2023',
    level: 'Intermediate',
    color: '#3b82f6',
  },
  {
    title: 'Excel Skills for Business',
    issuer: 'Macquarie University',
    year: '2023',
    level: 'Professional',
    color: '#8b5cf6',
  },
  {
    title: 'AWS Fundamentals',
    issuer: 'Amazon Web Services',
    year: '2023',
    level: 'Foundational',
    color: '#06b6d4',
  },
  {
    title: 'Business Communication Skills',
    issuer: 'University of Colorado',
    year: '2021',
    level: 'Advanced',
    color: '#6366f1',
  },
  {
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    year: '2019',
    level: 'Intermediate',
    color: '#3b82f6',
  },
];

export const achievements = [
  { value: 6, suffix: '+', label: 'Projects Completed', icon: '🎯' },
  { value: 6, suffix: '', label: 'Certifications Earned', icon: '🏆' },
  { value: 4, suffix: '+', label: 'Professional Roles', icon: '💼' },
  { value: 7, suffix: '+', label: 'Years of Learning', icon: '📚' },
];

export const testimonials = [
  {
    name: 'Peer',
    role: 'Fellow MBA, IIM Sirmaur',
    text: "Krishna brings a unique blend of analytical rigor and creative thinking. His ability to bridge engineering and marketing perspectives makes him invaluable in any team.",
    initials: 'P',
  },
  {
    name: 'Mentor',
    role: 'Faculty, IIM Sirmaur',
    text: "Krishnaprasad demonstrated exceptional analytical abilities combined with strong strategic thinking. His curiosity and depth of research consistently stood out.",
    initials: 'M',
  },
  {
    name: 'Colleague',
    role: 'Infosys',
    text: "A dedicated professional who consistently delivered quality work. Krishna's willingness to learn and adapt made him a standout team member.",
    initials: 'C',
  },
];
