import React from 'react'
import * as CSS from 'csstype'

// interface CustomComponent<Type> {
//   (...props: Props): React.ReactType<Type>;
// }

export type Props = {
  // as?: HTMLElementTagNameMap | CustomComponent<React.ReactType>,
  as?: any,
  direction?: CSS.Property.FlexDirection,
  alignItems?: CSS.Property.AlignItems,
  justifyContent?: CSS.Property.JustifyContent,
  wrap?: CSS.Property.FlexWrap | boolean,
  style?: {
    [key: string]: any
  }
}

type Ref = HTMLElement

export const LayoutFlex = React.forwardRef<Ref, Props>(function LayoutFlex ({
  as: Tag = 'div',
  direction = 'row',
  alignItems = 'stretch',
  justifyContent = 'space-between',
  wrap = 'no-wrap',
  children,
  style,
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
