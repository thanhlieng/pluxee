import { RADIUS, SHADOW } from '@/config/theme';
import { styled } from 'styled-components';

export const HeaderContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 55px;
    background-color: #fff;
    border-radius: ${RADIUS};
    box-shadow: ${SHADOW};
`;

export const HeaderTitleStyled = styled.h3`
    margin-bottom: 0;
`;
