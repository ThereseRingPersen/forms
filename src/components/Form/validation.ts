import { ValidationResult } from './types';

export const emailFormatValidation = (email: string): ValidationResult => {
    const reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email.length < 1) {
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
        return 'Should be at least 8 characters long.';
    }
};
