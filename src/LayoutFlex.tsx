import React from 'react'

// interface CustomComponent<Type> {
//   (...props: Props): React.ReactType<Type>;
// }

export type LayoutFlexProps = {
  // as?: HTMLElementTagNameMap | CustomComponent<React.ReactType>,
  // as?: string | (() => React.ReactNode)
  /**
   * Render as custom component
   */
  as?: any,
  flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch',
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly',
  flexWrap?: 'wrap' | 'wrap-reverse' | 'nowrap' | boolean,
  style?: React.CSSProperties,
  [key: string]: any
}

type Ref = HTMLElement

export const Flex = React.forwardRef<Ref, LayoutFlexProps>(function LayoutFlex ({
  as: Tag = 'div',
  flexDirection = 'row',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  flexWrap = 'nowrap',
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
        flexDirection,
        alignItems,
        justifyContent,
        flexWrap: flexWrap === true ? 'wrap' : flexWrap,
        ...style
      }}
    >
      {children}
    </Tag>
  )
})
