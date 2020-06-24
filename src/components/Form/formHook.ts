import { useState, useCallback, useEffect } from 'react';
import { FormValues, FormErrors, FormProps, InputHook } from './types';
import { isEqual } from 'lodash';

export const useForm = (inputs: FormProps = {}) => {
    let [values, setValues] = useState<FormValues>({});
    let [errors, setErrors] = useState<FormErrors>({});

    useEffect(() => {
        iterateValues();
    });

    const isValidating = Object.keys(inputs as FormProps)
        .map((key: string) => {
            return inputs[key];
        })
        .some((input) => {
            return input.isValidating;
        });
    const isValid =
        !isValidating &&
        Object.keys(inputs)
            .map((input) => {
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
        console.log('submitted values' + JSON.stringify(values, undefined, 2)); // TODO
    }
    const reset = useCallback(() => {
        Object.keys(inputs)
            .map((input) => {
                return inputs[input];
            })
            .forEach((input) => input.reset());
    }, []);
    const clear = useCallback(() => {
        Object.keys(inputs)
            .map((input) => {
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
