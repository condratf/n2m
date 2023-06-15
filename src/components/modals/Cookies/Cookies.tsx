import { FC } from 'react'
import Image from 'next/image'
// local
import { lato } from '@/utils'
// styles
import styles from './styles.module.scss'
 
export const Cookies: FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src='/assets/graphic/cactus/cactus_3.png'
          width={64}
          height={64}
          alt='cactus'
        />

        <p>
          {'We use '}
          <span>{'cookies'}</span>
          {' to optimize the site'}
        </p>

      </div>

      <button className={lato.className}>
        {'Confirm'}
      </button>
    </div>
  )
}
