import React, { CSSProperties } from 'react'
import styles from './LayoutCenter.module.css'

type LayoutCenterProps = {
  maxWidth: string | number,
  axis?: 'x' | 'y' | 'all',
  className?: string
  as?: React.ElementType,
  style?: CSSProperties
  padding?: string | number
}

type Ref = HTMLElement

// TODO: Rename to Clamp
export const Center = React.forwardRef<Ref, LayoutCenterProps>(function LayoutCenter ({
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
