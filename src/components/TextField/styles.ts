import styled from 'styled-components';
import { formColors } from './formColors';
import { InputProps, LabelProps } from './types';

export const Input = styled.input<InputProps>`
    position: absolute;
    height: 3.5rem;
    width: 14rem;
    line-height: 1.25rem;
    font-size: 1rem;
    padding: 1.5rem 0.875rem 0.875rem 0.875rem;
    background-color: ${formColors.backgroundColor.default};
    border: none;
    outline: none;
    border-radius: 0.313rem 0.313rem 0 0;
    box-shadow: ${(props) => (props.hasError ? `inset 0 -0.125rem 0 0 ${formColors.color.error}` : `0`)};
    background-color: ${(props) =>
        props.isActive ? formColors.backgroundColor.dark : formColors.backgroundColor.light};
    :hover {
        box-shadow: ${(props) =>
            props.hasError
                ? `inset 0 -0.125rem 0 0 ${formColors.color.error}`
                : `inset 0 -0.0625rem 0 0 ${formColors.color.hover}`};
    }
    :focus {
        box-shadow: inset 0 -0.125rem 0 0 ${(props) => (props.hasError ? formColors.color.error : formColors.color.focus)};
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
function inputBackgroundColor(isActive: boolean) {}
