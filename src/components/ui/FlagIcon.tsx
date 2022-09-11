import { FC, SVGProps } from 'react';
import countries from '../../data/countries.json';

type FlagIconName = keyof typeof countries;

type FlagIconProps = {
  countryCode: FlagIconName;
} & SVGProps<SVGSVGElement>;

const FlagIcon: FC<FlagIconProps> = ({ countryCode, ...svgProps }) => {
  return (
    <svg width='24' height='24' {...svgProps}>
      <use href={`/flags-sprite.svg#flag-icons-${countryCode}`} />
    </svg>
  );
};

export { FlagIcon };
export type { FlagIconName, FlagIconProps };
