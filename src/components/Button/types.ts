export interface ButtonProps {
    type: string;
    loading?: boolean;
    disabled?: boolean;
    children?: string | string[];
    onClick?(): void;
}
