'use client'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
// local
import { BottomBlock } from './BottomBlock'
import { globals } from '@/global'
import { classNames as cn } from '@/utils'
import { lato, syncopate } from '@/utils/fonts'
// styles
import styles from './styles.module.scss'

export const Main: FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1)

    return () => clearTimeout(timer)
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.background} />
      <div className={styles.weFindBlock}>
        <h1 className={syncopate.className}>{'We find the solutions'}</h1>
        <div className={`${styles.mobileBefore} ${syncopate.className}`}>
          {'軟件開發軟件'}
        </div>
        <p className={lato.className}>{'We provide innovative software development solutions to enhance your business.'}</p>
        <button
          onClick={() => {
            if (globals.currRef) {
              globals.currRef.current?.scrollIntoView({
                behavior: "smooth", block: "end"
              })
            }
          }}
          className={lato.className}>{'Get Started'}</button>
      </div>
      <Image
        className={cn(styles.image, { [styles.visible]: isVisible })}
        src='/assets/graphic/main_screen_cuphead.png'
        alt='cuphead'
        height={640}
        width={640}
      />

      <BottomBlock />

    </div>
  )
}
