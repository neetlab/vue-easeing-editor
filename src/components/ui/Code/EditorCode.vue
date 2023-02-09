<script setup lang="ts">
import { useControlPointsStylesheet } from "../control-points";

const code = useControlPointsStylesheet();
</script>

<template>
  <div class="w-full text-center mt-[35px]">
    <code class="text-[11px]">
      {{ code }}
    </code>
  </div>
</template>
