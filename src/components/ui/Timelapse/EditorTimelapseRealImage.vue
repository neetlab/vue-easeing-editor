<script setup lang="ts">
import { useTimeout } from "@vueuse/core";

import { useControlPointsStylesheet } from "../control-points";
import EditorTimelapseCircle from "./EditorTimelapseCircle.vue";

const ready = useTimeout(1300);
const animationTimingFunction = useControlPointsStylesheet();
</script>

<template>
  <Transition name="fade">
    <EditorTimelapseCircle
      v-if="!ready"
      class="slide-fade-enter"
      :style="{ animationTimingFunction }"
    />
  </Transition>
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
  animation: slide-fade-out 1s linear;
  animation-fill-mode: forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
