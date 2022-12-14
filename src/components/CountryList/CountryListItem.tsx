import { FC } from 'react';

import { CountryDetails } from '../../utils/types';
import { Card } from '../ui/Card';
import { FlagIcon, FlagIconName } from '../ui/FlagIcon';
import { Quote } from '../ui/Quote';
import { radii } from '../ui/tokens/radii';
import { space } from '../ui/tokens/space';

type CountryListItemProps = {
  country: CountryDetails;
};

const CountryListItem: FC<CountryListItemProps> = ({ country }) => {
  return (
    <Card>
      <div className='country-container'>
        <div className='flag-container'>
          <FlagIcon
            countryCode={country.countryCode as FlagIconName}
            height={32}
            width={32}
            className='flag' // TODO: find out why these styles are removed
            style={{ borderRadius: '50%' }}
          />
        </div>
        <div className='country-name'>{country.countryName}</div>
      </div>

      {country.duration.value && (
        <div className='duration-container'>
          <span>Duration:</span> {country.duration.value}{' '}
          {country.duration.unit}
          {country.duration.value > 1 ? 's' : ''}
        </div>
      )}

      {country.note && <Quote>{country.note}</Quote>}

      <style jsx>{`
        .flag-container {
          flex: 1;
        }

        .flag {
          border-radius: 50%;
        }

        .country-name {
          flex: 5;
        }

        .country-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .duration-container {
          padding-bottom: ${space.m};
          padding-top: ${space.m};
        }

        .duration-container span {
          font-weight: bold;
        }
      `}</style>
    </Card>
  );
};

export { CountryListItem };
