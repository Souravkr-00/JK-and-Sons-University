import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter, BookOpen, Users, Building2 } from 'lucide-react';
import { departments } from '../data/department';


const DepartmentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(departments.map(d => d.category))];

  const filteredDepartments = departments.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          d.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || d.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(196,161,96,0.3),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(196,161,96,0.2),transparent_50%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-300 mb-6 leading-tight">
              Our <span className="text-gray-300">Departments</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Explore our diverse academic departments, each a center of excellence dedicated 
              to fostering innovation, critical thinking, and leadership in specialized fields.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-12 py-16 w-full">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search departments..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gold border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
            />
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <Filter size={18} className="text-blue-950 mr-2 hidden md:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-sm text-sm text-blue-950 font-bold uppercase tracking-wider transition-all goldspace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-blue-950 text-white shadow-lg shadow-blue-950/50' 
                    : 'bg-gold text-text-muted hover:bg-gray-100 border border-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Departments Grid */}
        {filteredDepartments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-gold border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
              >
                {/* Card Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={dept.image} 
                    alt={dept.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold text-blue-950 text-[0.7rem] font-bold uppercase tracking-widest rounded-sm">
                      {dept.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold text-blue-950 mb-4 group-hover:text-gold transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                    {dept.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-gray-50">
                    <div className="flex items-center space-x-2">
                      <BookOpen size={16} className="text-gold" />
                      <span className="text-xs text-text-main font-bold">{dept.programsCount} Programs</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users size={16} className="text-gold" />
                      <span className="text-xs text-text-main font-bold truncate">HOD: {dept.hod.split(' ').pop()}</span>
                    </div>
                  </div>

                  <Link 
                    to={`/departments/${dept.id}`}
                    className="mt-8 flex items-center justify-center space-x-2 w-full py-3 bg-gray-50 text-blue-950 text-xs font-bold uppercase tracking-[0.15em] border border-gray-100 hover:bg-blue-950 hover:text-gold hover:border-blue-950 transition-all duration-300"
                  >
                    <span>View Department</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 px-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400 mb-6">
              <Building2 size={40} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-blue-950 mb-2">No departments found</h3>
            <p className="text-text-muted">Try adjusting your search or filter to find what you're looking for.</p>
          </div>
        )}
      </main>

      {/* Stats / Highlights Section */}
      <section className="py-20 bg-gold border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: 'Specialized Labs', value: '45+' },
              { label: 'Research Papers', value: '1,200+' },
              { label: 'Expert Faculty', value: '350+' },
              { label: 'Global Partnerships', value: '80+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-950 mb-2">{stat.value}</div>
                <div className="text-[0.7rem] uppercase tracking-widest text-text-muted font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default DepartmentsPage;
