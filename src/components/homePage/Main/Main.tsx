import { FC } from 'react'
import Image from 'next/image'
// local
import { BottomBlock } from './BottomBlock'
import { Cookies } from '@/components/modals'
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
          {'软件开发'}
        </div>
        <p className={lato.className}>{'We provide innovative software development solutions to enhance your business.'}</p>
        <button className={lato.className}>{'Get Started'}</button>
      </div>
      <Image
        className={styles.image}
        src='/assets/graphic/main_screen_cuphead.png'
        alt='cuphead'
        height={540}
        width={540}
      />

      <BottomBlock />

      <Cookies />
    </div>
  )
}
