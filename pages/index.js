import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home()
{
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.linksList}>
        <p><a href="https://github.com/coolnormal23">github</a> | <a href="mailto:jakobedgeworth@gmail.com">contact (mail)</a></p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Senior Undergrad CS @ UNT. I'm passionate about web dev and I like NBA basketball. Right now I'm studying to build apps and sites (like this one!) with NextJS.</p>
      </section>
      <section className={utilStyles.homeFlexbox}>
        <Link href="/bloghome" className={utilStyles.orb}>
          <p className={utilStyles.headingLg}>blog</p>
        </Link>
        <Link href="/projects/projecthome" className={utilStyles.orb}>
          <p className={utilStyles.headingLg}>projects</p>
        </Link>
      </section>
    </Layout>
  );
}
