import { Colors } from '../../../lib/ui';

export const exploreTheme = {
  background: Colors.black[100],
  title: Colors.white[100],
  muted: Colors.white[60],
  card: Colors.white[100],
  cardTitle: Colors.tertiary[800],
  cardMuted: Colors.tertiary[400],
  frame: Colors.tertiary[50],
  overlayTitle: Colors.white[100],
  overlayMuted: Colors.white[80],
  scrim: ['transparent', Colors.black[60], Colors.black[90]] as const,
};
