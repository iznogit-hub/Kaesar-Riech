'use client'

import { Suspense, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader } from '@react-three/drei'
import Link from 'next/link'
import Scene from '@/components/canvas/Scene'
import CountUp from 'react-countup'
import { Play } from 'lucide-react'

// Expanded curated videos for homepage showcase
const homeVideos = [
  { id: 'V5I4JJg_3-0', title: 'Heavy-Lift Cinema', category: 'Commercial', location: 'Dubai' },
  { id: '84NEEaYf_p4', title: 'Dynamic Pursuit', category: 'Automotive', location: 'Monaco' },
  { id: 'OESeRIrOoYA', title: 'Landscape & Mapping', category: 'Environment', location: 'Iceland' },
  { id: 'CbhcB0wlAfo', title: 'Signature Reel', category: 'Showcase', location: 'Global' },
  { id: 'pSlntz0srXw', title: 'Luxury Resort Tours', category: 'Hospitality', location: 'Maldives' },
  { id: 'KHdyXbE_kik', title: 'Clifftop Estate', category: 'Real Estate', location: 'California' },
]

const stats = [
  { number: 250, suffix: '+', label: 'Projects Delivered' },
  { number: 45, suffix: '', label: 'Countries Flown' },
  { number: 98, suffix: '%', label: 'Client Retention' },
  { number: 12, suffix: '', label: 'Years Mastering Skies' },
]

const testimonials = [
  {
    quote: "Sovereign Skyz transformed our resort marketing. The footage doesn't just show the property — it sells the experience.",
    name: "Elena Voss",
    role: "Director of Marketing, Four Seasons Private Islands",
    location: "French Polynesia"
  },
  {
    quote: "Their cinematic eye elevated our listing from premium to iconic. Sold in under 3 weeks.",
    name: "Marcus Chen",
    role: "Principal Broker, Horizon Luxury Estates",
    location: "Beverly Hills"
  },
  {
    quote: "Working with them on our feature film was seamless. World-class aerials that actually advanced the story.",
    name: "Aisha Rahman",
    role: "Producer, Nomad Pictures",
    location: "Los Angeles"
  },
]

