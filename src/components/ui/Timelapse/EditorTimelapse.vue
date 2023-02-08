<script setup lang="ts">
import { watchThrottled } from "@vueuse/core";
import { ref } from "vue";
import { createSequence } from "../../../models/bezier-curve";
import { useControlPoints } from "../context";
import EditorCircle from "./EditorCircle.vue";

export type EditorTimelapse = {
  readonly count?: number;
};

const props = withDefaults(defineProps<EditorTimelapse>(), { count: 20 });
const controlPoints = useControlPoints();
const sequence = ref<number[]>(createSequence(controlPoints, props.count));

watchThrottled(
  controlPoints,
  (p) => {
    sequence.value = createSequence(p, props.count);
  },
  { throttle: 1000, leading: true, trailing: false }
);
</script>

<template>
  <div class="w-full h-8 pr-4">
    <div class="relative">
      <EditorCircle
        v-for="item in sequence"
        class="absolute top-0"
        :delay="item"
        :key="item"
        :style="{ left: `${item * 100}%` }"
      />
    </div>
  </div>
</template>
