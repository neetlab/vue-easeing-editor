import { DeepReadonly, inject, provide, readonly } from "vue";

import { ControlPoints } from "../../models/bezier-curve";

const symbol = Symbol();

export const provideControlPoints = (value: ControlPoints): void => {
  provide(symbol, readonly(value));
};

export const useControlPoints = (): DeepReadonly<ControlPoints> => {
  const controlPoints = inject(
    symbol,
    () => ({ v1: { x: 0, y: 0 }, v2: { x: 1, y: 1 } }),
    true
  );

  return controlPoints;
};
