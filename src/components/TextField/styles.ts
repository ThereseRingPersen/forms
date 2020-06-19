import styled from 'styled-components';
import { formColors } from './formColors';
import { InputProps, LabelProps } from './types';

export const TextInput = styled.input<InputProps>`
    position: absolute;
    height: 3.5em;
    width: 14em;
    line-height: 1.25em;
    font-size: 1em;
    padding: 1.5rem 0.875rem 0.875rem 0.875rem;
    border: none;
    outline: none;
    border-radius: 0.313rem 0.313rem 0 0;
    border-bottom: ${(props) => (props.hasError ? `0.125em solid ${formColors.color.error}` : `0`)};
    background-color: ${(props) =>
        props.isActive ? formColors.backgroundColor.dark : formColors.backgroundColor.light};
    :hover {
        border-bottom: ${(props) =>
            props.hasError ? `0.125em solid ${formColors.color.error}` : `0.0625em solid ${formColors.color.hover}`};
    }
    :focus {
        border-bottom: 0.125em solid ${(props) => (props.hasError ? formColors.color.error : formColors.color.focus)};
    }
    :focus + label {
        color: ${(props) => (props.hasError ? formColors.color.error : formColors.color.focus)};
    }
    color: ${(props) => (props.hasError ? formColors.color.error : formColors.color.active)};
`;

export const InputGroup = styled.div`
    position: relative;
    height: 3.6rem;
    width: 100%;
`;
export const Label = styled.label<LabelProps>`
    position: absolute;
    height: 1.3rem;
    line-height: 1.25em;
    padding-left: 1em;
    width: 14em;
    top: ${(props) => (props.isActive ? '5px' : '24px')};
    font-size: ${(props) => (props.isActive ? '0.8em' : '1em')};
    color: ${(props) => labelColor(props.hasError, props.isActive)};
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

function labelColor(hasError: boolean, isActive: boolean) {
    if (hasError) {
        return formColors.color.error;
    } else if (isActive) {
        return formColors.color.active;
    } else {
        return formColors.color.inactive;
    }
}
