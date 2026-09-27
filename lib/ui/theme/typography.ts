import { BodyFont, DisplayFont } from './fonts';

interface TextStyle {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
  letterSpacing: number;
}

const heading1: TextStyle = {
  fontSize: 28,
  lineHeight: 40,
  fontFamily: DisplayFont[700],
  letterSpacing: -0.3,
};

const heading2: TextStyle = {
  fontSize: 24,
  lineHeight: 34,
  fontFamily: DisplayFont[700],
  letterSpacing: -0.2,
};

const heading3: TextStyle = {
  fontSize: 20,
  lineHeight: 30,
  fontFamily: DisplayFont[600],
  letterSpacing: -0.1,
};

const heading4: TextStyle = {
  fontSize: 17,
  lineHeight: 26,
  fontFamily: DisplayFont[600],
  letterSpacing: 0,
};

const label1: TextStyle = {
  fontSize: 16,
  lineHeight: 22,
  fontFamily: BodyFont[400],
  letterSpacing: 0,
};

const label2: TextStyle = {
  fontSize: 14,
  lineHeight: 20,
  fontFamily: BodyFont[400],
  letterSpacing: 0.1,
};

const label3: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
  fontFamily: BodyFont[400],
  letterSpacing: 0.2,
};

const label4: TextStyle = {
  fontSize: 11,
  lineHeight: 14,
  fontFamily: BodyFont[400],
  letterSpacing: 0.3,
};

const label1P: TextStyle = {
  fontSize: 16,
  lineHeight: 22,
  fontFamily: BodyFont[600],
  letterSpacing: 0,
};

const label2P: TextStyle = {
  fontSize: 14,
  lineHeight: 20,
  fontFamily: BodyFont[600],
  letterSpacing: 0.1,
};

const label3P: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
  fontFamily: BodyFont[600],
  letterSpacing: 0.2,
};

const label4P: TextStyle = {
  fontSize: 11,
  lineHeight: 14,
  fontFamily: BodyFont[600],
  letterSpacing: 0.3,
};

const caption1: TextStyle = {
  fontSize: 14,
  lineHeight: 18,
  fontFamily: BodyFont[400],
  letterSpacing: 0.1,
};

const caption2: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
  fontFamily: BodyFont[400],
  letterSpacing: 0.2,
};

const caption3: TextStyle = {
  fontSize: 11,
  lineHeight: 14,
  fontFamily: BodyFont[400],
  letterSpacing: 0.3,
};

const caption4: TextStyle = {
  fontSize: 10,
  lineHeight: 12,
  fontFamily: BodyFont[400],
  letterSpacing: 0.4,
};

const body1: TextStyle = {
  fontSize: 16,
  lineHeight: 24,
  fontFamily: BodyFont[400],
  letterSpacing: 0,
};

const body2: TextStyle = {
  fontSize: 14,
  lineHeight: 22,
  fontFamily: BodyFont[400],
  letterSpacing: 0.1,
};

export const Typography = {
  heading1,
  heading2,
  heading3,
  heading4,
  label1,
  label2,
  label3,
  label4,
  label1P,
  label2P,
  label3P,
  label4P,
  caption1,
  caption2,
  caption3,
  caption4,
  body1,
  body2,
} as const;

export type TypographyVariant = keyof typeof Typography;
