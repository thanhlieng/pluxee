import { media } from '@/config/themes/constants';
import styled from 'styled-components';
export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #f8fbff;
    padding-top: 2rem;
    @media only screen and ${media.xs} {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    @media only screen and ${media.sm} {
        padding-left: 5rem;
        padding-right: 5rem;
    }
    @media only screen and ${media.md} {
        padding-left: 10rem;
        padding-right: 10rem;
    }
    @media only screen and ${media.xl} {
        padding-left: 10rem;
        padding-right: 10rem;
    }
    @media only screen and ${media.xxl} {
        padding-left: 10rem;
        padding-right: 10rem;
    }
`;
