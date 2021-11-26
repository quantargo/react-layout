import React, { Children, CSSProperties, forwardRef, FunctionComponent, HTMLAttributes, ReactNode } from 'react'
import styles from './LayoutHStack.module.css'
import * as CSS from 'csstype'

export interface LayoutHStackProps extends HTMLAttributes<HTMLElement> {
  collapseAt?: string
  /**
   * If true, the visual order of elements will be reversed when collapsed.
   *
   * Useful when implementing sections with alternating rythm (e.g. text left, image right; image left, text right), where in the collapsed state the image should always come before the text.
   */
  className?: string
  xAlign?: CSS.Property.AlignItems | CSS.Property.JustifyItems
  yAlign?: CSS.Property.AlignItems | CSS.Property.JustifyItems
  textAlign?: CSS.Property.TextAlign
  as?: React.ElementType
  gap?: number
  style?: CSSProperties
  children?: ReactNode
  ratio?: string | CSS.Property.GridTemplateColumns
  [key: string]: any
}

type Ref = HTMLElement

// The current HStack should be a "Columns" component. And HStack should be like VStack, but horizontally.
export const HStack: FunctionComponent<LayoutHStackProps> = forwardRef<Ref, LayoutHStackProps>(function LayoutHStack ({
  children,
  // collapseAt = '0em',
  className = '',
  xAlign = 'initial',
  yAlign = 'initial',
  textAlign = 'inherit',
  ratio, // or maybe "template"?
  as = 'div',
  style = {},
  gap = 1,
  ...props
}, ref) {
  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  const Tag = as
  return (
    <Tag
      {...props}
      ref={ref}
      className={`${styles['layout-h-stack']} ${className}`}
      style={{
        gap: _gap,
        gridGap: _gap,
        gridTemplateColumns: ratio || `repeat(${typeof children === 'string' ? 1 : Children.count(children)}, 1fr)`,
        justifyItems: yAlign,
        alignItems: xAlign,
        textAlign: textAlign,
        ...style
      }}
    >
      {children}
    </Tag>
  )
})
