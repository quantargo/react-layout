import React, { CSSProperties, HTMLAttributes } from 'react'
import * as CSS from 'csstype'
import styles from './LayoutVStack.module.css'

export interface LayoutVStackProps extends HTMLAttributes<HTMLElement> {
  gap?: number | string
  as?: React.ElementType // Thanks to this suggestion: https://github.com/emotion-js/emotion/issues/1137#issuecomment-571644044
  style?: CSSProperties
  xAlign?: CSS.Property.AlignItems | CSS.Property.JustifyItems
  yAlign?: CSS.Property.AlignItems | CSS.Property.JustifyItems
  textAlign?: CSS.Property.TextAlign
  inline?: boolean
  children: React.ReactNode
  [key: string]: any
}

type Ref = HTMLElement

export const VStack = React.forwardRef<Ref, LayoutVStackProps>(function VStack ({
  children,
  xAlign = 'initial',
  yAlign = 'initial',
  textAlign = 'inherit',
  gap = 1,
  as = 'div',
  inline = false,
  style = {},
  ...props
}, ref) {
  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  const Tag = as
  return (
    <Tag
      {...props}
      ref={ref}
      className={`${styles['v-stack']} ${inline ? styles.inline : ''}`}
      style={{
        justifyItems: xAlign,
        alignItems: yAlign,
        textAlign: textAlign,
        ...style,
        gap: _gap,
        gridGap: _gap
      }}
    >
      {children}
    </Tag>
  )
})
