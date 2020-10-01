import React from 'react'
import { LayoutAuto, Props } from './LayoutAuto'
import { Story, Meta } from '@storybook/react'
import { StoryContainer, StoryChild } from './stories/Utils'

export default {
  title: 'Components/LayoutAuto',
  component: LayoutAuto
} as Meta

const Template: Story<Props> = (args) => {
  return (
    <StoryContainer>
      <LayoutAuto {...args}>
        <StoryChild>Item 1</StoryChild>
        <StoryChild>Item 2</StoryChild>
        <StoryChild>Item 3</StoryChild>
        <StoryChild>Item 4</StoryChild>
        <StoryChild>Item 5</StoryChild>
        <StoryChild>Item 6</StoryChild>
      </LayoutAuto>
    </StoryContainer>
  )
}

// Each story then reuses that template
export const OutOfTheBox = Template.bind({})
OutOfTheBox.args = {}

export const Gap = Template.bind({})
Gap.args = {
  gap: 2
}

export const Vertical = Template.bind({})
Vertical.args = {
  flexDirection: 'column'
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
