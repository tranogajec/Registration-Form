import React from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
import styled from 'styled-components'

const BUTTON_LABEL = {
    tryAgain: "Try Again",
    submit: "Submit"
}

export const { tryAgain, submit } = BUTTON_LABEL

export const Button = ({ label, onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            {label === tryAgain
                ?
                <>
                    <StyledDivText>{tryAgain}</StyledDivText>
                    <RefreshIcon fontSize="inherit" />
                </>
                : <StyledDivText>{submit}</StyledDivText>
            }

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