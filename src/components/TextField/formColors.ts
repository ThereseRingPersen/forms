import { colors } from '../../styles';
const formColors = {
    iconColor:{
        grey: colors.text.medium
    },
    fieldBackround: {
        active: colors.grey.dark,
        hover: colors.grey.medium,
        initial: colors.grey.light,
    },
    fieldText: colors.text.dark,
    helperText: colors.text.light,
    label: {
        notActivated: colors.text.medium,
        focus: colors.primary.medium,
        error: colors.red,
        disabled: colors.text.light,
    },
    border: {
        error: colors.red,
        focus: colors.primary.medium,
        active: colors.text.dark,
        hover: colors.text.medium,
        notActivated: colors.text.light,
    },
};

export { formColors };
