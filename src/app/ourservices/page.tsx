import { FC } from 'react'
// local
import { ContactForm } from '@/components'
import { BottomBlock } from '@/components/ourservices'
// styles
import styles from './styles.module.scss'
import { lato, syncopate } from '@/utils'

const OurServices: FC = () => {
  const featureList = [
    'Software Development', 'Testing & QA', 'Application Services', 'UX/UI Design', 'IT Consulting',
    'R&D Services', 'Data Analytics', 'Infrastructure Services', 'Cybersecurity Services'
  ]

  return (
    <div className={styles.container}>

      <div className={styles.main}>
        <h1 className={syncopate.className}>{'Our services'}</h1>
        {/* mobile */}
        <p className={lato.className}>{'We create solutions that work on the result of your projects.'}</p>
        <section>
          {featureList.map(item => (
            <div className={lato.className} key={item}>{item}</div>
          ))}
        </section>
        {/* mobile */}
        <ul>
          {featureList.map(item => (
            <li className={lato.className} key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <BottomBlock />

      <ContactForm />
    </div>
  )
}

export default OurServices