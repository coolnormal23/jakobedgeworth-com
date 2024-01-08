import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Layout from '../components/layout';
import Link from 'next/link'
import Date from '../components/date';

export async function getStaticProps()
{
    const allPostsData = getSortedPostsData();
    return { //yes, curly on same line is required
        props:
        {
            allPostsData,
        },
    };
}

export default function blogHome({ allPostsData })
{
    return (
        <Layout>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>blog <Link href="/">(go home)</Link></h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/blog/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>

                    ))}
                </ul>
            </section>
        </Layout>
    );
}