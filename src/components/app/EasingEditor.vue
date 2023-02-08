<script setup lang="ts">
import { reactive } from "vue";

import { ControlPoints } from "../../models/bezier-curve";
import EditorBezier from "../ui/Bezier/EditorBezier.vue";
import EditorCode from "../ui/Code/EditorCode.vue";
import { provideControlPoints } from "../ui/context";
import EditorPresets from "../ui/Presets/EditorPresets.vue";
import { PRESETS } from "../../models/preset";
import EditorTimelapse from "../ui/Timelapse/EditorTimelapse.vue";

const controlPoints = reactive<ControlPoints>({
  v1: {
    x: 0,
    y: 0,
  },
  v2: {
    x: 1,
    y: 1,
  },
});

const handleMove = (event: ControlPoints) => {
  controlPoints.v1 = event.v1;
  controlPoints.v2 = event.v2;
};

provideControlPoints(controlPoints);
</script>

<template>
  <div class="w-min">
    <EditorTimelapse />

    <div class="flex">
      <EditorPresets :presets="PRESETS" @change="handleMove" />

      <div>
        <EditorBezier
          :size="150"
          :control-points="controlPoints"
          @move="handleMove"
        />
      </div>
    </div>

    <EditorCode />
  </div>
</template>
