export interface WorkshopPresenter {
  name: string;
  role?: string;
  photo?: string;
  bio?: string;
  fullBio?: string;
}

export interface WorkshopResource {
  label: string;
  type: 'PPTX' | 'DOCX';
  file: string;
  downloadLabel: string;
}

export interface Workshop {
  slug: string;
  department: string;
  title: string;
  time: string;
  noun: 'Seminar' | 'Workshop';
  description: string[];
  objectives: string[];
  itinerary: string[];
  resource: WorkshopResource;
  presenter: WorkshopPresenter;
}

export const WORKSHOPS: Workshop[] = [
  {
    slug: 'academic-advising',
    department: 'Academic Advising',
    title:
      'Smart Academic Advising: Data, Automation, and Strategic Student Success Interventions',
    time: 'TBA',
    noun: 'Seminar',
    description: [
      "This seminar presents a modern and strategic approach to academic advising that goes beyond traditional registration support and focuses on student success through proactive intervention, data-driven decision-making, and academic process automation. The session highlights how academic advising can serve as a central pillar in improving retention, academic progression, and graduation outcomes through the integration of technology, structured advising practices, and continuous student follow-up.",
      'The seminar will showcase practical advising models used to support students on probation, academic review, and maximum duration risk, while also demonstrating how systems such as Banner Workflow and Degree Works can be utilized to automate monitoring, improve advising efficiency, and strengthen institutional support processes.',
      "In addition, the session will introduce the automation of personalized study plans tailored to each student’s major, completed credit hours, remaining requirements, and graduation pathway. This model supports more accurate advising, minimizes manual workload, reduces errors, and enhances the overall student advising experience.",
      'The seminar also emphasizes the importance of advising as an ongoing developmental partnership that empowers students to make informed academic decisions, build accountability, and achieve sustainable academic success.',
    ],
    objectives: [
      'To redefine academic advising as a strategic student success function rather than only a registration process.',
      'To demonstrate proactive advising interventions for at-risk students, including probation, academic review, and maximum duration cases.',
      'To present the use of data analytics and academic monitoring in improving retention and graduation outcomes.',
      'To demonstrate the use of Banner Workflow and Degree Works in automating advising processes and student tracking.',
      'To introduce automated personalized study plans based on student major, academic progress, and graduation requirements.',
      'To promote efficient advising practices that improve accuracy, consistency, and operational effectiveness.',
      'To foster student accountability, engagement, and long-term academic planning.',
    ],
    itinerary: [
      'Welcome & Introduction — Overview of modern academic advising and its impact on student success',
      'The Evolution of Academic Advising — From course registration support to strategic student development',
      'Early Intervention Strategies for At-Risk Students — Supporting students under probation, academic review, and maximum duration risk',
      'Using Data to Drive Advising Decisions — Monitoring progression, identifying risk indicators, and improving retention outcomes',
      'Advising Technology in Practice — Using Degree Works, Banner, and Banner Workflow for academic monitoring and intervention management',
      'Automation in Academic Advising',
      'Automated maximum duration, P1 and P2 workflow monitoring and workflow escalation',
      'Personalized study plan generation per student and major',
      'Streamlining advising processes while reducing manual workload',
      'Building a Sustainable Advising Model — Continuous follow-up, student accountability, and long-term success planning',
      'Q&A and Open Discussion',
    ],
    resource: {
      label: 'Presentation Slides',
      type: 'PPTX',
      file: '/assets/downloads/academic-advising.pptx',
      downloadLabel: 'Download Slides (.pptx)',
    },
    presenter: {
      name: 'Maged Soliman',
      photo: '/assets/img/presenters/maged-soliman.jpg',
      bio: 'Maged Soliman is an Academic Advisor dedicated to supporting students in academic planning, progression monitoring, and educational goal achievement. He specializes in strategic advising approaches that integrate student support, academic policy guidance, and technology-driven solutions to improve advising efficiency and student success outcomes.',
      fullBio:
        'Maged Soliman is an Academic Advisor dedicated to supporting students in academic planning, progression monitoring, and educational goal achievement. He specializes in strategic advising approaches that integrate student support, academic policy guidance, and technology-driven solutions to improve advising efficiency and student success outcomes. His work focuses on proactive intervention strategies, academic progression analysis, and the implementation of automated advising processes that enhance the student experience while supporting institutional effectiveness. Maged Soliman holds an MBA degree from Prince Mohammad Bin Fahd University and has extensive experience in academic advising and student support services. Throughout his professional journey, he has worked closely with students across different academic standings, assisting them in overcoming academic challenges, improving progression pathways, and achieving graduation goals. He has contributed to the development of structured advising practices through the use of academic systems, workflow automation, and data-informed intervention models. His interests include advising technology, student retention strategies, process optimization, and enhancing the quality of academic support services within higher education institutions.',
    },
  },
  {
    slug: 'admission',
    department: 'Admissions',
    title: 'SkyPath Program: Empowering High School Students for University Success',
    time: 'TBA',
    noun: 'Seminar',
    description: [
      'This seminar introduces the SkyPath Program, a PMU initiative that bridges the gap between high school and university. It allows students to take university-level courses, experience campus life, and explore different academic fields for a whole day. Through this early exposure, students build essential skills, gain confidence, and make informed decisions about their future majors.',
    ],
    objectives: [
      'To guide high school students in exploring various academic disciplines through firsthand exposure to university-level courses and learning environments.',
      'To enhance students’ academic, communication, and critical thinking skills through engagement with PMU faculty, peers, and campus resources.',
      'To strengthen collaboration between the Admissions Department and academic units in supporting students’ transition from school to university life.',
      'To inspire students to pursue higher education with confidence, clarity, and a strong sense of purpose',
    ],
    itinerary: [
      'Welcome & Overview of the Admission Department',
      'Introduction to PMU’s Admissions Philosophy and outreach initiatives',
      'Introduction to the SkyPath Program',
      'Program Objectives, eligibility criteria, and structure',
      'Benefits for students, schools, and the university community',
      'Open Discussion and participant insights',
      'Q&A Session',
      'Addressing audience questions and collecting feedback for continuous improvement',
    ],
    resource: {
      label: 'Presentation Slides',
      type: 'PPTX',
      file: '/assets/downloads/admission.pptx',
      downloadLabel: 'Download Slides (.pptx)',
    },
    presenter: {
      name: 'Sara Al Omar',
      bio: 'Sara Al Omar is a PMU graduate with over four years of experience as an Admission Coordinator. She oversees the admission process, evaluates applicants, and provides personalized guidance to prospective students in choosing suitable majors. In addition, she leads outreach initiatives and school visits, representing PMU with professionalism and dedication while promoting the university’s academic programs and student success opportunities.',
    },
  },
  {
    slug: 'campus-life-competency',
    department: 'Campus Life',
    title: 'Competency Engagement Transcript',
    time: 'TBA',
    noun: 'Seminar',
    description: [
      'The seminar will discuss the tools and methods used to enhance and quantify student engagement, and how such tools and methods increases student engagement in outside classroom participation.',
    ],
    objectives: [
      'Highlight the importance of involvement measurement',
      'Linking PMU Competencies to the Non-Academic Transcript',
      'Identifying key factors for data collection',
    ],
    itinerary: ['Part 1 – Literature', 'Part 2 – Operational Concept', 'Part 3 – Challenges and Opportunities'],
    resource: {
      label: 'Presentation Slides',
      type: 'PPTX',
      file: '/assets/downloads/campus-life-competency.pptx',
      downloadLabel: 'Download Slides (.pptx)',
    },
    presenter: {
      name: 'Imad Khoder Agha',
      photo: '/assets/img/presenters/imad-khoder-agha.jpg',
      bio: 'Mr. Imad is the Coordinator for Campus Life. Since he joined PMU, he was eager to improve the data collection and quality of service aspect of the Department, as well as equip the department, with essential tools, that allow it to benefit the students beyond its traditional way.',
    },
  },
  {
    slug: 'campus-life-engageu',
    department: 'Campus Life',
    title: 'Next Gen Engage U Platform',
    time: 'TBA',
    noun: 'Seminar',
    description: [
      'This seminar will reflect on the importance of establishing a unified platform for co-curricular academic competitions. It will explore how such a platform can enhance student engagement, streamline participation processes, and foster a spirit of healthy academic rivalry. The session will also address the role of collaboration between academic departments, student affairs, and industry partners in promoting co-curricular excellence. Real-world examples, key success factors, and future opportunities for expanding the platform’s impact will be discussed.',
    ],
    objectives: [
      'Underscore the importance of initiatives that actively engage both national and international students.',
      'Showcase how the platform fosters collaboration and strengthens partnerships with industry leaders.',
      'Highlight the benefits of simplifying the participation process in co-curricular competitions.',
    ],
    itinerary: ['Literature Review', 'Platform Introduction', 'Challenges and Opportunities'],
    resource: {
      label: 'Presentation Slides',
      type: 'PPTX',
      file: '/assets/downloads/campus-life-engageu.pptx',
      downloadLabel: 'Download Slides (.pptx)',
    },
    presenter: {
      name: 'Imad Khoder Agha',
      photo: '/assets/img/presenters/imad-khoder-agha.jpg',
      bio: 'Mr. Imad serves as the Coordinator for Campus Life. Since joining PMU, he has been committed to enhancing data collection processes and improving the quality of services within the department. He has also focused on equipping the department with essential tools to better support students beyond traditional approaches.',
    },
  },
  {
    slug: 'career-services',
    department: 'Career Services & Alumni Relations',
    title: 'Building Stronger Alumni Connections: The PMU Alumni LinkedIn Initiative',
    time: 'TBA',
    noun: 'Seminar',
    description: [
      'This seminar introduces PMU’s new Alumni LinkedIn initiative, aimed at enhancing professional networking, showcasing alumni accomplishments, and supporting career development. Participants will explore how to utilize Handshake to advance their careers, connect with industry professionals, and stay actively engaged with the PMU community. The session will also highlight our checklist for company visits and alumni surveys, designed to collect valuable feedback. Furthermore, we will discuss our partnership with NLO to ensure accurate tracking of alumni employment data.',
    ],
    objectives: [
      'Present the new LinkedIn platform dedicated to PMU alumni.',
      'Emphasize the value of alumni engagement in networking, career advancement, and sharing feedback.',
      'Showcase our biannual collaboration with NLO to collect accurate and up-to-date employment data.',
      'Promote active participation and open discussion on professional development and alumni collaboration.',
    ],
    itinerary: [
      'Welcome and Opening Remarks',
      'The Importance of Alumni Engagement Networks',
      'Key Statistics and Impact Highlights',
      'Success Stories and Testimonials on Professional Networking',
      'Q&A Session and Open Discussion for Feedback',
      'Closing Remarks and Next Steps',
    ],
    resource: {
      label: 'Workshop Outline',
      type: 'DOCX',
      file: '/assets/downloads/career-services.docx',
      downloadLabel: 'Download Outline (.docx)',
    },
    presenter: {
      name: 'Ms. Hanan Alghamdi',
      bio: 'Coordinator at the Alumni Relations Office within PMU’s Career Services & Alumni Relations, with a focus on alumni engagement, professional networking, and strategic career development initiatives.',
    },
  },
  {
    slug: 'counseling',
    department: 'Counseling',
    title: 'Effective Strategies for Counseling and Student Support',
    time: 'TBA',
    noun: 'Seminar',
    description: [
      'This interactive workshop aims to equip student affairs professionals with the best practices in the counseling department to enhance student well-being and academic success. Participants will engage in activities, discussions, and case studies to explore effective strategies for counseling and student support services.',
    ],
    objectives: [
      'Understand the essential components of an effective counseling program in student affairs.',
      'Learn practices for providing mental health support to students.',
      'Develop skills for crisis intervention and management.',
      'Explore innovative counseling techniques and tools.',
      'Foster a supportive and inclusive campus environment through counseling services.',
    ],
    itinerary: [
      'Presentation on key elements of successful counseling services.',
      'Interactive discussion on current practices and challenges.',
      'Workshop on identifying and addressing common mental health issues.',
      'Case studies on successful mental health interventions.',
      'Group discussion on managing emergencies and critical incidents.',
      'Open floor for questions and feedback.',
      'Summary of key takeaways and action items.',
    ],
    resource: {
      label: 'Presentation Slides',
      type: 'PPTX',
      file: '/assets/downloads/counseling.pptx',
      downloadLabel: 'Download Slides (.pptx)',
    },
    presenter: {
      name: 'Osama Abdullah',
    },
  },
  {
    slug: 'prince-turki-center',
    department: 'Prince Turki Center for Creativity & Entrepreneurship',
    title: 'From Ideas to Impact: PTCCE & Monshaat Innovation Week Initiative',
    time: 'TBA',
    noun: 'Seminar',
    description: [
      'This seminar presents a best practice developed by PTCCE in partnership with Monshaat through Innovation Week, conducted twice each academic year. The initiative provides students from all PMU colleges with a structured platform to submit innovative ideas to improve campus life and the student experience. Ideas are evaluated by a three-member PTCCE committee, recognized through a certificate ceremony, and forwarded to the relevant university departments for consideration. The initiative promotes innovation, student engagement, and continuous improvement.',
    ],
    objectives: [
      'Promote a culture of innovation.',
      'Provide a structured platform for student ideas.',
      'Increase student engagement.',
      'Recognize innovative contributions.',
      'Support continuous improvement.',
    ],
    itinerary: [
      'Introduction to PTCCE and Monshaat partnership.',
      'Innovation Week process.',
      'Evaluation methodology.',
      'Recognition ceremony.',
      'Impact and statistics.',
      'Lessons learned and future plans.',
      'Questions and discussion.',
    ],
    resource: {
      label: 'Presentation Slides',
      type: 'PPTX',
      file: '/assets/downloads/prince-turki-center.pptx',
      downloadLabel: 'Download Slides (.pptx)',
    },
    presenter: {
      name: 'Omar AlKhaliwi',
      role: 'Employability and Entrepreneurship Manager',
      photo: '/assets/img/presenters/omar-alkhaliwi.jpg',
      bio: 'Omar AlKhaliwi oversees Career Services, Alumni Relations, and PTCCE at Prince Mohammad Bin Fahd University. He leads initiatives that promote innovation, entrepreneurship, student engagement, and collaboration with national and international partners such as Monshaat.',
    },
  },
  {
    slug: 'registration',
    department: 'Registration',
    title: 'Facilitating Students’ Academic Journey through the Registrar’s Office',
    time: 'TBA',
    noun: 'Workshop',
    description: [
      'This workshop provides an overview of the core functions and procedures of the Registration Department. It highlights the systems, reports, and tracking tools used to support accurate student records, registration cycles, academic standing updates, graduation clearance, and overall student academic progress.',
    ],
    objectives: [
      'Explain the core functions of the Registrar’s Office and its role in supporting students from admission to graduation.',
      'Identify the key applications, tools, and technologies used in registration operations, including course scheduling, student records, and academic audits.',
      'Demonstrate how statistical reports and data analysis support decision-making and policy development.',
      'Emphasize the importance of data accuracy, integrity, and timely updates in registration-related processes.',
      'Discuss challenges and best practices in managing registration, holds, academic standing, and graduation clearance.',
      'Strengthen collaboration between departments to improve registration cycles and student services.',
    ],
    itinerary: [
      'Welcome and introduction',
      'Overview of Registration Department functions',
      'Interactive audience engagement segment',
      'Registration procedures: term configuration, master schedule planning, final exam scheduling, statistical reports, student services, and records room operations',
      'Key challenges, lessons learned, and best practices',
      'Questions and answers',
    ],
    resource: {
      label: 'Workshop Outline',
      type: 'DOCX',
      file: '/assets/downloads/registration.docx',
      downloadLabel: 'Download Outline (.docx)',
    },
    presenter: {
      name: 'Allan Joseph Bagoaisan',
      bio: 'Mr. Allan Joseph Bagoaisan supports registration technologies and specializes in statistical data, student information systems, reporting, and process analysis. His work contributes to accurate registration operations, reliable student records, and data-informed decision-making within the Registration Department.',
      fullBio:
        'Mr. Allan Joseph Bagoaisan supports registration technologies and specializes in statistical data, student information systems, reporting, and process analysis. His work contributes to accurate registration operations, reliable student records, and data-informed decision-making within the Registration Department. Allan Joseph Bagoaisan is part of PMU’s Registration Department, where he supports registration systems, statistical reporting, and student information processes. His experience includes preparing data reports, analyzing registration-related workflows, and supporting system-based solutions that strengthen operational accuracy and student service delivery. Through his role, he contributes to improving registration efficiency, maintaining reliable academic records, and supporting institutional decision-making.',
    },
  },
];
