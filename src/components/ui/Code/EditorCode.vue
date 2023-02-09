<script setup lang="ts">
import { useControlPointsStylesheet } from "../control-points";

const code = useControlPointsStylesheet();
</script>

<template>
  <div class="w-full text-[11px] text-center mt-[43px] mb-[3px]">
    <code>
      {{ code }}
    </code>
  </div>
</template>
