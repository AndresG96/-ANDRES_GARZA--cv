import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Andres Garza",
  initials: "AG",
  location: "Dallas/Fort Worth, Texas, USA",
  about: "Versatile professional with over seven years of experience in client services, sales, and operations management. Adept at leveraging diverse skill sets to drive business growth and operational efficiency. Seeking opportunities to apply my expertise in sales strategy, team leadership, or multifaceted operational roles.",
  contact: {
    email: "amgarza953@gmail.com",
    tel: "469-922-4998",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/AndresG96",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andres-garza-49a73a14a",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/TheRealAndresG",
        icon: XIcon,
      },
    ],
  },
  skills: [
    "Microsoft and Google Suites",
    "Supervisory and General Management",
    "Onboarding",
    "Negotiating",
    "Recruiting",
  ],
  work: [
    {
      company: "It's Finished, LLC",
      link: "",
      badges: [],
      title: "General Manager",
      start: "Dec 2019",
      end: "PRESENT",
      description: "Start up, 3rd party marketer, providing a Mobile Team to execute Ford Airbag Recalls out in residents or commercial campuses\n● Manage relationship with supplier\n● Track and maintain 500 piece inventory\n● Oversee and develop staff of 30 to hit company and individual quota\n● Recruit and train new hires and new promotions\n● Execute personal sales quota\n● Oversee accounting (payroll and company overhead)",
    },
    {
      company: "EVO Payments",
      link: "",
      badges: [],
      title: "Team Lead and Account Manager",
      start: "Sept 2017",
      end: "Dec 2019",
      description: "Credit Card processing\n● Recruited and trained new hires for full commission door to door role\n● Oversaw and developed assigned team to hit individual and team quota\n● Execute personal Account acquisition quota",
    },
    {
      company: "Rusty Wallis Honda",
      link: "",
      badges: [],
      title: "Sales Consultant",
      start: "Aug 2015",
      end: "August 2017",
      description: "Car Sales\n● Helped seekers find a vehicle best fit for their desire and needs (new or used)\n● Negotiated overall price and or payment terms\n● Made daily calls, setting appointments for potential buyers",
    },
  ],
  education: [
    {
      school: "NOX Campus ", // Replace with your actual university name
      degree: "Software Development", // Replace with your actual degree
      start: "2024", // Replace with your actual start year
    },
    // Add more education entries if needed
  ],
  projects: [
    {
      title: "E-Commerce Store for Saltgrass Steakhouse",
      techStack: ["Vercel, Github, Next.js, Tailwind CSS, TypeScript"],
      description: "E-commerce store for a steakhouse that allows users to order merchandise and pay online. It is a prototype and is not yet live.",
      logo: ConsultlyLogo, // Make sure this logo is imported or replace with an appropriate one
      link: {
        label: "saltgrass.vercel.app",
        href: "https://saltgrass.vercel.app/",
      },
    },
    // Add more project entries as needed
  ],
} as const;