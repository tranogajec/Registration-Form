import React from "react";
import styled from 'styled-components'
import monkeyIcon from "../assets/monkey-icon.png"
import { useLocale } from "../context/LocaleContext";
import { BEIGE, languages } from "../constants"
import { RegistrationFormButton } from "./RegistrationFormButton";

export const Header = () => {

    const { stateLocale, dispatch } = useLocale();
    const { locales } = stateLocale;

    const handleLanguageChange = (language) => {
        const action = {
            type: "CHANGE_LOCALE",
            payload: {
                language
            }
        };

        dispatch(action);
    };

    return (
        <StyledHeader>
            <StyledDivTitle>
                <h3>{locales.registrationFormTitle}</h3>
                <StyledDivImg>
                    <img src={monkeyIcon} alt="monkey-icon" />
                </StyledDivImg>
            </StyledDivTitle>
            <StyledDivButtons>
                {Object.keys(languages).map((language, index) =>
                    <RegistrationFormButton
                        key={index}
                        onClick={() => handleLanguageChange(language)}
                        label={language}
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
    padding-left: 30px;
    padding-right: 30px;
    justify-content: space-between;
`
const StyledDivTitle = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`
const StyledDivImg = styled.div`
    margin-left: 12px;
`
const StyledDivButtons = styled.div`
    display: flex;
`