"use client"
import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '@/components/shared'
import { lato, syncopate } from '@/utils/fonts'
import { aboutLinks, contacts, licensesLinks, policiesLinks } from './resources'
// styles
import styles from './styles.module.scss'

export const Footer = () => {
  const { t } = useTranslation()

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
