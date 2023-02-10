import { Meta, StoryObj } from "@storybook/vue3";

import EditorTimelapse from "./EditorTimelapse.vue";

export default {
  component: EditorTimelapse,
  render: (args) => ({
    components: { EditorTimelapse },
    setup: () => {
      return args;
    },
    template: '<editor-timelapse v-bind="args" />',
  }),
} satisfies Meta<typeof EditorTimelapse>;

type Story = StoryObj<typeof EditorTimelapse>;

export const Default: Story = {
  args: {},
};
