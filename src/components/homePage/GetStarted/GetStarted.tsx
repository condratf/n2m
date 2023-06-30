import Image from 'next/image'
import { FC } from 'react'
// locals
import { lato, syncopate } from '@/utils'
// styles
import styles from './styles.module.scss'

const list = [
  { img: '/assets/graphic/custom_icons/1.svg', title: 'Contact Us', text: 'Please complete the feedback form and send  it to us' },
  { img: '/assets/graphic/custom_icons/3.svg', title: 'Get our expertise', text: 'We will get in touch with you at the earliest, discuss  all your requirements and expectations and come back with our solutions' },
  { img: '/assets/graphic/custom_icons/2.svg', title: 'Get a cost estimation', text: 'Based on the agreed requirements, we will make an offer tailored with your budget and time costs' },
  { img: '/assets/graphic/custom_icons/4.svg', title: 'Start of the Project ', text: 'As soon as the agreement is signed, we will allocate  a team of the  specialists  and start the work' },
]
  
export const GetStarted: FC = () => {
  const title = 'Get Started Today'

  return (
    <div className={styles.outerContainer}>
      <h5 className={`${styles.title} ${syncopate.className}`}>{title}</h5>
      <div className={styles.container}>
        <ol className={styles.listContainer}>
          {list.map(({ img, title, text }, i) => (
            <li className={`${styles.listItem} ${lato.className}`} key={`${i}-${title}`}>
              <Image src={img} alt={title} width={64} height={64} />
              <h5>{i + 1}{'. '}{title}</h5>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
