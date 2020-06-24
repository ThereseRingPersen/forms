export type InputTypes = string | boolean;

export type FormValues = {
    [key: string]: any;
};

export type FormErrors = {
    [key: string]: string[];
};

export interface FormProps {
    [key: string]: InputHook<any>;
}

export type Validation = (value: any) => Promise<ValidationResult> | ValidationResult;

export interface UseInputOptions {
    validations?: Validation[];
}
export type ValidationResult = string | void;

export interface UseInputOptions {
    validations?: Validation[];
}

export interface InputHook<T> {
    submit: () => void;
    value: T;
    setValue: React.Dispatch<React.SetStateAction<T>>;
    errors: string[];
    setErrors: React.Dispatch<React.SetStateAction<string[]>>;
    touched: boolean;
    setTouched: React.Dispatch<React.SetStateAction<boolean>>;
    isValid: boolean;
    isValidating: boolean;
    onChange: (e: any) => void;
    onBlur: () => void;
    onFocus: () => void;
    clear: () => void;
    reset: () => void;
    isActive: boolean;
}
