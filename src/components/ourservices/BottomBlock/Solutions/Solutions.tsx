"use client"
import { FC, useState } from 'react'
// local
import { TextWithTitle } from '@/components/shared'
// styles
import styles from './styles.module.scss'
import { classNames, lato } from '@/utils'

const solutionsTabList = {
  'High Load System': { title: 'High Load System', text: 'Our specialists provide high load system services, ensuring optimal performance and scalability for systems handling heavy user traffic and large volumes of data' },
  'Mobile App': { title: 'Mobile App', text: 'Our company offers comprehensive mobile app services, delivering innovative and user-friendly mobile applications for iOS and Android platforms.' },
  'Web App': { title: 'Web App', text: 'We provide web app services, developing interactive and responsive web applications that are tailored to our clients\' requirements. Our team ensures user-friendly interfaces and seamless functionality to deliver engaging web experiences for businesses across various industries.' },
  'Cloud App': { title: 'Cloud App', text: 'Our specialists provide cloud app services, leveraging the power of cloud computing to develop scalable and flexible applications that can be accessed from anywhere. Our team ensures secure data storage, seamless integration, and efficient deployment of cloud-based solutions to enhance business productivity and agility.' },
  'Blockchain': { title: 'Blockchain', text: 'Our expertise in blockchain development enables us to deliver innovative applications that enhance trust, streamline processes, and enable secure transactions for businesses.' },
  'Tech Consulting': { title: 'Tech Consulting', text: 'We offers comprehensive tech consulting services, guiding businesses in leveraging technology to achieve their strategic goals and digital transformation initiatives.' },
  'Cross-Platform Software': { title: 'Cross-Platform Software', text: 'Our expertise in cross-platform development ensures cost-effectiveness, faster time to market, and consistent user experiences across different operating systems, maximizing the reach and impact of our clients\' software solutions.' },
}

export const Solutions: FC = () => {
  const [selectedTab, setSelectedTab] = useState(solutionsTabList['High Load System'])

  const handleTabClick = (title: string) => setSelectedTab(solutionsTabList[title as keyof typeof solutionsTabList])

  return (
    <div className={styles.solutions}>
      <div className={styles.data}>
        <TextWithTitle
          title={'Development solutions'}
          text={'Our company offers tailored solutions for diverse domains, including blockchain technology, web applications, and cloud-based applications. Whether you need secure and decentralized transactions with blockchain integration, interactive and user-friendly web applications, or scalable and flexible cloud-based solutions, our team is ready to deliver innovative and customized software solutions to meet your specific needs.'}
        />
      </div>

      <section>
        <div className={styles.mw552}>
          <TextWithTitle
            title={selectedTab.title}
            text={selectedTab.text}
          />
        </div>

        <ul>
          {Object.keys(solutionsTabList).map((title) => (
            <li
              className={classNames(
                lato.className,
                { [styles.isActive]: selectedTab.title === title }
              )}
              key={title}
              onClick={() => handleTabClick(title)}
            >
              {title}
            </li>
          ))}
        </ul>

      </section>

    </div>
  )
}
