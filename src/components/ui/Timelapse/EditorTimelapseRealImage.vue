<script setup lang="ts">
import { useTimeout } from "@vueuse/core";
import { watch } from "vue";

import EditorTimelapseCircle from "./EditorTimelapseCircle.vue";

type EditorTimelapseRealImageProps = {
  readonly tick: number;
};

const { start, ready } = useTimeout(1300, { controls: true });

const props = defineProps<EditorTimelapseRealImageProps>();

watch(
  () => props.tick,
  () => {
    start();
  }
);
</script>

<template>
  <Transition name="fade">
    <EditorTimelapseCircle v-if="!ready" class="slide-fade-enter" />
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
