import { NumberRange } from "../../types/generic";

function getGridSize(size: NumberRange<7>) {
  switch (size) {
    case 1:
      return "grid-cols-1";
    case 2:
      return "grid-cols-2";
    case 3:
      return "grid-cols-3";
    case 4:
      return "grid-cols-4";
    case 5:
      return "grid-cols-5";
    case 6:
      return "grid-cols-6";
  }
}

function getGapSize(gap: NumberRange<7>) {
  switch (gap) {
    case 1:
      return "gap-1";
    case 2:
      return "gap-2";
    case 3:
      return "gap-3";
    case 4:
      return "gap-4";
    case 5:
      return "gap-5";
    case 6:
      return "gap-6";
  }
}

export { getGridSize, getGapSize };
