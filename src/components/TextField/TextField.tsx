import React from 'react';
import styled from 'styled-components';
import Label from './Label';
import Input from './TextInput';

const FormGroup = styled.div`
    position: relative;
    margin-bottom: 2em;
    height: 2.5em;
`;

interface TextFieldProps {
    id: string;
    value?: string;
    labelText: string;
    isActive: boolean;
    hasError: boolean;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
}

const TextField = (props: TextFieldProps) => {
    return (
        <FormGroup>
            <Input
                id={props.id}
                isActive={props.isActive}
                hasError={props.hasError}
                onChange={props.onChange}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
            />
            <Label htmlFor={props.id} isActive={props.isActive} hasError={props.hasError}>{props.labelText}</Label>
        </FormGroup>
    );
};

export default TextField;
