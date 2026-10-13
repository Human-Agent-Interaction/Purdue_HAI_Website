import hieuTranImage from "../../assets/people/Hieu_Tran.jpg";
import shifaSomjiImage from "../../assets/people/Shifa Somji.jpg";
import hyungChanChoImage from "../../assets/people/Hyung Chan Cho.jpg";
import shashiSalavathImage from "../../assets/people/Shashi_Salavath.jpeg";

export type Pillar = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  gradient: string;
};

export const researchPillars: Pillar[] = [
  {
    id: "human-machine-communication",
    title: "Improving Human-Machine Communication",
    description:
      "Creating interactive systems that learn from long-term use, respond at the right moment, and foster a sense of companionship for the people they support.",
    highlights: [
      "Adaptive dialogue design",
      "Longitudinal field studies",
      "Communication well-being metrics"
    ],
    gradient: "from-iris/80 via-iris/50 to-mint/60"
  },
  {
    id: "relational-agents",
    title: "Relational Agents for Real World Applications",
    description:
      "Deploying agents alongside partners in healthcare, education, and community settings to examine how supportive AI fits within everyday practice.",
    highlights: ["Healthcare collaborations", "Educational pilots", "Community deployments"],
    gradient: "from-mint/80 via-mint/50 to-amber/60"
  },
  {
    id: "personalized-support",
    title: "Personalizing Intervention and Interaction Support",
    description:
      "Modeling individual traits, needs, and preferences so agents can offer tailored interventions that evolve alongside each person.",
    highlights: ["User-centered modeling", "Behavior change support", "Responsive coaching"],
    gradient: "from-amber/80 via-iris/60 to-amber/40"
  }
];

export type Project = {
  title: string;
  description: string;
  category: "Health" | "Education" | "Social Good" | "Industry";
  tags: string[];
  image: string;
  link: string;
};

export const projectFilters: Project["category"][] = [
  "Health",
  "Social Good"
];

export const projects: Project[] = [
  {
    title: "Breast Cancer Survivor Agent",
    description:
      "An intelligent tutoring system that supports low literacy Latinas navigating the cancer survivorship process through culturally grounded lessons and coaching.",
    category: "Health",
    tags: ["Cancer survivorship", "Intelligent tutoring", "Team: Adi Ojha"],
    image: "/islands/health-01.png",
    link: "https://hai.purdue.edu/projects/breast-cancer-survivor-agent"
  },
  {
    title: "Speech Therapy Robot",
    description:
      "A socially assistive robot designed as a long-term therapy partner for people with aphasia, extending clinical speech therapy into daily life.",
    category: "Health",
    tags: ["Social robotics", "Speech therapy", "Team: Shifa Somji & Guven Gergerli"],
    image: "/islands/health-02.png",
    link: "https://hai.purdue.edu/projects/speech-therapy-robot"
  },
  {
    title: "Backchanneling Empathy Agent",
    category: "Social Good",
    description:
      "An empathy-focused conversational agent that provides culturally attuned backchannel responses for Chinese community members in Chicago.",
    tags: ["Empathic dialogue", "Community support", "Team: Hieu Tran, Michael Lackey & Carl Guo"],
    image: "/islands/social-01.png",
    link: "https://hai.purdue.edu/projects/backchanneling-empathy-agent"
  },
  {
    title: "Privacy Interface for Social Robots",
    description:
      "A participatory design study with older adults that explores privacy controls for data collected by social robots in the home.",
    category: "Social Good",
    tags: ["Privacy research", "Participatory design", "Team: Nishchal Jagadeesha"],
    image: "/islands/social-02.png",
    link: "https://hai.purdue.edu/projects/privacy-interface-social-robots"
  }
];

export type Person = {
  name: string;
  image?: string;
  role: string;
  focus: string;
  bio?: string;
  links: {
    scholar?: string;
    github?: string;
    website?: string;
    linkedin?: string;
  };
};

export const peopleGroups: { title: string; members: Person[] }[] = [
  {
    title: "Graduate Researchers",
    members: [
      {
        name: "Hieu Tran",
        image: hieuTranImage,
        role: "PhD Student · Empathic Dialogue Systems",
        focus: "Backchanneling responses, cultural adaptation, relational AI",
        bio: "Hieu explores empathic dialogue systems that adapt culturally attuned backchanneling behaviors to sustain long-term human-agent relationships.",
        links: {}
      },
      {
        name: "Shifa Somji",
        image: shifaSomjiImage,
        role: "PhD Student · Socially Assistive Robotics",
        focus: "Speech therapy robotics, longitudinal engagement, rehabilitation",
        bio: "Shifa designs socially assistive robots that extend speech therapy beyond the clinic, emphasizing longitudinal engagement and rehabilitation outcomes.",
        links: {}
      }
    ]
  },
  {
    title: "Research Staff",
    members: [
      {
        name: "Hyung Chan Cho",
        image: hyungChanChoImage,
        role: "Research Staff · Human-Robot Interaction",
        focus: "Collaborative autonomy, human factors, real-world deployment support",
        bio: "Hyung studies collaborative autonomy and human factors to ensure social robots operate safely and meaningfully during real-world deployments.",
        links: {}
      }
    ]
  },
  {
    title: "Undergraduate Fellows",
    members: [
      {
        name: "Shashi Salavath",
        image: shashiSalavathImage,
        role: "BSc · Human-Computer Interaction",
        focus: "Accessible interface prototyping and participatory research methods",
        bio: "Shashi prototypes accessible interfaces and facilitates participatory research workshops that center community voices in HCI design.",
        links: {linkedin: "https://www.linkedin.com/in/shashi-salavath"}
      }
    ]
  }
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  topic: string;
  links: {
    pdf?: string;
    video?: string;
    code?: string;
  };
};

