import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export async function getStaticProps({ params })
{
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export async function getStaticPaths()
{
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post({ postData })
{
    return (
        <>
            <Layout>
                <Head>
                    <title>{postData.title}</title>
                </Head>
                <article>
                    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={postData.date} />
                    </div>
                    <div className={utilStyles.blogBody} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                    <div className={utilStyles.doneReading}>
                        <p>Done reading? <Link href="/bloghome">Back to blog home</Link> or <Link href="/">back to home</Link></p>
                    </div>
                </article>
            </Layout>
        </>
    );
}