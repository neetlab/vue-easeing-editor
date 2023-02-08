<script setup lang="ts">
import { ref } from "vue";

import EasingEditor from "./components/app/EasingEditor.vue";

const easing = ref<string>("cubic-bezier(0.0, 0.0, 1.0, 1.0)");
</script>

<template>
  <div class="flex h-full items-center justify-center">
    <EasingEditor v-model="easing" />
  </div>
</template>
