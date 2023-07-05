"use client"
import { FC, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
// local
import BurgerMenu from './BurgerMenu/BurgerMenu'
import { routes } from '@/routes'
import { globals } from '@/global'
import { CloseIcon } from '@/icons'
import { classNames, lato } from '@/utils'
// styles
import styles from './styles.module.scss'

const mainLinksBlock = [
  { name: 'Main', href: routes.home },
  { name: 'Services', href: routes.ourservices },
  { name: 'Policies', href: routes.policies.termsOfUse },
  { name: 'Contacts', href: routes.contacts },
]
const secondaryLinksBlock = [
  { name: 'Terms of use', href: routes.policies.termsOfUse },
  { name: 'Privacy policy', href: routes.policies.privacyPolicy },
  { name: 'Disclosure of risks', href: routes.policies.disclosureOfRisks },
  { name: 'Commissions and fees', href: routes.policies.commissionsAndFees },
]

export const BottomMobileNav: FC = () => {
  const { t } = useTranslation()
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  return (
    <>
      <div className={styles.mobileNavMenu}>
        <span onClick={() => {
          if (globals.currRef) {
            globals.currRef.current?.scrollIntoView({
              behavior: "smooth", block: 'nearest', inline: 'center' 
            })
          }
        }}>{t('Write us')}</span>
        <BurgerMenu
          className={isActiveMenu ? styles.burger : ''}
          isActive={isActiveMenu}
          onClick={() => setIsActiveMenu(v => !v)}
        />
      </div>
      {/* {isActiveMenu && */}
      <div className={isActiveMenu && styles.backdrop || ''} />
      <div className={
        classNames(
          styles.mobileNavLinks,
          lato.className,
          { [styles.mobileNavLinksOpen]: isActiveMenu }
        )}
      >
        <div className={styles.slideNavHeading}>
          <span onClick={() => {
            if (globals.currRef) {
              globals.currRef.current?.scrollIntoView({
                behavior: "smooth", block: 'nearest', inline: 'center' 
              })
            }
            setIsActiveMenu(false)
          }}>{t('Write Us')}</span>
          <button onClick={() => setIsActiveMenu(false)}>
            <CloseIcon />
          </button>
        </div>
        <span>{t('About company')}</span>
        {mainLinksBlock.map(({ href, name }, i) => (
          <Link onClick={() => setIsActiveMenu(false)} key={`${name}-${i}`} className={styles.menuLink} href={href}>
            {t(name)}
          </Link>
        ))}

        <span>{t('Policies')}</span>
        {secondaryLinksBlock.map(({ href, name }, i) => (
          <Link onClick={() => setIsActiveMenu(false)} key={`${name}-${i}`} className={styles.menuLink} href={href}>
            {t(name)}
          </Link>
        ))}
      </div>
    </>
  )
}
