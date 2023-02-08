<script setup lang="ts">
import { useSize } from "./context";

const size = useSize();
</script>

<template>
  <path :d="`M 0 ${size} L ${size} 0`" stroke="gray" stroke-width="3" />
</template>
