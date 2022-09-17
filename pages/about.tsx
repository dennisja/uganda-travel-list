import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '../src/components/Layout';
import { Icon } from '../src/components/ui/Icon';
import { Quote } from '../src/components/ui/Quote';
import { colors } from '../src/components/ui/tokens/colors';
import { radii } from '../src/components/ui/tokens/radii';
import { space } from '../src/components/ui/tokens/space';

const Home: NextPage = () => {
  return (
    <Layout>
      <section>
        <Quote style={{ width: 'min(400px, 95vw)' }}>
          To travel to some countries, you will either need a direct flight or
          make sure that your connecting flight is in a country that allows you
          to visit without a VISA.
        </Quote>

        <h3>Created by</h3>
        <Image
          src='/dennis.jpeg'
          width='200px'
          height='200px'
          className='photo'
          style={{ borderRadius: radii.round }}
        />
        <div style={{ padding: space.l }}>
          <Link href='https://twitter.com/dennisjjagwe'>
            <Icon
              iconName='twitter'
              style={{ width: '50px', height: '50px', marginRight: space.m }}
            />
          </Link>
          <Link href='https://www.instagram.com/esistdj'>
            <Icon
              iconName='instagram'
              style={{ width: '50px', height: '50px' }}
            />
          </Link>
        </div>
        <h3>Contribute</h3>
        <Link href='https://github.com/dennisja/uganda-travel-list'>
          <Icon iconName='github' style={{ width: '50px', height: '50px' }} />
        </Link>

        <h3>
          This list wat extracted from this{' '}
          <a
            target='_blank'
            rel='noreferrer'
            href='https://twitter.com/jonahkirabo/status/1547127420842647553?ref_src=twsrc%5Etfw'
          >
            tweet
          </a>
        </h3>
      </section>
      <style jsx>
        {`
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: ${space.xl};
          }

          .photo {
            border-radius: ${radii.round};
          }

          h3 {
            padding-bottom: ${space.l};
            padding-top: ${space.xxl};
          }

          h3 a {
            text-decoration: none;
            color: ${colors.green};
          }

          h3 a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </Layout>
  );
};

export default Home;
