import React from 'react';
import { formColors } from './TextField/formColors';
const icons = {
    security: {
        path:
            'M24 2L6 10v12c0 11.11 7.67 21.47 18 24 10.33-2.53 18-12.89 18-24V10L24 2zm0 21.98h14c-1.06 8.24-6.55 15.58-14 17.87V24H10V12.6l14-6.22v17.6z',
        color: formColors.color.inactive,
        size: '48',
    },
    error: {
        path:
            'M18 3C9.72 3 3 9.72 3 18s6.72 15 15 15c8.28 0 15-6.72 15-15S26.28 3 18 3zm1 22h-2v-2h2v2zm0-5h-2v-9h2v9z',
        color: formColors.color.error,
        size: '36',
    },
    email: {
        path:
            'M40 8H8c-2.21 0-3.98 1.79-3.98 4L4 36c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 8L24 26 8 16v-4l16 10 16-10v4z',
        color: formColors.color.inactive,
        size: '48',
    },
};
export type FormIcon = 'error' | 'email' | 'security';
interface IconProps {
    icon: FormIcon;
}
const Icon = (props: IconProps) => {
    const size = icons[props.icon].size;
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <path fill={icons[props.icon].color} d={icons[props.icon].path}></path>
        </svg>
    );
};

export default Icon;
