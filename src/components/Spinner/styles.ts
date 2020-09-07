import styled, { keyframes } from 'styled-components';
import { colors } from '../../styles';
const spin = keyframes`
        0% {
            top: 2px;
            height: 2em
        }
        50%,
        100% {
            top: 12px;
            height: 1em;
        }
`;
export const Heartbeat = styled.div`
    display: block;
    position: relative;
    width: 3rem;
    height: 3em;
    top: 0.5rem;
    div {
        display: inline-block;
        position: absolute;
        width: 0.5em;
        height: 0.5em;
        border-radius: 5px;
        background: ${colors.grey.light};
        animation: ${spin} 2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    div:nth-child(1) {
        left: 4px;
        animation-delay: -0.24s;
    }
    div:nth-child(2) {
        left: 18px;
        animation-delay: -0.12s;
    }
    div:nth-child(3) {
        left: 32px;
        animation-delay: 0;
    }
`;
