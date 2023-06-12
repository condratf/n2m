"use client"
import React, { FC, PropsWithChildren } from 'react'
// local
import { ContactForm } from '@/components'
import { RightSideNav, RightSideNavMobile } from '@/components/policies'
import { syncopate, useIsMobile } from '@/utils'
// styles
import styles from './styles.module.scss'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const { isMobile } = useIsMobile()
  return (
    <div className={styles.outerContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1 className={syncopate.className}>
            {'Policies'}
          </h1>

          {isMobile && <RightSideNavMobile />}

          {children}
        </div>
        {!isMobile && <RightSideNav />}
      </div>
      <ContactForm />
    </div>
  )
}

export default Layout