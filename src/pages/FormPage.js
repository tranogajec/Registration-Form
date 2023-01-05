import React, { useEffect, useState } from "react";
import { BASE_URL, getFormInputs } from "../services/api";
import { Error } from "../components/Error";
import { RegistrationForm } from "../components/RegistrationForm";
import styled from 'styled-components'
import hangingMonkey from "../hanging-monkey.gif"

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



    return (
        <StyledMainContainer>
            {isLoading
                ? <img src={hangingMonkey} alt="spinning-monkey" />
                :
                <StyledDivContent>
                    {serverError
                        ? <Error error={serverError.error} />
                        : <RegistrationForm formInputs={formInputs} />
                    }
                </StyledDivContent>
            }
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
const StyledDivContent = styled.div`
    border: none;
    max-height: 86vh;
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
        background: #cfd2cf;
        border-radius: 6px;
    &:hover {
        background: #cfd2cf;
        border-radius: 12px;
    }
    }
`