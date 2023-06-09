"use client"
import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '@/components/shared'

// styles
import styles from './styles.module.scss'
import { lato, syncopate } from '@/utils/fonts'

export const Footer = () => {
  const { t } = useTranslation()

  const contacts = [
    { title: 'Company number', number: '1205540' },
    { title: 'Phone number:', number: '+85256474293' }
  ]

  const aboutLinks = [
    { name: 'Services', href: '#' },
    { name: 'Contacts', href: '#' },
    { name: 'Policies', href: '#' },
  ]
  const policiesLinks = [
    { name: 'Terms of use', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'Disclosure of risks', href: '#' },
    { name: 'Commissions and fees', href: '#' },
  ]
  const licensesLinks = [
    { name: 'UNI: Unit 04, 7/f, Bright way, Tower, no 33 Mong kok road, Kowloon, Hong Kong', href: '#' },
    { name: '29 June 2016 MS Ada L L CHUNG Registrar of Companies Hong Kong Special Administrative Region', href: '#' },
    { name: '2016 - 2023 © DANIER LTD.DANIER LIMITED', href: '#' },
  ]

  return (
    <div className={`${styles.footer} ${lato.className}`}>
      
      <div className={styles.emailBlock}>
        <span className={syncopate.className}>{t('support@daniertech.com')}</span>
        <Button className={styles.button} btnType="button" variant={'secondary'}>
          {t('Write us')}
        </Button>
      </div>

      
      <div className={styles.contactsBlock}>
        {contacts.map(({ title, number }, i) => (
          <div className={styles.contactsBlockItem} key={`${title}-${i}`}>
            <span>{title}</span>
            <span>{number}</span>
          </div>
        ))}
      </div>

      
      <div className={styles.bottomBlock}>
        <div className={styles.bottomBlockLinks}>
          <span>{t('About company')}</span>
          {aboutLinks.map(({ href, name }, i) => (
            <Link key={`${name}-${i}`} className={styles.link} href={href}>{t(name)}</Link>
          ))}
        </div>

        <div className={styles.bottomBlockLinks}>
          <span>{t('Policies')}</span>
          {policiesLinks.map(({ href, name }, i) => (
            <Link key={`${name}-${i}`} className={styles.link} href={href}>{t(name)}</Link>
          ))}
        </div>

        <div className={styles.bottomBlockLicenses}>
          <span>{t('Licenses')}</span>
          {licensesLinks.map(({ href, name }, i) => (
            <Link key={`${name}-${i}`} className={styles.licensesLink} href={href}>{t(name)}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
