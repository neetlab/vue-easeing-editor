<script setup lang="ts">
import { ref, toRef } from "vue";

import { ControlPoints, fromCoords } from "../../../models/bezier-curve";
import { useControlPoints } from "../control-points";
import EditorBezierBackground from "./EditorBezierBackground.vue";
import EditorBezierForeground from "./EditorBezierForeground.vue";
import EditorBezierOverlay from "./EditorBezierOverlay.vue";
import { provideSize } from "./size";

export type EditorBezierProps = {
  readonly size?: number;
};

export type EditorBezierEmits = {
  (event: "move", data: ControlPoints): void;
  (event: "moveEnd", data: ControlPoints): void;
};

const controlPoints = useControlPoints();
const props = withDefaults(defineProps<EditorBezierProps>(), {
  size: 200,
});
const emit = defineEmits<EditorBezierEmits>();

type ControlReferences = {
  readonly c1: { readonly circle: SVGElement | undefined };
  readonly c2: { readonly circle: SVGElement | undefined };
};

const isDown = ref(false);
const overlay = ref<ControlReferences | undefined>();

const moveByMouseEvent = (event: MouseEvent) => {
  const x = event.clientX;
  const y = event.clientY;

  const c1 = overlay.value?.c1.circle?.getBoundingClientRect();
  const c2 = overlay.value?.c2.circle?.getBoundingClientRect();
  if (c1 == undefined || c2 == undefined) {
    throw new TypeError(`Ref for controls were not defined`);
  }

  const d1 = Math.hypot(x - c1.x, y - c1.y);
  const d2 = Math.hypot(x - c2.x, y - c2.y);

  // console.log(`距離 C1(${c1.x}, ${c1.y}) C2(${c2.x}, ${c2.y})`);

  const controlPoint = fromCoords(
    { x: event.offsetX, y: event.offsetY },
    props.size
  );

  if (d1 < d2) {
    emit("move", { v1: controlPoint, v2: controlPoints.v2 });
  } else {
    emit("move", { v1: controlPoints.v1, v2: controlPoint });
  }
};

const handleMouseDown = (event: MouseEvent) => {
  isDown.value = true;
  moveByMouseEvent(event);
};

const handleMouseUp = (_: MouseEvent) => {
  isDown.value = false;
  emit("moveEnd", controlPoints);
};

const handleMouseLeave = () => {
  isDown.value = false;
  emit("moveEnd", controlPoints);
};

const handleMove = (event: MouseEvent) => {
  if (!isDown.value) return;
  moveByMouseEvent(event);
};

provideSize(toRef(props, "size"));
</script>

<template>
  <svg
    class="overflow-visible cursor-pointer"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    @mouseup="handleMouseUp"
    @mouseleave="handleMouseLeave"
    @mousedown="handleMouseDown"
    @mousemove="handleMove"
  >
    <EditorBezierBackground />
    <EditorBezierForeground />
    <EditorBezierOverlay ref="overlay" />
  </svg>
</template>
