<script setup lang="ts">
import { reactive, ref, watch } from "vue";

import {
  ControlPoints,
  fromStylesheet,
  toStylesheet,
} from "../../models/bezier-curve";
import { PRESETS } from "../../models/preset";
import EditorBezier from "../ui/Bezier/EditorBezier.vue";
import EditorCode from "../ui/Code/EditorCode.vue";
import { provideControlPoints } from "../ui/control-points";
import EditorPresets from "../ui/Presets/EditorPresets.vue";
import EditorTimelapse from "../ui/Timelapse/EditorTimelapse.vue";

export type EasingEditorProps = {
  readonly modelValue?: string;
};

export type EasingEditorEmits = {
  (event: "update:modelValue", value: string): void;
};

const props = withDefaults(defineProps<EasingEditorProps>(), {
  modelValue: "cubic-bezier(0, 0, 1, 1)",
});
const emit = defineEmits<EasingEditorEmits>();

const controlPoints = reactive<ControlPoints>(fromStylesheet(props.modelValue));
const tick = ref(0);

const handleMove = (event: ControlPoints) => {
  controlPoints.v1 = event.v1;
  controlPoints.v2 = event.v2;
};

const handleMoveEnd = () => {
  tick.value += 1;
};

const handleChangePreset = (event: ControlPoints) => {
  controlPoints.v1 = event.v1;
  controlPoints.v2 = event.v2;
  tick.value += 1;
};

watch(tick, () => {
  emit("update:modelValue", toStylesheet(controlPoints));
});

provideControlPoints(controlPoints);
</script>

<template>
  <div class="bg-white border border-gray-200 shadow rounded p-4 w-[272px]">
    <EditorTimelapse :key="tick" />

    <div class="flex gap-7" :style="{ marginTop: '26px' }">
      <EditorPresets :presets="PRESETS" @change="handleChangePreset" />

      <div class="py-7 px-3">
        <EditorBezier
          :size="136"
          :control-points="controlPoints"
          @move="handleMove"
          @move-end="handleMoveEnd"
        />
      </div>
    </div>

    <EditorCode />
  </div>
</template>
