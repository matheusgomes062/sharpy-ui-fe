import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MoreOpportunities from '../components/MoreOpportunities';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Jobs/MoreOpportunities',
  component: MoreOpportunities,
} as ComponentMeta<typeof MoreOpportunities>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MoreOpportunities> = (args) => <MoreOpportunities {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  buttonLabel: "Ver Mais",
  dropDownPlaceholder: "Filtrar pro Área",
  inputPlaceholder: "Buscar Oportunidade",
  jobOpportunities: [
    {
      id: 0,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações Frontend",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 1,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 2,
      jobOpportunityCardTitle: "Gerente de Produto",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 3,
      jobOpportunityCardTitle: "Analista de dados",
      country: "Brasil",
      modality: "Remoto",
    },
    {
      id: 4,
      jobOpportunityCardTitle: "Desenvolvedor(a) de aplicações FullStack",
      country: "Brasil",
      modality: "Remoto",
    },
  ],
};