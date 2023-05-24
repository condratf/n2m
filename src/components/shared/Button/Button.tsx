import { FC } from 'react'
import { classNames } from '@/utils'
// types
import { ButtonProps } from './types'
// styles
import styles from './styles.module.scss'

export const Button: FC<ButtonProps> = (({
  btnType,
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const classes = classNames(
    className,
    {
      [styles.btn]: btnType === 'button',
      [styles.btnPrimary]: btnType === 'button' && variant === 'primary',
      [styles.btnSecondary]: btnType === 'button' && variant === 'secondary',
      [styles.btnTertiary]: btnType === 'button' && variant === 'tertiary',
      [styles.tab]: btnType === 'tab',
      [styles.tabPrimary]: btnType === 'tab' && variant === 'primary',
      [styles.tabSecondary]: btnType === 'tab' && variant === 'secondary',
      [styles.tabTertiary]: btnType === 'tab' && variant === 'tertiary',
    }
  )

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
})