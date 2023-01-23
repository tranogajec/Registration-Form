import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import hangingMonkey from '../assets/hanging-monkey.gif';
import { BASE_URL, getFormInputs } from '../services/api';
import { useLocale } from '../context/LocaleContext';
import { ADD_FORM, useRegistrationForm } from '../context/RegistrationFormContext';
import { Error } from '../components/Error';
import { RegistrationForm } from '../components/RegistrationForm';

export const FormPage = () => {
    const { localeState } = useLocale();
    const { currentLang } = localeState;

    const {
        registrationFormState,
        registrationFormDispatch,
    } = useRegistrationForm();

    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setError] = useState(null);

    const addForm = (language, form) => ({ type: ADD_FORM, payload: { language: language, form: form } })

    useEffect(() => {
        setIsLoading(true)
        if (!registrationFormState.forms[currentLang]) {
            setError(null);
            getFormInputs(BASE_URL, currentLang)
                .then(res => {
                    registrationFormDispatch(addForm(currentLang, [...res]));
                    setIsLoading(false);
                })
                .catch(error => {
                    setError(prevState => ({ ...prevState, error }));
                    setIsLoading(false);
                });
        }
        else setIsLoading(false)
    }, [setIsLoading, currentLang, registrationFormDispatch, registrationFormState.forms]);

    if (isLoading)
        return (
            <StyledDivLoading>
                <img src={hangingMonkey} alt="hanging-monkey" />
            </StyledDivLoading>
        );

    if (!registrationFormState.forms[currentLang] && !serverError) return null

    return (
        <StyledMainContainer>
            <StyledDivContent>
                {serverError
                    ? <Error error={serverError.error} />
                    : <RegistrationForm formInputs={registrationFormState.forms[currentLang]} />
                }
            </StyledDivContent>
        </StyledMainContainer>
    );
};

const StyledMainContainer = styled.main`
    align-items: center;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    max-width: 100vw;
  `;
const StyledDivLoading = styled.div`
    align-items: center;
    display: flex;
    height: 80vh;
    justify-content: center;
  `;
const StyledDivContent = styled.div`
    border: none;
    margin-bottom: 18px;
    margin-top: 18px;
    max-height: 82vh;
    overflow-y: auto;
    padding-left: 36px;
    padding-right: 36px;
    text-align: left;
  
    &::-webkit-scrollbar {
      background: #f9f2ed;
      border-radius: 12px;
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: #377d71;
      border-radius: 12px;
      &:hover {
        background: #224b0c;
        border-radius: 12px;
      }
    }
  `;