import React, { CSSProperties, forwardRef } from 'react'
import { Flex } from './LayoutFlex'
import styles from './LayoutAuto.module.css'
import * as CSS from 'csstype'

export interface LayoutAutoProps {
  gap?: number
  style?: CSSProperties
  as: React.ElementType
  xAlign?: CSS.Property.AlignItems | CSS.Property.JustifyItems
  yAlign?: CSS.Property.AlignItems | CSS.Property.JustifyItems
  className?: string
}

type Ref = HTMLElement

/**
 * LayoutAuto is designed to fill the gap for the CSS `gap` property, until it is more widely supported.
 */
export const Auto = forwardRef<Ref, LayoutAutoProps>(function LayoutAuto ({
  gap = 1,
  children,
  style = {},
  xAlign = 'initial',
  yAlign = 'center',
  className,
  as = 'div',
  ...props
}, ref) {
  // const _gap = typeof gap === 'number' ? `${gap}em` : gap
  const Tag = as

  return (
    <Tag
      className={`${styles['layout-auto']} ${className || ''}`}
      {...props}
      style={style}
      ref={ref}
    >
      <Flex
        style={{
          justifyContent: xAlign,
          alignItems: yAlign,
          // https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript
          '--la-gap': gap
        }}
      >
        {children}
      </Flex>
    </Tag>
  )
})
