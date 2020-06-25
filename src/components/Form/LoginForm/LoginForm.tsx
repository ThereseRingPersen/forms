import React from 'react';
import { CenteredLayout } from '../../../styles/layout';
import TextField from '../../TextField';
import Button from '../../Button/Button';
import { useInput } from '../inputHook';
import { useForm } from '../formHook';
import { emailFormatValidation, passwordValidation } from '../validation';
type LoginUser = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const emailHook = useInput<string>('', {
        validations: [emailFormatValidation],
    });
    const passwordHook = useInput<string>('', {
        validations: [passwordValidation],
    });
    const form = useForm({ emailHook, passwordHook });

    return (
        <CenteredLayout>
            <TextField
                type={'email'}
                id={'email'}
                label={'Email'}
                errorMessage={emailHook.errors[0] ? emailHook.errors[0] : null}
                isActive={emailHook.isActive}
                onChange={emailHook.onChange}
                onBlur={emailHook.onBlur}
                onFocus={emailHook.onFocus}
                value={emailHook.value}
            />
            <TextField
                type={'password'}
                id={'password'}
                label={'Password'}
                errorMessage={passwordHook.errors[0] ? passwordHook.errors[0] : null}
                isActive={passwordHook.isActive}
                onChange={passwordHook.onChange}
                onBlur={passwordHook.onBlur}
                onFocus={passwordHook.onFocus}
                value={passwordHook.value}
            />
            <Button type="submit" disabled={!form.isValid} onClick={form.submit}>
                Login
            </Button>
        </CenteredLayout>
    );
};

export default LoginForm;
