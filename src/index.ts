import { Auto } from './LayoutAuto'
import { Clamp } from './LayoutCenter'
import { Flex } from './LayoutFlex'
import { HStack } from './LayoutHStack'
import { VStack } from './LayoutVStack'

const Layout = {
  Auto,
  Clamp,
  Flex,
  HStack,
  VStack
}

export * from './LayoutAuto'
export { Clamp } from './LayoutCenter'
export { Flex } from './LayoutFlex'
export { HStack } from './LayoutHStack'
export { VStack } from './LayoutVStack'
export { HSpacer, VSpacer } from './Spacer/Spacer'

export default Layout
