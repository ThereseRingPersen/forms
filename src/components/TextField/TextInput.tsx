import React from 'react';
import styled from 'styled-components';
import { formColors } from './formColors';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    isActive: boolean;
    hasError: boolean;
}
const TextInput = styled.input<InputProps>`
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

export default TextInput;
