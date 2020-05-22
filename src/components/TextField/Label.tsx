import styled from 'styled-components';
import { formColors } from './formColors';

interface LabelProps {
    isActive: boolean;
    children: string;
    hasError: boolean;
}
const Label = styled.label<LabelProps>`
    position: absolute;
    line-height: 1.25em;
    padding-left: 1em;
    width: 14em;
    top: ${(props) => (props.isActive ? '5px' : '24px')};
    font-size: ${(props) => (props.isActive ? '0.8em' : '1em')};
    color: ${(props) => labelColor(props.hasError, props.isActive)};
`;
export default Label;

function labelColor(hasError: boolean, isActive: boolean) {
    if (hasError) {
        return formColors.color.error;
    } else if (isActive) {
        return formColors.color.active;
    } else {
        return formColors.color.inactive;
    }
}
