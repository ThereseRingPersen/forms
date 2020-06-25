import { ValidationResult } from './types';

export const emailFormatValidation = (email: string): ValidationResult => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email.length === 0) {
        return 'Email is required.';
    }
    if (!reg.test(email)) {
        return 'Email format is incorrect.';
    }
};

export const passwordValidation = (password: string): ValidationResult => {
    if (password.length < 1) {
        return 'Password is required.';
    }
    if (password.length < 8) {
        return 'Password must have minimum 8 characters.';
    }
};
