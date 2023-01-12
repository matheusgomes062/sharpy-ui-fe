import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from '../components/Dropdown';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'General/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  placeholder: 'Hello World!',
  options: ['Marketing', 'Recusos Humanos', 'Tecnologia']
};
