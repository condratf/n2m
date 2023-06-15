import React from 'react'
import { lato, syncopate } from '@/utils'
// styles
import styles from './styles.module.scss'

export const Services = () => {
  const list = [
    'Software Development','Testing & QA','Application Services','UX/UI Design','IT Consulting','R&D Services','Data Analytics','Infrastructure Services', 'Cybersecurity Services' 
  ]
  return (
    <div className={styles.container}>
      <h5 className={syncopate.className}>{'Our services'}</h5>
      <ul>
        {list.map(item => (
          <li className={lato.className} key={item}>{item}</li>
        ))}
      </ul>
    </div>  
  )
}
