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
  activeTab: number,
}

export const NavigationTabs: FC<NavigationTabsProps> = ({
  list,
  onItemClick,
  activeTab,
}) => {
  const containerRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    //@ts-ignore
    containerRef?.current?.scrollTo({ left: activeTab * 80, behavior: 'instant' })
  }, [activeTab])

  const [position, setPosition] = useState(0)

  const handleScroll = throttle(() => {
    const viewportOffset = containerRef?.current?.getBoundingClientRect();
    if (viewportOffset) { setPosition(viewportOffset.top) }
  }, 250)

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll)
    return () => window?.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <ul
      className={cn(styles.mobileSection, lato.className, {
        [styles.containerMobileFixed]: position < 120
      })}
      ref={containerRef}
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
