'use client'
import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
// local
import { NavigationTabs } from '@/components/layout'
import { ContactForm } from '@/components/shared'
import { Main, BottomBlock, BottomBlockMobile, SectionKeys } from '@/components/ourservices'
import { SERVICES_LIST } from '../constants'
import { useIsMobile } from '@/utils'
// styles
import styles from './styles.module.scss'

const OurServices: FC = () => {
  const searchParams = useSearchParams()
  const { isMobile } = useIsMobile()
  const section = searchParams.get('section') as SectionKeys

  const [activeTab, setActiveTab] = useState(0)

  const handleSetIndex = (v: string) => {
    const ix = SERVICES_LIST.findIndex(f => f.param === v)

    if (ix === -1) return
    
    setActiveTab(ix)
  }

  useEffect(() => {
    if (section && !isMobile) handleSetIndex(section)
  }, [section, isMobile])

  return (
    <div className={styles.container}>

      <Main />

      <BottomBlock />

      {/* mobile */}
      <NavigationTabs
        activeTab={activeTab}
        onItemClick={handleSetIndex}
      />

      {/* mobile */}
      <BottomBlockMobile
        setActiveTab={isMobile ? setActiveTab : () => {}}
      />

      <ContactForm />
    </div>
  )
}

export default OurServices
