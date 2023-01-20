import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MoreOpportunities from '../components/MoreOpportunities';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Jobs/MoreOpportunities',
  component: MoreOpportunities,
} as ComponentMeta<typeof MoreOpportunities>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MoreOpportunities> = () => <MoreOpportunities/>;

export const Primary = Template.bind({});
