'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'

const eventVideos = [
    { id: '3wKX2KCmso4', title: 'Motorsport Pursuit', category: 'Motorsport', location: 'Nürburgring', duration: '2:45' },
    { id: 'V5I4JJg_3-0', title: 'Mainstage Festival', category: 'Live Music', location: 'Dubai', duration: '3:28' },
    { id: '8qJ70CiSDCA', title: 'Global Product Launch', category: 'Brand Activations', location: 'London', duration: '4:12' },
    { id: 'Wji6YfZPJcc', title: 'Alpine Mountain Pursuit', category: 'Motorsport', location: 'Swiss Alps', duration: '3:55' },
    { id: 'MQFgY062QVc', title: 'City Night Activation', category: 'Brand Activations', location: 'Tokyo', duration: '2:55' },
]

const stats = [
    { number: '150', suffix: '+', label: 'Events Covered' },
    { number: '25', suffix: '+', label: 'Global Venues' },
    { number: '100', suffix: '%', label: 'Safety Record' },
    { number: '4K', suffix: '', label: 'Live Broadcast Ready' },
]

const testimonials = [
    {
        quote: "Sovereign Skyz brought an entirely new dimension to our festival broadcast. Their heavy-lift dual-op team navigated the mainstage safely while capturing breathtaking scale.",
        name: "David Chen",
        role: "Production Director, Global Sound Fest",
        location: "Miami, FL"
    },
    {
        quote: "Tracking our hypercars at 150mph requires unmatched skill. The custom FPV pursuit footage they delivered became the centerpiece of our entire global launch campaign.",
        name: "Marcus von Berg",
        role: "Head of Content, Apex Automotive",
        location: "Stuttgart, Germany"
    },
]

