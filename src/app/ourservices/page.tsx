'use client'
import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
// local
import { NavigationTabs } from '@/components/layout'
import { ContactForm } from '@/components/shared'
import { Main, BottomBlock, SectionKeys } from '@/components/ourservices'
// styles
import styles from './styles.module.scss'

const featureList = [
  { title: 'Software Development', param: 'software' },
  { title: 'Testing & QA', param: 'testing' },
  { title: 'Application Services', param: 'application' },
  { title: 'UX/UI Design', param: 'ux' },
  { title: 'IT Consulting', param: 'it' },
  { title: 'R&D Services', param: 'rd' },
  { title: 'Data Analytics', param: 'data' },
  { title: 'Infrastructure Services', param: 'infra' },
  { title: 'Cybersecurity Services', param: 'cyber' },
]

const OurServices: FC = () => {
  const searchParams = useSearchParams()
  const section = searchParams.get('section') as SectionKeys
  
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [activeTab, setActiveTab] = useState(0)

  const handleSetIndex = (v: string) => {
    const ix = featureList.findIndex(f => f.param === v)
    if (ix !== -1) {
      setActiveItemIndex(ix)
      setActiveTab(ix)
    }
  }

  useEffect(() => {
    if (section) handleSetIndex(section)
  },[section])


  return (
    <div className={styles.container}>

      <Main
        list={featureList}
      />

      {/* mobile */}
      <NavigationTabs
        list={featureList}
        activeTab={activeTab}
        onItemClick={handleSetIndex}
      />

      <BottomBlock
        activeItemIndex={activeItemIndex}
        setActiveTab={setActiveTab}
      />
 
      <ContactForm />
    </div>
  )
}

export default OurServices