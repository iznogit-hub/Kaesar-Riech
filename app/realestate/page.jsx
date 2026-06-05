'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play } from 'lucide-react'

const realEstateVideos = [
    { id: 'XbbsoKny4OA', title: 'The Seamless Tour', category: 'Interior FPV', location: 'Beverly Hills Villa', duration: '3:12' },
    { id: 'V5I4JJg_3-0', title: 'Trophy Estates', category: 'Heavy-Lift Exterior', location: 'Dubai Hills', duration: '4:05' },
    { id: 'OESeRIrOoYA', title: 'Property Bounds', category: 'Scale & Mapping', location: 'Malibu Ranch', duration: '5:40' },
    { id: 'KHdyXbE_kik', title: 'Clifftop Majesty', category: 'Architectural Drama', location: 'Big Sur', duration: '2:58' },
    { id: 'zbCBtOs8bVU', title: 'Oceanfront Penthouse', category: 'Modern Luxury', location: 'Miami', duration: '3:45' },
]

const stats = [
    { number: 87, suffix: '', label: 'Properties Sold Faster' },
    { number: 42, suffix: '', label: 'Countries Represented' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 18, suffix: '', label: 'Avg. Days on Market Reduced' },
]

const testimonials = [
    {
        quote: "The seamless fly-through sold the penthouse before the listing even went live. Sovereign Skyz is now our mandatory partner for every trophy listing.",
        name: "Elena Moreau",
        role: "Senior Broker, Christie’s International Real Estate",
        location: "Monaco"
    },
    {
        quote: "Their cinematic approach turned our development into an aspirational lifestyle brand. Pre-sales exceeded targets by 340%.",
        name: "Rajiv Khanna",
        role: "Director of Sales, The Brando Residences",
        location: "French Polynesia"
    },
]

