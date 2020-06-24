import { useState, useCallback, useEffect } from 'react';
import { UseInputOptions, InputHook, InputTypes } from './types';

// TODO get rid of any
export function useInput<T>(initial: T, { validations = [] }: UseInputOptions): InputHook<T> {
    const [value, setValue] = useState<T>(initial);
    const [errors, setErrors] = useState<string[]>([]);
    const [touched, setTouched] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isValidating, setIsValidating] = useState(false);
    useEffect(() => {
        isActivated();
    }, [value]);

    const isValid = errors.length === 0;

    async function validate(): Promise<void> {
        setIsValidating(true);
        let newErrors: string[] = [];
        await Promise.all(
            validations.map(async (validation) => {
                const result = await validation(value);
                if (result) {
                    newErrors.push(result);
                }
            }),
        );
        setErrors(newErrors);
        setIsValidating(false);
    }
    const isActivated = () => {
        if (typeof value === 'string') {
            setIsActive(value.length > 0);
        } else if (typeof value === 'boolean') {
            setIsActive(value);
        }
    };
    // TODO
    function submit() {}
    const clear = useCallback(() => {
        if (typeof initial === 'string') {
            setValue('' as any); // TODO Get rid of any
        }
    }, []);
    const onChange = useCallback((e: any) => {
        if (e.target.type === 'checkbox') {
            setValue(e.target.checked);
        } else {
            setValue(e.target.value);
        }
    }, []);
    const reset = useCallback(() => {
        setValue(initial);
    }, []);

    const onBlur = useCallback(() => {
        setTouched(true);
        validate();
    }, []);
    const onFocus = useCallback(() => {
        setErrors([]);
        setIsActive(true);
    }, []);
    return {
        submit,
        value,
        setValue,
        errors,
        setErrors,
        touched,
        setTouched,
        clear,
        reset,
        onChange,
        onBlur,
        onFocus,
        isValid,
        isValidating,
        isActive,
    };
}