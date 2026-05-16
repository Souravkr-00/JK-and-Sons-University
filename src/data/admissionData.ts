export interface AdmissionStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Eligibility {
  program: string;
  requirements: string[];
}

export interface RequiredDocument {
  id: string;
  name: string;
  description: string;
}

export interface AdmissionDate {
  event: string;
  date: string;
}

export const admissionSteps: AdmissionStep[] = [
  {
    id: 1,
    title: "Choose Your Program",
    description: "Explore our diverse range of MPH, MBA, and Allied Health programs to find the perfect fit for your career goals.",
    icon: "Search"
  },
  {
    id: 2,
    title: "Check Eligibility",
    description: "Review academic requirements, language proficiency needs, and program-specific prerequisites.",
    icon: "CheckCircle"
  },
  {
    id: 3,
    title: "Online Registration",
    description: "Create your student portal account and fill out the comprehensive application form accurately.",
    icon: "UserPlus"
  },
  {
    id: 4,
    title: "Submit Documents",
    description: "Upload scanned copies of original certificates, transcripts, ID proof, and photographs.",
    icon: "FileUp"
  },
  {
    id: 5,
    title: "Entrance Evaluation",
    description: "Attend required entrance exams or interviews as specified for your chosen program track.",
    icon: "ScreenShare"
  },
  {
    id: 6,
    title: "Merit List Publication",
    description: "Wait for the release of selection lists based on your academic and entrance test performance.",
    icon: "BarChart"
  },
  {
    id: 7,
    title: "Confirm Admission",
    description: "Secure your seat by paying the admission fee and receiving your official acceptance letter.",
    icon: "Award"
  }
];

export const eligibilityData: Eligibility[] = [
  {
    program: "MPH / MBA (Graduate)",
    requirements: [
      "Bachelor's degree from an accredited university (min. 50% aggregate).",
      "Valid score in Management/Public Health entrance test (if applicable).",
      "Proof of English proficiency (TOEFL/IELTS) for non-native speakers.",
      "Work experience is preferred but not mandatory for most tracks."
    ]
  },
  {
    program: "BSc / MSC (Science)",
    requirements: [
      "12th Grade / Higher Secondary completion with Science subjects.",
      "Minimum qualifying GPA in core subjects (Biology, Chemistry, Physics).",
      "Strong foundation in basic clinical sciences for MSc applicants.",
      "Language proficiency as per program requirements."
    ]
  }
];

export const requiredDocuments: RequiredDocument[] = [
  { id: "doc1", name: "High School / Degree Certificate", description: "Original certificate or provisional degree certificate." },
  { id: "doc2", name: "Academic Transcripts", description: "Detailed marks sheets of all previous semesters/years." },
  { id: "doc3", name: "Passport / National ID", description: "Clear photocopy of personal information pages." },
  { id: "doc4", name: "IELTS/TOEFL Score Card", description: "Only required for international applicants or designated tracks." },
  { id: "doc5", name: "Recent Photographs", description: "4-6 passport-sized color photos (white background)." },
  { id: "doc6", name: "Statement of Purpose", description: "A 500-word essay explaining your interest in the program." }
];

export const admissionDates: AdmissionDate[] = [
  { event: "Application Portal Opens", date: "June 01, 2026" },
  { event: "Early Bird Application Deadline", date: "June 30, 2026" },
  { event: "Final Application Deadline", date: "August 15, 2026" },
  { event: "Entrance Exam Period", date: "August 20 - 25, 2026" },
  { event: "First Merit List Release", date: "September 01, 2026" },
  { event: "Classes Commencement", date: "September 15, 2026" }
];
