"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '@/components/shared'
import BurgerMenu from './BurgerMenu/BurgerMenu'
// styles
import styles from './styles.module.scss'

export const Header = () => {
  const { t } = useTranslation()
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const mainLinksBlock = [
    { name: 'Services', href: '#' },
    { name: 'Contacts', href: '#' },
    { name: 'Policies', href: '#' },
  ]
  const secondaryLinksBlock = [
    { name: 'Terms of use', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'Disclosure of risks', href: '#' },
    { name: 'Commissions and fees', href: '#' },
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
        {mainLinksBlock.map((item, i) => (
          <Button className={styles.link} key={`${item}-${i}`} btnType='tab'  >
            <Link href={item.href}>{t(item.name)}</Link>
          </Button>
        ))}
      </div>

      <Button className={styles.button} btnType="button" variant={'secondary'}>
        {t('Write us')}
      </Button>

      {/* mobile-nav block */}
      <div className={styles.mobileNav}>
        <div className={styles.mobileNavMenu}>
          <span>{t('Write us')}</span>
          <BurgerMenu isActive={isActiveMenu} onClick={() => setIsActiveMenu(v => !v)} />
        </div>
        {isActiveMenu && (
          <div className={styles.mobileNavLinks}>
            <span>{t('About company')}</span>
            {mainLinksBlock.map(({ href, name }, i) => (
              <Button key={`${name}-${i}`} btnType='tab'  >
                <Link className={styles.link} href={href}>{t(name)}</Link>
              </Button>
            ))}

            <span>{t('Policies')}</span>
            {secondaryLinksBlock.map(({ href, name }, i) => (
              <Button key={`${name}-${i}`} btnType='tab'  >
                <Link className={styles.link} href={href}>{t(name)}</Link>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}