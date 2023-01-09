import React from 'react';
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import { YELLOW } from '../constants';
import { RegistrationFormButton } from './RegistrationFormButton';

export const Error = ({ error }) => {
    const navigate = useNavigate()

    return (
        <StyledDivContainer>
            <StyledError >
                <StyledDivErrorTitle>{error.title}</StyledDivErrorTitle>
                <StyledDivErrorMessage>{error.message}</StyledDivErrorMessage>
            </StyledError>
            {useLocation().pathname === "/"
                ? <RegistrationFormButton
                    icon='🙉' label='Try again' onClick={() => navigate(0)} style={YELLOW} />
                : <RegistrationFormButton
                    icon='🙈' label='Try again' onClick={() => navigate('/')} />
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
const StyledError = styled.div`
    margin-bottom: 18px;
`
const StyledDivErrorTitle = styled.div`
    font-size: 30px;
`
const StyledDivErrorMessage = styled.div`
    font-style: italic;
    margin-top: 18px;
`