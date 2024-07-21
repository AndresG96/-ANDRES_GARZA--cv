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
  locationLink: "https://www.google.com/maps/place/Dallas-Fort+Worth",
  about: "Empowering your business growth while simplifying your journey.",
  summary: "Versatile professional with over seven years of experience in client services, sales, and operations management. Using diverse skill sets to drive business growth and operational efficiency.",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQF-ezUdaRWU9g/profile-displayphoto-shrink_200_200/0/1721590449738?e=1727308800&v=beta&t=2m5Wa2glX6U1qtmkLkeMdfDvVPhMPpy29Tp-yTOYab4",
  personalWebsiteUrl: "",
  contact: {
    email: "amgarza953@gmail.com",
    tel: "+14699224998",
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
  education: [
    {
      school: "NOX Campus",
      degree: "Software Development",
      start: "2024",
      end: null,
    },
  ],
  work: [
    {
      company: "It's Finished, LLC",
      link: "",
      badges: ["Dallas/Fort Worth"],
      title: "General Manager",
      start: "2019",
      end: null,
      description:
        "Start up, 3rd party marketer, providing a Mobile Team to execute Ford Airbag Recalls out in residents or commercial campuses\n● Manage relationship with supplier\n● Track and maintain 500 piece inventory\n● Oversee and develop staff of 30 to hit company and individual quota\n● Recruit and train new hires and new promotions\n● Execute personal sales quota\n● Oversee accounting (payroll and company overhead)",
    },
    {
      company: "EVO Payments",
      link: "",
      badges: ["Dallas/Fort Worth"],
      title: "Team Lead and Account Manager",
      start: "2017",
      end: "2019",
      description:
        "Credit Card processing\n● Recruited and trained new hires for full commission door to door role\n● Oversaw and developed assigned team to hit individual and team quota\n● Execute personal Account acquisition quota",
    },
    {
      company: "Rusty Wallis Honda",
      link: "",
      badges: ["Dallas/Fort Worth"],
      title: "Sales Consultant",
      start: "2015",
      end: "2017",
      description:
        "Car Sales\n● Helped seekers find a vehicle best fit for their desire and needs (new or used)\n● Negotiated overall price and or payment terms\n● Made daily calls, setting appointments for potential buyers",
    },
  ],
  skills: [
    "Microsoft and Google Suites",
    "Supervisory and General Management",
    "Onboarding",
    "Negotiating",
    "Recruiting",
  ],
  projects: [
    {
      title: "E-Commerce Store for Saltgrass Steakhouse",
      techStack: ["Vercel", "Github", "Next.js", "Tailwind CSS", "TypeScript"],
      description: "E-commerce store for a steakhouse that allows users to order merchandise and pay online. It is a prototype and is not yet live.",
      logo: ConsultlyLogo,
      link: {
        label: "saltgrass.vercel.app",
        href: "https://saltgrass.vercel.app/",
      },
    },
  ],
} as const;