import styled from 'styled-components';
import { formColors } from './formColors';

export const InputGroup = styled.div`
    position: relative;
    height: 3.6rem;
    width: 100%;
`;
export const HelperText = styled.div`
    height: 1.3rem;
    line-height: 1rem;
    color: ${formColors.color.helperText};
    font-size: 0.8rem;
`;
export const ErrorText = styled.div`
    color: ${formColors.color.error};
    font-size: 0.8rem;
`;
export const FormGroup = styled.div`
    margin-bottom: 0.5rem;
    width: 14rem;
    height: 4.5rem;
`;
