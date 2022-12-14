import { FC } from 'react';
import { radii } from './tokens/radii';
import { colors } from './tokens/colors';
import { space } from './tokens/space';

type QuoteProps = JSX.IntrinsicElements['div'];

const Quote: FC<QuoteProps> = ({ children, ...props }) => {
  return (
    <>
      <div {...props}>{children}</div>
      <style jsx>{`
        div {
          border-left: 3px solid ${colors.green};
          padding: ${space.m};
          font-style: italic;
          font-weight: bolder;
          border-radius: ${radii.xs};
        }
      `}</style>
    </>
  );
};

export { Quote };
export type { QuoteProps };
