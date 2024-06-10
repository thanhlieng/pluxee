import { BORDER_RADIUS } from '@/config/themes/constants';
import PhoneInput from 'react-phone-number-input/input';
import styled from 'styled-components';

export const PhoneNumberInput = styled(PhoneInput)`
    width: 100%;
    padding: 8px 11px;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    transition: all 0.3s;
    height: 50px;
    color: var(--text-main-color);

    border: 1px solid var(--border-color);

    border-radius: ${BORDER_RADIUS};

    &:hover {
        border-color: #1d72b8;
    }

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 2px rgb(0 89 171 / 20%);
    }
`;
