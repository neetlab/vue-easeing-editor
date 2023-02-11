<script setup lang="ts">
import { useTimeout } from "@vueuse/core";

import { useControlPointsStylesheet } from "../control-points";
import EditorTimelapseCircle from "./EditorTimelapseCircle.vue";

const ready = useTimeout(1300);
const animationTimingFunction = useControlPointsStylesheet();
</script>

<template>
  <EditorTimelapseCircle
    v-if="!ready"
    class="slide-fade-enter"
    :style="{ animationTimingFunction }"
  />
</template>

<style scoped>
@keyframes slide-fade-out {
  0% {
    left: 0%;
  }
  100% {
    left: 100%;
  }
}

.slide-fade-enter {
  position: absolute;
  top: 0;
  animation-name: slide-fade-out;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
</style>
