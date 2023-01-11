import React from 'react';
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { useLocale } from '../context/LocaleContext';
import { BEIGE, YELLOW } from '../constants';
import { RegistrationFormButton } from './RegistrationFormButton';

export const Error = ({ error }) => {
    const navigate = useNavigate()

    const { localeState } = useLocale()
    const { locales } = localeState

    return (
        <StyledDivContainer>
            <StyledDivError>
                <StyledH3ErrorTitle>{error.title}</StyledH3ErrorTitle>
                <StyledDivErrorMessage>{error.message}</StyledDivErrorMessage>
            </StyledDivError>
            {useLocation().pathname === "/"
                ? <RegistrationFormButton
                    label={locales.tryAgain} onClick={() => navigate(0)} style={YELLOW} />
                : <RegistrationFormButton
                    label={locales.tryAgain} onClick={() => navigate('/')} style={BEIGE} />
            }
        </StyledDivContainer>
    )
}

const StyledDivContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 120px;
    margin-left: 42px;
    margin-right: 42px; 
    margin-top: 120px;
    text-align: center;
`
const StyledDivError = styled.div`
    margin-bottom: 18px;
`
const StyledH3ErrorTitle = styled.h3`
    font-size: 30px;
    margin-bottom: 12px;
    margin-top:12px;
`
const StyledDivErrorMessage = styled.div`
    font-style: italic;
    margin-top: 18px;
`