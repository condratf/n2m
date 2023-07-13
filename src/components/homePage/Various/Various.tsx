import { FC } from 'react'
import Image from 'next/image'
import { lato, syncopate } from '@/utils'
// styles
import styles from './styles.module.scss'

export const Various: FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src='/assets/graphic/cactus/cactus_3.png'
        width={360}
        height={360}
        alt='cactus'
      />

      <div>
        <h1 className={syncopate.className}>{'Various software development services'}</h1>
        <p className={lato.className}>{'Our company provides custom software development services tailored to diverse fields and industries. We specialize in crafting bespoke software solutions to meet the unique requirements of our clients across various sectors. With our comprehensive knowledge and experience, we are equipped to tackle software development projects across a wide range of domains and industries.'}</p>
      </div>

    </div>
  )
}
