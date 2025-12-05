'use client'

import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/cn'

interface AnimatedTextProps {
  text: string
  className?: string
  variant?: 'word' | 'letter' | 'line'
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
}

const wordContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const letterVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function AnimatedText({
  text,
  className,
  variant = 'word',
  delay = 0,
  tag: Tag = 'span',
}: AnimatedTextProps) {
  if (variant === 'letter') {
    const letters = text.split('')
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className={cn('inline-block', className)}
        style={{ transitionDelay: `${delay}s` }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            variants={letterVariants}
            className="inline-block"
            style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  if (variant === 'word') {
    const words = text.split(' ')
    return (
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={wordContainerVariants}
        className={cn('inline-block', className)}
        style={{ transitionDelay: `${delay}s` }}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            variants={wordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  // Line variant
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={lineVariants}
      className={cn('block', className)}
      style={{ transitionDelay: `${delay}s` }}
    >
      {text}
    </motion.span>
  )
}

interface AnimatedHeadingProps {
  children: React.ReactNode
  className?: string
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'h4'
}

export function AnimatedHeading({
  children,
  className,
  delay = 0,
  tag: Tag = 'h2',
}: AnimatedHeadingProps) {
  const MotionTag = motion[Tag]

  return (
    <MotionTag
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

interface AnimatedParagraphProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedParagraph({
  children,
  className,
  delay = 0,
}: AnimatedParagraphProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.p>
  )
}
