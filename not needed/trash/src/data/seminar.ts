import {
  GraduationCap,
  Users,
  Building2,
  Briefcase,
  HeartHandshake,
  Sparkles,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

export type DeptKey =
  | "advising"
  | "campus"
  | "admissions"
  | "career"
  | "counseling"
  | "ptcce"
  | "registration";

export interface Department {
  key: DeptKey;
  label: string;
  short: string;
  icon: LucideIcon;
  color: string; // css var token name
}

export const DEPARTMENTS: Record<DeptKey, Department> = {
  advising: {
    key: "advising",
    label: "Academic Advising",
    short: "Advising",
    icon: GraduationCap,
    color: "var(--color-dept-advising)",
  },
  campus: {
    key: "campus",
    label: "Campus Life",
    short: "Campus Life",
    icon: Users,
    color: "var(--color-dept-campus)",
  },
  admissions: {
    key: "admissions",
    label: "Admissions",
    short: "Admissions",
    icon: Building2,
    color: "var(--color-dept-admissions)",
  },
  career: {
    key: "career",
    label: "Career Services",
    short: "Career",
    icon: Briefcase,
    color: "var(--color-dept-career)",
  },
  counseling: {
    key: "counseling",
    label: "Counseling",
    short: "Counseling",
    icon: HeartHandshake,
    color: "var(--color-dept-counseling)",
  },
  ptcce: {
    key: "ptcce",
    label: "Prince Turki Center for Creativity & Entrepreneurship",
    short: "PTCCE",
    icon: Sparkles,
    color: "var(--color-dept-ptcce)",
  },
  registration: {
    key: "registration",
    label: "Registration",
    short: "Registration",
    icon: ClipboardList,
    color: "var(--color-dept-registration)",
  },
};

export interface Session {
  dept: DeptKey;
  title: string;
  description: string;
  time: string;
  location: string;
  presenter: string;
  objectives?: string[];
}

export interface Day {
  id: string;
  label: string;
  date: string;
  sessions: Session[];
}

export const SCHEDULE: Day[] = [
  {
    id: "day1",
    label: "Day 1",
    date: "Tuesday, 27 May 2025",
    sessions: [
      {
        dept: "advising",
        title: "Student-Centered Academic Advising",
        description: "Guiding students from admission to graduation.",
        time: "10:00 AM – 11:00 AM",
        location: "PMU Auditorium",
        presenter: "Maged Soliman",
        objectives: [
          "Reframe advising as a strategic student-success function",
          "Introduce proactive intervention for at-risk students",
          "Preview automation with Banner Workflow & Degree Works",
        ],
      },
      {
        dept: "campus",
        title: "Building an Engaged Campus Experience",
        description: "Creating community through student life programming.",
        time: "11:15 AM – 12:15 PM",
        location: "PMU Auditorium",
        presenter: "TBA",
      },
      {
        dept: "admissions",
        title: "A Seamless Student Admission Experience",
        description: "Streamlining the journey from inquiry to enrollment.",
        time: "01:00 PM – 02:00 PM",
        location: "PMU Auditorium",
        presenter: "TBA",
      },
      {
        dept: "career",
        title: "Preparing Students for Career Success",
        description: "Employability pathways and industry partnerships.",
        time: "02:15 PM – 03:15 PM",
        location: "PMU Auditorium",
        presenter: "TBA",
      },
    ],
  },
  {
    id: "day2",
    label: "Day 2",
    date: "Wednesday, 28 May 2025",
    sessions: [
      {
        dept: "counseling",
        title: "Student Wellbeing & Mental Health Support",
        description: "Evidence-based counseling frameworks on campus.",
        time: "10:00 AM – 11:00 AM",
        location: "PMU Auditorium",
        presenter: "TBA",
      },
      {
        dept: "ptcce",
        title: "Fostering Creativity & Entrepreneurship",
        description: "Programs from the Prince Turki Center.",
        time: "11:15 AM – 12:15 PM",
        location: "PMU Auditorium",
        presenter: "TBA",
      },
      {
        dept: "registration",
        title: "Modernizing Student Registration",
        description: "Digital-first workflows and self-service tools.",
        time: "01:00 PM – 02:00 PM",
        location: "PMU Auditorium",
        presenter: "Allan Joseph Bagoaisan",
      },
      {
        dept: "advising",
        title: "Data-Driven Advising Interventions",
        description: "Using analytics to identify and support at-risk students.",
        time: "02:15 PM – 03:15 PM",
        location: "PMU Auditorium",
        presenter: "Maged Soliman",
      },
    ],
  },
  {
    id: "day3",
    label: "Day 3",
    date: "Thursday, 29 May 2025",
    sessions: [
      {
        dept: "campus",
        title: "Student Leadership Development",
        description: "Building leaders through co-curricular experiences.",
        time: "10:00 AM – 11:00 AM",
        location: "PMU Auditorium",
        presenter: "TBA",
      },
      {
        dept: "career",
        title: "Alumni Networks & Career Outcomes",
        description: "Long-term outcomes tracking and mentorship.",
        time: "11:15 AM – 12:15 PM",
        location: "PMU Auditorium",
        presenter: "TBA",
      },
      {
        dept: "admissions",
        title: "Recruitment Strategy & Enrollment Growth",
        description: "Market intelligence and targeted outreach.",
        time: "01:00 PM – 02:00 PM",
        location: "PMU Auditorium",
        presenter: "TBA",
      },
      {
        dept: "counseling",
        title: "Building a Resilient Student Community",
        description: "Peer support networks and wellness initiatives.",
        time: "02:15 PM – 03:15 PM",
        location: "PMU Auditorium",
        presenter: "TBA",
      },
    ],
  },
];

export interface Presenter {
  dept: DeptKey;
  name: string;
  bio: string;
}

export const PRESENTERS: Presenter[] = [
  {
    dept: "advising",
    name: "Maged Soliman",
    bio: "Academic Advisor at PMU with an MBA from Prince Mohammad Bin Fahd University. Specializes in proactive intervention, academic progression analytics, and automating advising processes with Banner Workflow and Degree Works.",
  },
  { dept: "admissions", name: "TBA", bio: "Speaker to be announced." },
  {
    dept: "registration",
    name: "Allan Joseph Bagoaisan",
    bio: "Registration specialist focused on modernizing student services through digital-first workflows and process improvement.",
  },
  { dept: "campus", name: "TBA", bio: "Speaker to be announced." },
  { dept: "career", name: "TBA", bio: "Speaker to be announced." },
  { dept: "counseling", name: "TBA", bio: "Speaker to be announced." },
  { dept: "ptcce", name: "TBA", bio: "Speaker to be announced." },
];

export const FEATURED = {
  title:
    "Smart Academic Advising: Data, Automation, and Strategic Student Success Interventions",
  presenter: "Maged Soliman",
  presenterTitle: "Academic Advisor, PMU · MBA",
  presenterImage: "" as string, // optional URL for presenter photo
  timePlace: "TBA · PMU Auditorium",
  description: [
    "A modern, strategic approach to academic advising that goes beyond registration support and focuses on student success through proactive intervention, data-driven decisions, and process automation.",
    "The session showcases advising models used to support students on probation, academic review, and maximum duration risk, and demonstrates how Banner Workflow and Degree Works can automate monitoring and strengthen institutional support.",
    "It also introduces automated personalized study plans tailored to each student's major, completed hours, and graduation pathway — reducing manual workload, minimizing errors, and improving advising accuracy.",
  ],
  objectives: [
    "Redefine advising as a strategic student-success function, not only registration.",
    "Proactive interventions for probation, academic review, and maximum duration cases.",
    "Use data analytics and monitoring to improve retention and graduation outcomes.",
    "Automate advising with Banner Workflow and Degree Works.",
    "Generate personalized study plans per student and major.",
    "Foster student accountability, engagement, and long-term academic planning.",
  ],
  itinerary: [
    "Welcome & Introduction — modern advising and student success.",
    "The Evolution of Academic Advising — from registration to development.",
    "Early Intervention Strategies for At-Risk Students.",
    "Using Data to Drive Advising Decisions.",
    "Advising Technology in Practice — Degree Works, Banner, Workflow.",
    "Automation — max duration monitoring, personalized study plans.",
    "Building a Sustainable Advising Model.",
    "Q&A and Open Discussion.",
  ],
  bio: "Maged Soliman holds an MBA from Prince Mohammad Bin Fahd University and has extensive experience in academic advising and student support. He has contributed to structured advising practices through academic systems, workflow automation, and data-informed intervention models — with interests spanning advising technology, retention strategy, and process optimization.",
};

export const WHY_ATTEND = [
  {
    title: "Share Best Practices",
    body: "Learn from successful strategies across departments.",
  },
  {
    title: "Enhance Student Success",
    body: "Discover ways to improve the student experience.",
  },
  {
    title: "Strengthen Collaboration",
    body: "Build partnerships across student affairs teams.",
  },
  {
    title: "Drive Innovation",
    body: "Explore ideas and modern solutions.",
  },
  {
    title: "Achieve Excellence",
    body: "Promote institutional effectiveness together.",
  },
];
