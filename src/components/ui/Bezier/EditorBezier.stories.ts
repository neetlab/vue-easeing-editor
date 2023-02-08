import EditorBezier from "./EditorBezier.vue";
import { Meta, StoryObj } from "@storybook/vue3";

export default {
  component: EditorBezier,
  render: (args) => ({
    components: { EditorBezier },
    setup: () => ({ args }),
    template: `<editor-bezier :size="args.size" :controlPoints="args.controlPoints" />`,
  }),
} satisfies Meta<typeof EditorBezier>;

type Story = StoryObj<typeof EditorBezier>;

export const Default: Story = {
  args: {},
};
