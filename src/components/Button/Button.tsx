import styled from 'styled-components';
import { media, colors } from '../../styles';

const Button = styled.button`
    text-decoration: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.625rem 0;
    outline: none;
    font-size: 1.2rem;
    background: ${colors.primary.dark};
    color: ${colors.text.white};
    width: 18rem;
    ${media.sm`
      width: 100%;
   `}
    height: 3rem;
    border-radius: 0.313rem;
    padding: 1.2rem;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
    :hover,
    :active,
    :focus {
        background: ${colors.primary.medium};
    }
`;
export default Button;
