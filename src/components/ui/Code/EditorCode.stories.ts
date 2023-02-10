import { Meta, StoryObj } from "@storybook/vue3";

import { PRESETS } from "../../../models/preset";
import { provideControlPoints } from "../control-points";
import EditorCode from "./EditorCode.vue";

export default {
  component: EditorCode,
  render: (args) => ({
    components: { EditorCode },
    setup: () => {
      provideControlPoints(PRESETS[0].value);
      return args;
    },
    template: `<editor-code v-bind="args" />`,
  }),
} satisfies Meta<typeof EditorCode>;

type Story = StoryObj<typeof EditorCode>;

export const Default: Story = {
  args: {},
};
