import React from 'react'
import { LayoutFlex, Props as LayoutFlexProps } from './LayoutFlex'
import styles from './LayoutAuto.module.css'

export type Props = {
  gap?: number,
  style?: React.CSSProperties,
  wrapperProps?: {
    [key: string]: any
  }
} | LayoutFlexProps

type Ref = HTMLElement

export const LayoutAuto = React.forwardRef<Ref, Props>(function LayoutAuto ({
  gap = 1,
  children,
  style = {},
  wrapperProps = {},
  ...props
}, ref) {
  return (
    <div
      {...wrapperProps}
      className={`${styles['layout-auto']} ${wrapperProps.className || ''}`}
    >
      <LayoutFlex
        {...props}
        ref={ref}
        style={{
          // https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript
          '--la-gap': gap,
          ...style
        }}
      >
        {children}
      </LayoutFlex>
    </div>
  )
})
