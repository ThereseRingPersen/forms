import { InputHook, InputTypes } from '../Form/types';

export type Type = 'text' | 'email' | 'password';

export interface TextFieldProps {
    id: string;
    label: string;
    errorMessage: string | null;
    helperText?: string;
    isActive: boolean;
    type: Type;
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
    onFocus: (e: any) => void;
    value: string;
}

export interface LabelProps {
    isActive: boolean;
    children: string | React.ReactNode;
    hasError: boolean;
}

export interface InputProps {
    isActive: boolean;
    hasError: boolean;
}
