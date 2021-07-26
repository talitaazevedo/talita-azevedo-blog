import styled from '@emotion/styled';
import { flexContainer } from '../../shared/globalStyle';

export const SideBar = styled.aside`
    ${flexContainer}
    border-right: 1px solid var(--white-700);
    height: 100vh;
    padding: 2rem;
    width: 20rem;
    z-index: 2;
    position: fixed;
    text-align: center;

    nav {
        width: 100%;
    }
`;

export const SocialMenu = styled.nav`
    margin: 2rem auto;
    ul {
        display: flex;
        justify-content: space-around;

        li {
            a {
                svg {
                    width: 2em;
                    height: 2em;
                }
            }
        }
    }
`;
export const Menu = styled.nav`
    ul {
        ${flexContainer}

        li {
            padding: 0.5rem 0px;

            width: 100%;

            a {
                line-height: 2rem;
                font-size: 1.2rem;
            }
        }
    }
`;
