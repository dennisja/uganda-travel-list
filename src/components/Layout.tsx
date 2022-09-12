import Head from 'next/head';
import { ChangeEventHandler, FC, ReactNode } from 'react';
import { Navigation } from './Navigation';

type LayoutProps = {
  children: ReactNode;
  onSearch?: ChangeEventHandler<HTMLInputElement>;
  searchTerm?: string;
};

const Layout: FC<LayoutProps> = ({ children, searchTerm, onSearch }) => {
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
        <Navigation onSearch={onSearch} searchTerm={searchTerm} />
        {children}
      </main>
      <style jsx>
        {`
          main {
            padding-top: 50px;
          }
        `}
      </style>
    </div>
  );
};

export { Layout };
