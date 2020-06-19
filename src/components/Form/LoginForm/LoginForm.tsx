import React from 'react';
import {CenteredLayout} from '../../../styles/layout';
import TextField from '../../TextField/TextField';
import Button from '../../Button/Button';

type LoginUser = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const [field1, setfieldState1] = React.useState<boolean>(false); // controls label text size and labelposition.
    const [field2, setfieldState2] = React.useState<boolean>(false); // controls label text size and labelposition.
    const onSubmit = (user: LoginUser) => console.log('submitted' + user);
    return (
            <CenteredLayout>
                <form action="">
                    <TextField
                        id={'email'}
                        type={'email'}
                        labelText={'Email'}
                        active={field1}
                        hasError={false}
                        onChange={onChangeField1}
                        onBlur={onBlurField1}
                        onFocus={onFocusField1}
                    />
                    <TextField
                        id={'password'}
                        type={'password'}
                        labelText={'Password'}
                        hasError={true}
                        active={field2}
                        onChange={onChangeField1}
                        onBlur={onBlurField1}
                        onFocus={onFocusField1}
                    />
                    <Button type="submit">Login </Button>
                </form>
            </CenteredLayout>
    );
    function onChangeField1(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
    }
    function onBlurField1(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        if (e.currentTarget.value.length > 0) {
            setfieldState1(true);
        } else {
            setfieldState1(false);
        }
    }

    function onFocusField1(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        setfieldState1(true);
    }
};

export default LoginForm;