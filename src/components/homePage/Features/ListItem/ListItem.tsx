import { FC, ForwardedRef, forwardRef } from 'react'
// local
import { lato } from '@/utils'
// styles
import styles from './styles.module.scss'
import { OnAppear } from '@/components/animation'

type ListItemProps = {
  title: string,
  list: string[],
  ref?: ForwardedRef<HTMLDivElement>,
  i?: number,
}

export const ListItem: FC<ListItemProps> = forwardRef<HTMLDivElement, ListItemProps>(({
  title, list, i
}, ref) => {
  return (
    <OnAppear className={styles.container} ref={ref} delay={i ? 0.1 * i : 0.1}>
      <h5 className={`${styles.title} ${lato.className}`}>{title}</h5>

      <div className={styles.listContainer}>
        {list.map((listItem, i) => (
          <div key={`${listItem}-${i}`} className={`${lato.className} ${styles.listItem}`}>
            {listItem}
          </div>
        ))}
      </div>
    </OnAppear>
  )
})

export const ListItemMobile: FC<ListItemProps> = forwardRef<HTMLDivElement, ListItemProps>(({
  title, list, i
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
ListItemMobile.displayName = 'ListItemMobile'