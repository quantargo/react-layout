import React from 'react'
import LayoutAuto from './LayoutAuto'

export default React.forwardRef(function LayoutVStack ({
  children, ...props
}, ref) {
  return (
    <LayoutAuto
      {...props}
      ref={ref}
      direction='column'
    >
      {children}
    </LayoutAuto>
  )
})
