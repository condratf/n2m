"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '@/components/shared'
// styles
import styles from './styles.module.scss'
import { useIsMobile } from '@/utils'

export const Header = () => {
  const { t } = useTranslation()

  const { isMobile } = useIsMobile()

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

      {!isMobile && (
        <>
          <div className={styles.navigation}>
            {links.map((item, i) => (
              <button className={styles.link} key={`${item}-${i}`}>
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