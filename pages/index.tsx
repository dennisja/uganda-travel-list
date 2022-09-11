import type { NextPage } from 'next';
import Head from 'next/head';
import { CountryList } from '../src/components/CountryList';
import travelCountries from '../src/data/travelCountries.json';

const Home: NextPage = () => {
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

      <main
        style={{
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CountryList countries={travelCountries} />
      </main>
    </div>
  );
};

export default Home;
