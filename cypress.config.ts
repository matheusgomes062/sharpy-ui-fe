import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:6006',
    specPattern: './stories'
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
