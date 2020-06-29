import styled from 'styled-components';
import { formColors } from './formColors';
import { InputProps, LabelProps, InputGroupProps } from './types';

export const Input = styled.input<InputProps>`
    position: absolute;
    width: 14rem;
    height: auto;
    padding: 1.5rem 0 0 0.5rem;
    line-height: 1.25rem;
    font-size: 1rem;
    border: none;
    background-color: inherit;
    outline: none;
    :focus {
        color: ${(props) => (props.hasError ? formColors.color.error : formColors.color.hover)};
    }
    color: ${(props) => (props.hasError ? formColors.color.error : formColors.color.active)};
`;
export const InputGroup = styled.div<InputGroupProps>`
    display: flex;
    height: 3.6rem;
    line-height: 1.5rem;
    width: 18rem;
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
    :focus-within,
    :focus {
        box-shadow: inset 0 -0.125rem 0 0 ${(props) => (props.hasError ? formColors.color.error : formColors.color.focus)};
    }
`;
export const InputAndLabelContainer = styled.div<InputProps>`
    position: relative;
    width: 12rem;
    float: left;
    flex-grow: 1;
`;
export const Label = styled.label<LabelProps>`
    position: absolute;
    height: 1.3rem;
    line-height: 1.25rem;
    padding-left: 0.5rem;
    width: 10rem;
    background-color: transparent;
    top: ${(props) => (props.isActive ? '5px' : '24px')};
    font-size: ${(props) => (props.isActive ? '0.8rem' : '1rem')};
    color: ${(props) => labelColor(props.hasError, props.isActive, props.isFocused)};
`;
export const HelperText = styled.div`
    height: 1.3rem;
    line-height: 1rem;
    color: ${formColors.color.helperText};
    font-size: 0.7rem;
`;
export const ErrorText = styled.div`
    color: ${formColors.color.error};
    font-size: 0.7rem;
`;
export const FormGroup = styled.div`
    margin-bottom: 0.7rem;
    width: 18rem;
    height: 4.5rem;
`;

export const IconContainer = styled.span`
    width: 1.5rem;
    margin: 0.5rem 0.2rem 0 0.2rem;
    align-self: center;
`;

function labelColor(hasError: boolean, isActive: boolean, isFocused: boolean) {
    if (hasError) {
        return formColors.color.error;
    } else if (isFocused) {
        return formColors.color.focus;
    } else if (isActive) {
        return formColors.color.active;
    } else {
        return formColors.color.inactive;
    }
}
