import React from 'react'
import { LayoutVStack, LayoutVStackProps } from './LayoutVStack'
import { Story, Meta } from '@storybook/react'
import { StoryContainer, StoryChild } from './stories/Utils'

export default {
  title: 'Components/LayoutVStack',
  component: LayoutVStack
} as Meta

const Template: Story<LayoutVStackProps> = (args) => {
  return (
    <>
      <p>Use the VStack (vertical stack) to create consistently spaced vertical relationships between elements.</p>
      <StoryContainer>
        <LayoutVStack {...args}>
          <StoryChild>Item 1</StoryChild>
          <StoryChild>Item 2</StoryChild>
          <StoryChild>Item 3</StoryChild>
          <StoryChild>Item 4</StoryChild>
          <StoryChild>Item 5</StoryChild>
          <StoryChild>Item 6</StoryChild>
        </LayoutVStack>
      </StoryContainer>
    </>
  )
}

// Each story then reuses that template
export const OutOfTheBox = Template.bind({})
OutOfTheBox.args = {}

export const Gap = Template.bind({})
Gap.args = {
  gap: 2
}

export const CustomComponent = Template.bind({})
CustomComponent.args = {
  as: function MyComponent ({ children, ...props }: { children: React.ReactNode}) {
    return (
      <article {...props}>
        {children}
      </article>
    )
  }
}

export const CustomTag = Template.bind({})
CustomTag.args = {
  as: 'article'
}
