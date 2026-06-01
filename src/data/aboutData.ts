export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface UniversityOverview {
  name: string;
  established: number;
  tagline: string;
  intro: string;
  vision: string;
  mission: string;
  stats: Stat[];
  history: Milestone[];
  accreditations: string[];
  leaders: Leader[];
  facilities: {
    title: string;
    description: string;
    image: string;
  }[];
}

export const aboutData: UniversityOverview = {
  name: "College",
  established: 2026,
  tagline: "Shaping Future Leaders in the Heart of Armenia",
  intro: "Established in 2026, College of Armenia is a global center of excellence in Healthcare, Management, and Technology. Based in Yerevan, we provide a multicultural environment where over 5,000 students from 40+ countries pursue their academic dreams through innovation and research.",
  vision: "To be a global center of excellence in education and research, fostering innovation that addresses the pressing challenges of the 21st century.",
  mission: "To provide high-quality, accessible education that empowers students with critical thinking, ethical leadership, and practical skills required for global success.",
  stats: [
    { label: "Students", value: "5,000+", description: "From over 40 countries" },
    { label: "Programs", value: "50+", description: "UG, PG, and PhD" },
    { label: "Faculty", value: "350+", description: "Expert researchers" },
    { label: "Placement", value: "95%", description: "Career success rate" }
  ],
  history: [
    { year: "1994", title: "Founding", description: "Established as the JK Medical Institute with a focus on Public Health." },
    { year: "2005", title: "University Status", description: "Recognized as a full university by the Ministry of Education, Armenia." },
    { year: "2012", title: "Global Expansion", description: "Inaugurated the School of Management and International Relations." },
    { year: "2020", title: "Digital Transformation", description: "Launched hybrid learning models and advanced AI research labs." }
  ],
  accreditations: [
    "World Health Organization (WHO) Recognized",
    "Ministry of Education & Science, Armenia",
    "Bologna Process Compliant",
    "WFME Standards Aligned"
  ],
  leaders: [
    // {
    //   name: "Prof. Ani Sargsyan",
    //   role: "Vice Chancellor",
    //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    //   bio: "An expert in international management committed to academic excellence and global partnerships."
    // },
    {
      name: "Dr. Shubhanshu Singh Rajput",
      role: "Board Chairman & Founder",
      image: "/assets/Images/ceo.jpg",
      bio: "A visionary educator and physician with over 30 years of experience in shaping higher education in Armenia."
    },
    // {
    //   name: "Dr. Aram Petrosyan",
    //   role: "Chief Operating Officer",
    //   image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
    //   bio: "Overseeing institutional growth and digital infrastructure to support a modern learning environment."
    // }
  ],
  facilities: [
    {
      title: "Advanced Research Labs",
      description: "Equipped with the latest diagnostic and computational tools.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80"
    },
    {
      title: "Modern Digital Library",
      description: "Access to millions of journals and research databases 24/7.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b04008?auto=format&fit=crop&q=80"
    },
    {
      title: "International Hostels",
      description: "Convenient, safe, and comfortable housing for our students.",
      image: "https://images.unsplash.com/photo-1555854817-40e09836a04a?auto=format&fit=crop&q=80"
    }
  ]
};
