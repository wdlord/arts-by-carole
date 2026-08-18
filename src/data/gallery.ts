import { labelToID } from "../scripts/navigation";
import { SERVICE } from "../data/constants";

// Gallery sections
const galleryRawData = [
  {
    name: SERVICE.INTERIOR,
    description:
      "We paint all interior surfaces including walls, ceilings, wood, cabinets, and more.",
  },
  {
    name: SERVICE.EXTERIOR,
    description:
      "Browse examples of our exterior painting work to see the clean lines, even coverage, and curb-boosting results our crew delivers.",
  },
  {
    name: SERVICE.CABINETS,
    description:
      "Take a look at our cabinet finishing projects to get a clear picture of the smooth, factory-grade finishes you can expect in your own home.",
  },
];

// Generate IDs for raw data
export const galleryData = galleryRawData.map(data => ({...data, id: labelToID(data.name)}));
