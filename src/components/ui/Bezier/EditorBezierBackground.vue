<script setup lang="ts">
import { useSize } from "./size";

const size = useSize();
</script>

<template>
  <path :d="`M 0 ${size} L ${size} 0`" stroke="#DEE1E6" stroke-width="3" />
</template>
