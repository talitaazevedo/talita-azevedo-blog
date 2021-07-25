import { globalStyles } from '../shared/globalStyle';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            {globalStyles}
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
