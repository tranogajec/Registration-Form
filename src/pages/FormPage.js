import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import hangingMonkey from '../assets/hanging-monkey.gif';
import { BASE_URL, getFormInputs } from '../services/api';
import { useLocale } from '../context/LocaleContext';
import { useRegistrationForm } from '../context/RegistrationFormContext';
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

    useEffect(() => {
        setIsLoading(true)
        if (!registrationFormState.forms[currentLang]) {
            setError(null);
            getFormInputs(BASE_URL, currentLang)
                .then(res => {
                    registrationFormDispatch({
                        type: 'ADD_FORM',
                        payload: {
                            language: currentLang,
                            form: [...res],
                        },
                    });
                    setIsLoading(false);
                })
                .catch(error => {
                    setError(prevState => ({ ...prevState, error }));
                    setIsLoading(false);
                });
        }
        else {
            setIsLoading(false)
        }
    }, [setIsLoading, currentLang]);

    if (isLoading)
        return (
            <StyledDivLoading>
                <img src={hangingMonkey} alt="hanging-monkey" />
            </StyledDivLoading>
        );

    if (!registrationFormState.forms[currentLang] && !serverError) {
        return null;
    }

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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  `;
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