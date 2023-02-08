<script setup lang="ts">
import EditorCircle from "./EditorCircle.vue";
import { range } from "../../../utils/range";
import { computed } from "vue";

const props = defineProps<{
  /** t -> r (0 <= r <= 1) */
  readonly timingFn: (t: number) => number;
}>();

const sequence = computed(() =>
  [...range(0, 11)].map((x) => x * 0.1).map((t) => props.timingFn(t))
);

console.log(sequence.value);
</script>

<template>
  <div class="w-full h-8 bg-slate-200 pr-4">
    <div class="relative">
      <EditorCircle
        v-for="item in sequence"
        class="absolute top-0"
        :key="item"
        :style="{ left: `${item * 100}%` }"
      />
    </div>
  </div>
</template>
