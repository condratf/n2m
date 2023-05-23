import { FC } from 'react'
import { classNames } from '@/utils'
// types
import { ButtonProps, ButtonType, ButtonVariant } from './types'
// styles
import styles from './styles.module.scss'

export const Button: FC<ButtonProps> = (({
  type,
  variant = ButtonVariant.primary,
  className = '',
  children,
  ...props
}) => {
  const classes = classNames(
    className,
    {
      [styles.btn]: type === 'button',
      [styles.btnPrimary]: type === 'button' && variant === ButtonVariant.primary,
      [styles.btnSecondary]: type === 'button' && variant === ButtonVariant.secondary,
      [styles.btnTertiary]: type === 'button' && variant === ButtonVariant.tertiary,
      [styles.tab]: type === 'tab' as ButtonType,
      [styles.tabPrimary]: type === 'tab' as ButtonType && variant === ButtonVariant.primary,
      [styles.tabSecondary]: type === 'tab' as ButtonType && variant === ButtonVariant.secondary,
      [styles.tabTertiary]: type === 'tab' as ButtonType && variant === ButtonVariant.tertiary,
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