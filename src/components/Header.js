import React from "react";
import styled from 'styled-components'
import monkeyIcon from "../assets/monkey-icon.png"
import { useLocale } from "../context/LocaleContext";
import { LANGUAGES } from "../constants"

export const Header = () => {

    const { stateLocale, dispatch } = useLocale();
    const { strings } = stateLocale;
    console.log(stateLocale, 'state')

    const handleRegionChange = (language) => {
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
                <h3>{strings.registrationFormTitle}</h3>
                <StyledDivImg>
                    <img src={monkeyIcon} alt="monkey-icon" />
                </StyledDivImg>
            </StyledDivTitle>
            <StyledDivButtons>
                {Object.keys(LANGUAGES).map((language, index) =>
                    <button key={index} onClick={() => handleRegionChange(language)}>{language}</button>)
                }
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