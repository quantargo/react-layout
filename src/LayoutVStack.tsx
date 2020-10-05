import React from 'react'
import { LayoutAuto, LayoutAutoProps } from './LayoutAuto'

export type LayoutVStackProps = {} & LayoutAutoProps

type Ref = HTMLElement

export const LayoutVStack = React.forwardRef<Ref, LayoutVStackProps>(function LayoutVStack ({
  children,
  alignItems = 'stretch',
  ...props
}, ref) {
  return (
    <LayoutAuto
      {...props}
      ref={ref}
      alignItems={alignItems}
      flexDirection='column'

    >
      {children}
    </LayoutAuto>
  )
})
