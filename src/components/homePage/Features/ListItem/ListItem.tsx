import { FC } from 'react'
// local
import { lato } from '@/utils'
// styles
import styles from './styles.module.scss'

type ListItemProps = {
  title: string,
  list: string[]
}
  
export const ListItem: FC<ListItemProps> = ({
  title, list
}) => {
  return (
    <div className={styles.container}>
      <h5 className={`${styles.title} ${lato.className}`}>{title}</h5>

      <div className={styles.listContainer}>
        {list.map((listItem, i) => (
          <div key={`${listItem}-${i}`} className={`${lato.className} ${styles.listItem}`}>
            {listItem}
          </div>
        ))}
      </div>

    </div>
  )
}
