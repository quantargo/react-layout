import React from 'react'

export default React.forwardRef(function ({
  as = 'div',
  direction = 'row',
  alignItems = 'stretch',
  justifyContent = 'space-between',
  wrap = 'no-wrap',
  children,
  style,
  as: Tag = 'div',
  ...props
}, ref) {
  return (
    <Tag
      {...props}
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: direction,
        alignItems,
        justifyContent,
        flexWrap: wrap === true ? 'wrap' : wrap,
        ...style
      }}
    >
      {children}
    </Tag>
  )
})
