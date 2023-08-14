"use client"
import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
// local
import { Button } from '../Button'
import { ThankYouModal } from '@/components/modals'
import { FormValues, FormValuesErrors } from './types'
import { globals, setCurrRef } from '@/global'
import { routes } from '@/routes'
import { classNames, lato, validateEmail } from '@/utils'
// styles
import styles from './styles.module.scss'

export const ContactForm: FC = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [agree, setAgree] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref !== globals.currRef) {
      setCurrRef(ref, () => setAgree(v => v))
    }
  }, [ref])

  const [{ emailTouched, textTouched }, setTouched] = useState({ emailTouched: false, textTouched: false })
  const [{ email, text }, setFormValues] = useState<FormValues>({ email: '', text: '' })
  const [{ errorEmail, errorText, errorAgree }, setErrors] = useState<FormValuesErrors>({ errorEmail: false, errorText: false, errorAgree: false })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      const isValid = !emailTouched ? true : validateEmail(value)
      setErrors(st => ({ ...st, errorEmail: !isValid }))
    }
    if (name === 'text') {
      const isValid = !textTouched ? true : value.length > 5
      setErrors(st => ({ ...st, errorText: !isValid }))
    }
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setAgree(v => {
      setErrors(st => ({ ...st, errorAgree: !!v }))
      return !v
    })
  }

  const handleSubmit = async () => {
    if (!email || !validateEmail(email)) {
      setErrors(st => ({ ...st, errorEmail: true }))
      return
    }
    if (text.length < 5) {
      setErrors(st => ({ ...st, errorText: true }))
      return
    }
    if (!agree) {
      setErrors(st => ({ ...st, errorAgree: true }))
      return
    }

    if (errorEmail || errorText || !email || !text || !agree) {
      setTouched({ emailTouched: false, textTouched: false })
      return
    }

    await fetch('/sendmail.php',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, text })
      }
    ).catch(err => {
      console.log(err)
      throw new Error(err)
    });

    setIsOpen(true)
  }

  return (
    <div ref={ref} className={`${styles.contactForm} ${lato.className}`}>
      <div className={styles.contactFormMap}>
        <Image
          src='/assets/map.png'
          alt='map'
          height={600}
          width={600}
        />
      </div>

      <div className={styles.contactFormContact}>
        <h3>{t('Write Us')}</h3>
        <p>
          {t(`Don't miss the opportunity, write to us right now! Please fill in the form below. Our team will contact you shortly.`)}
        </p>
        <form>
          <input
            value={email}
            onChange={handleChange}
            className={classNames(styles.emailInput, { [styles.error]: errorEmail })}
            placeholder={t('Your email') || ''}
            type="email"
            name='email'
            onBlur={(e) => {
              setTouched(v => ({ ...v, emailTouched: true }))
              handleChange(e)
            }}
          />

          {errorEmail && <span className={styles.errorText}>{'email should be valid'}</span>}

          <textarea
            value={text}
            onChange={handleChange}
            className={classNames(styles.textInput, { [styles.error]: errorText })}
            placeholder={t('Your text') || ''}
            name="text"
            maxLength={300}
            cols={30} rows={7}
            onBlur={(e) => {
              setTouched(v => ({ ...v, textTouched: true }))
              handleChange(e)
            }}
            style={{}}
          />
          <div className={styles.textCounter}>{'300 - '}{text.length}</div>
          {errorText && <span className={styles.errorText}>{'text should be present'}</span>}

          <div className={styles.privacyBlock}>
            <input
              className={classNames(styles.checkbox, { [styles.error]: errorAgree })}
              type="checkbox"
              id="agree"
              onChange={handleCheckboxChange}
            />
            <label className={classNames(styles.privacyLabel, { [styles.errorLabel]: errorAgree })} htmlFor="agree">
              {t('I have read and accept the ')}
              <Link href={routes.policies.privacyPolicy}>
                {'Privacy Policy'}
              </Link>
            </label>
          </div>

          <Button onClick={handleSubmit} btnType='button' type='button'>
            {'Send'}
          </Button>
        </form>
      </div>

      <ThankYouModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
