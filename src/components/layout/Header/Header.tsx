"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/shared'
// types
import { ButtonVariant } from '@/components/shared/Button/types'
// styles
import styles from './styles.module.scss'

export const Header = () => {
  const { t } = useTranslation()
  return (
    <div className={styles.header}>
      <Image
        src="/assets/logo/logo.svg"
        alt=""
        width={198}
        height={48}
      />

      <div className={styles.navigation}>
        <Link className={styles.link} href='#'>{t('Services')}</Link>
        <Link className={styles.link} href='#'>{t('Contacts')}</Link>
        <Link className={styles.link} href='#'>{t('Policies')}</Link>
      </div>

      <Button type="button" variant={ButtonVariant.secondary}>
        {t('Write us')}
      </Button>
    </div>
  )
}