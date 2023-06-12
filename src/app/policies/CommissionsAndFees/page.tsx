import React from 'react'
// local
import { ContactForm } from '@/components/shared/ContactForm/ContactForm'
// styles
import styles from '../styles.module.scss'

export const CommissionsAndFees = () => {
  return (
    <div className={styles.policiesPage}>
      <ContactForm />
    </div>
  )
}

export default CommissionsAndFees