
import React from 'react';
import styled from 'styled-components';
import { GlobalSpinner } from './GlobalSpinner';

interface LoadingProps {
  size?: string;
  color?: string;
}

export const Loading: React.FC<LoadingProps> = ({ size }) => {


  return (
    <SpinnerContainer>
      <GlobalSpinner size={size} color={'#339CFD'} />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
