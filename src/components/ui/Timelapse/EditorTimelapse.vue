<script setup lang="ts">
import { createProgresses } from "../../../models/bezier-curve";
import { useControlPoints } from "../control-points";
import EditorTimelapseAfterimage from "./EditorTimelapseAfterimage.vue";
import EditorTimelapseRealImage from "./EditorTimelapseRealImage.vue";

export type EditorTimelapse = {
  readonly count?: number;
};

const props = withDefaults(defineProps<EditorTimelapse>(), { count: 20 });
const controlPoints = useControlPoints();

// FIXME: This component intentionally delegates rerendering check to the parent
//        Due to frequent updates of controlPoints
const progresses = createProgresses(controlPoints, props.count);
</script>

<template>
  <div class="w-full h-8 pr-2.5">
    <div class="relative">
      <EditorTimelapseAfterimage
        v-for="[t, p] in progresses"
        class="absolute top-0"
        :delay="t"
        :key="p"
        :style="{ left: `${p * 100}%` }"
      />

      <EditorTimelapseRealImage />
    </div>
  </div>
</template>
