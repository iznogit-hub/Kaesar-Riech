'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Clock, Award } from 'lucide-react'

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        timeline: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call before generating the mailto link
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
            // Generates an email draft directly to the requested email
            window.location.href = `mailto:info@sovereignskyz.com?subject=Project Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0ACompany: ${formData.company}%0D%0AType: ${formData.projectType}%0D%0ATimeline: ${formData.timeline}%0D%0A%0D%0ADetails:%0D%0A${formData.message}`;
        }, 1200)
    }

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    }

    return (
        <main className="relative w-full bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-hidden">

            <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-gradient-to-br from-zinc-900 to-black"></div>

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
                        <a href="/events" className="hover:text-[#D4AF37] transition-colors">Events</a>
                        <a href="/contact" className="text-[#D4AF37] transition-colors">Contact</a>
                    </nav>
                </div>
            </header>

            <div className="relative z-10 pt-32">

                <section className="min-h-[85vh] flex items-center justify-center text-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_0.6px,transparent_1px)] bg-[length:5px_5px] opacity-10" />

                    <div className="container px-6 mx-auto max-w-4xl">
                        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                            <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] text-[#D4AF37] mb-8 border border-[#D4AF37]/30 px-8 py-3 rounded-full">
                                LET'S CREATE SOMETHING LEGENDARY
                            </div>
                            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-none mb-8">
                                Begin Your<br />Sovereign Story
                            </h1>
                            <p className="text-xl text-white/70 max-w-2xl mx-auto">
                                From first conversation to final delivery — we treat every project with the precision it deserves.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute bottom-12 text-xs tracking-widest text-white/50 flex flex-col items-center"
                    >
                        SCROLL TO CONNECT ↓
                    </motion.div>
                </section>

                <section className="py-8 border-b border-white/10 bg-black/70 backdrop-blur">
                    <div className="container px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <a href="tel:3075224412" className="group flex flex-col items-center hover:text-[#D4AF37] transition">
                            <Phone className="w-6 h-6 mb-3" />
                            <p className="text-sm font-medium">(307) 522-4412</p>
                            <p className="text-xs text-white/50">Immediate Response</p>
                        </a>
                        <a href="mailto:info@sovereignskyz.com" className="group flex flex-col items-center hover:text-[#D4AF37] transition">
                            <Mail className="w-6 h-6 mb-3" />
                            <p className="text-sm font-medium">info@sovereignskyz.com</p>
                            <p className="text-xs text-white/50">Project Inquiries</p>
                        </a>
                        <div className="flex flex-col items-center">
                            <Clock className="w-6 h-6 mb-3" />
                            <p className="text-sm font-medium">24–48 Hours</p>
                            <p className="text-xs text-white/50">Response Time</p>
                        </div>
                    </div>
                </section>

                <section className="py-28 bg-neutral-950">
                    <div className="container px-6 mx-auto md:px-12 lg:px-24">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-5xl font-serif text-white mb-4">Tell Us About Your Vision</h2>
                                <p className="text-white/60">The more detail you provide, the better we can prepare a tailored proposal.</p>
                            </div>

                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <label className="block text-xs tracking-widest uppercase text-white/50 mb-2">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-[#D4AF37] outline-none text-lg placeholder:text-white/30 transition-colors"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs tracking-widest uppercase text-white/50 mb-2">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-[#D4AF37] outline-none text-lg placeholder:text-white/30 transition-colors"
                                                    placeholder="you@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div>
                                                <label className="block text-xs tracking-widest uppercase text-white/50 mb-2">Company / Brand</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-[#D4AF37] outline-none text-lg placeholder:text-white/30 transition-colors"
                                                    placeholder="Brand or Studio"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs tracking-widest uppercase text-white/50 mb-2">Project Type</label>
                                                <select
                                                    name="projectType"
                                                    value={formData.projectType}
                                                    onChange={handleChange}
                                                    className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-[#D4AF37] outline-none text-lg text-white/70 transition-colors cursor-pointer"
                                                >
                                                    <option value="" className="bg-neutral-900 text-white">Select Type</option>
                                                    <option value="RealEstate" className="bg-neutral-900 text-white">Real Estate</option>
                                                    <option value="Inspections" className="bg-neutral-900 text-white">Inspections</option>
                                                    <option value="Events" className="bg-neutral-900 text-white">Events</option>
                                                    <option value="Other" className="bg-neutral-900 text-white">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs tracking-widest uppercase text-white/50 mb-2">Desired Timeline</label>
                                            <input
                                                type="text"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-white/20 pb-3 focus:border-[#D4AF37] outline-none text-lg placeholder:text-white/30 transition-colors"
                                                placeholder="e.g. Next Month or ASAP"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs tracking-widest uppercase text-white/50 mb-3">Tell Us About Your Project</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={7}
                                                required
                                                className="w-full bg-transparent border border-white/10 p-6 focus:border-[#D4AF37] outline-none text-lg resize-none placeholder:text-white/30 transition-colors"
                                                placeholder="Describe the location, vision, deliverables, and any specific challenges..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full md:w-auto px-16 py-5 bg-[#D4AF37] text-black font-bold tracking-widest text-sm uppercase hover:bg-white transition-all disabled:opacity-70"
                                        >
                                            {isSubmitting ? "TRANSMITTING SECURELY..." : "SEND INQUIRY"}
                                        </button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center py-24"
                                    >
                                        <Award className="w-20 h-20 text-[#D4AF37] mx-auto mb-8" />
                                        <h3 className="text-4xl font-serif text-[#D4AF37] mb-4">Thank You.</h3>
                                        <p className="text-xl text-white/70 max-w-md mx-auto">
                                            Your inquiry has been received. The Sovereign Skyz team or a senior producer will contact you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-12 text-sm tracking-widest uppercase underline hover:text-[#D4AF37] transition-colors"
                                        >
                                            Submit Another Inquiry
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                <section className="py-32 bg-black border-t border-white/10 text-center">
                    <div className="container px-6 mx-auto max-w-2xl">
                        <p className="text-white/60 mb-6 text-sm tracking-widest">WORLDWIDE • FULLY INSURED • FAA / EASA CERTIFIED</p>
                        <h2 className="text-4xl font-serif mb-8">The sky is ready when you are.</h2>
                        <a href="tel:3075224412" className="inline-flex items-center gap-4 text-xl hover:text-[#D4AF37] transition">
                            <Phone className="w-6 h-6" /> (307) 522-4412
                        </a>
                    </div>
                </section>

                <footer className="bg-black pt-20 pb-12 border-t border-[#D4AF37]/20">
                    <div className="container px-6 mx-auto md:px-12 text-center">
                        <div className="text-3xl font-serif text-[#D4AF37] mb-2 flex items-center justify-center gap-2">
                            <span>✦</span> Sovereign Skyz
                        </div>
                        <p className="text-[10px] tracking-widest uppercase text-white/50 mb-12">ADVANCED AERIAL OPERATIONS</p>

                        <div className="pt-12 border-t border-white/10 text-[10px] text-white/40 tracking-widest uppercase">
                            <p>© {new Date().getFullYear()} SOVEREIGNSKYZ • ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    )
}