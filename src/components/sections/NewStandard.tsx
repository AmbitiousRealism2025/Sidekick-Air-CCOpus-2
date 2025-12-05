'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading, AnimatedParagraph, AirflowLines } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const aiFeatures = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Treatment Planning',
    description: 'AI-assisted protocols tailored to each client\'s needs and progress.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Business Analytics',
    description: 'Data-driven insights to grow your practice and optimize operations.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Professional Growth',
    description: 'Personalized learning paths and skill development recommendations.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Instant Access',
    description: 'Connect via QR code scan — no downloads, no setup required.',
  },
]

export function NewStandard() {
  return (
    <section className="relative bg-graphite py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Effects */}
      <AirflowLines variant="background" />

      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(56, 124, 255, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(56, 124, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-steel-blue/10 border border-steel-blue/20 text-steel-blue text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-steel-blue animate-pulse" />
              Coming Soon
            </motion.span>

            <AnimatedHeading tag="h2" className="text-arctic mb-6">
              A New Industry{' '}
              <span className="text-gradient">Standard</span>
            </AnimatedHeading>

            <AnimatedParagraph
              delay={0.2}
              className="text-lg text-mist mb-8"
            >
              Future models will feature built-in AI technology, connecting through a simple
              QR code to a personalized &apos;Clinical AI Coach.&apos; This digital companion will
              assist practitioners with treatment planning, business analytics, and professional
              growth — creating a seamless connection between technology and hands-on care.
            </AnimatedParagraph>

            {/* AI Features Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-steel-blue/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 shrink-0 rounded-lg bg-steel-blue/10 text-steel-blue flex items-center justify-center group-hover:bg-steel-blue group-hover:text-white transition-all duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-arctic text-sm mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-mist text-xs leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Phone Mockup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-[500px] bg-graphite-light rounded-[3rem] border-4 border-white/10 shadow-2xl overflow-hidden">
                  {/* Screen Content */}
                  <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-steel-blue/20 to-copper/20 overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      {/* QR Code Placeholder */}
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-32 h-32 mb-6 rounded-2xl bg-white/90 p-3"
                      >
                        <div className="w-full h-full bg-graphite rounded-lg flex items-center justify-center">
                          <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 13h6v6H3v-6zm2 2v2h2v-2H5zm13-2h3v2h-3v-2zm-5 0h2v2h-2v-2zm2 4h2v2h-2v-2zm2 2h3v2h-3v-2zm0-4h3v2h-3v-2zm-4 4h2v2h-2v-2z"/>
                          </svg>
                        </div>
                      </motion.div>
                      <p className="text-arctic text-center text-sm font-medium mb-2">
                        Scan to Connect
                      </p>
                      <p className="text-arctic/60 text-center text-xs">
                        Clinical AI Coach
                      </p>
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-graphite rounded-full" />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 left-0 px-4 py-2 rounded-full bg-steel-blue/20 backdrop-blur-sm border border-steel-blue/30 text-steel-blue text-sm font-medium"
              >
                AI-Powered
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-20 right-0 px-4 py-2 rounded-full bg-copper/20 backdrop-blur-sm border border-copper/30 text-copper text-sm font-medium"
              >
                Smart Insights
              </motion.div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
                <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-steel-blue" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl md:text-2xl text-arctic font-display max-w-3xl mx-auto">
            Sidekick Air is more than a new product.{' '}
            <span className="text-gradient">It&apos;s the beginning of a new standard</span> — one
            that redefines how care is delivered, how therapists thrive, and how the profession
            moves forward together.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
