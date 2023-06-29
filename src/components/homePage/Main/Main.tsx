'use client'
import { FC } from 'react'
import Image from 'next/image'
// local
import { BottomBlock } from './BottomBlock'
import { Cookies } from '@/components/modals'
import { globals } from '@/global'
import { lato, syncopate } from '@/utils/fonts'
// styles
import styles from './styles.module.scss'

export const Main: FC = () => {
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
        className={styles.image}
        src='/assets/graphic/main_screen_cuphead.png'
        alt='cuphead'
        height={640}
        width={640}
      />

      <BottomBlock />

      <Cookies />
    </div>
  )
}
