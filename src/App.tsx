import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import TextField from './components/TextField/TextField';
import Button from './components/Button/Button';
import { CenteredLayout } from './styles/layout';
import LoginForm from './components/Form/LoginForm/LoginForm';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <LoginForm />;
        </>
    );
};
export default App;
