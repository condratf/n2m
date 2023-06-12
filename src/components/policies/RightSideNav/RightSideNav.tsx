import { FC } from 'react'
import Link from 'next/link'
// styles
import styles from './styles.module.scss'

export const RightSideNav: FC = () => {
  const policiesList = [
    'Terms of use', 'Privacy policy', 'Disclosure of risks', 'Commissions and fees'
  ]

  return (
    <div className={styles.container}>
      <h2>{'All policies'}</h2>

      <ul>
        {policiesList.map(policy => (
          <Link href="#" key={policy}>
            {policy}
          </Link>
        ))}
      </ul>
    </div>
  )
}
