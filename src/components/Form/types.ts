export type FormValues = {
    [key: string]: any;
};

export type FormErrors = {
    [key: string]: string[];
};

export interface FormProps {
    [key: string]: ReturnType<typeof useInput>;
}

export type Validation = (value: any) => Promise<ValidationResult> | ValidationResult;

export interface UseInputOptions {
  validations?: Validation[];
}
export type ValidationResult = string | void;

export interface UseInputOptions {
    validations?: Validation[];
}

export interface InputHook{}
