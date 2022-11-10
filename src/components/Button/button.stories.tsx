import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from './button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children:'按钮'
};
// Primary.parameters = {
//   docs: {
//     source: {
//       code: '<Button btnType="default">按钮</Button>',
//       language: "yml",
//       type: "auto",
//     },
//   },
// };
export const Secondary = Template.bind({});
Secondary.args = {
  children:'按钮',
  btnType:'link'
};

export const Large = Template.bind({});
Large.args = {
  children:'按钮',
  btnType:'danger',
  size:'lg'
};

export const Small = Template.bind({});
Small.args = {
  children:'按钮',
  btnType:'danger',
  size:'sm'
};
