import React from 'react';
import { InputAndLabelContainer, FormGroup, Input, InputGroup, Label, ErrorText, HelperText } from './styles';
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
            <InputGroup isActive={isActive} hasError={errorMessage !== null}>
                <InputAndLabelContainer isActive={isActive} hasError={errorMessage !== null}>
                    <Input
                        id={id}
                        type={type}
                        isActive={isActive}
                        hasError={errorMessage !== null}
                        onChange={onChange}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        value={value}
                        autoComplete={'off'}
                    />
                    <Label htmlFor={id} isActive={isActive} isFocused={isFocused} hasError={errorMessage !== null}>
                        {label}
                    </Label>
                </InputAndLabelContainer>
            </InputGroup>

            {helperText && errorMessage === null && <HelperText>{helperText} </HelperText>}
            {errorMessage !== null && <ErrorText>{errorMessage}</ErrorText>}
        </FormGroup>
    );
};

export default TextField;
