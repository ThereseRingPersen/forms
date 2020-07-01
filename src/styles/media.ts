const breakPoints = {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
};

export const media = (Object.keys(breakPoints) as Array<keyof typeof breakPoints>).reduce((acc, key) => {
    acc[key] = (style: String) => `@media (max-width: ${breakPoints[key]}) { ${style} }`;
    return acc;
}, {} as { [index: string]: Function });
