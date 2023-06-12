import { FC } from 'react'
import Link from 'next/link'
// styles
import styles from './styles.module.scss'

export const RightSideNavMobile: FC = () => {
  const policiesList = [
    'Terms of use', 'Privacy policy', 'Disclosure of risks', 'Commissions and fees'
  ]

  return (
    <div className={styles.containerMobile}>
      {policiesList.map((title, i) => (
        <Link className={(i === 0) && styles.isActiveLink || ''} href="" key={title}>{title}</Link>
      ))}
    </div>
  )
}
