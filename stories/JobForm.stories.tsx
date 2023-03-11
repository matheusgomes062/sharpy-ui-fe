import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import JobForm from "../components/JobForm";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Jobs/JobForm",
  component: JobForm,
} as ComponentMeta<typeof JobForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof JobForm> = (args) => (
  <JobForm {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  jobTitle: "Analista de dados",
  jobCountry: "Brazil",
  jobModality: "Remoto",
  jobJourney: "Tempo Integral",
  href: "/",
  textAreaPlaceholder: "Carta de apresentação",
  inputEmailPlaceholder: "E-mail",
  inputNamePlaceholder: "Nome",
  inputSurnamePlaceholder: "Sobrenome",
  label: "Politica de Privacidade",
  mode: "dark",
  policyAcceptanceText: "Aceito a",
  primary: true,
  type: "text",
  underline: true,
};
