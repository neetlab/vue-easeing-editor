import BezierEasing from "bezier-easing";
import { range } from "../utils/range";

export type Vector = {
  x: number;
  y: number;
};

/**
 * Represents control-points of bezier curve.
 * Consists of quads of floating point number that is 0 <= n <= 1
 */
export type ControlPoints = {
  v1: Vector;
  v2: Vector;
};

/**
 * Control-points for XY coordinates
 */
export type ControlPointsCoords = {
  v1: Vector;
  v2: Vector;
};

export const toCoords = (
  controlPoints: ControlPoints,
  size: number
): ControlPointsCoords => {
  return {
    v1: {
      x: size * controlPoints.v1.x,
      y: size * (1 - controlPoints.v1.y),
    },
    v2: {
      x: size * controlPoints.v2.x,
      y: size * (1 - controlPoints.v2.y),
    },
  };
};

export const fromCoords = (coords: Vector, size: number): Vector => {
  return {
    x: coords.x / size,
    y: 1 - coords.y / size,
  };
};

export const toStylesheet = (controlPoints: ControlPoints) =>
  `cubic-bezier(${[
    controlPoints.v1.x.toPrecision(2),
    controlPoints.v1.y.toPrecision(2),
    controlPoints.v2.x.toPrecision(2),
    controlPoints.v2.y.toPrecision(2),
  ].join(" ")})`;

export const createSequence = (p: ControlPoints, count = 20) => {
  const timingFunction = BezierEasing(
    Math.max(Math.min(p.v1.x, 1), 0),
    Math.max(Math.min(p.v1.y, 1), 0),
    Math.max(Math.min(p.v2.x, 1), 0),
    Math.max(Math.min(p.v2.y, 1), 0)
  );

  const end = count + 1;

  return [...range(0, end)]
    .map((x) => (x * 1) / end)
    .map((t) => timingFunction(t));
};
