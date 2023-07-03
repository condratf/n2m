'use client'
import { FC, useEffect, useRef, useState } from 'react'
// local
import { Tab } from './Tab'
import {
  classNames as cn,
  lato,
  throttle
} from '@/utils'
// styles
import styles from './styles.module.scss'

export type NavigationTabsProps = {
  list: { title: string, param: string }[],
  onItemClick: <T extends string = string>(item: T) => unknown,
  activeTab: number
}

export const NavigationTabs: FC<NavigationTabsProps> = ({
  list,
  onItemClick,
  activeTab
}) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const handleScroll = throttle(() => {
    const position = window?.scrollY
    setScrollPosition(position)
  }, 250)

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll)
    return () => {
      window?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const containerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    containerRef?.current?.scrollTo({ left: activeTab * 80, behavior: 'instant' }) 
    // setTimeout(() => { 
    // }, 1100)
  }, [activeTab])

  useEffect(() => {
    const onScrollEnd = () => setIsScrolling(false)
    const elem = containerRef.current
    elem?.addEventListener('scrollend', onScrollEnd)
    return () => {
      elem?.removeEventListener('scrollend', onScrollEnd)
    }
  }, [])

  return (
    <ul
      className={cn(styles.mobileSection, lato.className, {
        [styles.containerMobileFixed]: scrollPosition > 70
      })}
      ref={containerRef}
      onScroll={() => setIsScrolling(true)}
    >
      {list.map(({ title, param }, ix) => (
        <Tab
          key={`${title}-${ix}`}
          title={title}
          param={param}
          isActive={activeTab === ix}
          onClick={onItemClick}
        />
      ))}
    </ul>
  )
}
