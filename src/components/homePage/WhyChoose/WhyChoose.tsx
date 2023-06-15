import { FC } from 'react'
import { lato, syncopate } from '@/utils'
// styles
import styles from './styles.module.scss'

export const WhyChoose: FC = () => {
  return (
    <div className={styles.whyChooseContainer}>
      <h5 className={syncopate.className}>{'Why choose us'}</h5>

      <p className={lato.className}>
        {'We are a team of software development experts offering '}
        <span>
          {'high quality, innovative solutions, and reliable partnership for the success of your business.'}
        </span>
      </p>
    </div>
  )
}
