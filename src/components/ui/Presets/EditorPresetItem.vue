<script setup lang="ts">
type EditorPresetItemProps = {
  readonly label: string;
  readonly icon: string;
};

const props = defineProps<EditorPresetItemProps>();
const emit = defineEmits(["click"]);
</script>

<template>
  <div>
    <button
      class="text-sm rounded p-0 active:scale-110 transition-transform duration-75"
      :style="{ backgroundColor: '#f4f3f1', width: '50px', height: '50px' }"
      @click="emit('click')"
    >
      <img :src="props.icon" :alt="label" />
    </button>
  </div>
</template>
