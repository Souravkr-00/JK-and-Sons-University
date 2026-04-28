/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import courses from '../data/courses.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Course {
  id: string;
  category: string;
  degree: string;
  title: string;
  description: string;
  duration: string;
  image: string;
}

export default function ProgramsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(courses.map(c => c.category))];

  const filteredCourses = useMemo(() => {
    return (courses as Course[]).filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-app-bg font-sans selection:bg-gold/20 selection:text-navy">
      
      
      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Curriculum</span>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-navy leading-tight mb-6">
              Programs & Courses
            </h1>
            <p className="max-w-2xl text-lg text-text-muted font-light leading-relaxed">
              Explore our diverse range of healthcare and management programs designed to prepare 
              the next generation of leaders for the global healthcare landscape.
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-6 mb-12 bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses by name or description..."
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-transparent focus:border-gold/30 focus:bg-white rounded outline-none transition-all text-navy"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center text-navy font-bold text-xs uppercase tracking-widest gap-2 bg-gray-50 px-4 py-3.5 rounded border border-transparent">
                <Filter className="w-4 h-4" />
                Filter:
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-6 py-3.5 rounded text-xs font-bold uppercase tracking-widest transition-all ${
                      selectedCategory === cat 
                      ? 'bg-navy text-white shadow-lg shadow-navy/10' 
                      : 'bg-white border border-gray-100 text-text-muted hover:border-gold hover:text-navy'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <motion.div
                    layout
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="group bg-white border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500"
                  >
                    <div className="h-56 overflow-hidden relative">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-navy/80 backdrop-blur-md text-white px-3 py-1 rounded-sm text-[0.65rem] font-bold uppercase tracking-widest">
                          {course.degree}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-navy/20"></div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-gold font-bold text-[0.6rem] uppercase tracking-[0.15em] border border-gold/20 px-2 py-1 rounded-sm">
                          {course.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-serif font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                        {course.title}
                      </h3>
                      
                      <p className="text-sm text-text-muted font-light leading-relaxed mb-8 flex-1">
                        {course.description}
                      </p>
                      
                      <div className="space-y-4 pt-6 border-t border-gray-50 mt-auto">
                        <div className="flex items-center justify-between text-[0.7rem] font-bold uppercase tracking-widest text-navy">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gold" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-gold" />
                            <span>Accredited</span>
                          </div>
                        </div>
                        
                        <button className="w-full bg-navy text-white py-3.5 rounded-sm font-bold text-[0.7rem] uppercase tracking-widest hover:bg-gold hover:text-navy transition-all active:scale-[0.98]">
                          Course Syllabus
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center bg-white border border-gray-100 rounded">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-gray-300" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-navy mb-2">No courses found</h3>
                  <p className="text-text-muted font-light">Try adjusting your search or category filters.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
