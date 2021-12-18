export type Space = 'none' | '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl';
export type SpacePair =
  | '3xs-2xs'
  | '2xs-xs'
  | 'xs-s'
  | 's-m:'
  | 'm-l:'
  | 'l-xl'
  | 'xl-2xl'
  | '2xl-3xl';
export type Gutter = 'none' | Space | SpacePair;
export type Size = -2 | -1 | 0 | 1 | 2 | 3 | 4 | 5;
