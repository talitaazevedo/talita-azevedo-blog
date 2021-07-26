import styled from '@emotion/styled';
import { flexContainer } from '../../shared/globalStyle';

export const Container = styled.div`
    ${flexContainer}

    img {
        border-radius: 50%;
        width: 5.2rem;
    }
    h1 {
        margin: 0.5rem auto 1.5rem;
        font-family: 'Spartan', sans-serif;
    }
    small {
        display: block;
        font-size: 1.2rem;
        font-weight: 300;
    }
    p {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.4rem;
    }
`;
