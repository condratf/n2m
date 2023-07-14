import { FC } from 'react'
// local
import { lato, syncopate } from '@/utils';
// style
import styles from './styles.module.scss'

type TextWithTitleProps = {
  title: string;
  text: string;
  titlePosition?: 'centerTitle' | 'startTitle' | 'endTitle';
  titleSize?: 'normal' | 'small';
  textPosition?: 'center' | 'normal'
}

export const TextWithTitle: FC<TextWithTitleProps> = ({
  title,
  text,
  titlePosition = 'centerTitle',
  titleSize = 'normal',
  textPosition = 'normal',
  ...rest
}) => {
  return (
    <div className={styles.container} { ...rest }>
      {titleSize === 'normal' ? (
        <h1 className={`${styles[titlePosition]} ${syncopate.className}`}>
          {title}
        </h1>
      ) : (
        <h3 className={`${styles[titlePosition]} ${lato.className}`}>
          {title}
        </h3>
      )}
      <p className={`${lato.className} ${textPosition === 'center' ? styles.textCenter : ''}`}>{text}</p>
    </div>
  )
}
