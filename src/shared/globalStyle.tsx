import { css, Global } from '@emotion/react';

export const globalStyles = (
    <Global
        styles={css`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            :root {
                --white-900: #fff;
                --white-800: #f3f3f7;
                --white-700: #e7e7ef;
                --gray-200: #d0d2dc;
                --gray-900: #2b2d42;
                --cyan-500: #08b2e3;
                --yellow-200: #f9efdc;
                --yellow-500: #f4b02a;
                --pink-400: #ec496b;
                --pink-700: #b81438;
                --black-900: #0c090d;
            }
            h1,
            h2,
            h3,
            h4,
            h5 {
                font-family: 'Spartan', Roboto, sans-serif;
                font-weight: 600;
            }
            h1 {
                font-size: 1.6rem;
            }
            body {
                background: var(--black-900);
                color: var(--yellow-500);
            }
            body,
            input,
            textarea,
            select,
            button {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
                    Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
                    'Segoe UI Emoji', 'Segoe UI Symbol';
            }
            ul,
            ol {
                list-style-type: none !important;
            }
            button {
                cursor: pointer;
            }
            a {
                color: inherit;
                text-decoration: none;
                display: block;
            }

            @media (max-width: 1080px) {
                html {
                    font-size: 93.75%; //font 15px
                }
            }
            @media (max-width: 720px) {
                html {
                    font-size: 87.5%; //14px;
                }
            }
        `}
    />
);

export const flexContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
