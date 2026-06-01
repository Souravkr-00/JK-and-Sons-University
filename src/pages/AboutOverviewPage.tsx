import React from 'react';
import { motion } from 'motion/react';
import { 
  History, 
  Target, 
  Lightbulb, 
  Award, 
  Globe2, 
  Building2, 
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { aboutData } from '../data/aboutData';
const AboutOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-app-bg flex flex-col font-sans">
      

      {/* Hero Section - Shortened */}
      <section className="relative pt-32 pb-16 bg-indigo-950 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/assets/Images/overview01.jpg" 
            alt="Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/80"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              About <span className="text-white">Our College</span>
            </h1>
            <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
              "{aboutData.tagline}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section - Shortened */}
      <section className="py-16 bg-white border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-blue-950 mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6 font-light">
                {aboutData.intro}
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-blue-950">{new Date().getFullYear() - aboutData.established}</span>
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest text-text-muted">Years of Impact</span>
                </div>
                <div className="w-px h-12 bg-gray-100"></div>
                <button className="text-white font-bold text-[0.7rem] uppercase tracking-widest hover:text-blue-950 transition-colors">
                  Explore Higher Education →
                </button>
              </div>
            </motion.div>
            
            <div className="relative aspect-video rounded-sm overflow-hidden shadow-xl">
              <img 
                src="/assets/Images/overview01.jpg" 
                alt="Student Life" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Compact */}
      <section className="bg-blue-950 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-serif font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - New */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4 block">University Governance</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-black">Our <span className="text-black">Leaders & Founders</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.leaders.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-gray-100 p-8 rounded-sm hover:shadow-2xl transition-all bg-app-bg/30"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-8 max-w-[180px] mx-auto border-4 border-white shadow-lg">
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-l font-serif font-bold text-blue-950 mb-1">CEO & Founder</h3>
                  <h4 className="text-xl font-serif font-bold text-blue-950 mb-1">{leader.name}</h4>
                  
                  <div className="text-[0.65rem] font-bold text-white uppercase tracking-[0.2em] mb-4">{leader.role}</div>
                  <p className="text-xs text-text-muted leading-relaxed font-light">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-950/5 skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-blue-950 p-12 md:p-16 rounded-sm shadow-2xl relative group">
              <div className="absolute top-0 right-0 p-8 text-white/20 group-hover:text-white/40 transition-colors">
                <Target size={80} strokeWidth={1} className='text-white'/>
              </div>
              <span className="text-white font-bold text-[0.65rem] uppercase tracking-[0.3em] mb-6 block">The Goal</span>
                  <h3 className="text-3xl font-serif font-bold text-white mb-8">Our <span className="text-white">Vision</span></h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light italic border-l-2 border-white/50 pl-8">
                {aboutData.vision}
              </p>
            </div>
            
            <div className="bg-white p-12 md:p-16 rounded-sm shadow-2xl relative group">
              <div className="absolute top-0 right-0 p-8 text-navy/10 group-hover:text-navy/20 transition-colors">
                <Lightbulb size={80} strokeWidth={1} />
              </div>
              <span className="text-navy/60 font-bold text-[0.65rem] uppercase tracking-[0.3em] mb-6 block">The Path</span>
              <h3 className="text-3xl font-serif font-bold text-navy mb-8">Our <span className="text-white">Mission</span></h3>
              <p className="text-navy/80 text-lg leading-relaxed font-semibold pl-8 border-l-2 border-blue-950/30">
                {aboutData.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Trust & Quality</span>
              <h2 className="text-3xl font-serif font-bold text-blue-950 mb-6">Accreditations & <span className="text-white">Global Recognition</span></h2>
              <p className="text-text-muted text-sm leading-relaxed mb-8">
                Every program at College adheres to international academic standards, ensuring your degree is recognized worldwide.
              </p>
              <div className="flex items-center space-x-3 text-blue-950">
                <Award size={24} className="text-white" />
                <span className="text-xs font-bold uppercase tracking-widest">Bologna Process Compliant</span>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4">
              {aboutData.accreditations.map((item, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                    <CheckCircle2 size={20} className="text-white shrink-0" />
                  <span className="text-xs font-bold text-blue-950 uppercase tracking-wider leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Highlight */}
      <section className="py-24 bg-blue-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/50 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <Globe2 size={48} className="text-white mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-8">A Global <span className="text-white">Learning Hub</span></h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            With partnerships spanning across Europe, North America, and Asia, our students benefit from 
            international exchange programs, global internships, and collaborative research initiatives.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Partner Universities", value: "80+" },
              { label: "Nationalities", value: "40+" },
              { label: "Exchange Programs", value: "15+" },
              { label: "Language Tracks", value: "Armenian / English" }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-sm backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-white/60">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus & Facilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Our Environment</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-blue-950">World-Class <span className="text-white">Facilities</span></h2>
            </div>
            <Link to="#" className="text-xs font-bold uppercase tracking-widest text-blue-950 border-b-2 border-white pb-1 hover:text-white transition-colors flex items-center group">
              View Virtual Tour
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.facilities.map((facility, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] rounded-sm overflow-hidden mb-6 relative">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-all"></div>
                </div>
                <h4 className="text-lg font-serif font-bold text-navy mb-3 group-hover:text-white transition-colors">{facility.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed font-light">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50 border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-950 text-white mb-10 shadow-2xl">
            <GraduationCap size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-8">Join the Tradition of Excellence</h2>
          <p className="text-text-muted text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Whether you're looking for world-class research opportunities or a head-start in your career, 
            College offers the platform to reach your full potential.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/programs" 
              className="w-full sm:w-auto bg-blue-950 text-white px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-gold hover:text-navy transition-all shadow-xl shadow-navy/20"
            >
              Explore All Programs
            </Link>
            <Link 
              to="/admissions" 
              className="w-full sm:w-auto border-2 border-navy text-navy px-10 py-5 rounded-sm font-bold text-sm tracking-widest uppercase hover:bg-blue-950 hover:text-gold transition-all"
            >
              Start Admission Process
            </Link>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AboutOverviewPage;
