<script setup lang="ts">
import { computed } from "vue";
import { useControlPoints } from "../context";
import { useSize } from "./context";

const size = useSize();
const controlPoints = useControlPoints();

const data = computed(
  () =>
    `M 0 ${size.value} C ${controlPoints.value.x1} ${controlPoints.value.y1}, ${controlPoints.value.x2} ${controlPoints.value.y2}, ${size.value} 0`
);
</script>

<template>
  <path :d="data" stroke="black" stroke-width="3" fill="transparent" />
  <circle :cx="controlPoints.x1" :cy="controlPoints.y1" r="2" fill="red" />
  <circle :cx="controlPoints.x2" :cy="controlPoints.y2" r="2" fill="red" />
</template>
