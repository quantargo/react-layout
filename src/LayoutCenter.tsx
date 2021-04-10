import React, { CSSProperties, HTMLAttributes, ReactNode } from 'react'
import styles from './LayoutCenter.module.css'

export interface LayoutCenterProps extends HTMLAttributes<HTMLElement> {
  maxWidth: string | number
  axis?: 'x' | 'y' | 'all'
  className?: string
  as?: React.ElementType
  style?: CSSProperties
  padding?: string | number
  children?: ReactNode
  [key: string]: any
}

type Ref = HTMLElement

export const Clamp = React.forwardRef<Ref, LayoutCenterProps>(function LayoutCenter ({
  maxWidth,
  as: Tag = 'div',
  axis = 'all',
  children,
  style,
  padding,
  className,
  ...props
}, ref) {
  const _maxWidth = typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth
  return (
    <Tag
      {...props}
      ref={ref}
      className={`${styles['layout-center']} ${className || ''}`}
      style={{
        '--lc-max-width': _maxWidth,
        padding,
        alignItems: (axis === 'x' || axis === 'all') ? 'center' : 'initial',
        justifyContent: (axis === 'y' || axis === 'all') ? 'center' : 'initial',
        ...style
      }}
    >
      {children}
    </Tag>
  )
})
