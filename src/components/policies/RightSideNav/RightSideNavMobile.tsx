"use client"
import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { routes } from '@/routes'
// styles
import styles from './styles.module.scss'

const policiesList = [
  { title: 'Terms of use', href: routes.policies.termsOfUse },
  { title: 'Privacy policy', href: routes.policies.privacyPolicy },
  { title: 'Disclosure of risks', href: routes.policies.disclosureOfRisks },
  { title: 'Commissions and fees', href: routes.policies.commissionsAndFees },
]
export const RightSideNavMobile: FC = () => {
  const pathname = usePathname()
  return (
    <div className={styles.containerMobile}>
      {policiesList.map(({ title, href }, i) => (
        <Link className={pathname.includes(href) && styles.isActiveLink || ''} href={href} key={title}>{title}</Link>
      ))}
    </div>
  )
}
