import React from 'react'
import { LayoutAuto } from './LayoutAuto'
import styles from './LayoutHStack.module.css'

export type LayoutHStackProps = {
  collapseAt?: string,
  className?: string,
  flexGrow?: number,
  gap?: number,
  style?: React.CSSProperties
}

type Ref = HTMLElement

export const LayoutHStack = React.forwardRef<Ref, LayoutHStackProps>(function LayoutHStack ({
  children,
  collapseAt = '0em',
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
        ...style
      }}
      gap={gap}
    >
      {children}
    </LayoutAuto>
  )
})
