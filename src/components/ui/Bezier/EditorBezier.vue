<script setup lang="ts">
import EditorBezierForeground from "./EditorBezierForeground.vue";
import EditorBezierBackground from "./EditorBezierBackground.vue";
import { provideSize } from "./context";
import { provideControlPoints } from "../context";

export type EditorBezierProps = {
  readonly size?: number;
  readonly x1?: number;
  readonly y1?: number;
  readonly x2?: number;
  readonly y2?: number;
};

const props = withDefaults(defineProps<EditorBezierProps>(), {
  size: 200,
  x1: 0,
  y1: 200,
  x2: 200,
  y2: 0,
});

provideSize(props.size);
provideControlPoints(props);
</script>

<template>
  <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg">
    <EditorBezierBackground />
    <EditorBezierForeground />
  </svg>
</template>
