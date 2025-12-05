'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button, AnimatedHeading, AirflowLines, BreathingOrb } from '@/components/ui'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const testimonials = [
  {
    quote: "Finally, equipment that understands what therapists actually need.",
    author: "Physical Therapist",
    location: "Boston, MA",
  },
  {
    quote: "The portability changes everything about how I can serve my clients.",
    author: "Sports Massage Therapist",
    location: "Denver, CO",
  },
  {
    quote: "I never thought a table this light could feel this stable.",
    author: "Athletic Trainer",
    location: "Austin, TX",
  },
]

export function JoinMovement() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setEmail('')
  }

  return (
    <section id="join" className="relative bg-graphite py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Effects */}
      <AirflowLines variant="hero" className="opacity-50" />
      <BreathingOrb className="top-1/4 -left-32" />
      <BreathingOrb className="bottom-1/4 -right-32" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-graphite via-transparent to-graphite" />

      <div className="relative section-padding max-w-5xl mx-auto text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper/10 border border-copper/20 text-copper text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-copper animate-pulse" />
              Limited Early Access
            </span>
          </motion.div>

          {/* Headline */}
          <AnimatedHeading tag="h2" className="text-arctic mb-6">
            Join the{' '}
            <span className="text-gradient">Movement</span>
          </AnimatedHeading>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-mist max-w-2xl mx-auto mb-12"
          >
            Be among the first to experience Sidekick Air. Join our waitlist for exclusive
            early access, special pricing, and updates on our journey to reimagine recovery.
          </motion.p>

          {/* Email Signup Form */}
          <motion.div variants={fadeInUp} className="max-w-md mx-auto mb-16">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-steel-blue/10 border border-steel-blue/20"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-steel-blue/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-steel-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-arctic mb-2">
                  You&apos;re on the list!
                </h3>
                <p className="text-mist">
                  We&apos;ll be in touch soon with exclusive updates and early access information.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-arctic placeholder:text-mist/50 focus:outline-none focus:border-steel-blue transition-colors"
                />
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  isLoading={isSubmitting}
                  className="whitespace-nowrap"
                >
                  Join Waitlist
                </Button>
              </form>
            )}

            <p className="mt-4 text-sm text-mist/60">
              No spam, ever. Unsubscribe anytime.
            </p>
          </motion.div>

          {/* Testimonials Preview */}
          <motion.div
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <svg className="w-8 h-8 text-steel-blue/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-arctic mb-4 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="text-sm">
                  <p className="text-mist font-medium">{testimonial.author}</p>
                  <p className="text-mist/60">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center items-center gap-8"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                500+
              </div>
              <div className="text-sm text-mist uppercase tracking-wider">
                Waitlist Members
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                25+
              </div>
              <div className="text-sm text-mist uppercase tracking-wider">
                Years of Expertise
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-1">
                2025
              </div>
              <div className="text-sm text-mist uppercase tracking-wider">
                Launch Year
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
