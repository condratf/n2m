'use client'
import { FC, RefObject, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
// local
import { ContactForm } from '@/components/shared'
import { BottomBlock } from '@/components/ourservices'
import { routes } from '@/routes'
import { classNames, lato, syncopate, throttle } from '@/utils'
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
  const section = searchParams.get('section')

  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = throttle(() => {
    const position = window?.scrollY
    setScrollPosition(position)
  }, 250)

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll)
    return () => {
      window?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const mobileSectionRef = useRef<HTMLElement>(null)

  const softwareRef = useRef<HTMLAnchorElement>(null)
  const testingRef = useRef<HTMLAnchorElement>(null)
  const applicationRef = useRef<HTMLAnchorElement>(null)
  const uxRef = useRef<HTMLAnchorElement>(null)
  const itRef = useRef<HTMLAnchorElement>(null)
  const rdRef = useRef<HTMLAnchorElement>(null)
  const dataRef = useRef<HTMLAnchorElement>(null)
  const infraRef = useRef<HTMLAnchorElement>(null)
  const cyberRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const refs = {
      'software': softwareRef,
      'testing': testingRef,
      'application': applicationRef,
      'ux': uxRef,
      'it': itRef,
      'rd': rdRef,
      'data': dataRef,
      'infra': infraRef,
      'cyber': cyberRef,
    } as Record<string, RefObject<HTMLAnchorElement>>
    if (mobileSectionRef && section) {
      const elem = refs[section]
      setTimeout(() => {
        elem?.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      }, 700)
      //@ts-ignore
    }
  }, [section])

  const refs = [
    softwareRef,
    testingRef,
    applicationRef,
    uxRef,
    itRef,
    rdRef,
    dataRef,
    infraRef,
    cyberRef,
  ] 

  return (
    <div className={styles.container}>

      <div className={styles.main}>
        <h1 className={syncopate.className}>{'Our services'}</h1>
        {/* mobile */}
        <p className={lato.className}>{'We create solutions that work on the result of your projects.'}</p>
        {/* mobile */}
        <ul>
          {featureList.map(({ title, param }) => (
            <Link
              className={lato.className}
              key={title}
              href={{
                pathname: routes.ourservices,
                query: { section: param }
              }}
            >
              {title}
            </Link>
          ))}
        </ul>
      </div>

      {/* mobile */}
      <section ref={mobileSectionRef} className={`${styles.mobileSection} ${lato.className} ${scrollPosition > 70 ? styles.containerMobileFixed : ''}`}>
        {featureList.map(({ title, param }, ix) => (
          <Link
            className={
              classNames(lato.className, { [styles.isActive]: (section === param) || (!section && ix === 0) })
            }
            key={title}
            href={{
              pathname: routes.ourservices,
              query: { section: param }
            }}
            ref={refs[ix]}
          >
            {title}
          </Link>
        ))}
      </section>
      {/* mobile */}

      <BottomBlock />

      <ContactForm />
    </div>
  )
}

export default OurServices