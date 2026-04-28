import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, GraduationCap } from 'lucide-react';
const navLinks = [
  { name: 'Home', href: '#' },
  {
    name: 'Academics',
    dropdown: [
      { name: 'Programs / Courses', href: '/programs' },
      { name: 'Departments', href: '#' },
      { name: 'Faculty', href: '#' },
      { name: 'Academic Calendar', href: '#' },
      { name: 'Curriculum', href: '#' },
    ],
  },
  {
    name: 'Admissions',
    dropdown: [
      { name: 'Admission Process', href: '#' },
      { name: 'Eligibility', href: '#' },
      { name: 'Fees & Scholarships', href: '#' },
      { name: 'International Students', href: '#' },
      { name: 'Apply Now', href: '#' },
    ],
  },
  {
    name: 'Research',
    dropdown: [
      { name: 'Research Areas', href: '#' },
      { name: 'Publications', href: '#' },
      { name: 'Labs & Centers', href: '#' },
      { name: 'Collaborations', href: '#' },
    ],
  },
  {
    name: 'Placements',
    dropdown: [
      { name: 'Placement Stats', href: '#' },
      { name: 'Recruiters', href: '#' },
      { name: 'Internships', href: '#' },
      { name: 'Career Support', href: '#' },
    ],
  },
  {
    name: 'About',
    dropdown: [
      { name: 'Overview', href: '#' },
      { name: 'Vision & Mission', href: '#' },
      { name: 'Leadership', href: '#' },
      { name: 'History', href: '#' },
      { name: 'Accreditations', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Location / Map', href: '#' },
      { name: 'Help Desk', href: '#' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-white shadow-sm border-gray-200 h-20' : 'bg-white/80 backdrop-blur-md border-transparent h-28'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Left: Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="flex flex-row items-center space-x-1">
              <img src="/assets/Images/logo.png" alt="JK University Logo" className="w-23 h-auto object-contain -mt-1" />
            </div>
          </div>

          {/* Right: Desktop Navlinks */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group h-full flex items-center"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href || '#'}
                  className="flex items-center space-x-1 text-[0.9rem] font-medium text-text-main transition-colors hover:text-navy"
                >
                  <span>{link.name}</span>
                  {link.dropdown && <ChevronDown size={12} className={`opacity-50 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </a>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-[1.5rem] left-0 w-60 bg-white shadow-xl border border-gray-100 rounded-b-lg overflow-hidden py-3"
                      >
                        {link.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-2.5 text-[0.85rem] text-text-muted hover:bg-gray-50 hover:text-navy border-l-4 border-transparent hover:border-gold transition-all"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-navy"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy/10 backdrop-blur-sm z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-10">
                  <div className="flex items-center space-x-3">
                    <div className="bg-navy p-2 rounded text-gold font-serif font-bold italic">
                      JK
                    </div>
                    <span className="font-serif font-bold text-navy">UNIVERSITY</span>
                  </div>
                  <button onClick={() => setIsOpen(false)} className="p-2 -mr-2">
                    <X size={24} className="text-gray-400" />
                  </button>
                </div>

                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-gray-50 last:border-0">
                      <button
                        onClick={() => link.dropdown && setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                        className="flex items-center justify-between w-full py-4 text-left font-medium text-text-main"
                      >
                        <span>{link.name}</span>
                        {link.dropdown && (
                          <ChevronDown
                            size={16}
                            className={`text-gray-400 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                          />
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {link.dropdown && activeDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-gray-50"
                          >
                            <div className="py-2 px-4 space-y-1">
                              {link.dropdown.map((subItem) => (
                                <a
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block py-3 text-[0.85rem] text-text-muted hover:text-navy"
                                >
                                  {subItem.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  <div className="pt-8">
                    <button className="w-full bg-navy text-white py-4 rounded font-bold text-sm tracking-widest uppercase transition-colors">
                      Admissions 2026
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
