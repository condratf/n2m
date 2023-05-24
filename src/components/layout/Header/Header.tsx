"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '@/components/shared'
import { MobileNav } from './MobileNav'
// styles
import styles from './styles.module.scss'

export const Header = () => {
  const { t } = useTranslation()

  const links = [
    { name: 'Services', href: '#' },
    { name: 'Policies', href: '#' },
    { name: 'Contacts', href: '#' },
  ]

  return (
    <div className={styles.header}>
      <Image
        src="/assets/logo/logo.svg"
        alt=""
        width={198}
        height={48}
      />

      <div className={styles.navigation}>
        {links.map((item, i) => (
          <Button className={styles.link} key={`${item}-${i}`} btnType='tab'  >
            <Link href={item.href}>{t(item.name)}</Link>
          </Button>
        ))}
      </div>

      <Button className={styles.button} btnType="button" variant={'secondary'}>
        {t('Write us')}
      </Button>

      <MobileNav />
    </div>
  )
}