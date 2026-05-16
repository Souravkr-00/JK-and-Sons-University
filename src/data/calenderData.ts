export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  type: 'academic' | 'holiday' | 'exam' | 'event';
  description?: string;
}

export interface Semester {
  id: string;
  name: string;
  period: string;
  events: CalendarEvent[];
}

export interface AcademicYear {
  year: string;
  semesters: Semester[];
}

export const academicCalendarData: AcademicYear[] = [
  {
    year: "2026-2027",
    semesters: [
      {
        id: "fall-2026",
        name: "Fall Semester",
        period: "September 2026 - January 2027",
        events: [
          { id: "1", title: "Course Registration Starts", date: "2026-08-25", type: "academic" },
          { id: "2", title: "Course Registration Ends", date: "2026-08-31", type: "academic" },
          { id: "3", title: "Semester Orientation", date: "2026-09-01", type: "academic" },
          { id: "4", title: "Classes Begin", date: "2026-09-05", type: "academic" },
          { id: "5", title: "Independence Day (Armenia)", date: "2026-09-21", type: "holiday" },
          { id: "6", title: "Mid-Term Examination Period", date: "2026-10-15", type: "exam", description: "Mid-terms for all undergraduate programs." },
          { id: "7", title: "Cultural Week", date: "2026-11-10", type: "event" },
          { id: "8", title: "Fall Semester Classes End", date: "2026-12-15", type: "academic" },
          { id: "9", title: "Final Examination Period", date: "2026-12-20", type: "exam" },
          { id: "10", title: "New Year & Christmas Break", date: "2026-12-31", type: "holiday" },
          { id: "11", title: "Armenian Christmas", date: "2027-01-06", type: "holiday" },
          { id: "12", title: "Semester Results Published", date: "2027-01-20", type: "academic" }
        ]
      },
      {
        id: "spring-2027",
        name: "Spring Semester",
        period: "February 2027 - June 2027",
        events: [
          { id: "13", title: "Spring Semester Registration", date: "2027-01-25", type: "academic" },
          { id: "14", title: "Classes Begin", date: "2027-02-05", type: "academic" },
          { id: "15", title: "International Women's Day", date: "2027-03-08", type: "holiday" },
          { id: "16", title: "Mid-Term Exams", date: "2027-03-25", type: "exam" },
          { id: "17", title: "Genocide Remembrance Day", date: "2027-04-24", type: "holiday" },
          { id: "18", title: "Labour Day", date: "2027-05-01", type: "holiday" },
          { id: "19", title: "Victory and Peace Day", date: "2027-05-09", type: "holiday" },
          { id: "20", title: "Final Examination Period", date: "2027-05-20", type: "exam" },
          { id: "21", title: "Republic Day", date: "2027-05-28", type: "holiday" },
          { id: "22", title: "Classes End", date: "2027-06-10", type: "academic" },
          { id: "23", title: "Annual Graduation Gala", date: "2027-06-25", type: "event" }
        ]
      }
    ]
  },
  {
    year: "2025-2026",
    semesters: [
      {
        id: "fall-2025",
        name: "Fall Semester",
        period: "September 2025 - January 2026",
        events: [
          { id: "prev-1", title: "Classes Completed", date: "2025-12-20", type: "academic" }
        ]
      }
    ]
  }
];
