import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  CheckCircle, 
  UserPlus, 
  FileUp, 
  ScreenShare, 
  BarChart, 
  Award,
  ArrowRight
} from 'lucide-react';
import { admissionSteps } from '../data/admissionData';


const iconMap: { [key: string]: any } = {
  Search,
  CheckCircle,
  UserPlus,
  FileUp,
  ScreenShare,
  BarChart,
  Award
};

const AdmissionProcessPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-app-bg flex flex-col font-sans">
      

      {/* Simplified Header */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Enrollment Guide</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">
              Admission <span className="text-gold">Process</span>
            </h1>
            <p className="max-w-2xl mx-auto text-text-muted font-light leading-relaxed">
              We've simplified our admission journey into seven clear steps to ensure a smooth transition 
              into your academic life at College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Process Section */}
      <main className="flex-grow pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Progress Indicator */}
          <div className="hidden lg:flex justify-between items-center relative mb-20 px-10">
            <div className="absolute h-1 bg-gray-100 top-1/2 left-0 right-0 -translate-y-1/2 -z-10"></div>
            <div 
              className="absolute h-1 bg-gold top-1/2 left-0 transition-all duration-700 ease-in-out -translate-y-1/2 -z-5" 
              style={{ width: `${((activeStep - 1) / (admissionSteps.length - 1)) * 100}%` }}
            ></div>
            
            {admissionSteps.map((step) => {
              const Icon = iconMap[step.icon];
              const isActive = activeStep === step.id;
              const isCompleted = activeStep > step.id;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`relative flex flex-col items-center group transition-all duration-300 ${isActive || isCompleted ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                    isActive ? 'bg-blue-950 border-gold scale-110 shadow-xl shadow-navy/20' : 
                    isCompleted ? 'bg-gold border-gold' : 'bg-gold border-gray-100'
                  }`}>
                    <Icon size={20} className={isActive || isCompleted ? (isCompleted && !isActive ? 'text-navy' : 'text-gold') : 'text-gray-400'} />
                  </div>
                  <span className={`absolute -bottom-8 goldspace-nowrap text-[0.6rem] font-bold uppercase tracking-widest ${isActive ? 'text-navy' : 'text-text-muted'}`}>
                    Step {step.id}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Focused Content Card */}
          <div className="bg-gold rounded-sm border border-gray-100 shadow-2xl shadow-navy/5 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-16 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <span className="text-3xl font-serif font-bold text-gold/30 italic">0{activeStep}</span>
                      <div className="w-8 h-px bg-gold/50"></div>
                      <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-gold">{admissionSteps[activeStep - 1].title}</span>
                    </div>
                    
                    <h3 className="text-3xl font-serif font-bold text-navy mb-6">{admissionSteps[activeStep - 1].title}</h3>
                    <p className="text-text-muted text-lg leading-relaxed mb-10 font-light">
                      {admissionSteps[activeStep - 1].description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-10 border-t border-gray-50">
                      {activeStep > 1 && (
                        <button 
                          onClick={() => setActiveStep(prev => prev - 1)}
                          className="px-6 py-3 border border-gray-200 text-navy text-xs font-bold uppercase tracking-widest hover:bg-gray-50 transition-all rounded-sm"
                        >
                          Previous
                        </button>
                      )}
                      
                      {activeStep < admissionSteps.length ? (
                        <button 
                          onClick={() => setActiveStep(prev => prev + 1)}
                          className="px-8 py-3 bg-blue-950 text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-100 hover:text-navy transition-all flex items-center space-x-2 rounded-sm"
                        >
                          <span>Next Step</span>
                          <ArrowRight size={14} />
                        </button>
                      ) : (
                        <button className="px-8 py-3 bg-gold text-navy text-xs font-bold uppercase tracking-widest hover:bg-blue-950 hover:text-gold transition-all shadow-lg shadow-gold/20 rounded-sm">
                          Begin Online Application
                        </button>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="hidden lg:block relative h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeStep}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src={`https://images.unsplash.com/photo-${[
                      '1434031211660-84c11650981b',
                      '1454165833767-02654d578203',
                      '1423594602983-470de26ef5dd',
                      '1450101499163-c8848c66ca85',
                      '1517245386807-bb43f82c33c4',
                      '1524178232363-1fb2b075b655',
                      '1523240795612-9a054b0db644'
                    ][activeStep - 1]}?auto=format&fit=crop&q=80`}
                    alt="Admission Process"
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-blue-950/10"></div>
              </div>
            </div>
          </div>
          
          {/* Quick Support Footer */}
          <div className="mt-20 p-8 bg-gray-50 border border-gray-100 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <CheckCircle size={20} />
              </div>
              <p className="text-sm text-text-muted">Need help with eligibility or documentation? Contact our counselors.</p>
            </div>
            <button className="text-navy font-bold text-xs uppercase tracking-widest border-b-2 border-gold pb-1 hover:text-gold transition-colors">
              Request Admission Callback
            </button>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default AdmissionProcessPage;