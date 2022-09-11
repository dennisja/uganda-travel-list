import { FC } from 'react';
import { radii } from './tokens';
import { colors } from './tokens/colors';
import { space } from './tokens/space';

type CardProps = JSX.IntrinsicElements['div'];

const Card: FC<CardProps> = ({ children, ...props }) => {
  return (
    <>
      <div {...props}>{children}</div>
      <style jsx>{`
        div {
          padding: ${space.l};
          background-color: ${colors.onBg};
          border: 2px solid ${colors.border};
          border-radius: ${radii.s};
          box-shadow: -3px 3px 5px ${colors.boxShadow};
          margin: ${space.xs};
          display: flex;
          flex-direction: column;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export { Card };
export type { CardProps };
