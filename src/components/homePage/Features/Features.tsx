"use client"
import { FC } from 'react'
// local libs
import { ListItem } from './ListItem'
import { lato, syncopate, } from '@/utils'
import { featuresList } from './resources'
// styles
import styles from './styles.module.scss'

export const Features: FC = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <h2 className={syncopate.className}>{'TOOLS & TECHNOLOGIES'}</h2>
        <p className={lato.className}>{'We leverage the latest programming languages, frameworks, and tools to ensure efficient development processes and deliver robust and scalable software applications that meet the evolving demands of our clients.'}</p>
      </div>

      <div className={styles.featuresContainer} >
        {featuresList.map(({ title, list, }, i) => (
          <ListItem
            key={`${title}-${i}`}
            title={title}
            list={list}
            i={i}
          />
        ))}
      </div>

    </div>
  )
}
