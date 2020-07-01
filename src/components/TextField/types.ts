export type Type = 'text' | 'email' | 'password';
export type LeadingIcon = 'password' | 'email';

export interface TextFieldProps {
    id: string;
    label: string;
    errorMessage: string | null;
    helperText?: string;
    isActive: boolean;
    type: Type;
    leadingIcon?: LeadingIcon;
    trailingIcon?: string;
    onChange: (e: any) => void;
    onBlur: (e: any) => void;
    onFocus: (e: any) => void;
    value: string;
    isFocused: boolean;
}

export interface LabelProps {
    isActive: boolean;
    children: string | React.ReactNode;
    hasError: boolean;
    isFocused: boolean;
}

export interface InputProps {
    isActive: boolean;
    hasError: boolean;
}

export interface InputGroupProps {
    isActive: boolean;
    hasError: boolean;
}
