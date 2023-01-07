import React from "react";
import styled from 'styled-components'
import { GREEN, YELLOW } from "../constants";

const selectStyle = (style) => {
    if (style === YELLOW) {
        return {
            hoverBgColor: "#FFE9B1",
            bgColor: "#F8B400",
        }
    }
    if (style === GREEN) {
        return {
            hoverBgColor: "#224B0C",
            bgColor: "#377D71",
        }
    }
    return {
        hoverBgColor: "#EC7272",
        bgColor: "#A62349",
    }
};

export const RegistrationFormButton = ({ icon, label, onClick, style }) =>
    <StyledButton onClick={onClick} style={selectStyle(style)}>
        <StyledSpanLabel>{label}</StyledSpanLabel>
        <>{icon}</>
    </StyledButton>

const StyledButton = styled.button`
    align-items: center;
    justify-content: center;
    background-color: ${({ style }) => style.bgColor};
    border-radius: 24px;
    border: none;
    color: #100720;
    cursor: pointer;
    display: flex;
    font-size: 16px;
    justify-content: center;
    padding: 12px 18px;
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
const StyledSpanLabel = styled.span`
    margin-right: 6px;
    padding-top: 2px;
`