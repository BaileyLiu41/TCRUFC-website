import { motion } from 'motion/react'

// Reusable animated section component
export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up', // 'up', 'down', 'left', 'right', 'fade'
  ...props
}) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    fade: { y: 0, x: 0 }
  }

  const initial = {
    opacity: 0,
    ...directions[direction]
  }

  const whileInView = {
    opacity: 1,
    x: 0,
    y: 0
  }

  const transition = {
    duration: 0.6,
    delay: delay,
    ease: [0.25, 0.4, 0.25, 1]
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Staggered children container
export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2
      }
    }
  }

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

// Individual stagger item
export function StaggerItem({ children, className = '', direction = 'up' }) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    fade: { y: 0, x: 0 }
  }

  const item = {
    hidden: {
      opacity: 0,
      ...directions[direction]
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}

// Scale animation on view
export function ScaleOnView({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
