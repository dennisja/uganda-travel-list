import type { NextPage } from 'next';
import { CountryList } from '../src/components/CountryList';
import { Layout } from '../src/components/Layout';
import { useCountries } from '../src/hooks/useCountries';

const Home: NextPage = () => {
  const { countries, handleSearchTermChange, searchTerm } = useCountries();

  return (
    <Layout onSearch={handleSearchTermChange} searchTerm={searchTerm}>
      <section>
        <CountryList countries={countries} />
      </section>
      <style jsx>
        {`
          section {
            overflow: hidden;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
