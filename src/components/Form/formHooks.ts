import { useState, useCallback, useEffect } from 'react';
import { UseInputOptions, FormValues, FormErrors, FormProps, InputHook } from './types';
import { isEqual } from 'lodash';

// TODO get rid of any
export function useInput<T extends any>(initial: T, { validations = [] }: UseInputOptions): InputHook<T> {
    const [value, setValue] = useState<T>(initial);
    const [errors, setErrors] = useState<string[]>([]);
    const [touched, setTouched] = useState(false);
    const [isValidating, setIsValidating] = useState(false);
    useEffect(() => {
        validate();
    }, [value]);

    const isValid = errors.length === 0;

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

    // TODO
    function submit() {
        console.log('submit');
    }
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
    const onBlur = useCallback(() => setTouched(true), []);
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
        isValid,
        isValidating,
    };
}

export const useForm = (inputs: FormProps = {}) => {
    let [errors, setErrors] = useState<FormValues>({});
    let [values, setValues] = useState<FormErrors>({});

    useEffect(() => {
        iterateValues();
    });

    const isValidating = Object.keys(inputs)
        .map(function (input) {
            return inputs[input];
        })
        .some(function (input) {
            input.isValidating;
        });
    const isValid =
        !isValidating &&
        Object.keys(inputs)
            .map(function (input) {
                return inputs[input];
            })
            .every((input) => input.isValid);

    function iterateValues() {
        let newValues: FormValues = {};
        let newErrors: FormErrors = {};

        Object.entries(inputs).forEach(([k, v]) => {
            newValues[k] = v.value;
            newErrors[k] = v.errors;
        });
        if (!isEqual(values, newValues)) {
            setValues(newValues);
        }
        if (!isEqual(errors, newErrors)) {
            setErrors(newErrors);
        }
    }
    function submit() {
        console.log('submit');
    }
    const reset = useCallback(() => {
        Object.keys(inputs)
            .map(function (input) {
                return inputs[input];
            })
            .forEach((input) => input.reset());
    }, []);
    const clear = useCallback(() => {
        Object.keys(inputs)
            .map(function (input) {
                return inputs[input];
            })
            .forEach((input) => input.clear());
    }, []);
    return {
        values,
        errors,
        isValid,
        isValidating,
        reset,
        clear,
        submit,
    };
};
