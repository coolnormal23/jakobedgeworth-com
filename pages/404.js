import Styles404 from '../styles/404.module.css';
import Link from 'next/link';

export default function Page404()
{
    return (
        <>
            <section className={Styles404.box404}>
                <h1 className={Styles404.headingXl}>
                    404 | Sorry, this page dosen't exist (maybe it will soon.)</h1>
                <Link href="/">
                    <h1>Back to home</h1>
                </Link>
            </section>
        </>
    );
}