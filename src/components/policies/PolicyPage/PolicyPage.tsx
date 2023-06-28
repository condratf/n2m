import { FC } from 'react'
// local
import { lato } from '@/utils/fonts'
import { PolicyPageProps } from './types'
// styles
import styles from './styles.module.scss'
 
export const PolicyPage: FC<PolicyPageProps> = ({
  title,
  policiesList
}) => {
  return (
    <div className={`${styles.container} ${lato.className}`}>
      <h2 >{title}</h2>

      {policiesList.map(({title, text, ul, ol, Text}) => (
        <div key={title} className={styles.itemContainer}>
          <h3>{title}</h3>
          {text && (<span>{text}</span>)}
          {Text ? <Text /> : null}
          {ul && (<ul>{ul.map((v, ix) => <li key={ix}>{v}</li>)}</ul>)}
          {ol && (<ol>{ol.map((v, ix) => <li key={ix}>{v}</li>)}</ol>)}
        </div>
      ))}
    </div>
  )
}