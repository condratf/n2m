'use client'
import { FC } from 'react'
// local
import {
  classNames as cn,
} from '@/utils'
// styles
import styles from './styles.module.scss'

export type TabProps = {
  isActive: boolean,
  onClick: <T extends string = string>(item: T) => unknown,
  title: string,
  param: string,
}

export const Tab: FC<TabProps> = ({
  isActive,
  onClick,
  title,
  param,
}) => {
  return (
    <li
      className={cn(styles.tab, {
        [styles.isActive]: isActive
      })}
      onClick={() => onClick(param)}
    >
      {title}
    </li>
  )
}
