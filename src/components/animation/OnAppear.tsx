'use client'
import { FC, ForwardedRef, PropsWithChildren, forwardRef } from "react"
import { motion } from "framer-motion"

type OnAppearProps = {
  delay?: number,
  className?: string
  ref?: ForwardedRef<HTMLDivElement>,
}

export const OnAppear = forwardRef<HTMLDivElement, PropsWithChildren<OnAppearProps>>(
  ({ children, delay, className }, ref) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1, }}
        transition={{ duration: 0.5, delay: delay || 0.1 }}
        viewport={{ once: true }}
        className={className || ''}
        ref={ref}
      >
        {children}
      </motion.div>
    )
  })

OnAppear.displayName = 'OnAppear'