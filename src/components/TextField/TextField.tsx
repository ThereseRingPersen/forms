import React from 'react';
import {
    InputAndLabelContainer,
    FormGroup,
    Input,
    InputGroup,
    Label,
    ErrorText,
    HelperText,
    IconContainer,
} from './styles';
import { TextFieldProps, LeadingIcon } from './types';
import { MdLock, MdMail, MdError } from 'react-icons/md';
import { formColors } from './formColors';

export const TextField = ({
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
                <IconContainer>{leadingIcon && getIcon(leadingIcon)}</IconContainer>
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
                <IconContainer>
                    {errorMessage && <MdError size={'24px'} color={formColors.label.error} />}
                </IconContainer>
            </InputGroup>

            {helperText && errorMessage === null && <HelperText>{helperText} </HelperText>}
            {errorMessage !== null && <ErrorText>{errorMessage}</ErrorText>}
        </FormGroup>
    );
    function getIcon(icon: LeadingIcon) {
        switch (icon) {
            case 'email':
                return <MdMail size={24} color={formColors.iconColor.grey} />;
            default:
                return <MdLock size={24} color={formColors.iconColor.grey} />;
        }
    }
};
