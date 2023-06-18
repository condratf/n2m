"use client"
import { FC, useContext, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
// local
import { Button } from '../Button'
import { ThankYouModal } from '@/components/modals'
import { LocationMap } from '../LocationMap'
import { FormValues } from './types'
import { globals, setCurrRef } from '@/global'
import { lato, validateEmail } from '@/utils'
// styles
import styles from './styles.module.scss'

export const ContactForm: FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [agree, setAgree] = useState(false)
  const handleCheckboxChange = () => setAgree(!agree)
  
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref !== globals.currRef) {
      setCurrRef(ref, () => setAgree(v => v))
    }
  }, [ref])

  const [{ email, text }, setFormValues] = useState<FormValues>({ email: '', text: '' })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    await fetch('/sendmail.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, text })
    })
    .catch(err => {
      console.log(err)
      throw new Error(err)
    });
  
    setIsOpen(true)
  }

  return (
    <div ref={ref} className={`${styles.contactForm} ${lato.className}`}>
      <div className={styles.contactFormMap}>
        <LocationMap />
      </div>

      <div className={styles.contactFormContact}>
        <h3>{t('Write Us')}</h3>
        <p>
          {t('Take your freelancing to the next level with our app. Manage your work, Grow your network, and Never miss an opportunity.')}
        </p>
        <form>
          <input
            value={email}
            onChange={handleChange}
            className={styles.emailInput}
            placeholder={t('Your email') || ''}
            type="email"
            name='email'
          />
          <textarea
            value={text}
            onChange={handleChange}
            className={styles.textInput}
            placeholder={t('Your text') || ''}
            name="text"
            cols={30} rows={7}
          />

          <div>
            <input className={styles.checkbox} type="checkbox" id="agree" onChange={handleCheckboxChange} />
            <label className={styles.privacyLabel} htmlFor="agree">
              {t('I have read and accept the ')}
              <span>
                {'Privacy Policy'}
              </span>
            </label>
          </div>

          <Button disabled={!agree || !validateEmail(email)} onClick={() => setIsOpen(true)} btnType='button' type='button'>
            {'Send'}
          </Button>
        </form>
      </div>

      <ThankYouModal isOpen={isOpen} onClose={handleSubmit} />
    </div>
  )
}
