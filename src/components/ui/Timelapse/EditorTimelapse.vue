<script setup lang="ts">
import { ref, watch } from "vue";

import { createProgresses, Progress } from "../../../models/bezier-curve";
import { useControlPoints } from "../control-points";
import EditorTimelapseAfterimage from "./EditorTimelapseAfterimage.vue";
import EditorTimelapseRealImage from "./EditorTimelapseRealImage.vue";

export type EditorTimelapse = {
  readonly tick: number;
  readonly count?: number;
};

const props = withDefaults(defineProps<EditorTimelapse>(), { count: 20 });

const controlPoints = useControlPoints();
const progresses = ref<Progress[]>(
  createProgresses(controlPoints, props.count)
);

watch(
  () => props.tick,
  () => {
    progresses.value = createProgresses(controlPoints, props.count);
  }
);
</script>

<template>
  <div class="w-full h-8 pr-2.5">
    <div class="relative">
      <EditorTimelapseAfterimage
        v-for="[t, p] in progresses"
        class="absolute top-0"
        :delay="t"
        :key="`${p}-${tick}`"
        :style="{ left: `${p * 100}%` }"
      />

      <EditorTimelapseRealImage :key="`${tick}`" />
    </div>
  </div>
</template>
