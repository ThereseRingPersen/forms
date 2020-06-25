import React from 'react';
import { formColors } from './TextField/formColors';
const icons = {
    error: {
        path: 'M9 1.03c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zM10 13H8v-2h2v2zm0-3H8V5h2v5z',
        color: formColors.color.error,
    },
};
export type FormIcon = 'error';
interface IconProps {
    icon: FormIcon;
}
const Icon = (props: IconProps) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20">
            <path fill={icons[props.icon].color} d={icons[props.icon].path}></path>
        </svg>
    );
};

export default Icon;
