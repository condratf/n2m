import { FC, ForwardedRef, forwardRef } from 'react'
// local
import { lato } from '@/utils'
// styles
import styles from './styles.module.scss'

type ListItemProps = {
  title: string,
  list: string[],
  ref?: ForwardedRef<HTMLDivElement>
}

export const ListItem: FC<ListItemProps> = forwardRef<HTMLDivElement, ListItemProps>(({
  title, list
}, ref) => {
  return (
    <div className={styles.container} ref={ref}>
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
})

ListItem.displayName = 'ListItem'