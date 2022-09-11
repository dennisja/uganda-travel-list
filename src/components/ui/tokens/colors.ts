const colors = {
  onBg: 'var(--primary-color)',
  bg: 'var(--background-color)',
  secondary: 'var(--secondary-color)',
  text: 'var(--secondary-color)',
  border: 'var(--border-color-primary)',
  boxShadow: 'var(--box-shadow-color)',
  green: 'var(--green)',
  grey2: 'var(--grey-2)',
  grey5: 'var(--grey-5)',
};

type Color = keyof typeof colors;

export { colors };
export type { Color };
