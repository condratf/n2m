'use client'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
// local
import { Tab } from './Tab'
import {
  classNames as cn,
  lato,
  throttle
} from '@/utils'
import { SERVICES_LIST } from '@/app/constants'
// styles
import styles from './styles.module.scss'

export type NavigationTabsProps = {
  onItemClick: <T extends string = string>(item: T) => unknown,
  activeTab: number,
}

export const NavigationTabs: FC<NavigationTabsProps> = ({
  onItemClick,
  activeTab,
}) => {
  const containerRef = useRef<HTMLUListElement>(null)

  const onClickHandler = useCallback((param: string) => {
    const node = document.querySelector(`[data-mobParam=${param}]`) as HTMLElement
    // @ts-ignore
    window.scrollTo({
      // window.scrollTo вместо scrollIntoView, чтобы блоки отображались в одной точке
      top: Number(node?.offsetTop) - 180,
      behavior: "auto"
    })
    onItemClick(param)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])

  useEffect(() => {
    // @ts-ignore
    containerRef?.current?.scrollTo({ left: activeTab * 99, behavior: 'instant' })
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
      {SERVICES_LIST.map(({ title, param }, ix) => (
        <Tab
          key={`${title}-${ix}`}
          title={title}
          param={param}
          isActive={activeTab === ix}
          onClick={onClickHandler}
        />
      ))}
    </ul>
  )
}
