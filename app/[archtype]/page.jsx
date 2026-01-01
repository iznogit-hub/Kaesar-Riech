'use client'

import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Optional: Add viewport export here if you want archetype-specific overrides
// export const viewport = { themeColor: '#D4AF37', colorScheme: 'dark' }

export default function ArchetypePage() {
    const router = useRouter()
    const params = useParams()
    const { archetype } = params || {}

    const [archetypeData, setArchetypeData] = useState(null)
    const [loading, setLoading] = useState(true)

    const sampleArchetypes = {
        marketing: {
            name: 'THE SIREN',
            role: 'Digital Marketing Command',
            desc: 'Master the art of influence to command markets.',
            img: '/siren-vortex.png',
            courses: [
                { id: 'digital-marketing-mastery', title: 'Digital Marketing Mastery', slug: 'digital-marketing-mastery' },
                { id: 'seo-domination', title: 'SEO Domination', slug: 'seo-domination' },
                { id: 'smm-strategies', title: 'SMM Strategies', slug: 'smm-strategies' },
                { id: 'content-warfare', title: 'Content Warfare', slug: 'content-warfare' },
                { id: 'brand-sovereignty', title: 'Brand Sovereignty', slug: 'brand-sovereignty' },
            ],
        },
        ai: {
            name: 'THE ORACLE',
            role: 'AI Sovereignty',
            desc: 'Harness predictive intelligence to shape futures.',
            img: '/oracle-vision.png',
            courses: [
                { id: 'prompt-engineering-essentials', title: 'Prompt Engineering Essentials', slug: 'prompt-engineering-essentials' },
                { id: 'ai-agent-automation', title: 'AI Agent Automation', slug: 'ai-agent-automation' },
                { id: 'machine-learning-foundations', title: 'Machine Learning Foundations', slug: 'machine-learning-foundations' },
                { id: 'neural-network-tactics', title: 'Neural Network Tactics', slug: 'neural-network-tactics' },
                { id: 'ethical-ai-governance', title: 'Ethical AI Governance', slug: 'ethical-ai-governance' },
            ],
        },
        'web-dev': {
            name: 'THE ARCHITECT',
            role: 'Web Empire Building',
            desc: 'Build unbreakable digital fortresses for rule.',
            img: '/architect-neural.png',
            courses: [
                { id: 'frontend-empire-building', title: 'Frontend Empire Building', slug: 'frontend-empire-building' },
                { id: 'backend-fortress-design', title: 'Backend Fortress Design', slug: 'backend-fortress-design' },
                { id: 'fullstack-command', title: 'Fullstack Command', slug: 'fullstack-command' },
                { id: 'devops-mastery', title: 'DevOps Mastery', slug: 'devops-mastery' },
                { id: 'scalable-architecture', title: 'Scalable Architecture', slug: 'scalable-architecture' },
            ],
        },
        trading: {
            name: 'THE TRADER',
            role: 'Financial Conquest',
            desc: 'Conquer financial realms through strategic execution.',
            img: '/trader-aurum.png',
            courses: [
                { id: 'crypto-market-conquest', title: 'Crypto Market Conquest', slug: 'crypto-market-conquest' },
                { id: 'stock-analysis-arsenal', title: 'Stock Analysis Arsenal', slug: 'stock-analysis-arsenal' },
                { id: 'algorithmic-trading-systems', title: 'Algorithmic Trading Systems', slug: 'algorithmic-trading-systems' },
                { id: 'risk-management-protocols', title: 'Risk Management Protocols', slug: 'risk-management-protocols' },
                { id: 'portfolio-sovereignty', title: 'Portfolio Sovereignty', slug: 'portfolio-sovereignty' },
            ],
        },
        strategy: {
            name: 'THE STRATEGIST',
            role: 'Imperial Leadership',
            desc: 'Forge empires with visionary operational dominance.',
            img: '/strategist-imperium.png',
            courses: [
                { id: 'business-strategy-supremacy', title: 'Business Strategy Supremacy', slug: 'business-strategy-supremacy' },
                { id: 'leadership-digital-age', title: 'Leadership in the Digital Age', slug: 'leadership-digital-age' },
                { id: 'entrepreneurial-warfare', title: 'Entrepreneurial Warfare', slug: 'entrepreneurial-warfare' },
                { id: 'innovation-command', title: 'Innovation Command', slug: 'innovation-command' },
                { id: 'global-expansion-tactics', title: 'Global Expansion Tactics', slug: 'global-expansion-tactics' },
            ],
        },
        data: {
            name: 'THE ANALYST',
            role: 'Data Dominion',
            desc: 'Unleash data as your ultimate weapon for rule.',
            img: '/analyst-datum.png',
            courses: [
                { id: 'data-analytics-dominion', title: 'Data Analytics Dominion', slug: 'data-analytics-dominion' },
                { id: 'visualization-vanguard', title: 'Visualization Vanguard', slug: 'visualization-vanguard' },
                { id: 'big-data-battlefields', title: 'Big Data Battlefields', slug: 'big-data-battlefields' },
                { id: 'predictive-modeling', title: 'Predictive Modeling', slug: 'predictive-modeling' },
                { id: 'insight-intelligence', title: 'Insight Intelligence', slug: 'insight-intelligence' },
            ],
        },
    }

    useEffect(() => {
        if (!archetype) return

        const timer = setTimeout(() => {
            const data = sampleArchetypes[archetype]
            if (data) {
                setArchetypeData(data)
            } else {
                router.push('/404')
            }
            setLoading(false)
        }, 400)

        return () => clearTimeout(timer)
    }, [archetype, router])

    if (loading) {
        return (
            <div className='min-h-screen bg-[#050505] text-white flex items-center justify-center'>
                <motion.div
                    className='text-[#D4AF37] font-bleach text-2xl tracking-widest'
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.8 }}
                >
                    DECODING ARCHETYPE...
                </motion.div>
            </div>
        )
    }

    if (!archetypeData) {
        return (
            <div className='min-h-screen bg-[#050505] text-white flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='font-bleach text-5xl text-[#D4AF37] mb-6'>ACCESS DENIED</h1>
                    <p className='text-zinc-500 mb-8'>This archetype does not exist in the Reich.</p>
                    <Link
                        href='/witan'
                        className='px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all font-bleach uppercase'
                    >
                        RETURN TO TERMINAL
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='relative min-h-screen w-full bg-[#050505] text-white p-6 md:p-12 font-mono overflow-x-hidden'>
            {/* HUD */}
            <div className='fixed top-4 left-4 right-4 md:top-6 md:left-6 z-50 pointer-events-none'>
                <div className='flex justify-between items-center text-sm md:text-base'>
                    <span className='text-[#D4AF37] font-bleach uppercase tracking-wider'>
                        {archetypeData.name} // {archetypeData.role}
                    </span>
                    <Link href='/witan' className='text-zinc-500 hover:text-[#D4AF37] transition-colors'>
                        TERMINAL ←
                    </Link>
                </div>
            </div>

            <main className='max-w-6xl mx-auto relative z-10'>
                {/* Breadcrumb */}
                <nav className='mb-10 flex items-center space-x-4 text-sm text-zinc-500'>
                    <Link href='/witan' className='hover:text-[#D4AF37] transition-colors'>
                        WITAN TERMINAL
                    </Link>
                    <span className='text-zinc-600'>/</span>
                    <span className='text-white font-medium'>{archetypeData.name}</span>
                </nav>

                {/* Archetype Header */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='mb-16 text-center md:text-left'
                >
                    <div className='relative w-full max-w-4xl mx-auto h-80 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-2xl border border-[#D4AF37]/20'>
                        <Image
                            src={archetypeData.img}
                            alt={archetypeData.name}
                            fill
                            className='object-cover'
                            priority
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent' />
                    </div>

                    <h1 className='font-bleach text-5xl md:text-7xl text-[#D4AF37] mb-6 tracking-[0.1em]'>
                        {archetypeData.name}
                    </h1>
                    <p className='text-xl md:text-2xl text-zinc-300 max-w-4xl leading-relaxed'>
                        {archetypeData.desc}
                    </p>
                </motion.section>

                {/* Course Tree */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className='mb-16'
                >
                    <h2 className='font-bleach text-4xl md:text-5xl text-white mb-12 uppercase tracking-wide text-center'>
                        Course Tree
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {archetypeData.courses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                                className='group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-[#D4AF37]/50 hover:bg-zinc-900/50 transition-all duration-500 cursor-pointer overflow-hidden'
                                onClick={() => router.push(`/${archetype}/${course.slug}`)}
                            >
                                <div className='absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                                <div className='relative z-10'>
                                    <h3 className='font-bleach text-2xl md:text-3xl text-white mb-4 group-hover:text-[#D4AF37] transition-colors'>
                                        {course.title}
                                    </h3>
                                    <div className='flex items-center justify-between text-sm text-zinc-500'>
                                        <span>10 Elite Modules</span>
                                        <span className='text-[#D4AF37] group-hover:translate-x-2 transition-transform'>→</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Back Button */}
                <div className='text-center pt-12 border-t border-zinc-800'>
                    <Link
                        href='/witan'
                        className='inline-block px-10 py-5 bg-[#D4AF37] text-black font-bleach text-xl uppercase tracking-wider hover:bg-[#D4AF37]/90 transition-all shadow-lg'
                    >
                        Return to Witan Terminal
                    </Link>
                </div>
            </main>
        </div>
    )
}