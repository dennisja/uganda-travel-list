import { FC } from 'react';
import { space } from '../ui/tokens/space';

type CountryListContainerProps = JSX.IntrinsicElements['div'];

const CountryListContainer: FC<CountryListContainerProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>
        {`
          div {
            display: flex;
            overflow-x: scroll;
            flex-direction: column;
            align-items: center;
            width: min(400px, 95vw);
            padding: ${space.l};
          }
        `}
      </style>
    </>
  );
};

export { CountryListContainer };
export type { CountryListContainerProps };
