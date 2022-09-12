import { FC } from 'react';
import { CountryDetails } from '../../utils/types';
import { CountryListContainer } from './Container';
import { CountryListItem } from './CountryListItem';

type CountryListProps = {
  countries: readonly CountryDetails[];
};

const CountryList: FC<CountryListProps> = ({ countries }) => {
  return (
    <CountryListContainer>
      {countries.map(country => (
        <CountryListItem key={country.countryName} country={country} />
      ))}
    </CountryListContainer>
  );
};

export { CountryList };
