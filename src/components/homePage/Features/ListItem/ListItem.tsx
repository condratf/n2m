import { FC } from 'react'
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
      <h5 className={styles.title}>{title}</h5>

      <div className={styles.listContainer}>
        {list.map((listItem, i) => (
          <div key={`${listItem}-${i}`} className={styles.listItem}>
            {listItem}
          </div>
        ))}
      </div>

    </div>
  )
}
