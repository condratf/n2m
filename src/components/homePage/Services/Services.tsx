import { FC } from 'react'
import Link from 'next/link'
// local
import { routes } from '@/routes'
import { lato, syncopate } from '@/utils'
import { SERVICES_LIST } from '@/app/constants'
// styles
import styles from './styles.module.scss'

export const Services: FC = () => {
  return (
    <div className={styles.container}>
      <h5 className={syncopate.className}>{'Our services'}</h5>
      <ul>
        {SERVICES_LIST.map(({title, param}) => (
          <Link
            className={lato.className}
            key={title}
            href={{
              pathname: routes.ourservices,
              query: {section: param}
            }}
          >
            {title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
