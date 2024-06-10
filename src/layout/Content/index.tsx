import React from 'react';
import { styled } from 'styled-components';

interface IContentContainerProps {
    header: React.ReactNode;
    content?: React.ReactNode;
    children?: React.ReactNode;
}

const ContentContainer: React.FC<IContentContainerProps> = React.memo(({ header, content, children }) => {
    return (
        <Container>
            <div>{header}</div>
            <div style={{ height: '100%' }}>{content || children}</div>
        </Container>
    );
});

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
`;

export default ContentContainer;
