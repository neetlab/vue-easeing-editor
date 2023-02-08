import { inject, provide, ref, Ref } from "vue";

const symbol = Symbol();

export const provideSize = (value: number): void => {
  const size = ref(value);
  provide(symbol, size);
};

export const useSize = (): Ref<number> => {
  const size = inject<Ref<number>>(symbol, ref(0));
  return size;
};
