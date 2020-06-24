import React from 'react';
import { InputGroup, FormGroup, Label, Input, ErrorText, HelperText } from './styles';
import { TextFieldProps } from './types';

const TextField = ({ id, type, inputHook, label, helperText }: TextFieldProps) => {
    return (
        <FormGroup>
            <InputGroup>
                <Input
                    id={id}
                    type={type}
                    isActive={inputHook.isActive}
                    hasError={inputHook.errors.length > 0}
                    onChange={inputHook.onChange}
                    onBlur={inputHook.onBlur}
                    onFocus={inputHook.onFocus}
                    value={inputHook.value}
                />
                <Label htmlFor={id} isActive={inputHook.isActive} hasError={inputHook.errors.length > 0}>
                    {label}
                </Label>
            </InputGroup>
            {helperText && inputHook.errors.length === 0 && <HelperText>{helperText} </HelperText>}
            {inputHook.errors.length > 0 && <ErrorText>{inputHook.errors[0]}</ErrorText>}
        </FormGroup>
    );
};

export default TextField;
