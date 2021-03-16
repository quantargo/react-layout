import React, { CSSProperties } from 'react'
import styles from './LayoutHStack.module.css'
import * as CSS from 'csstype'

export interface LayoutHStackProps {
  collapseAt?: string
  /**
   * If true, the visual order of elements will be reversed when collapsed.
   *
   * Useful when implementing sections with alternating rythm (e.g. text left, image right; image left, text right), where in the collapsed state the image should always come before the text.
   */
  // collapseReversed?: boolean
  className?: string
  xAlign?: CSS.Property.AlignItems | CSS.Property.JustifyItems
  yAlign?: CSS.Property.AlignItems | CSS.Property.JustifyItems
  textAlign?: CSS.Property.TextAlign
  // flexGrow?: number
  gap?: number
  style?: CSSProperties
  children?: any | Array<any>
}

type Ref = HTMLDivElement

export const HStack = React.forwardRef<Ref, LayoutHStackProps>(function LayoutHStack ({
  children,
  // collapseAt = '0em',
  className = '',
  xAlign = 'initial',
  yAlign = 'initial',
  textAlign = 'inherit',
  // flexGrow = 1,
  style = {},
  gap = 1,
  ...props
}, ref) {
  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  return (
    <div
      {...props}
      ref={ref}
      className={`${styles['layout-h-stack']} ${className}`}
      style={{
        gap: _gap,
        gridGap: _gap,
        gridTemplateColumns: `repeat(${typeof children === 'string' ? 1 : children?.length}, 1fr)`,
        justifyItems: yAlign,
        alignItems: xAlign,
        textAlign: textAlign,
        ...style
      }}
    >
      {children}
    </div>
  )
})
