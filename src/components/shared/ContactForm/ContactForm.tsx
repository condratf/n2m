"use client"
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '../Button'
import { ThankYouModal } from '@/components/modals'
import { LocationMap } from '../LocationMap'
import { lato } from '@/utils/fonts'
// styles
import styles from './styles.module.scss'

export const ContactForm: FC = () => {
  const [agree, setAgree] = useState(false)
  const { t } = useTranslation()
  const handleCheckboxChange = () => setAgree(!agree)

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.contactForm} ${lato.className}`}>
      <div className={styles.contactFormMap}>
        <LocationMap />
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
            <input className={styles.checkbox} type="checkbox" id="agree" onChange={handleCheckboxChange} />
            <label className={styles.privacyLabel} htmlFor="agree">
              {t('I have read and accept the ')}
              <span>
                {'Privacy Policy'}
              </span>
            </label>
          </div>
  
          <Button onClick={() => setIsOpen(true)} btnType='button' type='button'>
            {'Send'}
          </Button>
        </form>
      </div>

      <ThankYouModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
