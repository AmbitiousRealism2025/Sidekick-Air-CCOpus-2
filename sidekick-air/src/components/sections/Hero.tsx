'use client'

import { motion } from 'framer-motion'
import { Button, AirflowLines, BreathingOrb } from '@/components/ui'
import { heroStagger, fadeInUp } from '@/lib/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-graphite">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <AirflowLines variant="hero" />
      <BreathingOrb className="top-1/4 -left-32" />
      <BreathingOrb className="bottom-1/4 -right-32" />

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay" />

      {/* Content */}
      <div className="relative z-10 section-padding w-full max-w-7xl mx-auto pt-32 pb-20">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Tagline Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-mist">
              <span className="w-2 h-2 rounded-full bg-steel-blue animate-breathe" />
              Professional Therapy Equipment, Reimagined
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-arctic mb-6 tracking-tight"
          >
            <span className="block">Reimagining</span>
            <span className="block text-gradient">Recovery</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl lg:text-2xl text-mist max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            The world&apos;s first inflatable therapy table. Professional-grade strength.
            Packs like a yoga mat. Go anywhere healing needs to happen.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" variant="primary">
              Join the Waitlist
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button size="lg" variant="outline">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: '800+', label: 'lb Capacity' },
              { value: '6"', label: 'Inflated Surface' },
              { value: '<15', label: 'lb Total Weight' },
              { value: '3min', label: 'Setup Time' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-arctic mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-mist uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#origin"
            className="flex flex-col items-center gap-2 text-mist hover:text-arctic transition-colors"
          >
            <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-graphite to-transparent" />
    </section>
  )
}
