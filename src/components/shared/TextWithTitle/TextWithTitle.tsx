import { FC } from 'react'
// local
import { lato, syncopate } from '@/utils';
// style
import styles from './styles.module.scss'

type TextWithTitleProps = {
  title: string;
  text: string;
  titlePosition?: 'centerTitle' | 'startTitle' | 'endTitle';
}

export const TextWithTitle: FC<TextWithTitleProps> = ({
  title,
  text,
  titlePosition = 'centerTitle'
}) => {
  return (
    <div className={styles.container}>
      <h1 className={`${styles[titlePosition]} ${syncopate.className}`}>
        {title}
      </h1>
      <p className={lato.className}>{text}</p>
    </div>
  )
}
