"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '@/components/shared'
import { useIsMobile } from '@/utils'
import { routes } from '@/routes'
// styles
import styles from './styles.module.scss'

export const Header = () => {
  const { t } = useTranslation()

  const { isMobile } = useIsMobile()

  const links = [
    { name: 'Services', href: routes.ourservices },
    { name: 'Policies', href: routes.policies.termsOfUse },
    { name: 'Contacts', href: routes.contacts },
  ]

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

      {!isMobile && (
        <>
          <div className={styles.navigation}>
            {links.map((item, i) => (
              <button className={styles.link} key={item.name}>
                <Link href={item.href}>{t(item.name)}</Link>
              </button>
            ))}
          </div>

          <Button className={styles.button} btnType="button" variant={'secondary'}>
            {t('Write us')}
          </Button>
        </>
      )}
    </div>
  )
}