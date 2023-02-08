import { inject, provide, ref, Ref } from "vue";

const symbol = Symbol();

type ControlPoints = {
  readonly x1: number;
  readonly y1: number;
  readonly x2: number;
  readonly y2: number;
};

export const provideControlPoints = (value: ControlPoints): void => {
  const controlPoints = ref(value);
  provide(symbol, controlPoints);
};

export const useControlPoints = (): Ref<ControlPoints> => {
  const controlPoints = inject<Ref<ControlPoints>>(
    symbol,
    ref({
      x1: 0,
      y1: 200,
      x2: 200,
      y2: 0,
    })
  );

  return controlPoints;
};
