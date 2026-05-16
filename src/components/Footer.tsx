import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, GraduationCap } from 'lucide-react';

const footerLinks = [
  {
    title: 'Academics',
    links: [
      { name: 'Programs / Courses', href: '#' },
      { name: 'Departments', href: '#' },
      { name: 'Faculty', href: '#' },
      { name: 'Academic Calendar', href: '#' },
      { name: 'Curriculum', href: '#' },
    ],
  },
  {
    title: 'Admissions',
    links: [
      { name: 'Admission Process', href: '#' },
      { name: 'Eligibility', href: '#' },
      { name: 'Fees & Scholarships', href: '#' },
      { name: 'International Students', href: '#' },
      { name: 'Apply Now', href: '#' },
    ],
  },
  {
    title: 'University',
    links: [
      { name: 'History', href: '#' },
      { name: 'Leadership', href: '#' },
      { name: 'Vision & Mission', href: '#' },
      { name: 'Accreditations', href: '#' },
      { name: 'Location / Map', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className=" flex flex-col items-start">
            <div className="flex items-center space-x-3   ">
              <img src="../../assets/Images/logo.png" alt="JK & Sons University Logo" className="w-20 h-30" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of global healthcare leaders through innovation, 
              research, and a commitment to excellence since 1994.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-navy transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-serif font-bold mb-6 tracking-wide underline underline-offset-8 decoration-gold/30">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 text-sm hover:text-gold transition-colors flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-gold mr-0 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-serif font-bold mb-6 tracking-wide underline underline-offset-8 decoration-gold/30">
              Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed group-hover:text-white transition-colors cursor-default">
                  JK & Sons LLC, Main Campus, <br />
                  Yerevan / Dilijan, Armenia
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone size={18} className="text-gold shrink-0" />
                <span className="text-gray-400 text-sm group-hover:text-white transition-colors cursor-default">
                  +374 (00) 00-00-00
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail size={18} className="text-gold shrink-0" />
                <a 
                  href="mailto:drshubhrajput@gmail.com" 
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  drshubhrajput@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <button className="bg-gold text-navy px-6 py-3 rounded-sm font-bold text-xs tracking-widest uppercase hover:bg-white transition-all w-full">
                Enquire Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500 font-medium tracking-wider text-center md:text-left">
            © 2026 JK & Sons University of Armenia. All rights reserved. 
            <span className="hidden md:inline mx-4 opacity-30">|</span>
            <br className="md:hidden" />
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span className="mx-2 opacity-30">•</span>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <GraduationCap size={20} className="text-gold" />
              <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Ministry Approved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
