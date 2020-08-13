import React from 'react'
import LayoutFlex from './LayoutFlex'
import styles from './LayoutAuto.module.css'

export default React.forwardRef(function LayoutAuto ({
  gap = 1,
  children,
  style,
  wrapperProps = {},
  ...props
}, ref) {
  return (
    <div
      {...wrapperProps}
      className={`${styles.layoutAuto} ${wrapperProps.className || ''}`}
    >
      <LayoutFlex
        {...props}
        ref={ref}
        style={{
          '--la-gap': gap,
          ...style
        }}
      >
        {children}
      </LayoutFlex>
    </div>
  )
})
