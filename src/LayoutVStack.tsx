import React from 'react'
import { LayoutAuto } from './LayoutAuto'

type Props = {

}

type Ref = HTMLElement

export const LayoutVStack = React.forwardRef<Ref, Props>(function LayoutVStack ({
  children,
  ...props
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
