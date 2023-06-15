import { FC } from 'react'
import Link from 'next/link'
import { routes } from '@/routes'
// styles
import styles from './styles.module.scss'

export const RightSideNav: FC = () => {
  const policiesList = [
    { title: 'Terms of use', href: routes.policies.termsOfUse },
    { title: 'Privacy policy', href: routes.policies.privacyPolicy },
    { title: 'Disclosure of risks', href: routes.policies.disclosureOfRisks },
    { title: 'Commissions and fees', href: routes.policies.commissionsAndFees },
  ]

  return (
    <div className={styles.container}>
      <h2>{'All policies'}</h2>

      <ul>
        {policiesList.map(({ title, href }) => (
          <Link href={href} key={title}>
            {title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
