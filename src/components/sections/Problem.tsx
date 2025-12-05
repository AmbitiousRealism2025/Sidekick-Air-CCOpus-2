'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading, AnimatedParagraph, AirflowLines } from '@/components/ui'
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from '@/lib/animations'

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Excessive Weight',
    description: 'Traditional tables often exceed 35-45 pounds, creating daily physical strain.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Awkward Transport',
    description: 'Wrestling through tight spaces, stairs, and vehicles feels like carrying an anchor.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: 'Bulky Storage',
    description: 'Tables consume valuable space in homes, clinics, and vehicles.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Setup Fatigue',
    description: 'Complex assembly wastes energy before a single client session begins.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'Durability Trade-offs',
    description: 'Lighter tables sacrifice strength, causing instability during treatment.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Environmental Impact',
    description: 'Conventional materials and shipping processes increase waste and carbon footprint.',
  },
]

export function Problem() {
  return (
    <section className="relative bg-graphite py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Effects */}
      <AirflowLines variant="section" className="opacity-30" />

      <div className="relative section-padding max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-steel-blue font-display font-semibold text-sm uppercase tracking-widest mb-4"
          >
            The Problem to Solve
          </motion.span>

          <AnimatedHeading tag="h2" className="text-arctic mb-6">
            Therapy Tables Have Remained{' '}
            <span className="text-gradient">Unchanged for Decades</span>
          </AnimatedHeading>

          <AnimatedParagraph
            delay={0.2}
            className="text-lg md:text-xl text-mist max-w-3xl mx-auto"
          >
            While therapists have evolved their techniques, their tools have not kept pace.
            The work of healing demands presence, skill, and care — but the tools have demanded
            something entirely different: endurance and compromise.
          </AnimatedParagraph>
        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={fadeInUp}
              custom={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-graphite-light border border-white/5 hover:border-copper/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 mb-4 rounded-xl bg-copper/10 text-copper flex items-center justify-center group-hover:bg-copper group-hover:text-white transition-all duration-300">
                {point.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-display font-semibold text-arctic mb-2">
                {point.title}
              </h3>
              <p className="text-mist text-sm leading-relaxed">
                {point.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-copper to-steel-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Section */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-mist/30 to-transparent hidden md:block"
          />

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            {/* Before */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-copper/10 to-transparent border border-copper/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-copper/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-arctic">The Old Way</h3>
                </div>
                <ul className="space-y-3 text-mist">
                  {['Heavy, cumbersome frames', 'Fixed dimensions', 'Complex assembly', 'No portability', 'Physical strain daily'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-copper/60 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-steel-blue/10 to-transparent border border-steel-blue/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-steel-blue/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-arctic">The Sidekick Way</h3>
                </div>
                <ul className="space-y-3 text-mist">
                  {['Ultralight drop-stitch technology', 'Packs to yoga mat size', 'Inflates in minutes', 'Go-anywhere portability', 'Preserves your energy'].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-steel-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-xl md:text-2xl text-arctic font-display max-w-3xl mx-auto">
            These are not minor inconveniences — they are obstacles that silently wear down
            even the most passionate professionals.{' '}
            <span className="text-gradient">It&apos;s time for liberation.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
