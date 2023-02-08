<script setup lang="ts">
import { useTimeout } from "@vueuse/core";
import { computed } from "vue";

export type EditorCircleProps = {
  readonly delay: number;
};

const props = defineProps<EditorCircleProps>();
const show = useTimeout(props.delay * 1000);
const opacity = computed(() => (show.value ? "0.3" : "0"));
</script>

<template>
  <div
    class="w-5 h-5 rounded-full bg-purple-700 transition-opacity duration-75"
    :style="{ opacity }"
  />
</template>
