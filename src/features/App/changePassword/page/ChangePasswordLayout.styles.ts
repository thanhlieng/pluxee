import { FONT_SIZE, FONT_WEIGHT, media } from '@/config/themes/constants';
import styled from 'styled-components';
export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: #f8fbff;
    padding-top:2rem;

    @media only screen and ${media.xs} {
        padding-left: 2rem;
        padding-right: 2rem;
    }
    @media only screen and ${media.sm} {
        padding-left: 5rem;
        padding-right: 5rem;
    }
    @media only screen and ${media.md} {
        padding-left: 15rem;
        padding-right: 15rem;
    }
    @media only screen and ${media.xl} {
        padding-left: 25rem;
        padding-right: 25rem;
    }
    @media only screen and ${media.xxl} {
        padding-left: 40rem;
        padding-right: 40rem;
    }
`;

export const Title = styled.div`
    margin-bottom: 1rem;
    color: black;
    font-size: ${FONT_SIZE.md};
    text-align: center;
    font-weight: ${FONT_WEIGHT.bold};
    margin-top: 1rem;
    text-align: center;
`;

export const Package = styled.div`
    width: 49.5%;
    background-color: #f7f7f7;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin-top: 1rem;
    padding: 10px;
`;

export const Text = styled.div`
    color: black;
    font-weight: bold;
    margin-bottom: 0.3rem;
    font-size: 13px;
`

export const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 1.875rem;
`;

export const VerifyEmailDescription = styled.div`
  margin-bottom: 1.875rem;
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.regular};

  @media only screen and ${media.xs} {
    font-size: ${FONT_SIZE.xxs};
  }

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const NoCodeText = styled.div`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.regular};
  text-decoration: underline;
  cursor: pointer;
`;