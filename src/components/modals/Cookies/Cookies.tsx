'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
// local
import { classNames, lato } from '@/utils'
// styles
import styles from './styles.module.scss'

export const Cookies: FC = () => {
  const [agreed, setAgreed] = useState(false)
  return (
    <div className={classNames(styles.container, { [styles.dNone]: agreed })}>
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

      <button onClick={() => setAgreed(true)} className={lato.className}>
        {'Confirm'}
      </button>
    </div>
  )
}
