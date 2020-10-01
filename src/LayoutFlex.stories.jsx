import React from 'react'
import { LayoutFlex, Props } from './LayoutFlex'
import { Story } from '@storybook/react'

export default {
  title: 'Simple/LayoutFlex',
  component: LayoutFlex,
  argTypes: {
    direction: {
      control: { type: 'select' }
    }
  }
}

// export const Playground: Story<Props> = (args) =>

const Template: Story<Props> = (args) => {
  return (
    <LayoutFlex {...args}>
      <div>item</div>
      <div>item</div>
      <div>item</div>
      <div>item</div>
    </LayoutFlex>
  )
};

// Each story then reuses that template
export const Primary = Template.bind({})

Primary.args = {
  direction: 'center'
}
