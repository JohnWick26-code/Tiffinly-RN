import { Colors } from '../theme/colors';
import type { TypographyVariant } from '../theme/typography';

type RGBA = { r: number; g: number; b: number; a: number };

function parseColor(value: string): RGBA {
  if (value.startsWith('#')) {
    const hex = value.slice(1);
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
      a: 1,
    };
  }
  const match = value.match(/rgba?\(([^)]+)\)/);
  if (match) {
    const parts = match[1].split(',').map((p) => parseFloat(p.trim()));
    return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 };
  }
  return { r: 0, g: 0, b: 0, a: 1 };
}

export function readableOn(value: string): string {
  const { r, g, b, a } = parseColor(value);
  if (a < 0.5) return Colors.tertiary[800];
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  return luminance > 150 ? Colors.tertiary[800] : Colors.white[100];
}

export const PALETTES = [
  'primary',
  'secondary',
  'tertiary',
  'success',
  'failure',
] as const;

export const NEUTRALS = ['black', 'white'] as const;

export const TYPE_GROUPS: { title: string; variants: TypographyVariant[] }[] = [
  { title: 'Headings', variants: ['heading1', 'heading2', 'heading3', 'heading4'] },
  { title: 'Labels', variants: ['label1', 'label2', 'label3', 'label4'] },
  { title: 'Labels — Prominent', variants: ['label1P', 'label2P', 'label3P', 'label4P'] },
  { title: 'Captions', variants: ['caption1', 'caption2', 'caption3', 'caption4'] },
  { title: 'Body', variants: ['body1', 'body2'] },
];

export const FONTS = [
  {
    family: 'Baloo 2',
    role: 'Display & Headings · Latin + Devanagari',
    weights: '600 · 700',
    sample: 'Tiffinly',
  },
  {
    family: 'Mukta',
    role: 'Body & UI · Latin + Devanagari',
    weights: '400 · 500 · 600',
    sample: 'Homemade meals, delivered',
  },
  {
    family: 'Mukta',
    role: 'Hindi copy renders in the same family',
    weights: '400 · 600',
    sample: 'घर का बना खाना',
  },
  {
    family: 'Baloo Thambi 2',
    role: 'Accent / Tamil',
    weights: '400 · 600',
    sample: 'டிஃபின்லி சாப்பாடு',
  },
];

export const log = (label: string) => () => console.log(`${label} pressed`);
