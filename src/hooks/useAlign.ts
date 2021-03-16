import { useEffect, useState } from 'react'

function mapToCSS (mode, xAlign, yAlign) {
  return {
    justifyItems: mode === 'horizontal' ? yAlign : xAlign,
    alignItems: mode === 'horizontal' ? xAlign : yAlign
  }
}

export const useAlign = function (mode, xAlign, yAlign) {
  const [cssProps, setCssProps] = useState(mapToCSS(mode, xAlign, yAlign))
  useEffect(() => {
    setCssProps(
      mapToCSS(mode, xAlign, yAlign)
    )
  }, [xAlign, yAlign, mode])

  return cssProps
}
