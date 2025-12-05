'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { fadeInUp } from '@/lib/animations'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index?: number
  variant?: 'default' | 'glass' | 'bordered'
  className?: string
}

export function FeatureCard({
  icon,
  title,
  description,
  index = 0,
  variant = 'default',
  className,
}: FeatureCardProps) {
  const variants = {
    default: 'bg-graphite-light',
    glass: 'glass-effect',
    bordered: 'border border-mist/20 bg-transparent',
  }

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        'group relative p-6 md:p-8 rounded-2xl',
        'transition-all duration-300',
        variants[variant],
        className
      )}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-steel-blue/10 to-copper/10" />

      {/* Icon */}
      <div className="relative mb-4 md:mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl bg-steel-blue/10 text-steel-blue group-hover:bg-steel-blue group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-lg md:text-xl font-display font-semibold text-arctic mb-2 md:mb-3 group-hover:text-steel-blue-light transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm md:text-base text-mist leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-steel-blue to-copper scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
    </motion.div>
  )
}

interface StatCardProps {
  value: string
  label: string
  index?: number
  className?: string
}

export function StatCard({ value, label, index = 0, className }: StatCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1 }}
      className={cn('text-center p-6', className)}
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-mist uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  )
}
