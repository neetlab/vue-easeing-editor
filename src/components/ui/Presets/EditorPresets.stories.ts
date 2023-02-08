import { Meta, StoryObj } from "@storybook/vue3";

import { PRESETS } from "../../../models/preset";
import EditorPresets from "./EditorPresets.vue";

export default {
  component: EditorPresets,
  render: (args) => ({
    components: { EditorPresets },
    data: () => ({ args }),
    template: `<editor-presets :presets="args.presets" />`,
  }),
} satisfies Meta<typeof EditorPresets>;

type Story = StoryObj<typeof EditorPresets>;

export const Default: Story = {
  args: {
    presets: PRESETS,
  },
};
