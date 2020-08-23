import React from 'react'
import styles from './LayoutCenter.module.css'

type Props = {
  maxWidth: string,
  className?: string
  as?: any,
  style?: {
    [key: string]: any
  }
}

type Ref = HTMLElement

export const LayoutCenter = React.forwardRef<Ref, Props>(function LayoutCenter ({
  maxWidth = '1000px',
  as: Tag = 'div',
  children,
  style,
  className,
  ...props
}, ref) {
  return (
    <Tag
      {...props}
      ref={ref}
      className={`${styles.layoutCenter} ${className || ''}`}
      style={{
        maxWidth,
        ...style
      }}
    >
      {children}
    </Tag>
  )
})
