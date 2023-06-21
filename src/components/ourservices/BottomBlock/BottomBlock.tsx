'use client'
import { useSearchParams } from 'next/navigation'
import { FC, useEffect, useRef } from 'react'
import Image from 'next/image'
// local
import { TextWithTitle } from '@/components/shared'
import { Solutions } from './Solutions'
import { useIsMobile } from '@/utils'
// styles
import styles from './styles.module.scss'

const cactusesBlockItems = [
  { title: 'Application Services', img: '/assets/graphic/cactus/long_cactus_2.png', text: 'Our company offers comprehensive application development services, catering to diverse business needs. From conceptualization to deployment, we specialize in crafting customized applications that are tailored to our clients\' requirements, providing innovative solutions that drive business growth and success. With a focus on user experience, functionality, and scalability, we leverage our expertise to deliver high-quality application services that meet the evolving demands of the market.' },
  { title: 'UX/UI Design', img: '/assets/graphic/cactus/long_cactus_1.png', text: 'Our team offers professional UX/UI design services, ensuring visually stunning and intuitive user interfaces for enhanced user experiences. With a focus on user-centric design principles and meticulous attention to detail, our talented designers create compelling designs that captivate users and differentiate your software from the competition. We strive to deliver aesthetically pleasing and user-friendly designs that seamlessly blend form and function, providing a delightful user experience across various platforms and devices.' }
]
const lastBlockItems = [
  { title: 'Infrastructure Services', text: 'Our company offers comprehensive infrastructure services, providing businesses with robust and scalable IT infrastructure solutions to support their operations. From network design and implementation to cloud migration and management, our team of experts ensures that our clients have a reliable and secure infrastructure that meets their current and future needs. With a focus on efficiency and resilience, we optimize infrastructure performance, minimize downtime, and enable seamless connectivity for businesses to thrive in today\'s digital landscape.' },
  { title: 'Cybersecurity Services', text: 'Our team of cybersecurity specialists provides cybersecurity services, ensuring the protection of our clients\' digital assets and critical information from evolving cyber threats. With expertise in risk assessment, vulnerability management, and incident response, we develop customized strategies and implement robust security measures to safeguard businesses against unauthorized access, data breaches, and other cyber attacks. Our cybersecurity services help businesses establish a strong defense posture, maintain regulatory compliance, and instill confidence in their stakeholders regarding the security of their digital infrastructure.' }
]

export const BottomBlock: FC = () => {
  const { isMobile } = useIsMobile()

  const softRef = useRef<HTMLDivElement>(null)
  const testRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<HTMLDivElement>(null)
  const itRef = useRef<HTMLDivElement>(null)
  const rdRef = useRef<HTMLDivElement>(null)
  const dataRef = useRef<HTMLDivElement>(null)
  const infraRef = useRef<HTMLDivElement>(null)

  const searchParams = useSearchParams()

  const section = searchParams.get('section');

  useEffect(() => {
    const refList = {
      'software': () => softRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      'testing': () => testRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      'application': () => appRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      'ux': () => appRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      'it': () => itRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      'rd': () => rdRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      'data': () => dataRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      'infra': () => infraRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }),
      'cyber': () => infraRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
    }
    refList[section as keyof typeof refList]?.()
  }, [section])

  return (
    <div className={styles.container}>

      <div ref={softRef} className={styles.consulting}>
        <Image
          src={'/assets/graphic/cactus/cactus_1.png'}
          alt='card2'
          width={isMobile ? 240 : 360}
          height={isMobile ? 240 : 360}
        />
        <TextWithTitle
          title={'Software Development'}
          text={'Our company provides comprehensive software development services, catering to diverse needs and requirements. From concept to deployment, our team of skilled professionals ensures the delivery of high-quality, custom software solutions that align with our clients\' goals and drive business success. With expertise in various technologies and a client-centric approach, we are committed to delivering innovative and reliable software products to meet the ever-evolving demands of the market.'}
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
          width={isMobile ? 360 : 600}
          height={isMobile ? 240 : 400}
        />
      </div>


      <div ref={appRef} className={styles.cactuses}>
        {cactusesBlockItems.map(({ title, text, img }) => (
          <section key={title}>
            <Image
              src={img}
              alt='cactus'
              width={isMobile ? 328 : 552}
              height={isMobile ? 200 : 200}
            />
            <TextWithTitle
              title={title}
              text={text}
            />
          </section>
        ))}
      </div>

      <div ref={itRef} className={styles.consulting}>
        <TextWithTitle
          title={'IT Consulting'}
          text={'We provide comprehensive IT consulting services, providing expert guidance and strategic insights to help businesses leverage technology for their growth and success. With our deep industry knowledge and technical expertise, we assist clients in identifying optimal IT solutions, optimizing processes, and implementing effective strategies to drive efficiency and maximize ROI. Our dedicated team of IT consultants works closely with clients to understand their unique challenges and objectives, delivering tailored recommendations and innovative solutions to propel their digital transformation journey.'}
        />
        <Image
          src={'/assets/graphic/cactus/cactus_2.png'}
          alt='card2'
          width={isMobile ? 240 : 360}
          height={isMobile ? 240 : 360}
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
          width={isMobile ? 360 : 600}
          height={isMobile ? 240 : 400}
        />
      </div>

      <div ref={dataRef} className={styles.data}>
        <TextWithTitle
          title={'Data Analytics'}
          text={'We offer data analytics services, helping businesses unlock valuable insights from their data to make informed decisions and drive growth. With a team of experienced data scientists and analysts, we leverage advanced analytics techniques and cutting-edge tools to analyze and interpret data, providing actionable recommendations and strategies to optimize business performance and gain a competitive edge in the market. Our data analytics services enable organizations to harness the power of data-driven decision-making, fuel innovation, and achieve measurable results.'}
        />
      </div>

      <div ref={infraRef} className={styles.last}>
        {lastBlockItems.map(({ title, text }) => (
          <TextWithTitle
            key={title}
            title={title}
            text={text}
            titlePosition='startTitle'
          />
        ))}
      </div>

    </div>
  )
}
