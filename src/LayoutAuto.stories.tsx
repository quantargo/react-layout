import React from 'react'
import { Auto, LayoutAutoProps } from './LayoutAuto'
import { Story, Meta } from '@storybook/react'
import { StoryContainer, StoryChild } from './stories/Utils'

export default {
  title: 'Components/LayoutAuto',
  component: Auto
} as Meta

const Template: Story<LayoutAutoProps> = (args) => {
  return (
    <StoryContainer>
      <Auto {...args}>
        <StoryChild>Item 1</StoryChild>
        <StoryChild>Item 2</StoryChild>
        <StoryChild>Item 3</StoryChild>
        <StoryChild>Item 4</StoryChild>
        <StoryChild>Item 5</StoryChild>
        <StoryChild>Item 6</StoryChild>
      </Auto>
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

export const Button: Story<LayoutAutoProps> = function Button (args) {
  return (
    <Auto {...args}>
      <span>A button!</span>
      <span>[ICON]</span>
    </Auto>
  )
}
Button.args = {
  as: 'button',
  gap: 1,
  wrapperProps: {
    style: {
      backgroundColor: 'whitesmoke'
    }
  },
  style: {
    width: '100%',
    justifyContent: 'center',
    appearance: 'none',
    border: 'none',
    padding: '1em',
    backgroundColor: 'transparent'
  }
}
