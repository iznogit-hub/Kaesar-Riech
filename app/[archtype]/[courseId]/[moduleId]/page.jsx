'use client'

import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function CoursePage() {
    const router = useRouter()
    const params = useParams()
    const { archetype, courseId } = params

    const [courseData, setCourseData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    // Sample data structure - Expand with real API/DB
    // Assuming 10 modules per course, with titles, durations, and completion status
    const sampleCourses = {
        marketing: {
            'digital-marketing-mastery': {
                title: 'Digital Marketing Mastery',
                desc: 'Command the digital battlefield. Learn to orchestrate campaigns that build empires and crush competitors.',
                image: '/courses/marketing-mastery-hero.png',
                modules: [
                    { id: 'module-1', title: 'Foundations of Influence', duration: '15 min', completed: false },
                    { id: 'module-2', title: 'Campaign Architecture', duration: '20 min', completed: true },
                    { id: 'module-3', title: 'Audience Mapping', duration: '18 min', completed: false },
                    { id: 'module-4', title: 'Content Arsenal', duration: '25 min', completed: false },
                    { id: 'module-5', title: 'Metrics of Dominion', duration: '22 min', completed: true },
                    { id: 'module-6', title: 'Automation Legions', duration: '30 min', completed: false },
                    { id: 'module-7', title: 'Conversion Siege', duration: '20 min', completed: false },
                    { id: 'module-8', title: 'Retargeting Tactics', duration: '18 min', completed: false },
                    { id: 'module-9', title: 'Scalable Empires', duration: '25 min', completed: false },
                    { id: 'module-10', title: 'Sovereign Review', duration: '15 min', completed: false },
                ],
                totalModules: 10,
            },
            'seo-domination': {
                title: 'SEO Domination',
                desc: 'Conquer search realms. Optimize for eternal visibility and traffic sovereignty.',
                image: '/courses/seo-domination-hero.png',
                modules: Array.from({ length: 10 }, (_, i) => ({
                    id: `module-${i + 1}`,
                    title: `SEO Module ${i + 1}`,
                    duration: `${15 + i * 2} min`,
                    completed: i < 3, // Sample completion
                })),
                totalModules: 10,
            },
            // Add other courses like 'smm-strategies', etc., similarly
            'smm-strategies': {
                title: 'SMM Strategies',
                desc: 'Rule social feeds. Craft strategies that amplify your voice across platforms.',
                image: '/courses/smm-strategies-hero.png',
                modules: Array.from({ length: 10 }, (_, i) => ({
                    id: `module-${i + 1}`,
                    title: `SMM Module ${i + 1}`,
                    duration: `${15 + i * 2} min`,
                    completed: i < 4,
                })),
                totalModules: 10,
            },
            'content-warfare': {
                title: 'Content Warfare',
                desc: 'Weaponize words and visuals. Engage in content battles that win loyalties.',
                image: '/courses/content-warfare-hero.png',
                modules: Array.from({ length: 10 }, (_, i) => ({
                    id: `module-${i + 1}`,
                    title: `Content Module ${i + 1}`,
                    duration: `${15 + i * 2} min`,
                    completed: i < 2,
                })),
                totalModules: 10,
            },
            'brand-sovereignty': {
                title: 'Brand Sovereignty',
                desc: 'Forge an unbreakable brand identity. Establish rule through timeless symbols.',
                image: '/courses/brand-sovereignty-hero.png',
                modules: Array.from({ length: 10 }, (_, i) => ({
                    id: `module-${i + 1}`,
                    title: `Brand Module ${i + 1}`,
                    duration: `${15 + i * 2} min`,
                    completed: i < 5,
                })),
                totalModules: 10,
            },
        },
        // Add other archetypes like 'ai', 'web-dev', etc., with their courses
        ai: {
            // Example for AI archetype
            'prompt-engineering-essentials': {
                title: 'Prompt Engineering Essentials',
                desc: 'Craft commands that bend AI to your will. Master the art of precise instruction.',
                image: '/courses/prompt-eng-hero.png',
                modules: Array.from({ length: 10 }, (_, i) => ({
                    id: `module-${i + 1}`,
                    title: `Prompt Module ${i + 1}`,
                    duration: `${15 + i * 2} min`,
                    completed: i < 3,
                })),
                totalModules: 10,
            },
            // ... other AI courses
        },
        // Similarly for web-dev, trading, strategy, data...
    }

    useEffect(() => {
        // Simulate API fetch
        const timer = setTimeout(() => {
            const data = sampleCourses[archetype]?.[courseId]
            if (data) {
                setCourseData(data)
                const completedCount = data.modules.filter(m => m.completed).length
                setProgress(Math.round((completedCount / data.totalModules) * 100))
            } else {
                router.push('/404')
            }
            setLoading(false)
        }, 600)

        return () => clearTimeout(timer)
    }, [archetype, courseId, router])

    if (loading) {
        return (
            <div className='min-h-screen bg-[#050505] text-white flex items-center justify-center'>
                <motion.div
                    className='text-[#D4AF37] font-bleach text-2xl'
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    LOADING COURSE VAULT...
                </motion.div>
            </div>
        )
    }

    if (!courseData) {
        return (
            <div className='min-h-screen bg-[#050505] text-white flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='font-bleach text-4xl text-[#D4AF37] mb-4'>COURSE NOT FOUND</h1>
                    <button
                        onClick={() => router.back()}
                        className='px-6 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all'
                    >
                        RETURN TO ARCHETYPE
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='relative min-h-screen w-full bg-[#050505] text-white p-6 md:p-12 font-mono overflow-x-hidden'>
            {/* HUD Overlay */}
            <div className='fixed top-4 left-4 right-4 md:top-6 md:left-6 z-50 pointer-events-none'>
                <div className='flex justify-between items-center text-sm md:text-base'>
                    <span className='text-[#D4AF37] font-bleach uppercase'>{archetype.toUpperCase()} // {courseData.title}</span>
                    <div className='text-zinc-500'>PROGRESS: {progress}% | MODULES: {courseData.totalModules}</div>
                </div>
            </div>

            <main className='max-w-6xl mx-auto relative z-10'>
                {/* Breadcrumb Navigation */}
                <nav className='mb-8 flex items-center space-x-4 text-sm text-zinc-500'>
                    <Link href='/witan' className='hover:text-[#D4AF37] transition-colors'>
                        WITAN TERMINAL
                    </Link>
                    <span>/</span>
                    <Link href={`/${archetype}`} className='hover:text-[#D4AF37] transition-colors'>
                        {archetype.toUpperCase()}
                    </Link>
                    <span>/</span>
                    <span className='text-zinc-400'>{courseId.replace(/-/g, ' ').toUpperCase()}</span>
                </nav>

                {/* Course Header with Image */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='mb-12'
                >
                    <div className='relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-6 bg-zinc-900/20'>
                        <Image
                            src={courseData.image}
                            alt={courseData.title}
                            fill
                            className='object-cover'
                            priority
                        />
                    </div>
                    <div className='text-center md:text-left'>
                        <h1 className='font-bleach text-4xl md:text-6xl text-[#D4AF37] mb-4 tracking-[0.1em]'>
                            {courseData.title}
                        </h1>
                        <p className='text-xl md:text-2xl text-zinc-400 mb-6 leading-relaxed'>
                            {courseData.desc}
                        </p>
                        <div className='flex items-center justify-center md:justify-start space-x-8 text-sm text-zinc-500'>
                            <span>TOTAL MODULES: {courseData.totalModules}</span>
                            <span>EST. TIME: {courseData.totalModules * 20} min</span>
                            <div className='flex-1 max-w-md'>
                                <div className='w-full bg-zinc-800 rounded-full h-2'>
                                    <div
                                        className='bg-[#D4AF37] h-2 rounded-full transition-all'
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Modules List */}
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className='mb-12'
                >
                    <h2 className='font-bleach text-3xl text-white mb-8 uppercase tracking-wide'>Module Tree</h2>
                    <div className='space-y-4'>
                        {courseData.modules.map((module, index) => (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`flex items-center p-6 rounded-xl border transition-all cursor-pointer group ${module.completed
                                    ? 'border-[#D4AF37]/30 bg-[#D4AF37]/5'
                                    : 'border-zinc-700/50 bg-zinc-900/20 hover:border-[#D4AF37]/30'
                                    }`}
                                onClick={() => router.push(`/${archetype}/${courseId}/${module.id}`)}
                            >
                                <div className='w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold transition-colors'>
                                    {module.completed ? (
                                        <span className='text-[#D4AF37]'>✓</span>
                                    ) : (
                                        <span className='text-zinc-500'>{index + 1}</span>
                                    )}
                                </div>
                                <div className='flex-1'>
                                    <h3 className='font-bleach text-lg md:text-xl text-white group-hover:text-[#D4AF37] transition-colors'>
                                        {module.title}
                                    </h3>
                                    <p className='text-zinc-500 text-sm'>Duration: {module.duration}</p>
                                </div>
                                <div className='text-right ml-4'>
                                    <span className={`text-xs px-2 py-1 rounded-full ${module.completed ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-zinc-700/50 text-zinc-500'
                                        }`}>
                                        {module.completed ? 'COMPLETE' : 'LOCKED'}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Quick Actions */}
                <div className='flex justify-between pt-8 border-t border-zinc-800'>
                    <button
                        onClick={() => router.back()}
                        className='px-6 py-3 border border-zinc-700 text-zinc-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all'
                    >
                        ← BACK TO ARCHETYPE
                    </button>
                    <button
                        onClick={() => router.push('/witan')}
                        className='px-6 py-3 bg-[#D4AF37] text-black font-bleach uppercase hover:bg-[#D4AF37]/90 transition-all'
                    >
                        RETURN TO TERMINAL
                    </button>
                    {courseData.modules[0] && (
                        <Link
                            href={`/${archetype}/${courseId}/${courseData.modules[0].id}`}
                            className='px-6 py-3 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all'
                        >
                            START MODULE 1 →
                        </Link>
                    )}
                </div>
            </main>

            <style jsx>{`
        .prose h2 { @apply text-white font-bleach mb-4; }
        .prose p { @apply text-zinc-300 leading-relaxed; }
      `}</style>
        </div>
    )
}