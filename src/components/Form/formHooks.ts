import { useState, useCallback, useEffect } from 'react';
import { UseInputOptions, FormValues, FormErrors, FormProps } from './types';
import { isEqual } from 'lodash';

export function useInput<T extends any>(initial: T, { validations = [] }: UseInputOptions) {
    const [value, setValue] = useState<T>(initial);
    const [errors, setErrors] = useState<string[]>([]);
    const [touched, setTouched] = useState(false);
    const [isValidating, setIsValidating] = useState(false);

    const onChange = useCallback((e: any) => {
        if (e.target.type === 'checkbox') {
            setValue(e.target.checked);
        } else {
            setValue(e.target.value);
        }
    }, []);

    useEffect(() => {
        function validate() {
            async () => {
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
            };
        }
        validate();
    }, [value]);

    const isValid = errors.length === 0;

    return {
        value,
        setValue,
        errors,
        setErrors,
        clear: useCallback(() => {
            if (typeof initial === 'string') {
                setValue('' as any);
            }
        }, []),
        reset: useCallback(() => setValue(initial), []),
        onChange,
        onBlur: useCallback(() => setTouched(true), []),
        touched,
        setTouched,
        isValid,
        isValidating,
    };
}

export const useForm = (inputs: FormProps = {}) => {
    let [errors, setErrors] = useState<FormValues>({});
    let [values, setValues] = useState<FormErrors>({});

    useEffect(() => {
        let newValues: FormValues = {};
        let newErrors: FormErrors = {};
        // @ts-ignore
        Object.entries(inputs).forEach(([k, v]) => {
            newValues[k] = v.value;
            newErrors[k] = v.errors;
        });
        if (!isEqual(values, newValues)) setValues(newValues);
        if (!isEqual(errors, newErrors)) setErrors(newErrors);
    });

    // @ts-ignore
    const isValidating = Object.keys(inputs)
        .map(function (input) {
            return inputs[input];
        })
        .some(function (input) {
            input.isValidating;
        });
    const isValid =
        // @ts-ignore
        !isValidating &&
        Object.keys(inputs)
            .map(function (input) {
                return inputs[input];
            })
            .every((input) => input.isValid);

    return {
        submit: () => console.log('submit'),
        values,
        errors,
        isValid,
        isValidating,
        reset: useCallback(() => {
            // @ts-ignore
            Object.keys(inputs)
                .map(function (input) {
                    return inputs[input];
                })
                .forEach((input) => input.reset());
        }, []),
        clear: useCallback(() => {
            // @ts-ignore
            Object.keys(inputs)
                .map(function (input) {
                    return inputs[input];
                })
                .forEach((input) => input.clear());
        }, []),
    };
};
