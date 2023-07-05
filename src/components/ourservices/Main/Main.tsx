'use client'
import { FC } from 'react'
import Link from 'next/link'
// local
import { routes } from '@/routes'
import { lato, syncopate, } from '@/utils'
// styles
import styles from './styles.module.scss'

type MainProps = {
  list: { title: string, param: string }[]
}

export const Main: FC<MainProps> = ({ list }) => {
  return (
    <div className={styles.main}>
      <h1 className={syncopate.className}>{'Our services'}</h1>
      
      {/* mobile */}
      <p className={lato.className}>{'We create solutions that work on the result of your projects.'}</p>

      <ul>
        {list.map(({ title, param }) => (
          <Link
            className={lato.className}
            key={title}
            href={{
              pathname: routes.ourservices,
              query: { section: param }
            }}
          > 
            {title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
