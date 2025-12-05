'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'
import { drawLine } from '@/lib/animations'

interface AirflowLinesProps {
  variant?: 'hero' | 'section' | 'background'
  className?: string
}

export function AirflowLines({ variant = 'hero', className }: AirflowLinesProps) {
  if (variant === 'hero') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <svg
          className="absolute w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          {/* Main flowing lines */}
          <motion.path
            d="M-100,200 Q200,100 400,250 T800,200 T1200,280 T1600,150"
            stroke="url(#airflowGradient1)"
            strokeWidth="2"
            fill="none"
            variants={drawLine}
            initial="hidden"
            animate="visible"
            style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          />
          <motion.path
            d="M-50,400 Q150,300 350,420 T750,380 T1150,450 T1550,350"
            stroke="url(#airflowGradient2)"
            strokeWidth="1.5"
            fill="none"
            variants={drawLine}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          />
          <motion.path
            d="M-100,600 Q200,500 400,620 T800,580 T1200,650 T1600,550"
            stroke="url(#airflowGradient1)"
            strokeWidth="1"
            fill="none"
            variants={drawLine}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="airflowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#387CFF" stopOpacity="0" />
              <stop offset="30%" stopColor="#387CFF" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#D36C3E" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#D36C3E" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="airflowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D36C3E" stopOpacity="0" />
              <stop offset="50%" stopColor="#387CFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#387CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  if (variant === 'section') {
    return (
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        <svg
          className="absolute w-full h-full opacity-30"
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <motion.path
            d="M0,100 Q360,50 720,100 T1440,80"
            stroke="url(#sectionGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <motion.path
            d="M0,200 Q360,150 720,200 T1440,180"
            stroke="url(#sectionGradient)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
          />

          <defs>
            <linearGradient id="sectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#387CFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#387CFF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#387CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }

  // Background variant
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none opacity-20', className)}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx={200 + i * 300}
            cy={150 + i * 150}
            r={100 + i * 50}
            stroke="#387CFF"
            strokeWidth="0.5"
            fill="none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1, 0.8],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function BreathingOrb({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        'absolute w-64 h-64 rounded-full',
        'bg-gradient-radial from-steel-blue/20 to-transparent',
        'blur-3xl',
        className
      )}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}
