import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContactUs from '../components/ContactUs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Footer/ContactUs',
  component: ContactUs,
} as ComponentMeta<typeof ContactUs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ContactUs> = (args) => <ContactUs {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: 'Fale Conosco',
  description: 'Formas de entrar em contato consco',
  email: 'teste@sharpy.com',
  phone: '+55 11 9876-5555',
  address: 'Rua Foz de São José, 99, BR'
};
