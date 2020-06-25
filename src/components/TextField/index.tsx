import React from 'react';
import { InputGroup, FormGroup, Input, Label, ErrorText, HelperText } from './styles';
import { TextFieldProps } from './types';

const TextField = ({
    id,
    label,
    helperText,
    errorMessage,
    isActive,
    type,
    onChange,
    onBlur,
    onFocus,
    value,
    isFocused,
}: TextFieldProps) => {
    return (
        <FormGroup>
            <InputGroup>
                <Input
                    id={id}
                    type={type}
                    isActive={isActive}
                    hasError={errorMessage !== null}
                    onChange={onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    value={value}
                />
                <Label htmlFor={id} isActive={isActive} isFocused={isFocused} hasError={errorMessage !== null}>
                    {label}
                </Label>
            </InputGroup>
            {helperText && errorMessage !== null && <HelperText>{helperText} </HelperText>}
            {errorMessage !== null && <ErrorText>{errorMessage}</ErrorText>}
        </FormGroup>
    );
};

export default TextField;
