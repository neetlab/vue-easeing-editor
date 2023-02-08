<script setup lang="ts">
import { computed } from "vue";

import { toStylesheet } from "../../../models/bezier-curve";
import { useControlPoints } from "../control-points";

const controlPoints = useControlPoints();
const code = computed(() => toStylesheet(controlPoints));
</script>

<template>
  <div class="w-full text-center mt-[35px]">
    <code class="text-[11px]">
      {{ code }}
    </code>
  </div>
</template>
