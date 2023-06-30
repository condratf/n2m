"use client"
import { FC, useEffect, useRef, useState } from 'react'
// local libs
import { ListItem } from './ListItem'
import { FeaturesNavMobile } from './FeaturesNavMobile'
import { lato, syncopate, throttle, useIsMobile } from '@/utils'
import { featuresList } from './resources'
// styles
import styles from './styles.module.scss'

export const FeaturesMobile: FC = () => {
  const langRef = useRef<HTMLDivElement>(null)
  const mobileRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLDivElement>(null)
  const webRef = useRef<HTMLDivElement>(null)
  const dataRef = useRef<HTMLDivElement>(null)
  const refs = [langRef, mobileRef, frameRef, webRef, dataRef]

  const containerRef = useRef<HTMLDivElement>(null)

  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = throttle(() => {
    const position = containerRef?.current?.scrollLeft || 0
    setScrollPosition(position)
  }, 250)

  useEffect(() => {
    containerRef?.current?.addEventListener('scroll', handleScroll)
    const x = containerRef?.current
    return () => {
      x?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const [i, setI] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    setIsScrolling(true)
    const refList = [langRef, mobileRef, frameRef, webRef, dataRef]
    const elem = refList[i]
    elem?.current?.scrollIntoView({ behavior: 'instant', block: 'nearest', inline: 'start' })
    setTimeout(() => setIsScrolling(false),500)
  }, [i])

  useEffect(() => {
    if (!isScrolling) {
      if (scrollPosition < 90) setI(0)
      if (scrollPosition > 90 && scrollPosition < 500) setI(1)
      if (scrollPosition > 500 && scrollPosition < 1000) setI(2)
      if (scrollPosition > 1000 && scrollPosition < 1500) setI(3)
      if (scrollPosition > 1500) setI(4)
    }
  }, [scrollPosition, isScrolling])

  return (
    <div className={styles.outerContainerMobile}>
      <div className={styles.container}>
        <h2 className={syncopate.className}>{'TOOLS & TECHNOLOGIES'}</h2>
        <p className={lato.className}>{'We leverage the latest programming languages, frameworks, and tools to ensure efficient development processes and deliver robust and scalable software applications that meet the evolving demands of our clients.'}</p>
      </div>

      <div className={styles.featuresContainer} ref={containerRef}>
        {featuresList.map(({ title, list }, i) => (
          <ListItem
            title={title}
            list={list}
            key={`${title}-${i}`}
            ref={refs[i]}
          />
        ))}
      </div>

      <FeaturesNavMobile featuresList={featuresList} i={i} setI={setI} />

    </div>
  )
}