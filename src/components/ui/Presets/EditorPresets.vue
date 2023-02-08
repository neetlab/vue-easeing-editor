<script setup lang="ts">
import { ControlPoints } from "../../../models/bezier-curve";
import { Preset } from "../../../models/preset";
import EditorPresetItem from "./EditorPresetItem.vue";

export type EditorPresetsProps = {
  readonly presets?: readonly Preset[];
};

const props = withDefaults(defineProps<EditorPresetsProps>(), {
  presets: () => [] as Preset[],
});

const emit = defineEmits<{
  (event: "change", controlPoints: ControlPoints): void;
}>();

const handleChange = (preset: Preset) => {
  emit("change", preset.value);
};
</script>

<template>
  <div class="space-y-[15px]">
    <EditorPresetItem
      v-for="preset in props.presets"
      :label="preset.id"
      :key="preset.id"
      :icon="preset.icon"
      @click="handleChange(preset)"
    />
  </div>
</template>
