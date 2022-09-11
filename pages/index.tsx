import type { NextPage } from 'next';
import Head from 'next/head';
import { CountryList } from '../src/components/CountryList';
import { Input } from '../src/components/ui/Input';
import { colors } from '../src/components/ui/tokens/colors';
import { space } from '../src/components/ui/tokens/space';
import { useCountries } from '../src/hooks/useCountries';

const Home: NextPage = () => {
  const { countries, handleSearchTermChange, searchTerm } = useCountries();

  return (
    <div>
      <Head>
        <title>Ugandans Travel List</title>
        <meta
          name='description'
          content='A list of countries where you can visit without a VISA'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <nav>
          <Input
            type='search'
            name='search-country'
            className='search-input' // find out why NextJS excludes styles from this class
            placeholder='Search...'
            onChange={handleSearchTermChange}
            value={searchTerm}
          />
        </nav>
        <section>
          <CountryList countries={countries} />
        </section>
      </main>
      <style jsx>
        {`
          main {
            padding-top: 50px;
          }

          .search-input {
            width: min(40vw, 300px);
          }

          section {
            overflow: hidden;
            display: flex;
            justify-content: center;
          }

          nav {
            display: flex;
            align-items: center;
            padding-left: ${space.m};
            padding-right: ${space.m};
            height: 60px;
            background-color: ${colors.onBg};
            box-shadow: 0 3px 5px ${colors.boxShadow};
            position: fixed;
            top: 0;
            right: 0;
            left: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
