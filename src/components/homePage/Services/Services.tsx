import { FC } from 'react'
import Link from 'next/link'
// local
import { routes } from '@/routes'
import { lato, syncopate } from '@/utils'
// styles
import styles from './styles.module.scss'

const list = [
  {title: 'Software Development', param: 'software'},
  {title: 'Testing & QA', param: 'testing'},
  {title: 'Application Services', param: 'application'},
  {title: 'UX/UI Design', param: 'ux'},
  {title: 'IT Consulting', param: 'it'},
  {title: 'R&D Services', param: 'rd'},
  {title: 'Data Analytics', param: 'data'},
  {title: 'Infrastructure Services', param: 'infra'},
  {title: 'Cybersecurity Services', param: 'cyber'},
]

export const Services: FC = () => {
  return (
    <div className={styles.container}>
      <h5 className={syncopate.className}>{'Our services'}</h5>
      <ul>
        {list.map(({title, param}) => (
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
