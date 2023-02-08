<script setup lang="ts">
import { computed } from "vue";
import { useControlPointCoords } from "./useControlPointCoords";
import { useSize } from "./context";

const size = useSize();
const points = useControlPointCoords();

const data = computed(() => {
  return `M 0 ${size.value} C ${points.value.v1.x} ${points.value.v1.y}, ${points.value.v2.x} ${points.value.v2.y}, ${size.value} 0`;
});
</script>

<template>
  <path :d="data" stroke="black" stroke-width="3" fill="transparent" />
</template>
