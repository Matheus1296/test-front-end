import styled from 'styled-components';
import type { ReactNode } from 'react';


export interface StyledTitleProps {
    children: ReactNode;
}


export const StyledTiltle = styled.p<StyledTitleProps>`
  font-size: 1.4993rem;
  font-weight: bold;
  color: #000000;
  margin: 0;
`;
