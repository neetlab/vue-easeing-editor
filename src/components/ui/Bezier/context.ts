import { inject, provide, readonly, ref, Ref } from "vue";

const symbol = Symbol();

export const provideSize = (value: Ref<number>): void => {
  const size = readonly(value);
  provide(symbol, size);
};

export const useSize = (): Readonly<Ref<number>> => {
  const size = inject<Ref<number>>(symbol, ref(0));
  return size;
};
