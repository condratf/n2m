import React from 'react'
// local
import { ContactForm } from '@/components'
import { lato, syncopate } from '@/utils/fonts'
// styles
import styles from './styles.module.scss'

export default function Contacts() {
  const list = [
    { field: 'email adress:', value: 'support@daniertech.com', prompt: 'You can write us' },
    { field: 'Phone number:', value: '+85256474293', prompt: 'You can call us' }
  ]
  return (
    <div className={styles.container}>

      <div className={styles.contacts}>
        <h1 className={syncopate.className}>{'Contacts'}</h1>

        <p className={lato.className}>{'We appreciate your interest in reaching out to us. Whether you have a question, feedback, or want to explore potential collaborations, we\'re here to assist you. Our team is committed to providing exceptional customer service and building long-lasting relationships with our valued clients.'}</p>

        {list.map(({ field, value, prompt }) => (
          <div className={styles.fieldContainer} key={field}>
            <div className={`${styles.field} ${lato.className}`}>{field}</div>
            <div className={`${styles.value} ${syncopate.className}`}>{value}</div>
            <div className={`${styles.prompt} ${lato.className}`}>{prompt}</div>
          </div>
        ))}

      </div>

      <ContactForm />
    </div>
  )
}

