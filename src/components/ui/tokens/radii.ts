const radii = {
  xs: 'var( --radii-xs)',
  s: 'var( --radii-s)',
  m: 'var(--radii-m)',
  round: 'var(--radii-50)',
};

type Radii = keyof typeof radii;

export { radii };
export type { Radii };
