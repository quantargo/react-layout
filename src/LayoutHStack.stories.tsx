import React from 'react'
import { LayoutHStack, LayoutHStackProps } from './LayoutHStack'
import { Story, Meta } from '@storybook/react'
import { StoryContainer, StoryChild } from './stories/Utils'

export default {
  title: 'Components/LayoutHStack',
  component: LayoutHStack
} as Meta

const Template: Story<LayoutHStackProps> = (args) => {
  return (
    <StoryContainer>
      <p>Resize to see the collapsed order</p>
      <LayoutHStack {...args}>
        <StoryChild>Item 1</StoryChild>
        <StoryChild>Item 2</StoryChild>
      </LayoutHStack>
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
