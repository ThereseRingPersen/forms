import React from 'react';
import { InputAndLabelContainer, FormGroup, Input, InputGroup, Label, ErrorText, HelperText } from './styles';
import { TextFieldProps, LeadingIcon } from './types';
import { MdLock, MdMail, MdError } from 'react-icons/md';
import { formColors } from './formColors';

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
    leadingIcon,
    trailingIcon,
}: TextFieldProps) => {
    return (
        <FormGroup>
            <InputGroup isActive={isActive} hasError={errorMessage !== null}>
                {leadingIcon && getIcon(leadingIcon)}
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
                {errorMessage && <MdError size={'2rem'} color={formColors.color.error} />}
            </InputGroup>

            {helperText && errorMessage === null && <HelperText>{helperText} </HelperText>}
            {errorMessage !== null && <ErrorText>{errorMessage}</ErrorText>}
        </FormGroup>
    );
    function getIcon(icon: LeadingIcon) {
        switch (icon) {
            case 'email':
                return <MdMail size={'2rem'} color={formColors.color.inactive} />;
                break;
            default:
                return <MdLock size={'2rem'} color={formColors.color.inactive} />;
                break;
        }
    }
};

export default TextField;
