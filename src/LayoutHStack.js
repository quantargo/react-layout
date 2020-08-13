import React from 'react'
import LayoutAuto from './LayoutAuto'
import styles from './LayoutHStack.module.css'

export default React.forwardRef(function LayoutHStack ({
  children,
  align = 'flex-start',
  collapseAt = '0em',
  className,
  flexBasis = '0',
  flexGrow = '1',
  style,
  gap = 1,
  ...props
}, ref) {
  return (
    <LayoutAuto
      {...props}
      ref={ref}
      direction='row'
      align={align}
      className={`${styles.layoutHStack} ${className || ''}`}
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
