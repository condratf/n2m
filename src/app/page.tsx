'use client'
// local libs
import {
  Features,
  FeaturesMobile,
  GetStarted,
  Services,
  Solutions,
  WhyChoose,
  Main,
  Various
} from '@/components/homePage'
import { OnAppear } from "@/components/animation"
import { ContactForm } from '@/components/shared'
import { useIsMobile } from '@/utils'
// styles
import styles from './styles.module.scss'

export default function Home() {
  const { isMobile } = useIsMobile()
  const firstPartComponents = [
    WhyChoose,
    Various,
  ]

  return (
    <>
      <main className={styles.container}>
        <Main />

        {firstPartComponents.map((C, i) => (
          <OnAppear key={`${i}-${Math.random()}`}>
            <C />
          </OnAppear>
        ))}

        <Services />

        <Features />

        <Solutions />

        <OnAppear >
          <GetStarted />
        </OnAppear>

        {!isMobile && <ContactForm />}

      </main>
      <main className={styles.mobileContainer}>
        <Main />

        {firstPartComponents.map((C, i) => (
          <C key={`${i}-${Math.random()}`} />
        ))}

        <Services />

        <FeaturesMobile />

        <Solutions />

        <GetStarted />

        <ContactForm />

      </main>
    </>

  )
}
