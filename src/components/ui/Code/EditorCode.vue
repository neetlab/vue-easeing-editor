<script setup lang="ts">
import { computed } from "vue";
import { toStylesheet } from "../../../models/bezier-curve";
import { useControlPoints } from "../context";

const controlPoints = useControlPoints();
const code = computed(() => toStylesheet(controlPoints));
</script>

<template>
  <div class="w-full text-center py-4">
    <code class="text-xs">
      {{ code }}
    </code>
  </div>
</template>
