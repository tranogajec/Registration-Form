import React from 'react';
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom';
import RefreshIcon from '@mui/icons-material/Refresh';
import styled from 'styled-components'
import { Button, BUTTON_LABEL } from './Button';

export const Error = ({ error }) => {

    const navigate = useNavigate()

    return (
        <StyledDivContainer>
            {error.map((err, index) => {
                const { title, message } = err
                return (
                    <StyledError key={index}>
                        <StyledDivErrorTitle>{title}</StyledDivErrorTitle>
                        <StyledDivErrorMessage>{message}</StyledDivErrorMessage>
                    </StyledError>
                )
            })}

            {useLocation().pathname === "/"
                ? <Button onClick={() => navigate(0)} icon={<RefreshIcon fontSize="inherit" />} label={BUTTON_LABEL.tryAgain} />
                : <Button onClick={() => navigate('/')} label={BUTTON_LABEL.tryAgain} />
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