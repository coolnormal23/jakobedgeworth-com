import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps })
{
    return (
        <ThemeProvider>
            <>
                <Component {...pageProps} />
                <Analytics />
            </>
        </ThemeProvider>
    );
}