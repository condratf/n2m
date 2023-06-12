import React from 'react'
// local
import { ContactForm } from '@/components/shared/ContactForm/ContactForm'
// styles
import styles from './styles.module.scss'

export const DisclosureOfRisks = () => {
  return (
    <div className={styles.policiesPage}>
      <ContactForm />
    </div>
  )
}

export default DisclosureOfRisks