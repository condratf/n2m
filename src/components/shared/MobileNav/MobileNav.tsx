"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
// local
import BurgerMenu from './BurgerMenu/BurgerMenu'
// styles
import styles from './styles.module.scss'

export const MobileNav = () => {
  const { t } = useTranslation()
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const mainLinksBlock = [
    { name: 'Services', href: '#' },
    { name: 'Policies', href: '#' },
    { name: 'Contacts', href: '#' },
  ]
  const secondaryLinksBlock = [
    { name: 'Terms of use', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'Disclosure of risks', href: '#' },
    { name: 'Commissions and fees', href: '#' },
  ]
  
  return (
    <div className={styles.mobileNav}>
      <div className={styles.mobileNavMenu}>
        <span>{t('Write us')}</span>
        <BurgerMenu
          className={isActiveMenu ? styles.burger : ''}
          isActive={isActiveMenu}
          onClick={() => setIsActiveMenu(v => !v)}
        />
      </div>
      {isActiveMenu && (
        <div className={styles.mobileNavLinks}>
          <span>{t('About company')}</span>
          {mainLinksBlock.map(({ href, name }, i) => (
            <Link key={`${name}-${i}`} className={styles.menuLink} href={href}>
              {t(name)}
            </Link>
          ))}

          <span>{t('Policies')}</span>
          {secondaryLinksBlock.map(({ href, name }, i) => (
            <Link key={`${name}-${i}`} className={styles.menuLink} href={href}>
              {t(name)}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
