import React from 'react';
import Label from './Label';
import TextInput from './TextInput';
import { formColors } from './formColors';
import { InputGroup, FormGroup, HelperText } from './styles';
type Type = 'text' | 'email' | 'password';
interface TextFieldProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
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
    ref: any;
}

const TextField = (props: TextFieldProps) => {
    return (
        <FormGroup>
            <InputGroup>
                <TextInput
                    id={props.id}
                    isActive={props.active}
                    hasError={props.hasError}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    type={props.type}
                    ref={props.ref}
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