export default function HomePage() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')

  // Dynamic Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

      {/* --- SUBTLE 3D BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Suspense fallback={null}>
          <Scene className="w-full h-full" />
        </Suspense>
      </div>

      {/* --- TOP NAVIGATION --- */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-lg py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
          <Link href="/" className="text-2xl tracking-[0.125em] text-[#D4AF37] font-serif flex items-center gap-2">
            <span className="text-3xl">✦</span> SOVEREIGNSKYZ
          </Link>

          <nav className="hidden gap-8 text-xs tracking-[0.125em] uppercase md:flex text-white/80">
            <Link href="/work" className="hover:text-[#D4AF37] transition-colors">Portfolio</Link>
            <Link href="/hotels" className="hover:text-[#D4AF37] transition-colors">Hotels &amp; Resorts</Link>
            <Link href="/realestate" className="hover:text-[#D4AF37] transition-colors">Real Estate</Link>
            <Link href="/film" className="hover:text-[#D4AF37] transition-colors">Film &amp; TV</Link>
            <Link href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</Link>
          </nav>

          <a href="tel:8082008307" className="hidden md:block text-xs tracking-widest border border-[#D4AF37] px-6 py-2.5 hover:bg-[#D4AF37] hover:text-black transition-all">
            +1 808-200-8307
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

        {/* 1. HERO SECTION - Enhanced */}
        <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-center">
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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
                style={{ backgroundImage: "url('/shield-logo.png')" }} />
              <h1 className="text-6xl md:text-[5.5rem] font-serif tracking-[-0.02em] text-[#D4AF37] leading-none mb-4">
                SOVEREIGN<br />SKYZ
              </h1>
              <h2 className="text-2xl md:text-3xl tracking-[0.4em] uppercase font-light text-white/90">Where The Sky Bows</h2>
            </div>

            <p className="max-w-md text-lg text-white/70 mb-12 font-light leading-relaxed">
              Cinematic aerial storytelling for the world's most extraordinary properties, experiences, and narratives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveVideo('CbhcB0wlAfo')}
                className="group px-10 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center gap-3 text-sm tracking-[0.125em] uppercase font-medium"
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition" /> WATCH SIGNATURE REEL
              </button>
              <Link href="/contact" className="px-10 py-4 border border-white/60 hover:border-white text-white transition-all text-sm tracking-[0.125em] uppercase">
                START A PROJECT
              </Link>
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

        {/* 2. TRUST BAR / STATS */}
        <section className="py-8 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeUp} className="flex flex-col items-center">
                <div className="text-4xl font-serif text-white">
                  <CountUp end={stat.number} duration={2.5} />{stat.suffix}
                </div>
                <div className="text-xs tracking-widest uppercase text-white/60 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. SERVICES - Expanded */}
        <section className="relative w-full py-28 bg-black">
          <div className="container px-6 mx-auto md:px-12">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="text-center mb-16">
              <div className="text-xs tracking-[0.3em] text-[#D4AF37] mb-3">EXCELLENCE IN MOTION</div>
              <h2 className="text-5xl md:text-6xl font-serif text-white">We capture what others can only describe.</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Hospitality & Resorts",
                  desc: "Breathtaking aerial campaigns that transform luxury properties into irresistible destinations. Signature drone choreography and cinematic storytelling.",
                  link: "/hotels"
                },
                {
                  title: "Ultra Luxury Real Estate",
                  desc: "Reveal the full grandeur of architectural masterpieces. Cinematic property films that accelerate sales and elevate brand perception.",
                  link: "/realestate"
                },
                {
                  title: "Film, TV & Commercial",
                  desc: "High-end aerial production services for feature films, commercials, and documentaries. Precision, creativity, and reliability at altitude.",
                  link: "/film"
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
                  <p className="text-white/70 flex-1 leading-relaxed">{service.desc}</p>
                  <Link href={service.link} className="mt-10 inline-flex items-center text-xs uppercase tracking-widest text-[#D4AF37] group-hover:gap-3 transition-all">
                    Explore this discipline →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. EXPANDED SHOWCASE WITH FILTERS */}
        <section className="relative w-full py-24 border-t border-white/10 bg-black">
          <div className="container px-6 mx-auto md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <div className="uppercase text-xs tracking-[0.2em] text-[#D4AF37]">Signature Work</div>
                <h2 className="text-4xl font-serif">Featured Operations</h2>
              </div>

              <div className="flex gap-2 text-sm">
                {['All', 'Commercial', 'Automotive', 'Environment', 'Hospitality', 'Real Estate'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-5 py-2 transition-all ${activeFilter === cat
                      ? 'bg-[#D4AF37] text-black'
                      : 'border border-white/30 hover:border-white/60'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  transition={{ delay: Math.min(i * 0.08, 0.4) }}
                  className="group relative aspect-[16/10] overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4AF37] transition-all"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img
                    src={getThumbnail(video.id)}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <div className="w-20 h-20 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-md">
                      <Play className="w-8 h-8 ml-1 text-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-[10px] text-[#D4AF37] tracking-widest mb-1.5">{video.category} • {video.location}</div>
                        <h4 className="text-2xl font-serif leading-none">{video.title}</h4>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/work" className="inline-block border border-[#D4AF37] px-12 py-4 text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all">
                VIEW COMPLETE PORTFOLIO
              </Link>
            </div>
          </div>
        </section>

        {/* 5. TESTIMONIALS */}
        <section className="py-28 bg-zinc-950 border-t border-b border-white/10">
          <div className="container px-6 mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="text-[#D4AF37] text-xs tracking-widest mb-4">VOICES FROM THE FIELD</div>
              <h2 className="text-5xl font-serif">They trusted the sky.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" className="p-8 border border-white/10 bg-black/40">
                  <div className="text-6xl text-[#D4AF37]/20 mb-6">“</div>
                  <p className="italic text-lg leading-relaxed mb-8">{t.quote}</p>
                  <div>
                    <div className="font-medium">{t.name}</div>
                    <div className="text-xs text-white/60">{t.role}<br />{t.location}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. OUR PROCESS */}
        <section className="py-28 bg-black">
          <div className="container px-6 mx-auto md:px-12">
            <div className="max-w-2xl mb-16">
              <div className="uppercase text-xs tracking-widest text-[#D4AF37]">METHODOLOGY</div>
              <h2 className="text-5xl font-serif leading-tight">Precision from concept to final cut.</h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery & Vision", desc: "Deep dive into your story, brand, and objectives." },
                { step: "02", title: "Scouting & Planning", desc: "Location reconnaissance, permits, and shot-listing." },
                { step: "03", title: "Cinematic Capture", desc: "Flawless execution with premium equipment." },
                { step: "04", title: "Post-Production Magic", desc: "Color grading, editing, and sound design." }
              ].map((item) => (
                <div key={item.step} className="border-l-2 border-[#D4AF37] pl-8 group">
                  <div className="text-5xl font-serif text-white/30 group-hover:text-[#D4AF37] transition-colors">{item.step}</div>
                  <h3 className="text-2xl mt-4 mb-3">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FINAL CTA */}
        <section className="relative py-32 bg-gradient-to-b from-black to-zinc-950 text-center border-t border-white/10">
          <div className="container px-6 mx-auto max-w-2xl">
            <h2 className="text-6xl font-serif text-[#D4AF37] leading-none mb-6">Your vision deserves the sky.</h2>
            <p className="text-xl text-white/70 mb-12">Let’s create something unforgettable together.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-12 py-5 bg-white text-black hover:bg-[#D4AF37] transition font-medium tracking-widest text-sm">
                REQUEST A PROPOSAL
              </Link>
              <a href="tel:8082008307" className="px-12 py-5 border border-white hover:bg-white/10 transition text-sm tracking-widest flex items-center justify-center gap-3">
                <span>SPEAK WITH SOVEREIGNSKYZ</span>
              </a>
            </div>
          </div>
        </section>

        {/* 8. MEGA FOOTER */}
        <footer className="bg-black pt-20 pb-12 border-t border-[#D4AF37]/20">
          <div className="container px-6 mx-auto md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12">
              <div className="col-span-2 md:col-span-1">
                <div className="text-3xl font-serif text-[#D4AF37] mb-2">Sovereign Skyz</div>
                <p className="text-xs tracking-widest text-white/50">AERIAL CINEMATOGRAPHY</p>
              </div>

              <div>
                <div className="uppercase text-xs mb-6 text-white/50">Work</div>
                <div className="space-y-3 text-sm">
                  <Link href="/work" className="block hover:text-white">Portfolio</Link>
                  <Link href="/hotels" className="block hover:text-white">Hospitality</Link>
                  <Link href="/realestate" className="block hover:text-white">Real Estate</Link>
                </div>
              </div>

              <div>
                <div className="uppercase text-xs mb-6 text-white/50">Company</div>
                <div className="space-y-3 text-sm">
                  <Link href="/about" className="block hover:text-white">About Hugh Franco</Link>
                  <Link href="/contact" className="block hover:text-white">Contact</Link>
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <div className="uppercase text-xs mb-6 text-white/50">Connect</div>
                <div className="space-y-4">
                  <a href="https://instagram.com/sovereignskies" target="_blank" className="block hover:text-[#D4AF37]">Instagram</a>
                  <a href="https://twitter.com/SovereignSkyz_" target="_blank" className="block hover:text-[#D4AF37]">X / Twitter</a>
                  <a href="https://youtube.com/@SovereignSkyz" target="_blank" className="block hover:text-[#D4AF37]">YouTube</a>
                </div>
                <div className="mt-10">
                  <p className="text-sm">Hugh Franco</p>
                  <p className="text-xs text-white/50">Founder &amp; Director</p>
                </div>
              </div>
            </div>

            <div className="pt-12 mt-20 border-t border-white/10 text-[10px] text-white/40 flex flex-col md:flex-row justify-between items-center gap-4">
              <p>© {new Date().getFullYear()} SOVEREIGNSKYZ • ALL RIGHTS RESERVED</p>
              <p className="flex gap-6">
                <Link href="#" className="hover:text-white">Privacy</Link>
                <Link href="#" className="hover:text-white">Legal</Link>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <Loader />
    </main>
  )
}