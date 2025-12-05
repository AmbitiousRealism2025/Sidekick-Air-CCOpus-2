'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading, AnimatedParagraph, SectionAccent } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/animations'

export function OriginStory() {
  return (
    <section id="origin" className="relative bg-arctic py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Diagonal Top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-graphite" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #1C1C1E 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative section-padding max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Story */}
          <div className="relative">
            <SectionAccent position="left" className="hidden lg:block h-full -left-8" />

            <motion.span
              variants={fadeInUp}
              className="inline-block text-copper font-display font-semibold text-sm uppercase tracking-widest mb-4"
            >
              The Origin Story
            </motion.span>

            <AnimatedHeading
              tag="h2"
              className="text-graphite text-4xl md:text-5xl lg:text-6xl mb-8"
            >
              Where Purpose Meets{' '}
              <span className="text-gradient-warm">Innovation</span>
            </AnimatedHeading>

            <div className="space-y-6 text-graphite/80 text-lg leading-relaxed">
              <AnimatedParagraph delay={0.2}>
                For over 25 years, Drew Freedman built his career around a single mission —
                to help people feel better. As the founder of The Boston Bodyworker, his work
                was hands-on, relational, and deeply rooted in purpose.
              </AnimatedParagraph>

              <AnimatedParagraph delay={0.3}>
                When it came time to close the practice, it marked the end of a defining chapter
                and the beginning of a new one. During that time of reflection, Drew bought a
                stand-up paddleboard.
              </AnimatedParagraph>

              <AnimatedParagraph delay={0.4}>
                As he inflated it one quiet afternoon, something extraordinary happened. The
                strength, structure, and feel beneath his hands echoed the support he had
                depended on throughout his entire career.
              </AnimatedParagraph>

              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pl-6 border-l-4 border-copper my-8"
              >
                <p className="text-xl md:text-2xl font-display text-graphite italic">
                  &quot;This material could redefine the therapy table. Not just another version
                  of what already existed, but something fundamentally better.&quot;
                </p>
                <p className="mt-4 text-copper font-semibold">— Drew Freedman, Founder</p>
              </motion.div>

              <AnimatedParagraph delay={0.5}>
                In that moment, Sidekick Air was born — not as a product, but as a continuation
                of purpose. A way to honor the professionals who dedicate their lives to helping
                others heal, and to give them tools that finally return the favor.
              </AnimatedParagraph>
            </div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              {/* Placeholder for founder image */}
              <div className="absolute inset-0 bg-gradient-to-br from-copper/20 to-steel-blue/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-copper to-copper-dark flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-graphite/60 text-sm">Drew Freedman</p>
                  <p className="text-graphite/40 text-xs">Founder, Sidekick Air</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-2 border-copper/30 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-steel-blue/30 rounded-full" />
            </div>

            {/* Timeline indicators */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
              {['Discovery', 'Insight', 'Creation'].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-steel-blue to-copper" />
                  <span className="text-sm text-graphite/60 font-medium">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
