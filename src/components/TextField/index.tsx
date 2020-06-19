import React from 'react';
import { InputGroup, FormGroup, Label, Input, ErrorText, HelperText } from './styles';
type Type = 'text' | 'email' | 'password';
interface TextFieldProps {
    id: string;
    type: Type;
    value?: string;
    labelText: string;
    active: boolean;
    hasError: boolean;
    errorMessage?: string;
    helperText?: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextField = (props: TextFieldProps) => {
    return (
        <FormGroup>
            <InputGroup>
                <Input
                    id={props.id}
                    isActive={props.active}
                    hasError={props.hasError}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    type={props.type}
                />
                <Label htmlFor={props.id} isActive={props.active} hasError={props.hasError}>
                    {props.labelText}
                </Label>
            </InputGroup>
            <HelperText>Here is some helpertext</HelperText>
        </FormGroup>
    );
};

export default TextField;
