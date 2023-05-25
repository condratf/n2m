"use client"
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '@/components/shared'
// styles
import styles from './styles.module.scss'

export const ContactForm = () => {
  const [agree, setAgree] = useState(false)
  const { t } = useTranslation()

  const handleCheckboxChange = () => setAgree(!agree)

  return (
    <div className={styles.contactForm}>
      <div className={styles.contactFormMap}>
        <map></map>
      </div>

      <div className={styles.contactFormContact}>
        <h3>{t('Write Us')}</h3>
        <p>
          {t('Take your freelancing to the next level with our app. Manage your work, Grow your network, and Never miss an opportunity.')}
        </p>
        <form>
          <input className={styles.emailInput} placeholder={t('Your email') || ''} type="email" />
          <textarea className={styles.textInput} placeholder={t('Your text') || ''} name="" id="" cols={30} rows={7} />

          <div>
            <input type="checkbox" id="agree" onChange={handleCheckboxChange} />
            <label className={styles.privacyLabel} htmlFor="agree">{t('I have read and accept the Privacy Policy')}</label>
          </div>

          <Button btnType='button'>
            {t('Send')}
          </Button>
        </form>
      </div>


    </div>
  )
}
