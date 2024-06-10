
import { DatePicker } from 'antd';
import styled from 'styled-components';

export const BirthdayPicker = styled(DatePicker)`
    color: var(--text-main-color);
    background: white;
    & input.ant-input {
        background: transparent;
    }
    width: 100%;
`;
