import { FC } from 'react'
import Image from 'next/image'
import { Lato, Syncopate } from 'next/font/google'
// styles
import styles from './styles.module.scss'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900',],
  display: 'swap',
})

const syncopate = Syncopate({
  subsets: ['latin',],
  weight: ['400', '700',],
  display: 'swap',
})

export const Main: FC = () => {
  const sectionImgList = ['/assets/graphic/cactus/minicactus_1.png', '/assets/graphic/cactus/minicactus_2.png', '/assets/graphic/cactus/minicactus_3.png']

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.container}>
        <div className={styles.weFindBlock}>
          <h1 className={syncopate.className}>{'We find the solutions'}</h1>
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
        <div className={styles.bottomBlock}>
          <div className={styles.bottomBlockLeft}>
            <div>
              <section>
                {sectionImgList.map(item => (
                  <Image
                    key={item}
                    src={item}
                    alt='cactus'
                    height={48}
                    width={48}
                  />
                ))}
              </section>
              <span>
                {'more 10'}
              </span>
            </div>
            <p>
              {'We provide services in more than 10 areas'}
            </p>
          </div>

          <div className={styles.bottomBlockRight}>
            <div>
              <Image
                src='/assets/graphic/custom_icons/3.svg'
                height={70}
                width={70}
                alt="custom_icon"
              />
            </div>

            <p>
              {'web & desktop custom software development'}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
