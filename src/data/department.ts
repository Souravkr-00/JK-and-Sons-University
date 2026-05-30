export interface Faculty {
  name: string;
  designation: string;
  specialization: string;
  experience: string;
  photo: string;
}

export interface Lab {
  name: string;
  description: string;
  image: string;
}

export interface Department {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  programsCount: number;
  hod: string;
  image: string;
  vision: string;
  mission: string;
  focusAreas: string[];
  faculty: Faculty[];
  labs: Lab[];
  achievements: string[];
  facilities: string[];
}

export const departments: Department[] = [
  {
    id: 'computer-science',
    name: 'Computer Science & Engineering',
    category: 'Engineering',
    tagline: 'Architecting the Digital Future through Innovation and Intelligence.',
    description: 'The Department of Computer Engineering at College is a hub of innovation, focusing on cutting-edge technologies like Artificial Intelligence, Cloud Computing, and Cybersecurity.',
    programsCount: 5,
    hod: 'Dr. Armen Vardanyan',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
    vision: 'To be a global leader in computing education and research, fostering innovation that addresses societal challenges.',
    mission: 'To provide high-quality education, conduct transformative research, and develop ethical leaders in the field of computer science.',
    focusAreas: ['Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Cloud Systems', 'Data Science'],
    faculty: [
      {
        name: 'Dr. Armen Vardanyan',
        designation: 'Head of Department',
        specialization: 'Quantum Computing',
        experience: '20+ Years',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      },
      {
        name: 'Dr. Elena Sargsyan',
        designation: 'Professor',
        specialization: 'Neural Networks',
        experience: '15+ Years',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      }
    ],
    labs: [
      {
        name: 'AI & Robotics Lab',
        description: 'Advanced facility for training neural networks and building robotic systems.',
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
      },
      {
        name: 'Cybersecurity Hub',
        description: 'A secure environment for threat simulation and defense strategy development.',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
      }
    ],
    achievements: [
      'Top 10 Research Contribution in AI in the region.',
      'Recipient of the Global Innovation Award 2024.',
      'Successfully filed 15 national and international patents.'
    ],
    facilities: [
      'High-Performance Computing Cluster',
      'Dedicated VR/AR Experience Zone',
      '24/7 Coding Studios',
      'Advanced Networking Lab'
    ]
  },
  {
    id: 'medicine',
    name: 'School of Medicine',
    category: 'Healthcare',
    tagline: 'Combining Compassion with Clinical Excellence.',
    description: 'Our Medical Department is dedicated to training the next generation of healthcare professionals with a focus on clinical practice and patient-centric research.',
    programsCount: 8,
    hod: 'Dr. Mariam Mnatsakanyan',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80',
    vision: 'To redefine healthcare education through integrated clinical training and pioneering research.',
    mission: 'To produce physicians who are lifelong learners, innovative researchers, and compassionate healers.',
    focusAreas: ['Molecular Medicine', 'Cardiology', 'Public Health', 'Radiology', 'Surgical Innovation'],
    faculty: [
      {
        name: 'Dr. Mariam Mnatsakanyan',
        designation: 'Dean, Medical Sciences',
        specialization: 'Oncology',
        experience: '25+ Years',
        photo: 'https://images.unsplash.com/photo-1559839734-2b71f1536785?auto=format&fit=crop&q=80',
      },
      {
        name: 'Dr. Karen Petrosyan',
        designation: 'Associate Professor',
        specialization: 'Neurology',
        experience: '12+ Years',
        photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80',
      }
    ],
    labs: [
      {
        name: 'Simulated OR',
        description: 'A fully functional operating room for risk-free surgical practice.',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80',
      },
      {
        name: 'Molecular Bio Lab',
        description: 'Advanced research facility for genetic engineering and diagnostic tools.',
        image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80',
      }
    ],
    achievements: [
      'Accredited by the World Health Organization (WHO).',
      'Consistent 100% match rate in international residencies.',
      'Pioneer in Telemedicine research during global health crises.'
    ],
    facilities: [
      'Multi-Specialty Teaching Hospital',
      'Digital Anatomy Tables',
      'Advanced Diagnostic Imaging Center',
      'Medical Simulation Center'
    ]
  },
  {
    id: 'business',
    name: 'School of Management',
    category: 'Management',
    tagline: 'Educating Leaders for a Global Economy.',
    description: 'Transforming students into visionary leaders who can navigate the complexities of global business with ethics and innovation.',
    programsCount: 6,
    hod: 'Prof. Sevak Hovhannisyan',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
    vision: 'To be the premier business school recognized for developing responsible leaders of the future.',
    mission: 'To impart knowledge that combines theoretical depth with practical global business insights.',
    focusAreas: ['Finance & Fintech', 'Entrepreneurship', 'Marketing Analytics', 'Strategic Leadership'],
    faculty: [
      {
        name: 'Prof. Sevak Hovhannisyan',
        designation: 'Director, Business School',
        specialization: 'Strategic Management',
        experience: '18+ Years',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
      }
    ],
    labs: [
      {
        name: 'Bloomberg Terminal Lab',
        description: 'Real-time financial data and market analysis training.',
        image: 'https://images.unsplash.com/photo-1611974714658-058e170827f3?auto=format&fit=crop&q=80',
      }
    ],
    achievements: [
      'Ranked #1 for Entrepreneurial Outcomes in the region.',
      'Active partnerships with 50+ Global Fortune 500 companies.',
      'Awarded "Business School of the Year" by Armenian Business Council.'
    ],
    facilities: [
      'Modern Case Study Rooms',
      'Incubation Center for Startups',
      'Executive Leadership Hall',
      'International Trading Lab'
    ]
  }
];
