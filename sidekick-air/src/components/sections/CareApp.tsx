'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading, AnimatedParagraph, BreathingOrb } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const appFeatures = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Setup & Mobility Guides',
    description: 'Step-by-step instructions for any environment',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Treatment Protocols',
    description: 'Condition-based protocols for massage, sports medicine, and rehabilitation',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: 'Client Tracking',
    description: 'Progress notes, outcomes, and follow-up care management',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Professional Network',
    description: 'Connect and collaborate with other practitioners',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Smart Scheduling',
    description: 'Client booking with Sidekick-certified therapists nearby',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'At-Home Care',
    description: 'Remote care functionality for clients with their own Sidekick Air',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Continuing Education',
    description: 'Skill development modules and learning pathways',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Data Insights',
    description: 'Analytics to refine outcomes and elevate performance',
  },
]

export function CareApp() {
  return (
    <section id="app" className="relative bg-arctic py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Effects */}
      <BreathingOrb className="top-0 right-0 w-[600px] h-[600px] bg-steel-blue/5" />

      {/* Diagonal Top */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-graphite"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
      />

      <div className="relative section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone */}
              <div className="relative w-72 h-[580px] mx-auto bg-graphite rounded-[3rem] border-4 border-graphite-light shadow-2xl overflow-hidden">
                {/* Screen */}
                <div className="absolute inset-3 rounded-[2.5rem] bg-arctic overflow-hidden">
                  {/* App Header */}
                  <div className="bg-steel-blue p-6 pb-16">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-white font-bold">S</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Sidekick Care</p>
                        <p className="text-white/70 text-xs">Your Practice, Elevated</p>
                      </div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="relative -mt-10 px-4 space-y-4">
                    {/* Stats Card */}
                    <div className="bg-white rounded-2xl p-4 shadow-lg">
                      <p className="text-graphite/60 text-xs mb-2">This Week</p>
                      <div className="flex justify-between">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-graphite">12</p>
                          <p className="text-xs text-graphite/60">Sessions</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-steel-blue">8</p>
                          <p className="text-xs text-graphite/60">Clients</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-copper">4.9</p>
                          <p className="text-xs text-graphite/60">Rating</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-steel-blue/10 rounded-xl p-3 text-center">
                        <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-steel-blue/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </div>
                        <p className="text-xs font-medium text-graphite">New Session</p>
                      </div>
                      <div className="bg-copper/10 rounded-xl p-3 text-center">
                        <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-copper/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <p className="text-xs font-medium text-graphite">Add Client</p>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl p-4 shadow-sm">
                      <p className="text-xs text-graphite/60 mb-3">Recent Activity</p>
                      <div className="space-y-3">
                        {['Sarah M. - Deep Tissue', 'John D. - Sports Recovery', 'Emma L. - Assessment'].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-mist flex items-center justify-center text-xs font-medium text-graphite">
                              {item.charAt(0)}
                            </div>
                            <p className="text-xs text-graphite truncate flex-1">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-24 h-6 bg-graphite rounded-b-2xl" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 top-1/4 px-3 py-2 rounded-lg bg-white shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-graphite">Synced</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 bottom-1/4 px-3 py-2 rounded-lg bg-white shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-steel-blue/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <span className="text-xs font-medium text-graphite">2 new</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="order-1 lg:order-2"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-steel-blue font-display font-semibold text-sm uppercase tracking-widest mb-4"
            >
              Sidekick Care App
            </motion.span>

            <AnimatedHeading tag="h2" className="text-graphite mb-6">
              Your Practice,{' '}
              <span className="text-gradient">Connected</span>
            </AnimatedHeading>

            <AnimatedParagraph
              delay={0.2}
              className="text-lg text-graphite/70 mb-8"
            >
              The Sidekick Care app extends the reach and impact of the table by connecting
              therapists, clients, and performance data into one intelligent platform. It
              simplifies workflow, enhances communication, and ensures that care continues
              long after each session.
            </AnimatedParagraph>

            {/* Features Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-3"
            >
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-graphite/5 transition-colors duration-300"
                >
                  <div className="w-9 h-9 shrink-0 rounded-lg bg-steel-blue/10 text-steel-blue flex items-center justify-center group-hover:bg-steel-blue group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-graphite text-sm mb-0.5">
                      {feature.title}
                    </h4>
                    <p className="text-graphite/60 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
