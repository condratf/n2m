"useClient"
import { FC } from 'react'
import { usePathname } from 'next/navigation'
// local
import Link from 'next/link'
import { routes } from '@/routes'
// styles
import styles from './styles.module.scss'

const policiesList = [
  { title: 'Terms of use', href: routes.policies.termsOfUse },
  { title: 'Privacy policy', href: routes.policies.privacyPolicy },
  { title: 'Disclosure of risks', href: routes.policies.disclosureOfRisks },
  { title: 'Commissions and fees', href: routes.policies.commissionsAndFees },
]
export const RightSideNav: FC = () => {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
      <h2>{'All policies'}</h2>

      <ul>
        {policiesList.map(({ title, href }) => (
          <Link className={pathname.includes(href) ? styles.isActiveLink : ''} href={href} key={title}>
            {title}
          </Link>
        ))}
      </ul>
    </div>
  )
}
