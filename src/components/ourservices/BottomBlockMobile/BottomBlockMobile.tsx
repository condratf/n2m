'use client'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
// local
import { TextWithTitle } from '@/components/shared'
import { throttle, usePrevious } from '@/utils'
import { Solutions } from './Solutions'
import { cactusesBlockItems, lastBlockItems } from '../resources'
// styles
import styles from './styles.module.scss'

export const BottomBlockMobile: FC<{
  activeItemIndex: number,
  setActiveTab: (i: number) => void,
}> = ({ activeItemIndex, setActiveTab }) => {
  const prevActiveItemIndex = usePrevious(activeItemIndex)

  const softRef = useRef<HTMLDivElement>(null)
  const testRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<HTMLDivElement>(null)
  const uxRef = useRef<HTMLDivElement>(null)
  const itRef = useRef<HTMLDivElement>(null)
  const rdRef = useRef<HTMLDivElement>(null)
  const dataRef = useRef<HTMLDivElement>(null)
  const infraRef = useRef<HTMLDivElement>(null)
  const cyberRef = useRef<HTMLDivElement>(null)

  const [isScrolling, setIsScrolling] = useState(false)

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

  useEffect(() => {
    if (!isScrolling && (prevActiveItemIndex !== activeItemIndex)) {
      setIsScrolling(true)
      refList[activeItemIndex]?.current?.scrollIntoView({
        //@ts-ignore
        behavior: 'instant',
        block: 'end'
      })
      setTimeout(() => setIsScrolling(false), 500);
    }
  }, [prevActiveItemIndex, activeItemIndex, isScrolling, refList])

  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = throttle(() => {
    setIsScrolling(true)
    const position = window?.pageYOffset || window?.scrollY
    if (position < 610) {
      setActiveTab(0)
      setTimeout(() => setIsScrolling(false), 100)
      return
    }
    const ix = refList.findIndex(el => el.current && (position >= el.current?.offsetTop - 70) && (position <= el.current?.offsetTop + 90))
    if (ix !== -1 && activeItemIndex !== ix) {
      setActiveTab(ix)
    }
    setTimeout(() => setIsScrolling(false), 100)
  }, 150)

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll)
    return () => {
      window?.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div ref={containerRef} className={styles.container}>

      <div ref={softRef} className={styles.consulting}>
        <Image
          src={'/assets/graphic/cactus/cactus_1.png'}
          alt='card2'
          width={240}
          height={240}
        />
        <TextWithTitle
          title={'Software Development'}
          text={'Our company provides comprehensive software development services, catering to diverse needs and requirements. From concept to deployment, our team of skilled professionals ensures the delivery of high-quality, custom software solutions that align with our clients\' goals and drive business success. With expertise in various technologies and a client-centric approach, we are committed to delivering innovative and reliable software products to meet the ever-evolving demands of the market.'}
          titlePosition='startTitle'
        />
      </div>

      <Solutions />

      <div ref={testRef} className={styles.rD}>
        <TextWithTitle
          title={'Testing & QA'}
          text={'We possesses extensive expertise in software testing, ensuring the delivery of top-notch quality software solutions. With a team of highly skilled QA specialists, we rigorously test our applications to guarantee their reliability, functionality, and security, providing our clients with robust and bug-free software products. We follow industry best practices and employ advanced testing methodologies to deliver superior software that meets the highest quality standards.'}
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
        {cactusesBlockItems.map(({ title, text, img }, i) => (
          <section key={title} ref={i === 0 ? appRef : uxRef}>
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

      <div ref={itRef} className={styles.consulting}>
        <TextWithTitle
          title={'IT Consulting'}
          text={'We provide comprehensive IT consulting services, providing expert guidance and strategic insights to help businesses leverage technology for their growth and success. With our deep industry knowledge and technical expertise, we assist clients in identifying optimal IT solutions, optimizing processes, and implementing effective strategies to drive efficiency and maximize ROI. Our dedicated team of IT consultants works closely with clients to understand their unique challenges and objectives, delivering tailored recommendations and innovative solutions to propel their digital transformation journey.'}
          titlePosition='startTitle'
        />
        <Image
          src={'/assets/graphic/cactus/cactus_2.png'}
          alt='card2'
          width={240}
          height={240}
        />
      </div>

      <div ref={rdRef} className={styles.rD}>
        <TextWithTitle
          title={'R&D Services'}
          text={'Our company provides cutting-edge R&D services, driving innovation and staying at the forefront of technological advancements. With a dedicated team of researchers and engineers, we collaborate with clients to develop groundbreaking solutions, pushing the boundaries of what\'s possible in their respective industries. From conceptualization to prototyping and implementation, our R&D services empower businesses to create disruptive products and stay ahead of the competition in today\'s rapidly evolving market.'}
          titlePosition='startTitle'
        />
        <Image
          src={'/assets/graphic/card_2.png'}
          alt='card2'
          width={360}
          height={240}
        />
      </div>

      <div ref={dataRef} className={styles.data}>
        <TextWithTitle
          title={'Data Analytics'}
          text={'We offer data analytics services, helping businesses unlock valuable insights from their data to make informed decisions and drive growth. With a team of experienced data scientists and analysts, we leverage advanced analytics techniques and cutting-edge tools to analyze and interpret data, providing actionable recommendations and strategies to optimize business performance and gain a competitive edge in the market. Our data analytics services enable organizations to harness the power of data-driven decision-making, fuel innovation, and achieve measurable results.'}
        />
      </div>

      <div className={styles.last}>
        {lastBlockItems['mobile'].map(({ title, text }, i) => (
          <div key={title} ref={i === 0 ? infraRef : cyberRef}>
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
