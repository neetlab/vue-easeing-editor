import EasingEditor from "./EasingEditor.vue";
import { Meta, StoryObj } from "@storybook/vue3";

export default {
  component: EasingEditor,
  render: (args) => ({
    components: { EasingEditor },
    setup: () => ({ args }),
    template: `<easing-editor />`,
  }),
} satisfies Meta<typeof EasingEditor>;

type Story = StoryObj<typeof EasingEditor>;

export const Default: Story = {
  args: {},
};
