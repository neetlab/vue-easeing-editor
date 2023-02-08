<script setup lang="ts">
import { ref, VNodeRef } from "vue";
import EditorBezierControl from "./EditorBezierControl.vue";
import { useControlPointCoords } from "./useControlPointCoords";

const c1 = ref<VNodeRef | undefined>();
const c2 = ref<VNodeRef | undefined>();

const points = useControlPointCoords();

defineExpose({ c1, c2 });
</script>

<template>
  <EditorBezierControl
    ref="c1"
    origin="bottom-left"
    :x="points.v1.x"
    :y="points.v1.y"
  />

  <EditorBezierControl
    ref="c2"
    origin="top-right"
    :x="points.v2.x"
    :y="points.v2.y"
  />
</template>