export type NewsItem = {
  title: string;
  date: string;
  summary: string;
  image: string;
  link: string;
};

export const publicationTopics = [
  "Human-Robot Interaction",
  "Conversational AI",
  "Trust & Ethics",
  "Education",
  "Health Tech"
];

export const publications: Publication[] = [
  {
    title:
      "Relational Autonomy in Mixed Human-AI Teams: Calibrating Trust Through Conversational Grounding",
    authors: "M. L. Andrade, A. Ruiz, K. Sato",
    venue: "CHI 2024",
    year: 2024,
    topic: "Human-Robot Interaction",
    links: {
      pdf: "#",
      video: "#",
      code: "#"
    }
  },
  {
    title:
      "Quiet Signals, Strong Bonds: Wearable Sensing for Empathic Support in Neurodiverse Communication",
    authors: "A. Ruiz, M. Zhang, P. Desai",
    venue: "Ubicomp 2023",
    year: 2023,
    topic: "Health Tech",
    links: {
      pdf: "#",
      video: "#"
    }
  },
  {
    title:
      "Generative Dialogue Mediators for Constructive Civic Engagement Across Cultures",
    authors: "C. Winters, K. Park",
    venue: "CSCW 2023",
    year: 2023,
    topic: "Conversational AI",
    links: {
      pdf: "#",
      code: "#"
    }
  },
  {
    title:
      "Designing Co-Teaching Agents that Sense and Support Educator Flow States",
    authors: "P. Desai, M. L. Andrade",
    venue: "LAK 2022",
    year: 2022,
    topic: "Education",
    links: {
      pdf: "#"
    }
  },
  {
    title:
      "Translucent Autonomy: Visualizing AI Reasoning for High-Stakes Aviation Collaboration",
    authors: "K. Sato, M. L. Andrade",
    venue: "IROS 2022",
    year: 2022,
    topic: "Trust & Ethics",
    links: {
      pdf: "#",
      video: "#",
      code: "#"
    }
  }
];

export const newsItems: NewsItem[] = [
  {
    title: "HAI Lab secures NSF grant for empathetic care companions",
    date: "April 2024",
    summary:
      "New $3.2M grant supports collaboration with healthcare partners to deploy AI companions in assisted living communities.",
    image: "/news/nsf-grant.png",
    link: "https://hai.purdue.edu/news/nsf-grant-empathetic-care-companions"
  },
  {
    title: "CHI 2024: Best Paper Honorable Mention",
    date: "March 2024",
    summary:
      "Our work on conversational trust calibration in mixed human-agent teams recognized for advancing collaborative autonomy.",
    image: "/news/chi-2024.png",
    link: "https://hai.purdue.edu/news/chi-2024-best-paper-honorable-mention"
  },
  {
    title: "Media Lab Residency Announced",
    date: "January 2024",
    summary:
      "Lab fellows begin an exchange with design futurists to prototype immersive AI empathy labs for civic contexts.",
    image: "/news/media-lab.png",
    link: "https://hai.purdue.edu/news/media-lab-residency-announced"
  },
  {
    title: "HAI Lab Open House",
    date: "November 2023",
    summary:
      "Community partners experienced new adaptive agent demos and contributed to our inclusive design roadmap.",
    image: "/news/open-house.png",
    link: "https://hai.purdue.edu/news/hai-lab-open-house-2023"
  }
];

export const statHighlights = [
  { label: "Peer-Reviewed Papers", value: "82" },
  { label: "Active Collaborators", value: "31" },
  { label: "Countries Reached", value: "14" },
  { label: "Student Fellows", value: "26" }
];

export const heroShowcase = [
  {
    title: "Cancer Survivorship Coaching",
    blurb:
      "ITS-guided support that helps breast cancer survivors process information and build confidence after treatment."
  },
  {
    title: "Speech Therapy Companions",
    blurb:
      "Socially assistive robots that extend clinical speech therapy into motivating, in-home practice."
  },
  {
    title: "Community Empathy Agents",
    blurb:
      "Conversational backchanneling that acknowledges emotion and nurtures belonging in underserved communities."
  }
];
