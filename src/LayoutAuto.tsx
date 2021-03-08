import React from 'react'
import { LayoutFlex } from './LayoutFlex'
import styles from './LayoutAuto.module.css'

export type LayoutAutoProps = {
  gap?: number,
  style?: React.CSSProperties,
  wrapperProps?: {
    [key: string]: any
  },
  [key: string]: any
}

type Ref = HTMLElement

/**
 * LayoutAuto is designed to fill the gap for the CSS `gap` property, until it is more widely supported.
 */
export const LayoutAuto = React.forwardRef<Ref, LayoutAutoProps>(function LayoutAuto ({
  gap = 1,
  children,
  style = {},
  wrapperProps = {},
  alignItems = 'center',
  ...props
}, ref) {
  return (
    <div
      {...wrapperProps}
      className={`${styles['layout-auto']} ${wrapperProps.className || ''}`}
    >
      <LayoutFlex
        {...props}
        alignItems={alignItems}
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
