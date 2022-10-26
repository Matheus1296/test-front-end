import styled from 'styled-components';
import type { ReactNode } from 'react';


export interface StyledDivProps {
    children: ReactNode;
}

export  const StyledButton = styled.button<StyledDivProps>`
    width: 30px;
    height: 30px;
    border-radius:50%;
    padding: 0;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
`;
