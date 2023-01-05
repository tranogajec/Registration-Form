import React, { useEffect, useState } from "react";
import { BASE_URL, getFormInputs } from "../services/api";
import { Error } from "../components/Error";
import { RegistrationForm } from "../components/RegistrationForm";
import styled from 'styled-components'
import hangingMonkey from "../hanging-monkey.gif"

export const FormPage = () => {

    const [formInputs, setFormInputs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getFormInputs(BASE_URL)
            .then(res => {
                setFormInputs(prevState => [...prevState, ...res]);
                setIsLoading(false);
            })
            .catch(error => {
                setError(prevState => [...prevState, error]);
                setIsLoading(false);
            })
    }, [setIsLoading, setFormInputs, setError])

    return (
        <StyledMainContainer>
            {isLoading
                ? <img src={hangingMonkey} alt="spinning-monkey" />
                : <>
                    {error.length !== 0
                        ? <Error error={error} />
                        : <RegistrationForm formInputs={formInputs} />
                    }
                </>
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