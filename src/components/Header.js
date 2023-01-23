import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import monkeyIcon from "../assets/monkey-icon.png"
import { CHANGE_LOCALE, useLocale } from "../context/LocaleContext";
import { screenSize } from "../styles";
import { BEIGE, languages, YELLOW } from "../constants"
import { RegistrationFormButton } from "./RegistrationFormButton";

export const Header = () => {
    const { localeState, localeDispatch } = useLocale();
    const { locales, currentLang } = localeState;

    const changeLocale = (language) => ({ type: CHANGE_LOCALE, payload: { language } })

    const handleLanguageChange = (language) => localeDispatch(changeLocale(language));

    return (
        <StyledHeader>
            <StyledLink to='/'>
                <h3>{locales.registrationFormTitle}</h3>
                <StyledDivImg>
                    <img src={monkeyIcon} alt="monkey-icon" />
                </StyledDivImg>
            </StyledLink>
            <StyledDivButtons>
                {Object.keys(languages).map((lang, index) =>
                    <RegistrationFormButton
                        key={index}
                        label={lang}
                        onClick={() => handleLanguageChange(lang)}
                        style={(lang === currentLang) ? YELLOW : BEIGE}
                    />
                )}
            </StyledDivButtons>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-left: 18px;
    padding-right: 30px;
    @media ${screenSize.md} {
        flex-direction: row;
        margin-top: 0;
        padding-left: 30px;
    }
`
const StyledLink = styled(Link)`
    align-items: center;
    color: #000;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-right: 30px;
    text-decoration: none;
`
const StyledDivImg = styled.div`
    margin-left: 12px;
`
const StyledDivButtons = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    
    @media ${screenSize.sm} {
        flex-direction: row;
        margin-top: 0;
    }
`