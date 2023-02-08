import { Meta, StoryObj } from "@storybook/vue3";

import EditorTimelapse from "./EditorTimelapse.vue";

export default {
  component: EditorTimelapse,
  render: () => ({
    components: { EditorTimelapse },
    template: "<editor-timelapse />",
  }),
} satisfies Meta<typeof EditorTimelapse>;

type Story = StoryObj<typeof EditorTimelapse>;

export const Default: Story = {
  args: {},
};
