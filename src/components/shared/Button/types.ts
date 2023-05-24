import { ComponentProps, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  btnType: 'tab' | 'button',
  variant?: 'primary' | 'secondary' | 'tertiary',
} & ComponentProps<'button'>>