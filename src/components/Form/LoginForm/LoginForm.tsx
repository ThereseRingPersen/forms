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
    const emailHook = useInput<string>('some', {
        validations: [emailFormatValidation],
    });
    const passwordHook = useInput<string>('', {
        validations: [passwordValidation],
    });
    const form = useForm({ emailHook, passwordHook });

    return (
        <CenteredLayout>
            <TextField id={'email'} type={'email'} label={'Email'} inputHook={emailHook} />
            <TextField id={'password'} type={'password'} label={'Password'} inputHook={passwordHook} />
            <Button type="submit" disabled={!form.isValid} onClick={form.submit}>
                Login
            </Button>
        </CenteredLayout>
    );
};

export default LoginForm;
