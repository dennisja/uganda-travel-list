import { FC } from 'react';
import { colors } from './tokens/colors';
import { radii } from './tokens/radii';
import { space } from './tokens/space';

type InputProps = JSX.IntrinsicElements['input'];

const Input: FC<InputProps> = props => {
  return (
    <>
      <input {...props} />
      <style jsx>{`
        input {
          height: 30px;
          line-height: 22px;
          background-color: ${colors.grey2};
          border-style: none;
          border-radius: ${radii.xs};
          color: ${colors.grey5};
          padding: ${space.m};
        }
      `}</style>
    </>
  );
};

export { Input };
