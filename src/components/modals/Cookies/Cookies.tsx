'use client'
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
// local
import { classNames, lato, useLocalStorage } from '@/utils'
// styles
import styles from './styles.module.scss'

export const Cookies: FC = () => {
  const [agreed, setAgreed] = useLocalStorage('agreedCookies', false)

  const [classes, setClasses] = useState('')
  useEffect(() => {
    setClasses(classNames({ [styles.dNone]: agreed, [styles.o1]: !agreed }))
  }, [agreed])

  return (
    <div className={`${styles.container} ${classes}`}>
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
