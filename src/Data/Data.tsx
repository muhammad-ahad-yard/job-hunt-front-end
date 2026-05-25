import {
  IconBriefcase,
  IconMapPin,
  IconPremiumRights,
  IconRecharging,
  IconSearch,
} from "@tabler/icons-react";

const companies = [
  "Google",
  "Figma",
  "Spotify",
  "Microsoft",
  "Amazon",
  "Netflix",
  "Oracle",
  "Pinterest",
  "Slack",
  "Walmart",
];

const jobCategory = [
  {
    name: "Digital Marketing",
    description: "Promote brands online with marketing strategies",
    jobs: "1k",
  },
  {
    name: "Web Developer",
    description: "Build and maintain websites for clients",
    jobs: "2k",
  },
  {
    name: "Arts & Design",
    description: "Create visual content for branding and media",
    jobs: "5k",
  },
  {
    name: "UI-UX Designer",
    description: "Design user interfaces and enhance user experience",
    jobs: "8k",
  },
  {
    name: "Content Writing",
    description: "Write and edit content for various platforms",
    jobs: "1.5k",
  },
  {
    name: "Data Entry",
    description: "Input data into systems accurately and efficiently",
    jobs: "1k",
  },
  {
    name: "Customer Support",
    description: "Assist customers with inquiries and issues",
    jobs: "1.2k",
  },
  {
    name: "Sales",
    description: "Sell products and services to customers",
    jobs: "9k",
  },
];

const work = [
  {
    name: "Build Your Resume",
    desc: "Create a standout resume with your skills.",
    path: "Content Writing",
  },
  {
    name: "Apply for Job",
    desc: "Find and apply for jobs that match your skills.",
    path: "Human Resource",
  },
  {
    name: "Get Hired",
    desc: "Connect with employers and start your new job.",
    path: "Web Developer",
  },
];

const testimonials = [
  {
    name: "Zakir Naik",
    testimonial:
      "This job portal made job search easy and quick. Recommended to all job seekers!",
    rating: 5,
  },
  {
    name: "Ali Haider",
    testimonial:
      "Found my dream job within a week! The application process was smooth.",
    rating: 3.5,
  },
  {
    name: "Jamal Nasir",
    testimonial:
      "I secured a job offer within days of applying. Exceptional user experience and support.",
    rating: 4,
  },
  {
    name: "Rehan Tariq",
    testimonial:
      "Highly efficient job portal with excellent resources. Helped me land a great position.",
    rating: 5,
  },
];

const footerLinks = [
  {
    title: "Product",
    links: ["Find Job", "Find Company", "Find Employee"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"],
  },
  {
    title: "Support",
    links: ["Help & Support", "Feedback", "FAQs"],
  },
];

const dropDownData = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      "Gujranwala",
      "Lahore",
      "Islamabad",
      "Karachi",
      "Multan",
      "Gujrat",
      "Sialkot",
      "Rawalpindi",
    ],
  },
  {
    title: "Experience",
    icon: IconBriefcase,
    options: ["Entery Level", "Intermediate", "Expert"],
  },
  {
    title: "Job Type",
    icon: IconRecharging,
    options: ["Full Time", "Part Time", "Contract", "Freelance", "Internship"],
  },
];

const jobList = [
  {
    jobTitle: "Product Designer",
    company: "Meta",
    applicants: 25,
    experience: "Entry Level",
    jobType: "Full-Time",
    location: "New York",
    package: "32 LPA",
    postedDaysAgo: 12,
    description:
      "We are looking for a talented Product Designer to join our growing team at Meta. You will work closely with product managers and engineers to design intuitive user experiences.",
  },
  {
    jobTitle: "Sr. UX Designer",
    company: "Netflix",
    applicants: 0,
    experience: "Expert",
    jobType: "Part-Time",
    location: "San Francisco",
    package: "40 LPA",
    postedDaysAgo: 12,
    description:
      "Join Netflix as a Senior UX Designer and help create world-class streaming experiences for millions of users worldwide.",
  },
  {
    jobTitle: "Frontend Developer",
    company: "Google",
    applicants: 0,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "Chicago",
    package: "38 LPA",
    postedDaysAgo: 15,
    description:
      "Join Google's frontend team to build cutting-edge web applications used by billions of people worldwide.",
  },
  {
    jobTitle: "Backend Developer",
    company: "Amazon",
    applicants: 0,
    experience: "Entry-Level",
    jobType: "Full-Time",
    location: "Paris",
    package: "36 LPA",
    postedDaysAgo: 17,
    description:
      "Join Amazon's backend engineering team and build services that power the world's largest e-commerce platform.",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Microsoft",
    applicants: 0,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "New York",
    package: "42 LPA",
    postedDaysAgo: 11,
    description:
      "Work on Microsoft Teams and Office 365 products as a Full Stack Developer. Build features used by millions of enterprise users.",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Microsoft",
    applicants: 0,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "New York",
    package: "42 LPA",
    postedDaysAgo: 11,
    description:
      "Work on Microsoft Teams and Office 365 products as a Full Stack Developer. Build features used by millions of enterprise users.",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Microsoft",
    applicants: 0,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "New York",
    package: "42 LPA",
    postedDaysAgo: 11,
    description:
      "Work on Microsoft Teams and Office 365 products as a Full Stack Developer. Build features used by millions of enterprise users.",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Microsoft",
    applicants: 0,
    experience: "Intermediate",
    jobType: "Full-Time",
    location: "New York",
    package: "42 LPA",
    postedDaysAgo: 11,
    description:
      "Work on Microsoft Teams and Office 365 products as a Full Stack Developer. Build features used by millions of enterprise users.",
  },
];

