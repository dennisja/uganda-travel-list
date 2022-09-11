import { ChangeEvent, useState } from 'react';
import travelCountries from '../data/travelCountries.json';
import { CountryDetails } from '../types';

type UseCountriesResult = {
  countries: readonly CountryDetails[];
  handleSearchTermChange: (e: ChangeEvent<HTMLInputElement>) => void;
  searchTerm: string;
};

const useCountries = (): UseCountriesResult => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value);
  };

  const countries = travelCountries.filter(country =>
    country.countryName.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
  );

  return { countries, handleSearchTermChange, searchTerm };
};

export { useCountries };
