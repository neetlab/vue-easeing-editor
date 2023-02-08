<script setup lang="ts">
import { useTimeout } from "@vueuse/core";
import { computed } from "vue";

import EditorTimelapseCircle from "./EditorTimelapseCircle.vue";

export type EditorTimelapseAfterimageProps = {
  readonly delay: number;
};

const props = defineProps<EditorTimelapseAfterimageProps>();
const show = useTimeout(props.delay * 1000);
const opacity = computed(() => (show.value ? "0.1" : "0"));
</script>

<template>
  <EditorTimelapseCircle :style="{ opacity }" />
</template>
