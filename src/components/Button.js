import React from "react";
import styled from 'styled-components'

export const BUTTON_LABEL = {
    tryAgain: "Try Again",
    submit: "Submit"
}

const { tryAgain, submit } = BUTTON_LABEL

const selectLabel = (label) => {
    if (label === tryAgain) return tryAgain
    if (label === submit) return submit
}

export const Button = ({ icon, label, onClick }) => {

    return (
        <StyledButton onClick={onClick}>
            <StyledDivText>{selectLabel(label)}</StyledDivText>
            <>{icon}</>
        </StyledButton>
    )
}

const StyledButton = styled.button`
    background: #227C70;
    border-radius: 6px;
    border: none;
    color: black;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    justify-content: center;
    padding: 12px 24px;
    text-decoration: none;
    transition: all 150ms ease;

    &:active {
        background-color: #8EC3B0;
    }
`
const StyledDivText = styled.div`
   margin-right: 6px;
`