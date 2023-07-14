'use client'
import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
// local
import { TextWithTitle } from '@/components/shared'
import { Solutions } from './Solutions'
import { cactusesBlockItems, lastBlockItems } from '../resources'
import { SERVICES } from '@/app/constants'
// styles
import styles from './styles.module.scss'

const isScrolledIntoView = (el: Element) => {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

export const BottomBlockMobile: FC<{
  setActiveTab: (i: number) => void,
}> = ({ setActiveTab }) => {

  const softRef = useRef<HTMLDivElement>(null)
  const testRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<HTMLDivElement>(null)
  const uxRef = useRef<HTMLDivElement>(null)
  const itRef = useRef<HTMLDivElement>(null)
  const rdRef = useRef<HTMLDivElement>(null)
  const dataRef = useRef<HTMLDivElement>(null)
  const infraRef = useRef<HTMLDivElement>(null)
  const cyberRef = useRef<HTMLDivElement>(null)

  const refList = useMemo(() => [
    softRef,
    testRef,
    appRef,
    uxRef,
    itRef,
    rdRef,
    dataRef,
    infraRef,
    cyberRef
  ], [])

  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = useCallback(() => {
    const index = refList.findIndex(refItem => Boolean(refItem.current) && isScrolledIntoView(refItem.current as Element))

    if (index === -1) return

    setActiveTab(index)
  }, [setActiveTab, refList])

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll)

    return () => {
      window?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div ref={containerRef} className={styles.container}>

      <div ref={softRef} className={styles.consulting} data-mobParam={SERVICES.softwareDev.param}>
        <Image
          src={'/assets/graphic/cactus/cactus_1.png'}
          alt='card2'
          width={240}
          height={240}
        />
        <TextWithTitle
          title={SERVICES.softwareDev.title}
          text={SERVICES.softwareDev.text}
          titlePosition='startTitle'
        />
      </div>

      <Solutions />

      <div ref={testRef} className={styles.rD} data-mobParam={SERVICES.testingAndQA.param}>
        <TextWithTitle
          title={SERVICES.testingAndQA.title}
          text={SERVICES.testingAndQA.text}
          titlePosition='startTitle'
        />
        <Image
          src={'/assets/graphic/card_1.png'}
          alt='card2'
          width={360}
          height={240}
        />
      </div>

      <div className={styles.cactuses}>
        {cactusesBlockItems.map(({ title, text, img, param }, i) => (
          <section key={title} ref={i === 0 ? appRef : uxRef}  data-mobParam={param}>
            <Image
              src={img}
              alt='cactus'
              width={328}
              height={200}
            />
            <TextWithTitle
              title={title}
              text={text}
              titlePosition='startTitle'
            />
          </section>
        ))}
      </div>

      <div ref={itRef} className={styles.consulting} data-mobParam={SERVICES.itConsulting.param}>
        <TextWithTitle
          title={SERVICES.itConsulting.title}
          text={SERVICES.itConsulting.text}
          titlePosition='startTitle'
        />
        <Image
          src={'/assets/graphic/cactus/cactus_2.png'}
          alt='card2'
          width={240}
          height={240}
        />
      </div>

      <div ref={rdRef} className={styles.rD} data-mobParam={SERVICES.rdServices.param}>
        <TextWithTitle
          title={SERVICES.rdServices.title}
          text={SERVICES.rdServices.text}
          titlePosition='startTitle'
        />
        <Image
          src={'/assets/graphic/card_2.png'}
          alt='card2'
          width={360}
          height={240}
        />
      </div>

      <div ref={dataRef} className={styles.data} data-mobParam={SERVICES.dataAnalytics.param}>
        <TextWithTitle
          title={SERVICES.dataAnalytics.title}
          text={SERVICES.dataAnalytics.text}
        />
      </div>

      <div className={styles.last}>
        {lastBlockItems['mobile'].map(({ title, text, param }, i) => (
          <div key={title} ref={i === 0 ? infraRef : cyberRef} data-mobParam={param}>
            <TextWithTitle
              title={title}
              text={text}
              titlePosition='startTitle'
            />
          </div>
        ))}
      </div>

    </div>
  )
}
