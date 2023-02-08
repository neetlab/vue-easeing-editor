import { Meta, StoryObj } from "@storybook/vue3";

import { PRESETS } from "../../../models/preset";
import { provideControlPoints } from "../control-points";
import EditorCode from "./EditorCode.vue";

export default {
  component: EditorCode,
  render: () => ({
    components: { EditorCode },
    setup: () => {
      provideControlPoints(PRESETS[0].value);
    },
    template: `<editor-code />`,
  }),
} satisfies Meta<typeof EditorCode>;

type Story = StoryObj<typeof EditorCode>;

export const Default: Story = {
  args: {},
};
