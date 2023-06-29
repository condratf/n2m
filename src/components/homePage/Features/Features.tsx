"use client"
import React from 'react'
import { useTranslation } from 'react-i18next'
// local libs
import { ListItem } from './ListItem'
import { lato, syncopate } from '@/utils'
// styles
import styles from './styles.module.scss'

export const Features = () => {
  const { t } = useTranslation()

  const featuresList = [
    {
      title: t('Languages'),
      list: [
        'Java', 'C#', 'C/C++', 'Go', 'Python', 'Groovy', 'Swift', 'R', 'PHP', 'Rust', 'Scala',
      ],
    },
    {
      title: t('Mobile'),
      list: [
        'iOS', 'Android', 'HTML5', 'React', 'Xamarin', 'JavaScript', 'Objective C', 'Kotlin', 'Swift'
      ],
    },
    {
      title: t('Frameworks'),
      list: [
        'Django', 'Symfony', 'Laravel', 'Express', 'Ruby on Rails', 'ASP.NET', 'Fiber', 'CakePHP', 'Flask', 'Play'
      ],
    },
    {
      title: t('Web'),
      list: [
        'Vue', 'Saas', 'Coffee', 'Angular', 'WebGl'
      ],
    },
    {
      title: t('Database Management'),
      list: [
        'Document databases', 'Key-value stores', 'Column-oriented databases', 'Graph databases',
      ],
    },
  ]

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h2 className={syncopate.className}>{t('TOOLS & TECHNOLOGIES')}</h2>
        <p className={lato.className}>{t('We leverage the latest programming languages, frameworks, and tools to ensure efficient development processes and deliver robust and scalable software applications that meet the evolving demands of our clients.')}</p>
      </div>

      <div className={styles.featuresContainer}>
        {featuresList.map(({ title, list }, i) => (
          <ListItem
            title={title}
            list={list}
            key={`${title}-${i}`}
          />
        ))}
      </div>

      <div className={styles.mobileDot} />
    </div>
  )
}
