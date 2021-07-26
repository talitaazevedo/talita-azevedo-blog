import type { AppProps } from 'next/app';
import { globalStyles } from '../shared/globalStyle';
import { Sidebar } from '../components/Sidebar';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {globalStyles}
            <Sidebar />
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
