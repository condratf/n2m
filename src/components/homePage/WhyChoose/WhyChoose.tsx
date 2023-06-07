import { FC } from 'react'
import { Lato, Syncopate } from 'next/font/google'
// styles
import styles from './styles.module.scss'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900',],
  display: 'swap',
})

const syncopate = Syncopate({
  subsets: ['latin',],
  weight: ['400', '700',],
  display: 'swap',
})


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
