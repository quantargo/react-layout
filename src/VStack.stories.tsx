import React from 'react'
import Layout from './index'
import { Story, Meta } from '@storybook/react'
import { StoryContainer, StoryChild } from './stories/Utils'
import { LayoutVStackProps } from './LayoutVStack'

export default {
  title: 'Components/VStack',
  component: Layout.VStack
} as Meta

const Template: Story<LayoutVStackProps> = (args) => {
  return (
    <StoryContainer>
      <Layout.VStack {...args}>
        <StoryChild>Item 1</StoryChild>
        <StoryChild>Item 2</StoryChild>
        <StoryChild>Item 3</StoryChild>
        <StoryChild>Item 4</StoryChild>
        <StoryChild>Item 5</StoryChild>
        <StoryChild>Item 6</StoryChild>
      </Layout.VStack>
    </StoryContainer>
  )
}

// Each story then reuses that template
export const OutOfTheBox = Template.bind({})
OutOfTheBox.args = {}

export const Button: Story<LayoutVStackProps> = function Button (args) {
  return (
    <Layout.VStack yAlign='start'>
      <Layout.VStack {...args}>
        <span>[ICON]</span>
        <span>A button!</span>
      </Layout.VStack>
      <Layout.VStack {...args}>
        <span>[ICON]</span>
        <span>A button!</span>
      </Layout.VStack>
    </Layout.VStack>
  )
}
Button.args = {
  as: 'button',
  gap: 0.5,
  inline: true,
  style: {
    borderRadius: 10,
    border: 'none',
    padding: '1em',
    backgroundColor: 'blue',
    color: 'white'
  }
}
