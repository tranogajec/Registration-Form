import React from "react";
import styled from "styled-components";
import CopyrightIcon from '@mui/icons-material/Copyright';
import { useLocale } from "../context/LocaleContext";
import { screenSize } from "../styles";

const redirectToEmailAddress = (email) => "mailto:" + email
const EMAIL_ADDRESS = 'tenaranogajec.1@gmail.com'

const generateCurrentYear = new Date().getFullYear()

export const Footer = ({ href, label, icon, year }) => {

    const { stateLocale } = useLocale();
    const { locales } = stateLocale

    return (
        <StyledFooter>
            <StyledDivContent>
                <StyledSpanLink href={redirectToEmailAddress(EMAIL_ADDRESS)}>
                    {locales.contactMe}
                </StyledSpanLink>
                <StyledSpanSymbol>
                    <CopyrightIcon fontSize="inherit" />
                </StyledSpanSymbol>
                <StyledSpanDate>{generateCurrentYear}</StyledSpanDate>
            </StyledDivContent>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
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
const StyledSpanLink = styled.a`
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
const StyledSpanSymbol = styled.div`
    font-size: 12px;
    
    @media ${screenSize.md} {
        font-size: 18px;
    }
`
const StyledSpanDate = styled.div`
    font-size: 12px;

    @media ${screenSize.md} {
        font-size: 18px;
    }
`