import easeIn from "../assets/ease-in.png";
import easeInOut from "../assets/ease-in-out.png";
import easeOut from "../assets/ease-out.png";
import { ControlPoints } from "./bezier-curve";

export type Preset = {
  id: string;
  icon: string;
  value: ControlPoints;
};

export const PRESETS: Preset[] = [
  {
    id: "ease-in-out",
    icon: easeInOut,
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
    id: "ease-in",
    icon: easeIn,
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
  {
    id: "ease-out",
    icon: easeOut,
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
];
