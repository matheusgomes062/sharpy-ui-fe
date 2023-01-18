import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import VacancyCard from '../components/VacancyCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'General/VacancyCard',
  component: VacancyCard,
} as ComponentMeta<typeof VacancyCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof VacancyCard> = (args) => <VacancyCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Analista de dados',
  country: 'Brasil',
  modality: 'Remoto'
};
