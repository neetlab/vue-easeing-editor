import { computed, ComputedRef } from "vue";
import { ControlPointsCoords, toCoords } from "../../../models/bezier-curve";
import { useControlPoints } from "../context";
import { useSize } from "./context";

export const useControlPointCoords = (): ComputedRef<ControlPointsCoords> => {
  const size = useSize();
  const controlPoints = useControlPoints();

  const controlPointCoords = computed(() =>
    toCoords(controlPoints, size.value)
  );

  return controlPointCoords;
};
