import React from "react";
import styled from 'styled-components'
import monkeyIcon from "../assets/monkey-icon.png"

export const Header = () => {
    return (
        <StyledHeader>
            <h3>Registration Form</h3>
            <StyledDivImg>
                <img src={monkeyIcon} alt="spinning-monkey" />
            </StyledDivImg>

        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    padding-left: 30px;
`
const StyledDivImg = styled.div`
    margin-left: 12px;
`