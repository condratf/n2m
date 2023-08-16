"use client"
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// local
import { Button } from '@/components/shared'
import { classNames, lato, useIsMobile } from '@/utils'
import { routes } from '@/routes'
import { scrollToContactForm } from '@/global'
// styles
import styles from './styles.module.scss'

const links = [
  { name: 'Services', href: routes.ourservices },
  { name: 'Contacts', href: routes.contacts },
  { name: 'Policies', href: routes.policies.termsOfUse },
]

export const Header: FC = () => {
  const { isMobile } = useIsMobile()
  return (
  <div className={styles.header}>
    <Link href={routes.home}>
      <Image
        src="/assets/logo/logo.svg"
        alt=""
        width={198}
        height={48}
      />
    </Link>

    <div className={styles.navigation}>
      {links.map((item, i) => (
        <button key={item.name}>
          <Link className={classNames(styles.link, lato.className)} href={item.href}>{item.name}</Link>
        </button>
      ))}
    </div>

    <Button onClick={() => scrollToContactForm(isMobile)} className={styles.button} btnType="button" variant={'secondary'}>
      {'Write us'}
    </Button>
  </div>
)}