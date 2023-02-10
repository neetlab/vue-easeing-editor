import { Meta, StoryObj } from "@storybook/vue3";

import EditorBezier from "./EditorBezier.vue";

export default {
  component: EditorBezier,
  render: (args) => ({
    components: { EditorBezier },
    setup: () => {
      return args;
    },
    template: `<editor-bezier v-bind="args" />`,
  }),
} satisfies Meta<typeof EditorBezier>;

type Story = StoryObj<typeof EditorBezier>;

export const Default: Story = {
  args: {},
};
