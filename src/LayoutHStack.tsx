import React from 'react'
import { LayoutAuto } from './LayoutAuto'
import styles from './LayoutHStack.module.css'

export type LayoutHStackProps = {
  collapseAt?: string,
  /**
   * If true, the visual order of elements will be reversed when collapsed.
   *
   * Useful when implementing sections with alternating rythm (e.g. text left, image right; image left, text right), where in the collapsed state the image should always come before the text.
   */
  collapseReversed?: boolean,
  className?: string,
  flexGrow?: number,
  gap?: number,
  style?: React.CSSProperties
}

type Ref = HTMLElement

export const LayoutHStack = React.forwardRef<Ref, LayoutHStackProps>(function LayoutHStack ({
  children,
  collapseAt = '0em',
  collapseReversed = false,
  className,
  flexGrow = 1,
  style = {},
  gap = 1,
  ...props
}, ref) {
  return (
    <LayoutAuto
      {...props}
      ref={ref}
      flexDirection='row'
      className={`${styles['layout-h-stack']} ${className || ''}`}
      style={{
        '--lhs-flex-grow': flexGrow,
        '--lhs-collapse-at': collapseAt,
        flexWrap: collapseReversed ? 'wrap-reverse' : 'wrap',
        ...style
      }}
      gap={gap}
    >
      {children}
    </LayoutAuto>
  )
})
