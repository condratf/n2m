"use client"
import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '@/components/shared'
import { aboutLinks, contacts, licensesLinks, policiesLinks } from './resources'
import { scrollToContactForm } from '@/global'
import { copyText, lato, syncopate } from '@/utils'
// styles
import styles from './styles.module.scss'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <div className={`${styles.footer} ${lato.className}`}>

      <div className={styles.emailBlock}>
        <a href='mailto:support@daniertech.com' className={syncopate.className}>{'support@daniertech.com'}</a>

        <Button
          onClick={scrollToContactForm}
          className={styles.button} btnType="button" variant={'secondary'}>
          {t('Write us')}
        </Button>
      </div>

      <div className={styles.contactsBlock}>
        {contacts.map(({ title, number, isPhone }, i) => (
          <div className={styles.contactsBlockItem} key={`${title}-${i}`}>
            <span>{title}</span>
            {isPhone ? <a href={`tel:${number}`}>{number}</a> : <span>{number}</span>}
          </div>
        ))}
      </div>


      <div className={styles.bottomBlock}>
        <div className={styles.bottomBlockLinks}>
          <span>{t('About')}</span>
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
          <span>{t('Registered address:')}</span>
          {licensesLinks.map(({ href, name }, i) => (
            <Link onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              copyText(name)
            }} key={`${name}-${i}`} className={styles.licensesLink} href={href}>{t(name)}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
