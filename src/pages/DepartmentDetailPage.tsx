import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Users, 
  Lightbulb, 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  Mail, 
  ChevronRight,
  Microscope,
  Building
} from 'lucide-react';
import { departments } from '../data/department';
const DepartmentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const department = departments.find(d => d.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!department) {
      // Small delay to allow potential data loads or just redirect
      const timer = setTimeout(() => {
        if (!department) navigate('/departments');
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [department, navigate]);

  if (!department) return null;

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Header */}
      <section className="relative pt-32 pb-24 bg-indigo-950 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${department.image})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <Link 
            to="/departments" 
            className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[0.7rem] font-boldtext-white uppercase tracking-widest">Back to All Departments</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-3 py-1 bg-gold/20 text-white text-[0.7rem] font-bold uppercase tracking-widest rounded-sm mb-6 border border-gold/30">
              {department.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {department.name}
            </h1>
            <p className="text-xl text-gray-300 italic font-light mb-8 max-w-2xl border-l-2 border-gold/50 pl-6">
              "{department.tagline}"
            </p>
            
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-[0.6rem] uppercase tracking-widest text-gray-400 font-bold mb-0.5">Head of Dept</div>
                  <div className="text-white font-medium">{department.hod}</div>
                </div>
              </div>
              <button className="bg-gray-800 text-white px-8 py-4 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20">
                Apply to Department
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Mission */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-px bg-gold"></div>
              <span className="text-gold text-[0.7rem] font-bold uppercase tracking-[0.2em]">About the Department</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-8">
              Excellence in {department.name.split(' ').slice(-1)} Education
            </h2>
            <div className="prose prose-lg text-text-muted leading-relaxed">
              <p className="mb-6">{department.description}</p>
              <div className="grid md:grid-cols-2 gap-8 mt-12 bg-gray-50 p-8 rounded-sm border-l-4 border-navy">
                <div>
                  <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-3 flex items-center">
                    <Sparkles size={16} className="mr-2 text-gold" /> Our Vision
                  </h4>
                  <p className="text-sm font-medium">{department.vision}</p>
                </div>
                <div>
                  <h4 className="text-navy font-bold text-sm uppercase tracking-widest mb-3 flex items-center">
                    <CheckCircle2 size={16} className="mr-2 text-gold" /> Our Mission
                  </h4>
                  <p className="text-sm font-medium">{department.mission}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden relative z-10 shadow-2xl">
              <img 
                src="/assets/Images/Department01.jpg"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 -z-10 rounded-sm"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-navy/5 -z-10 rounded-sm"></div>
            
            <div className="absolute top-1/2 -right-12 translate-y-1/2 bg-white p-8 shadow-xl max-w-[240px] z-20 border-t-4 border-gold hidden xl:block">
              <div className="text-3xl font-bold text-navy mb-1">{department.programsCount}</div>
              <div className="text-[0.6rem] uppercase tracking-widest font-bold text-text-muted">Degree Programs Offered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
          <span className="text-black text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4 block">Key Specializations</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black">Research & <span className="text-gold">Focus Areas</span></h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {department.focusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-blue-950/5 backdrop-blur-sm border border-white/10 p-8 rounded-sm text-center hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-gray/20 rounded-full flex items-center justify-center text-black mx-auto mb-6">
                  <Lightbulb size={24} />
                </div>
                <h4 className="text-black font-bold text-sm uppercase tracking-wider">{area}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs & Research */}
      {department.labs.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-gold text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4 block">Infrastructure</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">Cutting-edge <span className="text-gold">Labs & Facilities</span></h2>
              </div>
              <Link to="#" className="text-[0.7rem] font-bold uppercase tracking-widest text-navy hover:text-gold flex items-center space-x-2 transition-colors pb-1 border-b-2 border-gold/30">
                <span>View Research Centers</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {department.labs.map((lab, idx) => (
                <div key={idx} className="group bg-white rounded-sm overflow-hidden shadow-md flex flex-col md:flex-row border border-gray-100">
                  <div className="md:w-1/2 relative overflow-hidden">
                    <img 
                      src={lab.image}
                      alt={lab.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-all"></div>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="w-10 h-10 bg-gold/10 rounded flex items-center justify-center text-gold mb-6">
                      <Microscope size={20} />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-navy mb-4">{lab.name}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{lab.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Faculty Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-black text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">Renowned <span className="text-gold">Faculty</span></h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {department.faculty.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 rounded-sm mb-6 grayscale hover:grayscale-0 transition-all duration-500">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-blue-950/90 backdrop-blur-md p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center space-x-3 text-white">
                      <Mail size={16} className="text-white" />
                      <span className="text-[0.6rem] font-bold uppercase tracking-widest hover:text-white cursor-pointer">Contact Faculty</span>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-serif font-bold text-navy mb-1 group-hover:text-gold transition-colors">{member.name}</h4>
              <div className="text-[0.65rem] font-bold uppercase tracking-widest text-gold mb-3">{member.designation}</div>
              <div className="text-text-muted text-xs leading-relaxed space-y-1">
                <p><strong>Focus:</strong> {member.specialization}</p>
                <p><strong>Exp:</strong> {member.experience}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements & Facilities */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-10 flex items-center">
                <Trophy size={28} className="text-gold mr-4" /> Department Achievements
              </h3>
              <div className="space-y-6">
                {department.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 bg-white/5 p-6 border-l-4 border-gold">
                    <div className="text-white font-bold text-lg">0{idx + 1}</div>
                    <p className="text-white/80 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* General Facilities */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-10 flex items-center">
                <Building size={28} className="text-gold mr-4" /> Campus Facilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {department.facilities.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white/5 px-6 py-4 rounded-sm border border-white/10 hover:border-gold/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-gold"></div>
                    <span className="text-white text-[0.7rem] font-bold uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 bg-gold rounded-sm">
                <h4 className="text-white font-bold text-xl mb-4">Want to learn more?</h4>
                <p className="text-white/80 text-sm mb-6">Download our detailed department brochure for program details, curriculum, and placement stats.</p>
                <button className="w-full bg-gray-800 text-white font-bold py-3 uppercase tracking-widest text-xs hover:bg-navy/90 transition-colors">
                  Download Brochure (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-8">Ready to start your journey with us?</h2>
          <p className="text-text-muted text-lg mb-12">Join a community of scholars and practitioners dedicated to excellence.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-gray-800 text-white px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all shadow-xl shadow-navy/10">
              Apply for Admission
            </button>
            <button className="w-full sm:w-auto border-2 border-navy text-navy px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-gray-800 hover:text-white transition-all">
              Contact Department
            </button>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default DepartmentDetailPage;
