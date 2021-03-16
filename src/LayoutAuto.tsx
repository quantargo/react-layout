import React, { CSSProperties, forwardRef } from 'react'
import { Flex } from './LayoutFlex'
import styles from './LayoutAuto.module.css'

export type LayoutAutoProps = {
  gap?: number,
  style?: CSSProperties,
  wrapperProps?: {
    [key: string]: any
  },
  [key: string]: any
}

type Ref = HTMLDivElement

/**
 * LayoutAuto is designed to fill the gap for the CSS `gap` property, until it is more widely supported.
 */
export const Auto = forwardRef<Ref, LayoutAutoProps>(function LayoutAuto ({
  gap = 1,
  children,
  style = {},
  wrapperProps = {},
  alignItems = 'center',
  ...props
}, ref) {
  return (
    <div
      className={`${styles['layout-auto']} ${wrapperProps.className || ''}`}
      {...props}
      style={style}
      ref={ref}
    >
      <Flex
        alignItems={alignItems}
        style={{
          // https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript
          '--la-gap': gap
        }}
      >
        {children}
      </Flex>
    </div>
  )
})
