const SHADOW_RGB = '26, 18, 7';

const withAlpha = (color: string, alpha: number): string => {
  if (color.startsWith('#') && color.length === 7) {
    const red = parseInt(color.slice(1, 3), 16);
    const green = parseInt(color.slice(3, 5), 16);
    const blue = parseInt(color.slice(5, 7), 16);

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  }

  return color;
};

export const Elevation = {
  none: {},

  low: {
    boxShadow: `0px 2px 4px rgba(${SHADOW_RGB}, 0.06)`,
  },

  mid: {
    boxShadow: `0px 6px 12px rgba(${SHADOW_RGB}, 0.1)`,
  },

  high: {
    boxShadow: `0px 12px 24px rgba(${SHADOW_RGB}, 0.16)`,
  },
} as const;

export const focusGlow = (color: string) => ({
  boxShadow: `0px 0px 8px ${withAlpha(color, 0.25)}`,
});

export type ElevationToken = keyof typeof Elevation;
