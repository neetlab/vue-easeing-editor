import { inject, provide } from "vue";
import { ControlPoints } from "../../models/bezier-curve";

const symbol = Symbol();

export const provideControlPoints = (value: ControlPoints): void => {
  provide(symbol, value);
};

export const useControlPoints = (): ControlPoints => {
  const controlPoints = inject<ControlPoints>(
    symbol,
    () => ({ v1: { x: 0, y: 0 }, v2: { x: 1, y: 1 } }),
    true
  );

  return controlPoints;
};
