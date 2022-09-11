const colors = {
  onBg: 'var(--primary-color)',
  bg: 'var(--background-color)',
  secondary: 'var(--secondary-color)',
  text: 'var(--secondary-color)',
  border: 'var(--border-color-primary)',
  boxShadow: 'var(--box-shadow-color)',
  green: 'var(--green)',
};

type Color = keyof typeof colors;

export { colors };
export type { Color };
