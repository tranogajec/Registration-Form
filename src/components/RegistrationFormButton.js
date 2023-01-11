import React from "react";
import styled from 'styled-components'
import { BEIGE, GREEN, YELLOW } from "../constants";

const selectStyle = (style) => {
    if (style === BEIGE) {
        return {
            hoverBgColor: "#DFBB9D",
            bgColor: "#F9F2ED",
        }
    }
    if (style === GREEN) {
        return {
            hoverBgColor: "#224B0C",
            bgColor: "#377D71",
        }
    }
    if (style === YELLOW) {
        return {
            hoverBgColor: "#FFE9B1",
            bgColor: "#F8B400",
        }
    }
    return {
        hoverBgColor: "#EC7272",
        bgColor: "#A62349",
    }
};

export const RegistrationFormButton = ({ disabled, label, onClick, style }) =>
    <StyledButton disabled={disabled} onClick={onClick} style={selectStyle(style)}>
        <>{label}</>
    </StyledButton>

const StyledButton = styled.button`
    align-items: center;
    background-color: ${({ style }) => style.bgColor};
    border-radius: 24px;
    border: none;
    color: #100720;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    justify-content: center;
    justify-content: center;
    margin-left: 3px;
    margin-right: 3px;
    padding: 8px 12px;
    text-decoration: none;
    transition: all 150ms ease;

    &:hover {
        background-color: ${({ style }) => style.hoverBgColor};
        transition: background-color 0.1s ease-in-out 0.1s;
    }
    &:disabled {
        background-color: #CFD2CF;
        cursor: auto;
    }
`