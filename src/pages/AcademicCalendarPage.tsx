import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  BookOpen, 
  Clock, 
  Flag, 
  Info,
  CalendarDays,
  List as ListIcon,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { academicCalendarData, AcademicYear, Semester, CalendarEvent } from "../data/calenderData";


const AcademicCalendarPage: React.FC = () => {
  const [selectedYearIndex, setSelectedYearIndex] = useState(0);
  const [activeSemesterTab, setActiveSemesterTab] = useState(0);
  const [viewMode, setViewMode] = useState<'list' | 'calendar'>('list');
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState(false);

  const currentYear = academicCalendarData[selectedYearIndex];
  const activeSemester = currentYear.semesters[activeSemesterTab] || currentYear.semesters[0];

  const getEventColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'academic': return 'bg-blue-500';
      case 'holiday': return 'bg-red-500';
      case 'exam': return 'bg-amber-500';
      case 'event': return 'bg-emerald-500';
      default: return 'bg-gray-500';
    }
  };

  const getEventTextColor = (type: CalendarEvent['type']) => {
    switch (type) {
      case 'academic': return 'text-blue-600';
      case 'holiday': return 'text-red-600';
      case 'exam': return 'text-amber-600';
      case 'event': return 'text-emerald-600';
      default: return 'text-gray-600';
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const sortedEvents = useMemo(() => {
    return [...activeSemester.events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [activeSemester]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-violet-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(196,161,96,0.2),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(196,161,96,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Academic <span className="text-white">Calendar</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Stay informed about important dates, semester timelines, holidays, and examination 
              schedules for the upcoming academic year at College.
            </p>
          </motion.div>

          {/* Year Selector */}
          <div className="relative">
            <button 
              onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
              className="flex items-center space-x-4 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 rounded-sm text-white font-bold tracking-widest uppercase text-sm hover:bg-white/20 transition-all min-w-[200px] justify-between"
            >
              <span>Academic Year {currentYear.year}</span>
              <ChevronDown size={18} className={`transition-transform duration-300 ${isYearDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {isYearDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white shadow-2xl rounded-sm overflow-hidden z-50 border border-gray-100"
                >
                  {academicCalendarData.map((year, idx) => (
                    <button
                      key={year.year}
                      onClick={() => {
                        setSelectedYearIndex(idx);
                        setIsYearDropdownOpen(false);
                        setActiveSemesterTab(0);
                      }}
                      className="w-full text-left px-6 py-4 text-sm font-bold text-black hover:bg-gray-50 hover:text-black transition-colors border-b last:border-0 border-gray-100"
                    >
                      {year.year}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        
        {/* View Toggles & Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          {/* Semester Tabs */}
          <div className="flex p-1 bg-gray-100 rounded-sm w-full lg:w-auto">
            {currentYear.semesters.map((sem, idx) => (
              <button
                key={sem.id}
                onClick={() => setActiveSemesterTab(idx)}
                className={`flex-1 lg:flex-none px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                  activeSemesterTab === idx 
                    ? 'bg-white text-black shadow-md underline decoration-white decoration-2 underline-offset-8' 
                    : 'text-text-muted hover:text-black'
                }`}
              >
                {sem.name}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
            <div className="flex items-center bg-white border border-gray-100 rounded-sm p-1 shadow-sm">
            <button
              onClick={() => setViewMode('list')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                viewMode === 'list' ? 'bg-white text-black shadow-lg' : 'text-text-muted hover:bg-gray-50'
              }`}
            >
              <ListIcon size={14} />
              <span>List View</span>
            </button>
            <button
              onClick={() => setViewMode('calendar')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                viewMode === 'calendar' ? 'bg-white text-black shadow-lg' : 'text-text-muted hover:bg-gray-50'
              }`}
            >
              <CalendarDays size={14} />
              <span>Calendar View</span>
            </button>
          </div>
        </div>

        {/* Calendar Content Area */}
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Left: Legend & Download (Desktop) */}
          <div className="hidden lg:block space-y-8">
            <div className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm">
              <h3 className="text-navy font-serif font-bold text-lg mb-6">Legend</h3>
              <div className="space-y-4">
                {[
                  { type: 'academic', label: 'Academic / Classes', icon: BookOpen },
                  { type: 'holiday', label: 'Public Holidays', icon: Flag },
                  { type: 'exam', label: 'Examination Period', icon: Clock },
                  { type: 'event', label: 'Events & Galas', icon: Sparkles },
                ].map((item) => (
                  <div key={item.type} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getEventColor(item.type as any)}`}></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-text-muted">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

              <div className="bg-white p-8 rounded-sm shadow-xl shadow-white/10">
              <h3 className="text-navy font-bold text-lg mb-2">Print Version</h3>
              <p className="text-navy/70 text-xs mb-6 font-medium">Download the full academic calendar in PDF format for your records.</p>
              <button className="flex items-center justify-center space-x-3 w-full bg-blue-950 text-white py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-navy transition-all">
                <Download size={16} />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Center: Main View */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {viewMode === 'list' ? (
                <motion.div
                  key="list-view"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="h-10 w-1 bg-gold"></div>
                    <div>
                      <h2 className="text-2xl font-serif font-bold text-navy">{activeSemester.name}</h2>
                      <p className="text-sm font-medium text-text-muted">{activeSemester.period}</p>
                    </div>
                  </div>

                  <div className="bg-gold border border-gray-100 rounded-sm overflow-hidden shadow-sm">
                    {sortedEvents.map((event, idx) => (
                      <div 
                        key={event.id}
                        className={`group p-8 flex flex-col md:flex-row md:items-center gap-6 transition-all hover:bg-gray-50 border-b border-gray-50 last:border-0`}
                      >
                        <div className="md:w-48 shrink-0">
                          <div className={`inline-flex items-center space-x-2 mb-2 ${getEventTextColor(event.type)}`}>
                            <div className={`w-2 h-2 rounded-full ${getEventColor(event.type)}`}></div>
                            <span className="text-[0.6rem] font-bold uppercase tracking-widest">{event.type}</span>
                          </div>
                          <div className="text-xl font-bold text-navy font-serif">
                            {new Date(event.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short' })}
                          </div>
                          <div className="text-[0.6rem] font-bold uppercase tracking-widest text-text-muted mt-0.5">
                            {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long' })}
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <h4 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">{event.title}</h4>
                          {event.description && (
                            <p className="text-sm text-text-muted leading-relaxed max-w-2xl">{event.description}</p>
                          )}
                        </div>

                        <button className="opacity-0 group-hover:opacity-100 p-2 text-gold hover:text-navy transition-all">
                          <Info size={20} />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="calendar-view"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-gold border border-gray-100 p-8 rounded-sm shadow-sm"
                >
                  <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-serif font-bold text-navy">Calendar Visualization</h2>
                    <div className="p-4 bg-blue-950/5 rounded-sm border border-navy/10 flex items-center space-x-3 text-navy">
                      <CalendarIcon size={18} />
                      <span className="text-xs font-bold uppercase tracking-widest">Select a date to view details</span>
                    </div>
                  </div>
                  
                  {/* Real calendar grid would be complex, let's build a structural monthly layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {/* Simplified month views */}
                    {Array.from(new Set(activeSemester.events.map(e => new Date(e.date).getMonth()))).map((monthIdx) => {
                      const monthName = new Date(2026, monthIdx).toLocaleString('en-US', { month: 'long' });
                      const monthEvents = activeSemester.events.filter(e => new Date(e.date).getMonth() === monthIdx);
                      
                      return (
                        <div key={monthIdx} className="border border-gray-50 rounded-sm p-6 bg-gray-50/50">
                          <h5 className="font-bold text-navy text-sm uppercase tracking-widest mb-4 pb-2 border-b-2 border-gold/30">{monthName}</h5>
                          <div className="space-y-4">
                            {monthEvents.map(e => (
                              <div key={e.id} className="flex items-start space-x-3">
                                <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${getEventColor(e.type)}`}></div>
                                <div>
                                  <div className="text-[0.65rem] font-bold text-text-muted uppercase mb-0.5">
                                    {new Date(e.date).getDate()}
                                  </div>
                                  <div className="text-xs font-bold text-navy line-clamp-2">{e.title}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-12 p-6 bg-blue-950 text-gold rounded-sm flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1">Academic Timeline Info</h4>
                      <p className="text-xs text-gray-300">Detailed examination schedules are released 30 days prior to the start of each period.</p>
                    </div>
                    <Link to="/programs" className="px-6 py-3 bg-gold text-navy text-[0.7rem] font-bold uppercase tracking-widest hover:bg-gold transition-all goldspace-nowrap hidden sm:block">
                      View Programs
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Notices Section */}
      <section className="py-20 bg-gold border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-full bg-amber-500"></div>
              <h3 className="font-serif font-bold text-xl text-navy mb-4">Latest Revision</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                The academic calendar was last updated on October 15, 2025. Please ensure you are 
                referencing the most recent version.
              </p>
              <div className="text-[0.6rem] font-bold uppercase tracking-widest text-amber-800">Revision v2.4.1</div>
            </div>

            <div className="p-10 border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-2 h-full bg-amber-500"></div>
              <h3 className="font-serif font-bold text-xl text-navy mb-4">Exam Schedules</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                Individual department exam schedules will be published through the student portal 
                one month before the finals.
              </p>
              <Link to="#" className="text-[0.6rem] font-bold uppercase tracking-widest text-navy transition-colors hover:text-amber-500 flex items-center">
                <span>Access Student Portal</span>
                <ChevronRight size={12} className="ml-1" />
              </Link>
            </div>

            <div className="p-10 bg-blue-950 text-gold relative">
              <h3 className="font-serif font-bold text-xl mb-4 text-white">Sync to Calendar</h3>
              <p className="text-white text-sm leading-relaxed mb-6">
                Directly import all academic dates into your Google Calendar, iCal, or Outlook.
              </p>
              <button className="flex items-center space-x-2 text-[0.6rem] font-bold uppercase tracking-widest text-white hover:text-white transition-colors">
                <CalendarIcon size={14} />
                <span>Export to Google Calendar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

const Sparkles: React.FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/>
    <path d="M19 17v4"/>
    <path d="M3 5h4"/>
    <path d="M17 19h4"/>
  </svg>
);

export default AcademicCalendarPage;
