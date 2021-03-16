import React from 'react'
import { HStack, LayoutHStackProps } from './LayoutHStack'
import { Story, Meta } from '@storybook/react'
import { StoryContainer, StoryChild } from './stories/Utils'

export default {
  title: 'Components/LayoutHStack',
  component: HStack
} as Meta

const Template: Story<LayoutHStackProps> = (args) => {
  return (
    <StoryContainer>
      <p>Resize to see the collapsed order</p>
      <HStack {...args}>
        <StoryChild>Item 1</StoryChild>
        <StoryChild>Item 2</StoryChild>
      </HStack>
    </StoryContainer>
  )
}

// Each story then reuses that template
export const OutOfTheBox = Template.bind({})
OutOfTheBox.args = {
  collapseAt: '50em'
}

export const CollapseReversed = Template.bind({})
CollapseReversed.args = {
  collapseReversed: true,
  collapseAt: '50em'
}
