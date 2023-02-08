<script lang="ts" setup>
import { computed, ref } from "vue";

import { useSize } from "./size";

export type EditorBezierControlProps = {
  readonly origin: "bottom-left" | "top-right";
  readonly x: number;
  readonly y: number;
};

const props = defineProps<EditorBezierControlProps>();
const size = useSize();
const circle = ref<SVGElement | undefined>();

const move = computed(() => {
  return props.origin === "top-right"
    ? `M ${size.value} 0`
    : `M 0 ${size.value}`;
});

const data = computed(() => `${move.value} L ${props.x} ${props.y}`);

defineExpose({ circle });
</script>

<template>
  <path :d="data" stroke="#C47DD0" stroke-width="3" fill="transparent" />
  <circle ref="circle" :cx="props.x" :cy="props.y" r="7" fill="#9C27B0" />
</template>
