'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading, AnimatedParagraph, FeatureCard, BreathingOrb } from '@/components/ui'
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Drop-Stitch Technology',
    description: 'Advanced aerospace-grade material delivers exceptional strength without the burden. The same technology used in marine and aviation engineering.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: '800+ lb Capacity',
    description: 'Rock-solid 6-inch inflated surface supports over 800 pounds with unwavering stability during every treatment session.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Packs Like a Yoga Mat',
    description: 'Revolutionary design deflates and rolls to yoga mat size. Store it anywhere, carry it everywhere.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '3-Minute Setup',
    description: 'From bag to fully inflated therapy table in under three minutes. More time for care, less time for setup.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'Modular Frame System',
    description: 'Collapsible stand and advanced fasteners combine to deliver unmatched stability and flexibility for any environment.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Custom Branding',
    description: 'Optional color customization and branding options. Make Sidekick Air an extension of your professional identity.',
  },
]

const environments = [
  { name: 'Clinic', icon: '🏥' },
  { name: 'Home', icon: '🏠' },
  { name: 'Gym', icon: '💪' },
  { name: 'Outdoor', icon: '🌲' },
  { name: 'Events', icon: '🎪' },
  { name: 'Travel', icon: '✈️' },
]

export function Difference() {
  return (
    <section id="difference" className="relative bg-arctic py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Effects */}
      <BreathingOrb className="-top-32 -right-32 w-96 h-96 bg-steel-blue/10" />
      <BreathingOrb className="-bottom-32 -left-32 w-96 h-96 bg-copper/10" />

      {/* Diagonal Top */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-graphite"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}
      />

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
            The Sidekick Air Difference
          </motion.span>

          <AnimatedHeading tag="h2" className="text-graphite mb-6">
            Built to Move With You.{' '}
            <span className="text-gradient">Designed to Perform.</span>
          </AnimatedHeading>

          <AnimatedParagraph
            delay={0.2}
            className="text-lg md:text-xl text-graphite/70 max-w-3xl mx-auto"
          >
            Sidekick Air redefines what a therapy table can be — powerful, portable, and
            purpose-built for today&apos;s evolving landscape. This is a tool designed for
            movement, empowering therapists to bring their work anywhere healing needs to happen.
          </AnimatedParagraph>
        </motion.div>

        {/* Product Showcase */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-graphite to-graphite-light">
            {/* Placeholder for product image/video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-steel-blue/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-steel-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-arctic/60 text-sm">Product Demo Video</p>
              </div>
            </div>

            {/* Floating feature badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-8 left-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-arctic text-sm font-medium"
            >
              800+ lb capacity
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute top-8 right-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-arctic text-sm font-medium"
            >
              Under 15 lbs
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-arctic text-sm font-medium"
            >
              Drop-stitch technology
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              variant="bordered"
              className="bg-white hover:bg-white"
            />
          ))}
        </motion.div>

        {/* Environments Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-display font-semibold text-graphite mb-8">
            One Table. Endless Environments.
          </h3>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {environments.map((env, index) => (
              <motion.div
                key={env.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-graphite/5 hover:bg-steel-blue/10 border border-graphite/10 hover:border-steel-blue/30 transition-all duration-300"
              >
                <span className="text-xl">{env.icon}</span>
                <span className="font-medium text-graphite">{env.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
