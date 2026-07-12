'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'

// All 16 custom videos assigned to the new core sectors
const homeVideos = [
  { id: 'CbhcB0wlAfo', title: 'The Sovereign Reel', category: 'Portfolio' },
  { id: 'qCE-Msr9Ctk', title: 'Coastal Estate Showcase', category: 'Real Estate' },
  { id: 'XbbsoKny4OA', title: 'Luxury Interior Walkthrough', category: 'Real Estate' },
  { id: 'OESeRIrOoYA', title: 'Topographical Site Mapping', category: 'Inspections' },
  { id: '84NEEaYf_p4', title: 'Wind Turbine Analysis', category: 'Inspections' },
  { id: 'V5I4JJg_3-0', title: 'Mainstage Festival Coverage', category: 'Events' },
  { id: 'aRFkEvb9yr4', title: 'Motorsport Pursuit', category: 'Events' },
  { id: 'NzgjREnzl-Q', title: 'Structural Survey', category: 'Inspections' },
  { id: 'itYSxSAtq2k', title: 'Live Concert FPV', category: 'Events' },
  { id: 'PoYq2aS-eJA', title: 'Architectural Scale', category: 'Real Estate' },
  { id: 'zbCBtOs8bVU', title: 'Bridge Inspection', category: 'Inspections' },
  { id: '7KB8iYHbhr4', title: 'Rally Cross Pursuit', category: 'Events' },
  { id: 'Wji6YfZPJcc', title: 'Trophy Estate Aerials', category: 'Real Estate' },
  { id: 'on8CRRO4Png', title: 'Solar Farm Mapping', category: 'Inspections' },
  { id: 'prmz5KsnfEo', title: 'Brand Activation', category: 'Events' },
  { id: 'mdUDkQO7_z4', title: 'Penthouse Views', category: 'Real Estate' }
]

const testimonials = [
  {
    quote: "Capturing the sheer scale of our offshore platform required a team that understood both extreme logistics and cinematic precision. Sovereign Skyz delivered flawlessly.",
    name: "Elena Voss",
    role: "Director of Engineering, Apex Energy Group",
    location: "North Sea"
  },
  {
    quote: "Their seamless interior-to-exterior fly-throughs are the standard for high-end property marketing. Our listings stand out dramatically against the competition.",
    name: "Marcus Chen",
    role: "Principal Broker, Horizon Luxury Estates",
    location: "Beverly Hills"
  },
  {
    quote: "Keeping up with a live motorsport event is difficult enough. Doing it while delivering stabilized, broadcast-ready 4K from the air is a testament to their skill.",
    name: "Aisha Rahman",
    role: "Producer, Velocity Broadcast Network",
    location: "Los Angeles"
  }
]

