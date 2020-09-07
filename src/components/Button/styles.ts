import styled from 'styled-components';
import { media, colors } from '../../styles';

export const StyledButton = styled.button`
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18rem;
    ${media.sm`
      width: 100%;
   `}
    height: 3rem;
    padding: 1.2rem;
    outline: none;
    border: 2px solid ${colors.primary.medium};
    border-radius: 0.313rem;
    margin: 0.625rem 0;
    outline: none;
    font-size: 1.2rem;
    color: ${colors.text.white};
    background: ${colors.primary.medium};
    cursor: pointer;
    transition: all 0.4s;
    :hover {
        background: ${colors.text.white};
        box-shadow: inset 0 0 10px ${colors.grey.dark};
        color: ${colors.primary.medium};
    }
    :active {
        transform: translateY(4px);
    }
`;
