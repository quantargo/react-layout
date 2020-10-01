import React from 'react'
import { LayoutFlex, Props } from './LayoutFlex'
import { Story, Meta } from '@storybook/react'
import { StoryContainer, StoryChild } from './stories/Utils'

export default {
  title: 'Basics/LayoutFlex',
  component: LayoutFlex
  // argTypes: {
  //   justifyContent: {
  //     control: {
  //       type: 'select'
  //     }
  //   }
  // }
} as Meta

// export const Playground: Story<Props> = (args) =>

const Template: Story<Props> = (args) => {
  return (
    <StoryContainer>
      <LayoutFlex {...args}>
        <StoryChild>Item 1</StoryChild>
        <StoryChild>Item 2</StoryChild>
        <StoryChild>Item 3</StoryChild>
        <StoryChild>Item 4</StoryChild>
        <StoryChild>Item 5</StoryChild>
        <StoryChild>Item 6</StoryChild>
      </LayoutFlex>
    </StoryContainer>
  )
}

// Each story then reuses that template
export const OutOfTheBox = Template.bind({})
OutOfTheBox.args = {
  alignItems: 'center'
}

export const Vertical = Template.bind({})
Vertical.args = {
  flexDirection: 'column'
}

export const Wrap = Template.bind({})
Wrap.args = {
  flexWrap: true
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
