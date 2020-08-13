import React from 'react'
import styles from './LayoutCenter.module.css'

export default React.forwardRef(function LayoutCenter ({
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
