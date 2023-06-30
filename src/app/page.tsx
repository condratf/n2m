// local libs
import { ContactForm } from '@/components/shared'
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
// styles
import styles from './styles.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <Main />

      <WhyChoose />

      <Various /> 
 
      <Services />
    
      <Features />

      <FeaturesMobile />

      <Solutions />

      <GetStarted />

      <ContactForm />
    </main>
  )
}