export default function HomePage() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')

  const getThumbnail = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const filteredVideos = activeFilter === 'All'
    ? homeVideos
    : homeVideos.filter(v => v.category === activeFilter)

  return (
    <main className="relative w-full bg-black text-white overflow-hidden selection:bg-[#D4AF37] selection:text-black">

      {/* --- SUBTLE GRADIENT BACKGROUND (Replacing 3D Scene) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-br from-zinc-900 to-black"></div>

      {/* --- PERMANENTLY DARK TOP NAVIGATION --- */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg py-4 border-b border-white/10 transition-all duration-500">
        <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
          <a href="/" className="text-2xl tracking-[0.125em] text-[#D4AF37] font-serif flex items-center gap-2">
            <span className="text-3xl">✦</span> SOVEREIGNSKYZ
          </a>

          <nav className="hidden gap-8 text-xs tracking-widest uppercase md:flex text-white/80">
            <a href="/work" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
            <a href="/realestate" className="hover:text-[#D4AF37] transition-colors">Real Estate</a>
            <a href="/inspections" className="hover:text-[#D4AF37] transition-colors">Inspections</a>
            <a href="/events" className="hover:text-[#D4AF37] transition-colors">Events</a>
            <a href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
          </nav>

          <a href="tel:3075224412" className="hidden md:block text-xs tracking-widest border border-[#D4AF37] px-6 py-2.5 hover:bg-[#D4AF37] hover:text-black transition-all">
            (307) 522-4412
          </a>
        </div>
      </header>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-8 right-8 text-white/60 hover:text-white z-50 text-sm tracking-widest uppercase flex items-center gap-2"
            >
              ✕ CLOSE
            </button>
            <div className="w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-2xl overflow-hidden relative">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&controls=0&disablekb=1&playsinline=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">

        {/* 1. HERO SECTION */}
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Added pointer-events-none to the iframe to completely block clicking/pausing */}
            <iframe
              className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-105 pointer-events-none"
              src="https://www.youtube.com/embed/CbhcB0wlAfo?autoplay=1&mute=1&controls=0&loop=1&playlist=CbhcB0wlAfo&playsinline=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              tabIndex={-1}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
            <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-10" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 max-w-5xl mx-auto mt-12">
            <div className="mb-8 flex flex-col items-center">
              <div className="w-40 h-40 bg-center bg-no-repeat bg-contain opacity-95 mb-8"
                style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Shield-icon.svg/1024px-Shield-icon.svg.png')", filter: "brightness(0) invert(1)" }} />
              <h1 className="text-6xl md:text-[5.5rem] font-serif tracking-[-0.02em] text-[#D4AF37] leading-none mb-4">
                SOVEREIGN<br />SKYZ
              </h1>
              <h2 className="text-2xl md:text-3xl tracking-[0.4em] uppercase font-light text-white/90">Where The Sky Bows</h2>
            </div>

            <p className="max-w-md text-lg text-white/70 mb-12 font-light leading-relaxed">
              Capturing precision data and cinematic storytelling for real estate, complex inspections, and high-velocity events.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveVideo('CbhcB0wlAfo')}
                className="group px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center gap-3 text-sm tracking-[0.125em] uppercase font-medium"
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition" /> WATCH SIGNATURE REEL
              </button>
              <a href="/contact" className="px-10 py-4 border border-white/60 hover:border-white text-white transition-all text-sm tracking-[0.125em] uppercase flex items-center justify-center">
                START A PROJECT
              </a>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="mt-24 text-[10px] tracking-[0.2em] flex flex-col items-center text-white/50"
            >
              SCROLL TO EXPLORE <span className="text-xl mt-1">↓</span>
            </motion.div>
          </div>
        </section>

        {/* 2. SERVICES SECTION */}
        <section className="relative w-full py-28 bg-black">
          <div className="container px-6 mx-auto md:px-12">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="text-center mb-16">
              <div className="text-xs tracking-[0.3em] text-[#D4AF37] mb-3">EXCELLENCE IN MOTION</div>
              <h2 className="text-5xl md:text-6xl font-serif text-white">Mastery across three distinct disciplines.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Real Estate",
                  desc: "Reveal the full grandeur of architectural masterpieces. Cinematic property films, dynamic interior FPV walk-throughs, and exterior scale.",
                  link: "/realestate"
                },
                {
                  title: "Inspections & Data",
                  desc: "Reduce risk and eliminate the need for ladders, scaffolding, or costly access equipment. Using a 48MP / 8K camera and 4K/60fps HDR video, we capture sharp, detailed aerial imagery of rooftops, façades, structures, and hard-to-reach surfaces — safely and efficiently. From roof condition assessments and building exterior surveys to documentation of structural features, every inspection is delivered as high-resolution, ready-to-use photography and footage. Clean visuals. Clear records. No downtime.",
                  link: "/inspections"
                },
                {
                  title: "Live Events & Action",
                  desc: "We don't just record events. We capture the scale, the energy, and the unforgettable moments that make them legendary. Whether it's tracking athletes, vehicles, or crowd energy from above, we are agile enough to move fast, quiet enough to stay unobtrusive, and precise enough to nail every shot in a live environment.",
                  link: "/events"
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 border border-white/10 hover:border-[#D4AF37] bg-zinc-950/50 backdrop-blur transition-all duration-500 flex flex-col h-full"
                >
                  <h3 className="text-3xl font-serif mb-6 text-white tracking-tight">{service.title}</h3>
                  <p className="text-white/70 flex-1 leading-relaxed text-sm">{service.desc}</p>
                  <a href={service.link} className="mt-10 inline-flex items-center text-xs uppercase tracking-widest text-[#D4AF37] group-hover:gap-3 transition-all">
                    Explore this discipline →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SHOWCASE WITH FILTERS */}
        <section className="relative w-full py-24 border-t border-white/10 bg-black">
          <div className="container px-6 mx-auto md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="uppercase text-xs tracking-[0.2em] text-[#D4AF37]">Signature Work</div>
                <h2 className="text-4xl font-serif">Featured Operations</h2>
              </div>

              <div className="flex flex-wrap gap-2 text-sm">
                {['All', 'Portfolio', 'Real Estate', 'Inspections', 'Events'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2 text-xs tracking-widest uppercase transition-all ${activeFilter === cat
                      ? 'bg-[#D4AF37] text-black font-medium'
                      : 'border border-white/30 text-white/70 hover:border-white/60 hover:text-white'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  transition={{ delay: Math.min(i * 0.05, 0.3) }}
                  className="group relative aspect-[16/10] overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37] transition-all"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img
                    src={getThumbnail(video.id)}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="w-16 h-16 rounded-full border border-white/80 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-6 h-6 ml-1 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[9px] text-[#D4AF37] tracking-widest uppercase mb-1.5">{video.category}</div>
                        <h4 className="text-xl font-serif leading-none">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a href="/work" className="inline-block border border-[#D4AF37] px-12 py-4 text-sm tracking-widest uppercase hover:bg-[#D4AF37] hover:text-black transition-all">
                VIEW COMPLETE PORTFOLIO
              </a>
            </div>
          </div>
        </section>

        {/* 4. TESTIMONIALS */}
        <section className="py-28 bg-zinc-950 border-t border-b border-white/10">
          <div className="container px-6 mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <div className="text-[#D4AF37] text-xs tracking-widest uppercase mb-4">VOICES FROM THE FIELD</div>
              <h2 className="text-5xl font-serif">They trusted the sky.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" className="p-8 border border-white/10 bg-black/40">
                  <div className="text-6xl text-[#D4AF37]/20 mb-6 font-serif">“</div>
                  <p className="italic text-[15px] leading-relaxed mb-8 text-white/80">{t.quote}</p>
                  <div>
                    <div className="font-medium text-sm">{t.name}</div>
                    <div className="text-[11px] uppercase tracking-widest text-white/50 mt-1">{t.role}<br />{t.location}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OUR PROCESS */}
        <section className="py-28 bg-black">
          <div className="container px-6 mx-auto md:px-12">
            <div className="max-w-2xl mb-16">
              <div className="uppercase text-xs tracking-widest text-[#D4AF37] mb-2">METHODOLOGY</div>
              <h2 className="text-5xl font-serif leading-tight">Precision from concept to final cut.</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding operational parameters, project scope, and end goals." },
                { step: "02", title: "Flight Planning", desc: "Airspace authorization, safety auditing, and complex waypoint programming." },
                { step: "03", title: "Capture", desc: "Execution using the SkyRover X1 — a sub-249g platform delivering 4K/60fps HDR video, 48MP stills, and 360° obstacle sensing for confident operation in tight or complex environments." },
                { step: "04", title: "Delivery", desc: "Color grading, editing, or structural data processing for immediate utility." }
              ].map((item) => (
                <div key={item.step} className="border-l-2 border-[#D4AF37] pl-8 group">
                  <div className="text-5xl font-serif text-white/20 group-hover:text-[#D4AF37] transition-colors">{item.step}</div>
                  <h3 className="text-xl font-serif mt-4 mb-3">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="relative py-32 bg-gradient-to-b from-black to-zinc-950 text-center border-t border-white/10">
          <div className="container px-6 mx-auto max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif text-[#D4AF37] leading-tight mb-6">Your vision deserves the sky.</h2>
            <p className="text-lg text-white/70 mb-12 font-light">Let’s discuss the operational details of your next project.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-12 py-5 bg-white text-black hover:bg-[#D4AF37] transition-colors font-medium tracking-widest text-sm uppercase">
                REQUEST A PROPOSAL
              </a>
              <a href="tel:3075224412" className="px-12 py-5 border border-white/50 hover:border-white hover:bg-white/5 transition-all text-sm tracking-widest flex items-center justify-center gap-3">
                CALL (307) 522-4412
              </a>
            </div>
          </div>
        </section>

        {/* 7. MEGA FOOTER */}
        <footer className="bg-black pt-20 pb-12 border-t border-[#D4AF37]/20">
          <div className="container px-6 mx-auto md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12">
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-serif text-[#D4AF37] mb-2 flex items-center gap-2">
                  <span>✦</span> Sovereign Skyz
                </div>
                <p className="text-[10px] tracking-widest uppercase text-white/50">ADVANCED AERIAL OPERATIONS</p>
              </div>

              <div>
                <div className="uppercase text-xs tracking-widest mb-6 text-white/50">Sectors</div>
                <div className="space-y-4 text-sm font-light text-white/80">
                  <a href="/work" className="block hover:text-[#D4AF37] transition-colors">Portfolio</a>
                  <a href="/realestate" className="block hover:text-[#D4AF37] transition-colors">Real Estate</a>
                  <a href="/inspections" className="block hover:text-[#D4AF37] transition-colors">Inspections</a>
                  <a href="/events" className="block hover:text-[#D4AF37] transition-colors">Events</a>
                </div>
              </div>

              <div>
                <div className="uppercase text-xs tracking-widest mb-6 text-white/50">Company</div>
                <div className="space-y-4 text-sm font-light text-white/80">
                  <a href="/about" className="block hover:text-[#D4AF37] transition-colors">About the Pilot</a>
                  <a href="/contact" className="block hover:text-[#D4AF37] transition-colors">Contact Us</a>
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <div className="uppercase text-xs tracking-widest mb-6 text-white/50">Connect</div>
                <div className="space-y-4 text-sm font-light text-white/80">
                  <a href="https://instagram.com/sovereignskies" target="_blank" className="block hover:text-[#D4AF37] transition-colors">Instagram</a>
                  <a href="https://youtube.com/@SovereignSkyz" target="_blank" className="block hover:text-[#D4AF37] transition-colors">YouTube</a>
                </div>
                <div className="mt-10">
                  <p className="text-sm">Hugh Franco</p>
                  <p className="text-xs text-white/50 mt-1 uppercase tracking-widest">Founder & Chief Pilot</p>
                </div>
              </div>
            </div>

            <div className="pt-12 mt-20 border-t border-white/10 text-[10px] text-white/40 flex flex-col md:flex-row justify-between items-center gap-4 tracking-widest uppercase">
              <p>© {new Date().getFullYear()} SOVEREIGNSKYZ • ALL RIGHTS RESERVED</p>
              <p className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Legal</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}