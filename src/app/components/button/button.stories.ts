import { action } from '@storybook/addon-actions'
import { Story, Meta } from '@storybook/angular/types-6-0'
import { ButtonComponent } from './button.component'

export default {
  title: 'Atoms/Button',
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['large', 'small'] } },
  },
} as Meta

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
})

export const Default = Template.bind({})
Default.args = {
  label: 'Button',
  size: 'large',
  disabled: false,
}

export const Small = Template.bind({})
Small.args = {
  label: 'Button',
  size: 'small',
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Button',
  size: 'large',
  disabled: true,
}
