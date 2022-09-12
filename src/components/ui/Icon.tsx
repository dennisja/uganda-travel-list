import { FC, SVGProps } from 'react';
import { radii } from './tokens/radii';

type IconName = 'instagram' | 'twitter' | 'github' | 'info' | 'share' | 'home';

type IconProps = {
  iconName: IconName;
} & SVGProps<SVGSVGElement>;

const Icon: FC<IconProps> = ({ iconName, ...svgProps }) => {
  return (
    <svg width='24' height='24' {...svgProps}>
      <use href={`/icons-sprite.svg#${iconName}`} />
      {/* TODO: remove this once we figure out why nextjs style doesn't allow passing styles via className to Icon */}
      <style>
        {`
        svg:hover {
            border: 1px solid white;
            border-radius: ${radii.round};
            transition: 0.3s;
        }
        `}
      </style>
    </svg>
  );
};

export { Icon };
export type { IconName, IconProps };
