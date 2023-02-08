import EditorBezier from "./EditorBezier.vue";
import { Meta, StoryObj } from "@storybook/vue3";

export default {
  component: EditorBezier,
  render: (args) => ({
    components: { EditorBezier },
    setup: () => ({ args }),
    template: `<editor-bezier :size="args.size" :x1="args.x1" :y1="args.y1" :x2="args.x2" :y2="args.y2" />`,
  }),
} satisfies Meta<typeof EditorBezier>;

type Story = StoryObj<typeof EditorBezier>;

export const Default: Story = {
  args: {},
};
