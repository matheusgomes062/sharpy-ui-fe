import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SmartLink from '../components/SmartLink';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'General/SmartLink',
  component: SmartLink,
} as ComponentMeta<typeof SmartLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SmartLink> = (args) => <SmartLink {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    label: 'Política de Privacidade',
};
