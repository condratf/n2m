"use client"
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { FC } from 'react'
// locals
import { lato, syncopate } from '@/utils'
// styles
import styles from './styles.module.scss'
 
export const GetStarted: FC = () => {
  const { t } = useTranslation()
  const title = t('Get Started Today')

  const list = [
    { img: '/assets/graphic/custom_icons/1.svg', title: t('Contact Us'), text: t('Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.') },
    { img: '/assets/graphic/custom_icons/2.svg', title: t('Get a Consultation'), text: t('Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.') },
    { img: '/assets/graphic/custom_icons/3.svg', title: t('Get a Cost Estimate'), text: t('Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.') },
    { img: '/assets/graphic/custom_icons/4.svg', title: t('Project Kickoff'), text: t('Fill out the contact form protected by NDA, book a calendar and schedule a Zoom Meeting with our experts.') },
  ]

  return (
    <div className={styles.outerContainer}>
      <h5 className={`${styles.title} ${syncopate.className}`}>{title}</h5>
      <div className={styles.container}>
        <ol className={styles.listContainer}>
          {list.map(({ img, title, text }, i) => (
            <li className={`${styles.listItem} ${lato.className}`} key={`${i}-${title}`}>
              <Image src={img} alt={title} width={64} height={64} />
              <h5>{i}{'. '}{title}</h5>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
