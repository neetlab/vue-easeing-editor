import { ControlPoints } from "./bezier-curve";

export type Preset = {
  id: string;
  value: ControlPoints;
};

export const PRESETS: Preset[] = [
  {
    id: "ease-in-out",
    value: {
      v1: {
        x: 0.42,
        y: 0,
      },
      v2: {
        x: 0.58,
        y: 1,
      },
    },
  },
  {
    id: "ease-out",
    value: {
      v1: {
        x: 0,
        y: 0,
      },
      v2: {
        x: 0.58,
        y: 1,
      },
    },
  },
  {
    id: "ease-in",
    value: {
      v1: {
        x: 0.42,
        y: 0,
      },
      v2: {
        x: 1,
        y: 1,
      },
    },
  },
];
