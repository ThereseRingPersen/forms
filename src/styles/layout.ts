import styled from 'styled-components';
import { media } from './media';

export const CenteredBox = styled.div`
    width: 25rem;
    height: 25rem;
    max-width: 600px;
    max-height: 600px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 0.1rem solid #4b0082;
    border-radius: 0.313rem;
    ${media.sm`
      width: 100%;
      padding: 0;
      border: none;
   `}
`;
