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
// styles
import styles from './styles.module.scss'

export default function Home() {
  const firstPartComponents = [
    WhyChoose,
    Various,
    Services,
  ]

  const secondPartComponents = [
    Solutions,
    GetStarted,
  ]

  return (
    <main className={styles.container}>
      <Main />

      {firstPartComponents.map((C, i) => (
        <OnAppear key={`${i}-${Math.random()}`}>
          <C />
        </OnAppear>
      ))}

      <Features />

      <FeaturesMobile />

      {secondPartComponents.map((C, i) => (
        <OnAppear key={`${i}-${Math.random()}`}>
          <C />
        </OnAppear>
      ))}

      <ContactForm />

    </main>
  )
}
