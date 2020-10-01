import React from 'react'
import { LayoutAuto } from './LayoutAuto'
import styles from './LayoutHStack.module.css'

type Props = {
  collapseAt?: string,
  className?: string,
  flexGrow?: number,
  gap?: number,
  style?: {
    [key: string]: any
  }
}

type Ref = HTMLElement

export const LayoutHStack = React.forwardRef<Ref, Props>(function LayoutHStack ({
  children,
  collapseAt = '0em',
  className,
  flexGrow = 1,
  style,
  gap = 1,
  ...props
}, ref) {
  return (
    <LayoutAuto
      {...props}
      ref={ref}
      direction='row'
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
