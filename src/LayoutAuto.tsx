import React from 'react'
import { LayoutFlex, Props as LayoutFlexProps } from './LayoutFlex'
import styles from './LayoutAuto.module.css'

type Props = {
  gap?: number,
  style?: object,
  wrapperProps?: {
    [key: string]: any
  },
  [key: string]: any
} & LayoutFlexProps

type Ref = HTMLElement

export const LayoutAuto = React.forwardRef<Ref, Props>(function LayoutAuto ({
  gap = 1,
  children,
  style,
  wrapperProps = {},
  ...props
}, ref) {
  return (
    <div
      {...wrapperProps}
      className={`${styles.layoutAuto} ${wrapperProps.className || ''}`}
    >
      <LayoutFlex
        {...props}
        ref={ref}
        style={{
          '--la-gap': gap,
          ...style
        }}
      >
        {children}
      </LayoutFlex>
    </div>
  )
})
