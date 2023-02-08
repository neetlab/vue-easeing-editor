<script setup lang="ts">
type EditorPresetItemProps = {
  readonly label: string;
};

const props = defineProps<EditorPresetItemProps>();
const emit = defineEmits(["click"]);
</script>

<template>
  <div>
    <button
      class="text-sm rounded bg-gray-200 p-1 w-12 h-12 active:scale-110 transition-transform duration-75"
      @click="emit('click')"
    >
      {{ props.label }}
    </button>
  </div>
</template>
