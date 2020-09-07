import React from 'react';
import { ButtonProps } from './types';
import { StyledButton } from './styles';
import Spinner from '../Spinner/Spinner';

const Button = (props: ButtonProps) => {
    return <StyledButton>{props.loading && <Spinner />}</StyledButton>;
};
export default Button;
