import styled from 'styled-components';
import { formColors } from './formColors';
import { InputProps, LabelProps, InputGroupProps } from './types';
import { media } from '../../styles';

export const Input = styled.input<InputProps>`
    position: absolute;
    width: 100%;
    padding: 24px 0 0 8px;
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
    width: 18rem;
    ${media.sm`
      width: 100%;
   `}
    border-radius: 5px 5px 0 0;
    box-shadow: ${(props) => (props.hasError ? `inset 0 -2.5px 0 0 ${formColors.color.error}` : `0`)};
    background-color: ${(props) =>
        props.isActive ? formColors.backgroundColor.dark : formColors.backgroundColor.light};
    :hover {
        box-shadow: ${(props) =>
            props.hasError
                ? `inset 0 -2.5px 0 0 ${formColors.color.error}`
                : `inset 0 -1.25 0 0 ${formColors.color.hover}`};
    }
    :focus-within,
    :focus {
        box-shadow: inset 0 -1.25px 0 0 ${(props) => (props.hasError ? formColors.color.error : formColors.color.focus)};
    }
`;
export const InputAndLabelContainer = styled.div<InputProps>`
    position: relative;
    width: 100%;
    flex-grow: 1;
`;
export const Label = styled.label<LabelProps>`
    position: absolute;
    height: 1.3rem;
    padding-left: 0.5rem;
    width: 12rem;
    background-color: transparent;
    top: ${(props) => (props.isActive ? '5px' : '24px')};
    font-size: ${(props) => (props.isActive ? '0.8rem' : '1rem')};
    color: ${(props) => labelColor(props.hasError, props.isActive, props.isFocused)};
`;
export const HelperText = styled.div`
    color: ${formColors.color.helperText};
    font-size: 0.7rem;
    margin-top: 2.5px;
`;
export const ErrorText = styled.div`
    color: ${formColors.color.error};
    font-size: 0.7rem;
    margin-top: 2.5px;
`;
export const FormGroup = styled.div`
    margin-bottom: 14px;
    width: 18rem;
    height: 4.5rem;
    ${media.sm`
      width: 100%;
   `}
`;

export const IconContainer = styled.span`
    width: 24px;
    margin: 8px 3.2px 0 3.2px;
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
