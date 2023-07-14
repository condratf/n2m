"use client"
import { useState, useEffect } from 'react'

const checkFirstState = () => {
  let isMobile = false;

  try {
    isMobile = window.innerWidth < 880
  } catch(e) {
    // do nothing
  }

  return isMobile
}

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(checkFirstState())

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkFirstState())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile }
}
