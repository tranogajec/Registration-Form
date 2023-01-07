import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import { BASE_URL, getFormInputs } from "../services/api";
import hangingMonkey from "../assets/hanging-monkey.gif"
import { Error } from "../components/Error";
import { RegistrationForm } from "../components/RegistrationForm";

export const FormPage = () => {
    const [formInputs, setFormInputs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setError] = useState()

    useEffect(() => {
        setIsLoading(true)
        getFormInputs(BASE_URL)
            .then(res => {
                setFormInputs(prevState => [...prevState, ...res]);
                setIsLoading(false);
            })
            .catch(error => {
                setError(prevState => ({ ...prevState, error }))
                setIsLoading(false);
            })
    }, [setIsLoading, setFormInputs, setError])

    if (isLoading) return (
        <StyledDivLoading>
            <img src={hangingMonkey} alt="hanging-monkey" />
        </StyledDivLoading>
    )

    return (
        <StyledMainContainer>
            <StyledDivContent>
                {serverError
                    ? <Error error={serverError.error} />
                    : <RegistrationForm formInputs={formInputs} />
                }
            </StyledDivContent>
        </StyledMainContainer>
    )
}

const StyledMainContainer = styled.main`
    align-items: center;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    max-width: 100vw;
`
const StyledDivLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
`
const StyledDivContent = styled.div`
    border: none;
    max-height: 82vh;
    margin-bottom: 18px;
    margin-top: 18px;
    padding-left: 36px;
    padding-right: 36px;
    overflow-y: auto;
    text-align: left;
    
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background: #377D71;
        border-radius: 12px;
    &:hover {
        background: #224B0C;
        border-radius: 12px;
    }
}
`