import styled from 'styled-components';
import { buttonColors } from './buttonColors';
import { media } from '../../styles';

const Button = styled.button`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.625rem 0;
    outline: none;
    font-size: 1.2rem;
    background: ${buttonColors.backgroundColor.primary};
    color: ${buttonColors.text.primary};
    width: 18rem;
    ${media.sm`
      width: 100%;
   `}
    height: 3rem;
    border: 0.125rem solid ${buttonColors.backgroundColor.primary};
    border-radius: 0.313rem;
    padding: 1.2rem;
    outline: none;
    :hover,
    :active,
    :focus {
        transition: all 0.2s;
        background: ${buttonColors.backgroundColor.primaryHover};
        color: ${buttonColors.text.primaryHover};
    }
`;
export default Button;