export default function EventsPage() {
    const [activeVideo, setActiveVideo] = useState(null)
    const [activeFilter, setActiveFilter] = useState('All')

    const getThumbnail = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

    const filteredVideos = activeFilter === 'All'
        ? eventVideos
        : eventVideos.filter(v => v.category.includes(activeFilter) || activeFilter === 'All')

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    return (
        <main className="relative w-full bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden">

            {/* Subtle Gradient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-br from-zinc-900 to-black"></div>

            {/* PERMANENTLY DARK TOP NAVIGATION */}
            <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg py-4 border-b border-white/10 transition-all duration-500">
                <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
                    <a href="/" className="text-2xl tracking-[0.125em] text-[#D4AF37] font-serif flex items-center gap-2">
                        <span className="text-3xl">✦</span> SOVEREIGNSKYZ
                    </a>
                    <nav className="hidden gap-8 text-xs tracking-widest uppercase md:flex text-white/80">
                        <a href="/" className="hover:text-[#D4AF37] transition-colors">Home</a>
                        <a href="/work" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
                        <a href="/realestate" className="hover:text-[#D4AF37] transition-colors">Real Estate</a>
                        <a href="/inspections" className="hover:text-[#D4AF37] transition-colors">Inspections</a>
                        <a href="/events" className="text-[#D4AF37] transition-colors">Events</a>
                        <a href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            { }
            <AnimatePresence>
                {activeVideo && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8">
                        <button onClick={() => setActiveVideo(null)} className="absolute top-8 right-8 text-white/60 hover:text-white uppercase tracking-widest text-sm z-50 flex items-center gap-2">✕ CLOSE</button>
                        <div className="w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-2xl relative">
                            {/* Added pointer-events-none to fully prevent clicking to pause/skip */}
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&controls=0&disablekb=1&playsinline=1`}
                                allowFullScreen
                                className="absolute inset-0 pointer-events-none"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10">

                { }
                <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <iframe
                            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-105 pointer-events-none"
                            src="https://www.youtube.com/embed/NzgjREnzl-Q?autoplay=1&mute=1&controls=0&loop=1&playlist=NzgjREnzl-Q&playsinline=1&modestbranding=1&iv_load_policy=3&disablekb=1"
                            frameBorder="0" allow="autoplay; encrypted-media" tabIndex={-1}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center px-6 max-w-5xl mx-auto pt-20">
                        <div className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#D4AF37] border border-[#D4AF37]/30 px-6 py-2 rounded-full">
                            LIVE EVENTS & ACTIVATIONS
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-none mb-8">
                            Capture the Energy<br />of the Moment.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            From high-speed motorsport pursuits to massive mainstage festivals, we deliver dynamic, cinematic coverage that immortalizes your event.
                        </p>

                        <button
                            onClick={() => setActiveVideo('NzgjREnzl-Q')}
                            className="group px-10 py-5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-4 text-sm tracking-widest uppercase mx-auto"
                        >
                            <Play className="w-5 h-5 group-hover:scale-110 transition" /> WATCH EVENTS REEL
                        </button>

                        <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="mt-24 text-xs tracking-widest text-white/50 flex flex-col items-center">
                            SCROLL TO EXPLORE <span className="text-xl mt-1">↓</span>
                        </motion.div>
                    </div>
                </section>

                {/* STATS BAR */}


                { }
                <section className="py-28 bg-black">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                                <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-10">
                                    Raw adrenaline meets cinematic precision.
                                </h2>
                                <div className="space-y-8 text-lg text-white/70 font-light">
                                    <p>We don't just record events. We capture the scale, the energy, and the unforgettable moments that make them legendary.</p>
                                    <p>Whether it's tracking athletes, vehicles, or crowd energy from above, we are agile enough to move fast, quiet enough to stay unobtrusive, and precise enough to nail every shot in a live environment.</p>
                                </div>
                            </motion.div>

                            <div className="relative aspect-[4/5] border border-white/10 overflow-hidden group">
                                <img src={getThumbnail('3wKX2KCmso4')} alt="Event Experience" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10">
                                    <p className="text-[#D4AF37] text-xs tracking-widest mb-2">SIGNATURE TECHNIQUE</p>
                                    <p className="text-3xl font-serif leading-tight text-white">High-Velocity Dynamic Tracking</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                { }
                <section className="py-28 bg-zinc-950 border-t border-white/10">
                    <div className="container px-6 mx-auto md:px-12">
                        <h2 className="text-center text-4xl font-serif mb-16">Capabilities for Event Producers</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                { title: "Motorsport & Action Sports", desc: "Custom-tuned FPV rigs built to keep up with high-velocity subjects and deliver heart-pounding perspectives." },
                                { title: "Festivals & Concerts", desc: "Safe, heavy-lift dual-operation over massive crowds, capturing the scale and lighting of mainstage performances." },
                                { title: "Corporate & Brand Activations", desc: "Premium aerial cinematography for product launches, brand anthems, and VIP corporate retreats." }
                            ].map((service, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" transition={{ delay: i * 0.1 }} className="p-10 border border-white/10 hover:border-[#D4AF37] group bg-black/40">
                                    <h3 className="text-2xl font-serif mb-5">{service.title}</h3>
                                    <p className="text-white/70">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                { }
                <section className="py-28 bg-black">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div>
                                <h2 className="text-4xl font-serif">The Event Archive</h2>
                                <p className="text-white/60 mt-2">Pinnacle moments captured at the highest level</p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
                                {['All', 'Motorsport', 'Live Music', 'Brand Activations'].map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveFilter(cat)}
                                        className={`px-6 py-2 text-xs tracking-widest transition ${activeFilter === cat ? 'bg-[#D4AF37] text-black' : 'border border-white/30 hover:border-white text-white/80'}`}
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
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setActiveVideo(video.id)}
                                    className="group relative aspect-[16/10] cursor-pointer overflow-hidden border border-white/10 hover:border-[#D4AF37] transition-all"
                                >
                                    <img src={getThumbnail(video.id)} alt={video.title} className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                                        <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm">
                                            <Play className="w-8 h-8 ml-1 text-white" fill="white" />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                                        <p className="text-[10px] text-[#D4AF37] tracking-widest mb-1.5 uppercase">{video.category}</p>
                                        <h4 className="text-2xl font-serif text-white">{video.title}</h4>
                                        <p className="text-xs text-white/50 mt-1">{video.duration}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                { }
                <section className="py-28 bg-zinc-950">
                    <div className="container px-6 mx-auto max-w-4xl">
                        <h2 className="text-center text-4xl font-serif mb-16">Trusted by the World’s Finest Producers</h2>
                        <div className="grid md:grid-cols-2 gap-10">
                            {testimonials.map((t, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" className="p-10 border border-white/10 bg-black/40">
                                    <div className="text-4xl text-[#D4AF37]/20 mb-4 font-serif">“</div>
                                    <p className="italic text-lg leading-relaxed mb-8 text-white/90">"{t.quote}"</p>
                                    <div>
                                        <div className="font-medium text-white">{t.name}</div>
                                        <div className="text-xs text-white/60 mt-1 leading-relaxed">{t.role}<br />{t.location}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-32 text-center bg-gradient-to-b from-black to-zinc-950 border-t border-white/10">
                    <div className="container px-6 mx-auto max-w-2xl">
                        <h2 className="text-5xl md:text-6xl font-serif text-[#D4AF37] mb-6">Immortalize your next major event.</h2>
                        <p className="text-xl text-white/70 mb-12">Ensure the energy of your event is captured with the cinematic scale it deserves.</p>
                        <a href="/contact" className="inline-block px-12 py-5 bg-[#D4AF37] text-black text-sm font-medium tracking-widest uppercase hover:bg-transparent hover:text-[#D4AF37] border border-[#D4AF37] transition-all">
                            BOOK EVENT COVERAGE
                        </a>
                    </div>
                </section>

                {/* Consistent Footer */}
                <footer className="bg-black pt-20 pb-12 border-t border-white/10">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div>
                                <div className="text-2xl font-serif text-[#D4AF37]">Sovereign Skyz</div>
                                <p className="text-xs text-white/40 mt-1 uppercase tracking-widest">Where The Sky Bows</p>
                            </div>

                            <div className="flex gap-8 text-sm text-white/60 tracking-widest uppercase text-xs">
                                <a href="/contact" className="hover:text-[#D4AF37] transition-colors">Get in Touch</a>
                                <a href="https://instagram.com/sovereignskies" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
                                <a href="https://youtube.com/@SovereignSkyz" target="_blank" rel="noreferrer" className="hover:text-[#D4AF37] transition-colors">YouTube</a>
                            </div>
                        </div>

                        <div className="text-center text-[10px] text-white/30 mt-16 tracking-widest">
                            © {new Date().getFullYear()} SOVEREIGNSKYZ • ALL RIGHTS RESERVED
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}