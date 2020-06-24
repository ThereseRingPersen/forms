import { InputHook, InputTypes } from '../Form/types';

export type Type = 'text' | 'email' | 'password';

export interface TextFieldProps {
    id: string;
    type: Type;
    label: string;
    helperText?: string;
    inputHook: InputHook<string>;
}

export interface LabelProps {
    isActive: boolean;
    children: string;
    hasError: boolean;
}

export interface InputProps {
    isActive: boolean;
    hasError: boolean;
}