export default function RealEstatePage() {
    const [activeVideo, setActiveVideo] = useState(null)
    const [activeFilter, setActiveFilter] = useState('All')

    const getThumbnail = (id) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`

    const filteredVideos = activeFilter === 'All'
        ? realEstateVideos
        : realEstateVideos.filter(v => v.category.includes(activeFilter))

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    return (
        <main className="relative w-full bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden">

            {/* --- SUBTLE BACKGROUND FALLBACK --- */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-br from-zinc-900 to-black"></div>

            {/* --- PERMANENTLY DARK TOP NAVIGATION --- */}
            <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg py-4 border-b border-white/10 transition-all duration-500">
                <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
                    <a href="/" className="text-2xl tracking-[0.125em] text-[#D4AF37] font-serif flex items-center gap-2">
                        <span className="text-3xl">✦</span> SOVEREIGNSKYZ
                    </a>

                    <nav className="hidden gap-8 text-xs tracking-widest uppercase md:flex text-white/80">
                        <a href="/" className="hover:text-[#D4AF37] transition-colors">Home</a>
                        <a href="/work" className="hover:text-[#D4AF37] transition-colors">Portfolio</a>
                        <a href="/realestate" className="text-[#D4AF37] transition-colors">Real Estate</a>
                        <a href="/inspections" className="hover:text-[#D4AF37] transition-colors">Inspections</a>
                        <a href="/events" className="hover:text-[#D4AF37] transition-colors">Events</a>
                        <a href="/contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            { }
            <AnimatePresence>
                {activeVideo && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8">
                        <button onClick={() => setActiveVideo(null)} className="absolute top-8 right-8 text-white/60 hover:text-white uppercase tracking-widest text-sm z-50 flex items-center gap-2">
                            ✕ CLOSE
                        </button>
                        <div className="w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-2xl relative">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&controls=0&disablekb=1&playsinline=1`}
                                allowFullScreen
                                className="absolute inset-0"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative z-10">
                { }
                {/* HERO SECTION - Much Stronger */}
                <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center">
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <iframe
                            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 scale-105 pointer-events-none"
                            src="https://www.youtube.com/embed/XbbsoKny4OA?autoplay=1&mute=1&controls=0&loop=1&playlist=XbbsoKny4OA&playsinline=1&modestbranding=1&iv_load_policy=3&disablekb=1"
                            frameBorder="0" allow="autoplay; encrypted-media" tabIndex={-1}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
                        <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.5px,transparent_1px)] bg-[length:4px_4px] opacity-10" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center px-6 max-w-5xl mx-auto pt-20">
                        <div className="mb-6 inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#D4AF37] border border-[#D4AF37]/30 px-6 py-2 rounded-full">
                            LUXURY REAL ESTATE
                        </div>
                        <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-none mb-8 text-white">
                            Architecture<br />That Moves You.
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light">
                            We don’t just film properties.<br />We craft cinematic journeys that make buyers fall in love.
                        </p>

                        <button
                            onClick={() => setActiveVideo('XbbsoKny4OA')}
                            className="group px-10 py-5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all flex items-center gap-4 text-sm tracking-widest uppercase mx-auto"
                        >
                            <Play className="w-5 h-5 group-hover:scale-110 transition" /> EXPERIENCE THE SEAMLESS TOUR
                        </button>

                        <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="mt-24 text-xs tracking-widest text-white/50 flex flex-col items-center">
                            SCROLL TO EXPLORE <span className="text-xl mt-1">↓</span>
                        </motion.div>
                    </div>
                </section>

                { }


                {/* SOVEREIGN ADVANTAGE */}
                <section className="py-28 bg-black">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
                                <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-10">
                                    One continuous, breathtaking journey — from sky to foyer.
                                </h2>
                                <div className="space-y-8 text-lg text-white/70 font-light">
                                    <p>Traditional real estate videos feel like slideshows. Ours feel like ownership.</p>
                                    <p>Our signature seamless tours combine heavy-lift cinematic exteriors with micro-cinewhoop interiors in one fluid, emotionally compelling sequence.</p>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { num: "01", label: "Driveway to Penthouse" },
                                    { num: "02", label: "Zero Property Risk" },
                                    { num: "03", label: "4K Cinematic Quality" },
                                    { num: "04", label: "Delivered in 48 Hours" }
                                ].map((item) => (
                                    <div key={item.num} className="border border-white/10 p-8 hover:border-[#D4AF37] transition-colors group">
                                        <div className="text-6xl font-serif text-white/30 group-hover:text-[#D4AF37] transition">{item.num}</div>
                                        <p className="mt-6 text-lg">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                { }
                {/* CAPABILITIES */}
                <section className="py-28 bg-zinc-950 border-t border-white/10">
                    <div className="container px-6 mx-auto md:px-12">
                        <h2 className="text-center text-4xl font-serif mb-16">Tailored for Luxury Real Estate</h2>
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                { title: "Signature Seamless Tours", desc: "One-take journeys through entire estates — the most powerful marketing asset in luxury real estate today." },
                                { title: "Context & Lifestyle", desc: "Showcase not just the home, but the lifestyle: ocean views, private helipads, vineyard vistas, and city skylines." },
                                { title: "Development & Construction", desc: "Repeatable waypoint missions for progress documentation, investor updates, and pre-sale cinematic campaigns." }
                            ].map((service, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" transition={{ delay: i * 0.1 }} className="p-10 border border-white/10 hover:border-[#D4AF37] group bg-black/30">
                                    <h3 className="text-2xl font-serif mb-5">{service.title}</h3>
                                    <p className="text-white/70">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                { }
                {/* EXPANDED VIDEO SHOWCASE WITH FILTER */}
                <section className="py-28 bg-black">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div>
                                <h2 className="text-4xl font-serif">The Estate Collection</h2>
                                <p className="text-white/60 mt-2">Featured properties captured at the highest level</p>
                            </div>
                            <div className="flex flex-wrap gap-3 mt-6 md:mt-0">
                                {['All', 'Interior FPV', 'Heavy-Lift Exterior', 'Architectural Drama'].map(cat => (
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
                                        <h4 className="text-2xl font-serif">{video.title}</h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                { }
                {/* TESTIMONIALS */}
                <section className="py-28 bg-zinc-950">
                    <div className="container px-6 mx-auto max-w-4xl">
                        <h2 className="text-center text-4xl font-serif mb-16">What Our Clients Say</h2>
                        <div className="grid md:grid-cols-2 gap-10">
                            {testimonials.map((t, i) => (
                                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" className="p-10 border border-white/10 bg-black/40">
                                    <div className="text-4xl text-[#D4AF37]/20 mb-4 font-serif">“</div>
                                    <p className="italic text-lg leading-relaxed mb-8">"{t.quote}"</p>
                                    <div>
                                        <div className="font-medium">{t.name}</div>
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
                        <h2 className="text-5xl md:text-6xl font-serif text-[#D4AF37] mb-6">Ready to elevate your next listing?</h2>
                        <p className="text-xl text-white/70 mb-12">Turn every property into an unforgettable cinematic experience.</p>
                        <a href="/contact" className="inline-block px-12 py-5 bg-[#D4AF37] text-black text-sm font-medium tracking-widest uppercase hover:bg-transparent hover:text-[#D4AF37] border border-[#D4AF37] transition-all">
                            Start Your Cinematic Campaign
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