const searchFields = [
  {
    title: "Job Title",
    icon: IconSearch,
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    title: "Location",
    icon: IconMapPin,
    options: [
      "Gujranwala",
      "Lahore",
      "Islamabad",
      "Karachi",
      "Multan",
      "Gujrat",
      "Sialkot",
      "Rawalpindi",
    ],
  },
  {
    title: "Skills",
    icon: IconRecharging,
    options: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "Ruby",
      "PHP",
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "API Development",
      "Testing and Debugging",
      "Agile Methodologies",
      "DevOps",
      "AWS",
      "Azure",
      "Googel Cloud",
    ],
  },
];

const talents = [
  {
    name: "Hassan Ali",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Springboot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
    expectedCtc: "Rs. 48 - 60 LPA",
    location: "Lahore, Pakistan",
    img: "avatar-9",
  },
  {
    name: "Hassan Ali",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Springboot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
    expectedCtc: "Rs. 48 - 60 LPA",
    location: "Lahore, Pakistan",
    img: "avatar-9",
  },
  {
    name: "Hassan Ali",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Springboot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
    expectedCtc: "Rs. 48 - 60 LPA",
    location: "Lahore, Pakistan",
    img: "avatar-9",
  },
  {
    name: "Hassan Ali",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Springboot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
    expectedCtc: "Rs. 48 - 60 LPA",
    location: "Lahore, Pakistan",
    img: "avatar-9",
  },
  {
    name: "Hassan Ali",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Springboot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
    expectedCtc: "Rs. 48 - 60 LPA",
    location: "Lahore, Pakistan",
    img: "avatar-9",
  },
  {
    name: "Hassan Ali",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Springboot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
    expectedCtc: "Rs. 48 - 60 LPA",
    location: "Lahore, Pakistan",
    img: "avatar-9",
  },
  {
    name: "Hassan Ali",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Springboot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
    expectedCtc: "Rs. 48 - 60 LPA",
    location: "Lahore, Pakistan",
    img: "avatar-9",
  },
  {
    name: "Hassan Ali",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Springboot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
    expectedCtc: "Rs. 48 - 60 LPA",
    location: "Lahore, Pakistan",
    img: "avatar-9",
  },
  {
    name: "Hassan Ali",
    role: "Software Engineer",
    company: "Google",
    topSkills: ["React", "Springboot", "MongoDB"],
    about:
      "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
    expectedCtc: "Rs. 48 - 60 LPA",
    location: "Lahore, Pakistan",
    img: "avatar-9",
  },
];

const profile = {
  name: "Hassan Ali",
  role: "Software Engineer",
  company: "Google",
  location: "New York, USA",
  about:
    "s a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "API Development",
    "Testing and Debugging",
    "Agile Methodologies",
    "DevOps",
    "AWS",
    "Azure",
    "Googel Cloud",
  ],
  experience: [
    {
      title: "Software Engineer III",
      company: "Google",
      location: "New York, USA",
      startDate: "Apr 2022",
      endDate: "Present",
      description:
        "As a Software Engineer at Google, I focus on creating visually appealing and highly interactive web applications. My expertise in HTML, CSS, and JavaScript allows me to build responsive and user-friendly interfaces",
    },
  ],
  certifications: [
    {
      name: "Google Professional Cloud Architecture",
      issuer: "Google",
      issueDate: "Aug 2023",
      certificateId: "C75942G",
    },
    {
      name: "Microsoft Certified: Azure Solutions Architect Expert",
      issuer: "Microsoft",
      issueDate: "Dec 2023",
      certificateId: "M74342G",
    },
  ],
};

