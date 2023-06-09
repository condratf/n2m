"use client"
import { FC, useState } from 'react'
// local
import { TextKeys, btnList, solutionTexts } from './assets'
import { classNames } from '@/utils'
// styles
import styles from './styles.module.scss'
import { lato, syncopate } from '@/utils/fonts'


export const Solutions: FC = () => {
  const [currentTab, setCurrentTab] = useState<TextKeys>(btnList[0])

  return (
    <div className={styles.container}>
      <div className={styles.solutionsBlock}>
        <h1 className={syncopate.className}>{'Development solutions'}</h1>
        <p className={lato.className}>{'Our company offers tailored solutions for diverse domains, including blockchain technology, web applications, and cloud-based applications. Whether you need secure and decentralized transactions with blockchain integration, interactive and user-friendly web applications, or scalable and flexible cloud-based solutions, our team is ready to deliver innovative and customized software solutions to meet your specific needs.'}</p>
      </div>

      <div className={styles.choiceBlock}>
        <h5 className={styles.choiceBlockTitle}>{solutionTexts[currentTab].title}</h5>
        <p className={styles.choiceBlockText}>{solutionTexts[currentTab].text}</p>
        <div className={styles.choiceBlockList}>
          {btnList.map(title => (
            <button
              onClick={() => setCurrentTab(title)}
              className={classNames(
                styles.choiceBlockListItem,
                { [styles.choiceBlockListItem]: currentTab === title }
              )}
              key={title}
            >
              {title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
