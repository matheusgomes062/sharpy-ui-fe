import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropdownHeader from '../components/DropdownHeader';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Header/DropdownHeader',
  component: DropdownHeader,
} as ComponentMeta<typeof DropdownHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropdownHeader> = (args) => <DropdownHeader {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  options: ['Marketing', 'Recusos Humanos', 'Tecnologia']
};
