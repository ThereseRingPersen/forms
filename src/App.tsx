import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import TextField from './components/TextField/TextField';
import Button from './components/Button/Button';

const App = () => {
    const [field1, setfieldState1] = React.useState<boolean>(false); // controls label text size and labelposition.
    const [value1] = React.useState<string>('');
    return (
        <Layout>
            <GlobalStyle />
            <TextField
                id={'input1'}
                labelText={'Field1'}
                hasError={true}
                isActive={field1}
                onChange={onChangeField1}
                onBlur={onBlurField1}
                onFocus={onFocusField1}
                value={value1}
            />
            <Button>submit </Button>
        </Layout>
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

export default App;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
`;
