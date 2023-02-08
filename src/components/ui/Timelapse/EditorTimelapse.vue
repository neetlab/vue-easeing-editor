<script setup lang="ts">
import { ref, watch } from "vue";

import { createSequence } from "../../../models/bezier-curve";
import { useControlPoints } from "../control-points";
import EditorTimelapseAfterimage from "./EditorTimelapseAfterimage.vue";
import EditorTimelapseRealImage from "./EditorTimelapseRealImage.vue";

export type EditorTimelapse = {
  readonly tick: number;
  readonly count?: number;
};

const props = withDefaults(defineProps<EditorTimelapse>(), { count: 20 });
const controlPoints = useControlPoints();
const sequence = ref<number[]>(createSequence(controlPoints, props.count));

watch(
  () => props.tick,
  () => {
    sequence.value = createSequence(controlPoints, props.count);
  }
);
</script>

<template>
  <div class="w-full h-8 pr-2.5">
    <div class="relative">
      <EditorTimelapseAfterimage
        v-for="item in sequence"
        class="absolute top-0"
        :delay="item"
        :key="item"
        :style="{ left: `${item * 100}%` }"
      />

      <EditorTimelapseRealImage :tick="$props.tick" />
    </div>
  </div>
</template>
