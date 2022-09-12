import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChangeEventHandler, FC } from 'react';
import { Icon } from './ui/Icon';
import { Input } from './ui/Input';
import { colors } from './ui/tokens/colors';
import { space } from './ui/tokens/space';

type UseActiveClassNameResult = { getActiveClassName: (c: string) => string };

const useActiveClassName = (): UseActiveClassNameResult => {
  const router = useRouter();

  const getActiveClassName = (route: string): string => {
    return router.pathname === route ? 'active' : '';
  };

  return { getActiveClassName };
};

type NavigationProps = {
  onSearch?: ChangeEventHandler<HTMLInputElement>;
  searchTerm?: string;
};

const Navigation: FC<NavigationProps> = ({ onSearch, searchTerm }) => {
  const { getActiveClassName } = useActiveClassName();
  return (
    <nav>
      <div className={getActiveClassName('/')}>
        <Link href='/'>
          <Icon iconName='home' />
        </Link>
      </div>
      <div>
        {onSearch && (
          <Input
            type='search'
            name='search-country'
            className='search-input' // find out why NextJS excludes styles from this class
            placeholder='Search...'
            onChange={onSearch}
            value={searchTerm}
          />
        )}
      </div>
      <div className={getActiveClassName('/about')}>
        <Link href='/about'>
          <Icon iconName='info' />
        </Link>
      </div>
      <style>
        {`
          .search-input {
            width: min(40vw, 300px);
          }

          .active {
            border-bottom: 2px solid white;
            height: 100%;
            display: flex;
            align-items: center;
          }

          .home {
            float: right;
          }

          nav {
            display: grid;
            grid-template-columns: 1fr 3fr 1fr;
            place-items: center;

            padding-left: ${space.m};
            padding-right: ${space.m};
            height: 60px;
            background-color: ${colors.onBg};
            box-shadow: 0 3px 5px ${colors.boxShadow};
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
          }`}
      </style>
    </nav>
  );
};

export { Navigation };
