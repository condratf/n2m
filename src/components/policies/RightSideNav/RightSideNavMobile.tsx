"use client"
import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
// local
import { routes } from '@/routes'
import { lato, throttle } from '@/utils'
// styles
import styles from './styles.module.scss'

const policiesList = [
  { title: 'Terms of use', href: routes.policies.termsOfUse },
  { title: 'Privacy policy', href: routes.policies.privacyPolicy },
  { title: 'Disclosure of risks', href: routes.policies.disclosureOfRisks },
  { title: 'Commissions and fees', href: routes.policies.commissionsAndFees },
]
export const RightSideNavMobile: FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const pathname = usePathname()

  const handleScroll = throttle(() => {
    const position = window?.scrollY
    setScrollPosition(position)
  }, 250)
  

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll)
    return () => {
      window?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div className={`${styles.containerMobile} ${lato.className} ${scrollPosition > 70 ? styles.containerMobileFixed : ''}`}>
      {policiesList.map(({ title, href }, i) => (
        <Link className={pathname.includes(href) && styles.isActiveLink || ''} href={href} key={title}>{title}</Link>
      ))}
    </div>
  )
}
