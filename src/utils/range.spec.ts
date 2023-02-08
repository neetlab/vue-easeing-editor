import { expect, it } from "vitest";

import { range } from "./range";

it("creates sequence", () => {
  const array = [...range(0, 10)];
  expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
