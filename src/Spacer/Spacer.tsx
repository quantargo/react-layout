import React, { FunctionComponent } from 'react'

interface SpacerProps {
  gap: number | string
}

export const VSpacer: FunctionComponent<SpacerProps> = function VSpacer ({
  gap = 1
}) {
  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  return (
    <div tabIndex={-1} style={{ height: _gap, width: 'auto', flexShrink: 0, flexGrow: 0 }} />
  )
}

export const HSpacer: FunctionComponent<SpacerProps> = function HSpacer ({
  gap = 1
}) {
  const _gap = typeof gap === 'number' ? `${gap}em` : gap
  return (
    <div tabIndex={-1} style={{ height: _gap, width: 'auto', flexShrink: 0, flexGrow: 0 }} />
  )
}

const Spacer = {
  V: VSpacer,
  Vertical: VSpacer,
  H: HSpacer,
  Horizontal: HSpacer
}

export default Spacer
