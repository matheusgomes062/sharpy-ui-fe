import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import JobOpportunityCard from "../components/JobOpportunityCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Cards/JobOpportunityCard",
  component: JobOpportunityCard,
} as ComponentMeta<typeof JobOpportunityCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof JobOpportunityCard> = (args) => <JobOpportunityCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  country: 'Brasil',
  modality: 'Remoto'
};
