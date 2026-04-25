import React from 'react'
import BannerCarousel from '../components/BannerCarousel'
import  bannerData  from '../data/banners.json'
import {motion} from 'motion/react'
function Home() {
    console.log('Banner Data in Home:', bannerData);
  return (
    <div>
          <section className="pt-20">
              <BannerCarousel banners={bannerData} />

              
              {/* Academics Section */}
              <section className="py-24 bg-white border-b border-gray-100">
                  <div className="max-w-7xl mx-auto px-6 lg:px-12">
                      <div className="mb-16">
                          <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Academic Excellence</span>
                          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">Our Specializations</h2>
                          <p className="max-w-2xl text-text-muted font-light leading-relaxed">
                              JK & Sons College of Armenia follows a modular, competency-based structure
                              aligned with international academic frameworks, tailored to Armenia's
                              evolving healthcare and management needs.
                          </p>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {/* Card 1: Public Health */}
                          <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="group flex flex-col bg-white border border-gray-100 rounded overflow-hidden hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500"
                          >
                              <div className="h-64 overflow-hidden relative">
                                  <img src="../assets/images/A1.jpg" alt="MPH" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                                  <div className="absolute inset-0 bg-navy/20"></div>
                              </div>
                              <div className="p-8 flex-1 flex flex-col">
                                  <h3 className="text-xl font-serif font-bold text-navy mb-4">Master of Public Health (MPH)</h3>
                                  <div className="space-y-2 mb-8 flex-1">
                                      {["Epidemiology", "Biostatistics", "Global Health & Disease Control", "Health Policy & Management"].map(course => (
                                          <div key={course} className="flex items-center text-sm text-text-muted font-light">
                                              <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mr-3"></span>
                                              {course}
                                          </div>
                                      ))}
                                  </div>
                                  <button className="text-navy font-bold text-xs uppercase tracking-widest border-b border-navy/10 pb-1 hover:border-gold transition-all w-fit mt-auto">View Program Info</button>
                              </div>
                          </motion.div>

                          {/* Card 2: Healthcare Management */}
                          <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.1 }}
                              className="group flex flex-col bg-white border border-gray-100 rounded overflow-hidden hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500"
                          >
                              <div className="h-64 overflow-hidden relative">
                                  <img src="../assets/images/A2.jpg" alt="MBA" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                                  <div className="absolute inset-0 bg-navy/20"></div>
                              </div>
                              <div className="p-8 flex-1 flex flex-col">
                                  <h3 className="text-xl font-serif font-bold text-navy mb-4">Master of Business Admin (MBA)</h3>
                                  <div className="space-y-2 mb-8 flex-1">
                                      {["Healthcare Leadership", "Hospital Operations", "Health Economics", "Digital Health Systems"].map(course => (
                                          <div key={course} className="flex items-center text-sm text-text-muted font-light">
                                              <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mr-3"></span>
                                              {course}
                                          </div>
                                      ))}
                                  </div>
                                  <button className="text-navy font-bold text-xs uppercase tracking-widest border-b border-navy/10 pb-1 hover:border-gold transition-all w-fit mt-auto">Admission Process</button>
                              </div>
                          </motion.div>

                          {/* Card 3: Advanced Sciences */}
                          <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 }}
                              className="group flex flex-col bg-white border border-gray-100 rounded overflow-hidden hover:shadow-2xl hover:shadow-navy/5 transition-all duration-500"
                          >
                              <div className="h-64 overflow-hidden relative">
                                  <img src="../assets/images/A3.jpg" alt="MSc BSc" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                                  <div className="absolute inset-0 bg-navy/20"></div>
                              </div>
                              <div className="p-8 flex-1 flex flex-col">
                                  <h3 className="text-xl font-serif font-bold text-navy mb-4">Medical Science (BSc/MSc)</h3>
                                  <div className="space-y-2 mb-8 flex-1 text-xs">
                                      {["Aesthetic Medicine", "Regenerative Medicine", "Clinical Cardiology", "Endocrinology"].map(course => (
                                          <div key={course} className="flex items-center text-sm text-text-muted font-light">
                                              <span className="w-1.5 h-1.5 rounded-full bg-gold/40 mr-3"></span>
                                              {course}
                                          </div>
                                      ))}
                                  </div>
                                  <button className="text-navy font-bold text-xs uppercase tracking-widest border-b border-navy/10 pb-1 hover:border-gold transition-all w-fit mt-auto">Explore Specialties</button>
                              </div>
                          </motion.div>
                      </div>
                  </div>
              </section>

              {/* Stats Section */}
              <section className="bg-white border-t border-gray-100 flex flex-col items-center text-center ">
                  <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                          <div className="space-y-1">
                              <h3 className="text-xl lg:text-4xl font-serif font-bold text-navy">MPH | MBA</h3>
                              <p className="text-[0.7rem] text-text-muted font-bold uppercase tracking-widest">Postgraduate Tracks</p>
                          </div>
                          <div className="space-y-1">
                              <h3 className="text-xl lg:text-4xl font-serif font-bold text-navy">2 Years</h3>
                              <p className="text-[0.7rem] text-text-muted font-bold uppercase tracking-widest">Full-Time Duration</p>
                          </div>
                          <div className="space-y-1">
                              <h3 className="text-xl lg:text-4xl font-serif font-bold text-navy">Hybrid</h3>
                              <p className="text-[0.7rem] text-text-muted font-bold uppercase tracking-widest">Delivery Model</p>
                          </div>
                          <div className="space-y-1">
                              <h3 className="text-xl lg:text-4xl font-serif font-bold text-navy">95%</h3>
                              <p className="text-[0.7rem] text-text-muted font-bold uppercase tracking-widest">Placement Target</p>
                          </div>
                      </div>
                  </div>
              </section>
              
              {/* Research Section */}
              <section className="py-24 bg-app-bg border-b border-gray-100">
                  <div className="max-w-7xl mx-auto px-6 lg:px-12">
                      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                          <div className="max-w-2xl">
                              <span className="text-gold font-bold text-xs uppercase tracking-[0.2em] mb-4 block">Medical Innovation</span>
                              <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy mb-6">Cutting-Edge Research</h2>
                              <p className="text-text-muted font-light leading-relaxed">
                                  Our faculty and graduate researchers are pushing the boundaries of medical science through
                                  rigorous clinical trials and interdisciplinary collaborations.
                              </p>
                          </div>
                          <button className="whitespace-nowrap bg-navy text-white px-8 py-4 rounded-md font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-navy/10 active:scale-[0.98]">
                              View All Publications
                          </button>
                      </div>

                      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scroll-smooth">
                          {[
                              {
                                  title: "Genomic Mapping of Eurasian Populations",
                                  desc: "Pioneers in identifying region-specific genetic markers for personalized medicine in the Caucasus region.",
                                  seed: "genetics"
                              },
                              {
                                  title: "Regenerative Stem Cell Therapy",
                                  desc: "Breakthrough clinical trials on using non-invasive stem cell applications for advanced heart valve repair.",
                                  seed: "microscope"
                              },
                              {
                                  title: "AI-Driven Epidemiological Surveillance",
                                  desc: "Developing real-time predictive models for regional health outbreaks using neural network analysis.",
                                  seed: "digital-health"
                              },
                              {
                                  title: "Nanotechnology in Aesthetic Dentistry",
                                  desc: "Novel research on high-durability, bio-compatible nanomaterials for restorative dental procedures.",
                                  seed: "nano"
                              },
                              {
                                  title: "Digital Health Systems for Rural Access",
                                  desc: "Evaluating the impact of remote-monitoring digital platforms on chronic disease management.",
                                  seed: "telemedicine"
                              },
                              {
                                  title: "Endemic Flora & Herbal Pharmacology",
                                  desc: "Scientific validation of endemic Armenian flora in treating complex inflammatory skin conditions.",
                                  seed: "herbal"
                              }
                          ].map((item, idx) => (
                              <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="bg-white rounded border border-gray-100 p-8 flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all group shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center"
                              >
                                  <div className="aspect-video mb-6 rounded overflow-hidden relative">
                                      <img
                                          src={`https://picsum.photos/seed/jk-res-${item.seed}/600/400`}
                                          alt={item.title}
                                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                          referrerPolicy="no-referrer"
                                      />
                                      <div className="absolute inset-0 bg-navy/10"></div>
                                  </div>
                                  <h3 className="text-lg font-serif font-bold text-navy mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                                  <p className="text-sm text-text-muted font-light leading-relaxed mb-6 flex-1">
                                      {item.desc}
                                  </p>
                                  <div className="flex items-center text-xs font-bold text-navy uppercase tracking-widest gap-2">
                                      <span className="w-8 h-px bg-gold"></span>
                                      READ ABSTRACT
                                  </div>
                              </motion.div>
                          ))}
                      </div>
                  </div>
              </section>

          </section>
    </div>
  )
}

export default Home