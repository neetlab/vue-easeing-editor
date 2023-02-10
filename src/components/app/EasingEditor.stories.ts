import { Meta, StoryObj } from "@storybook/vue3";

import EasingEditor from "./EasingEditor.vue";

export default {
  component: EasingEditor,
  render: (args) => ({
    components: { EasingEditor },
    setup: () => {
      return args;
    },
    template: `<easing-editor v-bind="args" />`,
  }),
} satisfies Meta<typeof EasingEditor>;

type Story = StoryObj<typeof EasingEditor>;

export const Default: Story = {
  args: {},
};
