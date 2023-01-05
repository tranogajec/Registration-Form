import React from "react";
import styled from "styled-components";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { screenSize } from "../styles";

const redirectToEmailAddress = (email) => "mailto:" + email
const EMAIL_ADDRESS = 'tenaranogajec.1@gmail.com'
const CONTACT_ME = "Contact me"

const currentYear = new Date().getFullYear()

export const Footer = () => {

    return (
        <StyledDivFooter>
            <StyledDivContent>
                <StyledDivLink href={redirectToEmailAddress(EMAIL_ADDRESS)}>{CONTACT_ME}</StyledDivLink>
                <StyledCopyrightSymbol>
                    <CopyrightIcon fontSize="inherit" />
                </StyledCopyrightSymbol>
                <StyledDivDate>{currentYear}</StyledDivDate>
            </StyledDivContent>
        </StyledDivFooter>
    )
}

const StyledDivFooter = styled.div`
    align-items: center;
    background-color: white;
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    padding-bottom: 18px;
    padding-top: 18px;
    position: fixed;
    right: 0;
    text-align: center;
`
const StyledDivContent = styled.div`
    display: flex; 
    justify-content: space-between;
    width: 120px;

     @media ${screenSize.md} {
        width: 180px;
    }
`
const StyledDivLink = styled.a`
    color: black;
    cursor:pointer; 
    font-size: 12px;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
      }

    @media ${screenSize.md} {
        font-size: 18px;
    }
`
const StyledCopyrightSymbol = styled.div`
    font-size: 12px;
    
    @media ${screenSize.md} {
        font-size: 18px;
    }
`
const StyledDivDate = styled.div`
    font-size: 12px;

    @media ${screenSize.md} {
        font-size: 18px;
    }
`