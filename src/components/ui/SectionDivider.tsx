'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/cn'

interface SectionDividerProps {
  variant?: 'diagonal' | 'wave' | 'line' | 'gradient'
  direction?: 'up' | 'down'
  color?: 'light' | 'dark'
  className?: string
}

export function SectionDivider({
  variant = 'diagonal',
  direction = 'down',
  color = 'light',
  className,
}: SectionDividerProps) {
  const bgColor = color === 'light' ? 'fill-arctic' : 'fill-graphite'

  if (variant === 'diagonal') {
    return (
      <div className={cn('relative w-full overflow-hidden', className)}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className={cn(
            'w-full h-16 md:h-24 lg:h-32',
            direction === 'up' && 'rotate-180'
          )}
        >
          <path
            d={direction === 'down'
              ? 'M0,0 L1440,100 L1440,100 L0,100 Z'
              : 'M0,100 L1440,0 L1440,100 L0,100 Z'
            }
            className={bgColor}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'wave') {
    return (
      <div className={cn('relative w-full overflow-hidden', className)}>
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className={cn(
            'w-full h-16 md:h-24 lg:h-32',
            direction === 'up' && 'rotate-180'
          )}
        >
          <path
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,60 1440,50 L1440,100 L0,100 Z"
            className={bgColor}
          />
        </svg>
      </div>
    )
  }

  if (variant === 'line') {
    return (
      <div className={cn('relative w-full py-8 md:py-12', className)}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto w-full max-w-xs h-0.5 bg-gradient-to-r from-transparent via-steel-blue to-transparent origin-center"
        />
      </div>
    )
  }

  // Gradient variant
  return (
    <div
      className={cn(
        'relative w-full h-24 md:h-32',
        color === 'light'
          ? 'bg-gradient-to-b from-graphite to-arctic'
          : 'bg-gradient-to-b from-arctic to-graphite',
        className
      )}
    />
  )
}

interface SectionAccentProps {
  position?: 'left' | 'right' | 'center'
  className?: string
}

export function SectionAccent({ position = 'left', className }: SectionAccentProps) {
  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  }

  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        'absolute top-0 w-1 bg-gradient-to-b from-steel-blue to-copper rounded-full',
        positionClasses[position],
        className
      )}
    />
  )
}
