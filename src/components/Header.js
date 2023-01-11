import React from "react";
import styled from 'styled-components'
import { screenSize } from "../styles";
import monkeyIcon from "../assets/monkey-icon.png"
import { useLocale } from "../context/LocaleContext";
import { BEIGE, languages } from "../constants"
import { RegistrationFormButton } from "./RegistrationFormButton";

export const Header = () => {
    const { localeState, localeDispatch } = useLocale();
    const { locales } = localeState;

    const handleLanguageChange = (language) => {
        const action = {
            type: "CHANGE_LOCALE",
            payload: {
                language
            }
        };

        localeDispatch(action);
    };

    return (
        <StyledHeader>
            <StyledDivTitle>
                <StyledH3Title>{locales.registrationFormTitle}</StyledH3Title>
                <StyledDivImg>
                    <img src={monkeyIcon} alt="monkey-icon" />
                </StyledDivImg>
            </StyledDivTitle>
            <StyledDivButtons>
                {Object.keys(languages).map((lang, index) =>
                    <RegistrationFormButton
                        key={index}
                        onClick={() => handleLanguageChange(lang)}
                        label={lang}
                        style={BEIGE}
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
const StyledDivTitle = styled.div`
    align-items: center;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-right: 30px;
`
const StyledH3Title = styled.h3``

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