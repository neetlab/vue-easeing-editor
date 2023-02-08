import EditorTimelapse from "./EditorTimelapse.vue";
import { Meta, StoryObj } from "@storybook/vue3";

export default {
  component: EditorTimelapse,
  render: () => ({
    components: { EditorTimelapse },
    template: "<editor-timelapse />",
  }),
} satisfies Meta<typeof EditorTimelapse>;

type Story = StoryObj<typeof EditorTimelapse>;

const linear = (t: number) => t;

export const Default: Story = {
  args: {
    timingFn: linear,
  },
};
