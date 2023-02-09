import { expect, it } from "vitest";

import {
  ControlPoints,
  createProgresses,
  fromCoords,
  fromStylesheet,
  toCoords,
  toStylesheet,
} from "./bezier-curve";

const easeInOut: ControlPoints = {
  v1: {
    x: 0.42,
    y: 0,
  },
  v2: {
    x: 0.58,
    y: 1,
  },
};

it("creates coordinates from control points", () => {
  const coords = toCoords(easeInOut, 200);
  expect(coords.v1.x).toBe(84);
  expect(coords.v1.y).toBe(200);
  expect(coords.v2.x).toBeCloseTo(116);
  expect(coords.v2.y).toBe(0);
});

it("creates control point from coordinates", () => {
  const vector = fromCoords({ x: 84, y: 200 }, 200);
  expect(vector.x).toBe(0.42);
  expect(vector.y).toBe(0);
});

it("converts control points to a stylesheet", () => {
  const stylesheet = toStylesheet(easeInOut);
  expect(stylesheet).toBe("cubic-bezier(0.42, 0.0, 0.58, 1.0)");
});

it("creates control points from a stylesheet", () => {
  const controlPoints = fromStylesheet("cubic-bezier(0.42, 0.0, 0.58, 1.0)");
  expect(controlPoints).toEqual(easeInOut);
});

it("creates sequence", () => {
  const seq = createProgresses(easeInOut, 20);

  expect(seq).toMatchInlineSnapshot(`
    [
      [
        0,
        0,
      ],
      [
        0.047619047619047616,
        0.004376240046090233,
      ],
      [
        0.09523809523809523,
        0.017855047867293455,
      ],
      [
        0.14285714285714285,
        0.040904200628627006,
      ],
      [
        0.19047619047619047,
        0.07386292723745512,
      ],
      [
        0.23809523809523808,
        0.11685837632578532,
      ],
      [
        0.2857142857142857,
        0.16970182522743016,
      ],
      [
        0.3333333333333333,
        0.2317748163027487,
      ],
      [
        0.38095238095238093,
        0.30192832471720377,
      ],
      [
        0.42857142857142855,
        0.3784312436377232,
      ],
      [
        0.47619047619047616,
        0.45900838846560915,
      ],
      [
        0.5238095238095238,
        0.5409916115343909,
      ],
      [
        0.5714285714285714,
        0.6215687563622767,
      ],
      [
        0.6190476190476191,
        0.6980716752827965,
      ],
      [
        0.6666666666666666,
        0.7682251836972513,
      ],
      [
        0.7142857142857143,
        0.83029817477257,
      ],
      [
        0.7619047619047619,
        0.8831416236742146,
      ],
      [
        0.8095238095238095,
        0.9261370727625449,
      ],
      [
        0.8571428571428571,
        0.9590957993713729,
      ],
      [
        0.9047619047619048,
        0.9821449521327066,
      ],
      [
        0.9523809523809523,
        0.9956237599539098,
      ],
    ]
  `);
});