const fields = [
  {
    label: "Job Title",
    placeholder: "Enter Job Title",
    options: [
      "Designer",
      "Developer",
      "Product Manager",
      "Marketing Specialist",
      "Data Analyst",
      "Sales Executive",
      "Content Writer",
      "Customer Support",
    ],
  },
  {
    label: "Company",
    placeholder: "Enter Company Name",
    options: [
      "Google",
      "Microsoft",
      "Meta",
      "Netflix",
      "Adobe",
      "Amazon",
      "Apple",
      "Spotify",
    ],
  },
  {
    label: "Experience",
    placeholder: "Enter Experience Level",
    options: ["Entery Level", "Intermediate", "Expert"],
  },
  {
    label: "Job Type",
    placeholder: "Enter Job Type",
    options: ["Full Time", "Part Time", "Contract", "Freelance", "Internship"],
  },
  {
    label: "Location",
    placeholder: "Enter Job Location",
    options: [
      "Gujranwala",
      "Karachi",
      "Islamabad",
      "Lahore",
      "Sialkot",
      "Rawalpindi",
    ],
  },
  {
    label: "Salary",
    placeholder: "Enter Salary",
    options: [
      "10 LPA",
      "15 LPA",
      "20 LPA",
      "25 LPA",
      "30 LPA",
      "35 LPA",
      "40 LPA",
      "45 LPA",
    ],
  },
];

const content =
  "<h4>About The Job</h4><p>Write description here...</p><h4>Responsibilities</h4><ul><li>Add responsibilities here...</li></ul><h4>Qualifications and Skill Set</h4><ul><li>Add required qualification and skill set here...</li></ul>";

const card = [
  { name: "Location", icon: IconMapPin, value: "New York" },
  { name: "Experience", icon: IconBriefcase, value: "Expert" },
  { name: "Salary", icon: IconPremiumRights, value: "48 LPA" },
  { name: "Job Type", icon: IconRecharging, value: "Full Time" },
];

const skills = [
  "React",
  "Spring Boot",
  "Java",
  "Python",
  "Node.js",
  "MongoDB",
  "Express",
  "Django",
  "PostgreSQL",
];

const desc =
  "<h4>About the Job</h4><p>Here at UIHUT, we are a passionate, fun-loving, growing team. We are looing for passionate programmers, who want to solve technical challenges and learn and incorporate new technologies into their skillset to join our team and growing with us. In this role, you would use vaious tech stocks, will be engaged across the software development life cycle to create and modify platforms and capabilities in a collaborative and agile environment.</p>";

const companyData = {
  Name: "Google",
  Overview:
    "Google is a global leader in technology, specializing in internet-related services and products. Our mission is to organize the world’s information and make it universally accessible and useful. Founded by Larry Page and Sergey Brin, Google has grown into one of the most influential companies in the world, providing innovative tools and services that help billions of people across the globe.",
  Industry: "Internet, Software & Technology Services.",
  Website: "https://www.google.com",
  Size: "100,000+ Employees",
  Headquarters: "Mountain View, California, United States",
  Specialties: [
    "Search Engine",
    "Online Advertising",
    "Cloud Computing",
    "Software",
    "Hardware",
    "AI & Machine Learning",
    "Computer Electronics",
  ],
};

const similar = [
  {
    name: "Meta",
    employees: 48943,
  },
  {
    name: "Netflix",
    employees: 48943,
  },
  {
    name: "Microsoft",
    employees: 48943,
  },
  {
    name: "Google",
    employees: 48943,
  },
  {
    name: "Spotify",
    employees: 48943,
  },
  {
    name: "Amazon",
    employees: 48943,
  },
  {
    name: "Apple",
    employees: 48943,
  },
];

const drafts = [
  {
    jobTitle: "Junior Web Developer",
    location: "New York, USA",
    posted: "3 days ago",
  },
  {
    jobTitle: "ML Engineer",
    location: "New York, USA",
    posted: "3 days ago",
  },
  {
    jobTitle: "DevOps Engineer",
    location: "New York, USA",
    posted: "3 days ago",
  },
];

const activeJobs = [
  {
    jobTitle: "Junior Web Developer",
    location: "New York, USA",
    posted: "3 days ago",
  },
  {
    jobTitle: "ML Engineer",
    location: "New York, USA",
    posted: "3 days ago",
  },
  {
    jobTitle: "DevOps Engineer",
    location: "New York, USA",
    posted: "3 days ago",
  },
  {
    jobTitle: "Junior Web Developer",
    location: "New York, USA",
    posted: "3 days ago",
  },
  {
    jobTitle: "ML Engineer",
    location: "New York, USA",
    posted: "3 days ago",
  },
  {
    jobTitle: "DevOps Engineer",
    location: "New York, USA",
    posted: "3 days ago",
  },
];

export {
  companies,
  jobCategory,
  work,
  testimonials,
  footerLinks,
  dropDownData,
  jobList,
  searchFields,
  talents,
  profile,
  fields,
  content,
  card,
  skills,
  desc,
  companyData,
  similar,
  drafts,
  activeJobs,
};
