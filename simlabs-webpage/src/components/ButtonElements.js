import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const ButtonS = styled(LinkS)`
    border-radius: 12px;
    background: ${({ primary }) => (primary ? '#ffd700' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transitions: all 0.2s ease-in-out;
        background : ${({ primary }) => (primary ? '#fff' : '#00ffff')};
    }
`;

export const ButtonR = styled(LinkR)`
    border-radius: 12px;
    background: ${({ primary }) => (primary ? '#ffd700' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transitions: all 0.2s ease-in-out;
        background : ${({ primary }) => (primary ? '#ffd700' : '#fff')};
    }
`;

export const ButtonA = styled.a`
    border-radius: 12px;
    background: ${({ primary }) => (primary ? '#ffd700' : '#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transitions: all 0.2s ease-in-out;
        background : ${({ primary }) => (primary ? '#ffd700' : '#fff')};
    }
`;