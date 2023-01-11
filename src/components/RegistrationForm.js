import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import { useLocale } from "../context/LocaleContext";
import hangingMonkey from "../assets/hanging-monkey.gif"
import { BASE_URL, postFormInputs } from "../services/api.js";
import { GREEN, TERMS_AND_COND } from "../constants.js";
import { CheckboxInput } from "./CheckboxInput";
import { FormInputBase } from "./FormInputBase.js";
import { RegistrationFormButton } from "./RegistrationFormButton.js";

export const RegistrationForm = ({ formInputs }) => {

    const { localeState } = useLocale();
    const { locales } = localeState;

    const [isLoading, setIsLoading] = useState(false)
    const { control, handleSubmit, getValues } = useForm()

    const navigate = useNavigate()
    const [isChecked, setIsChecked] = useState(false)


    const onSubmit = async (data) => {
        setIsLoading(true)
        await postFormInputs(BASE_URL + '/overview', data)
            .then(res => {
                setIsLoading(false);
                navigate('/user-overview', { state: { data: res, status: 'success' } })
            })
            .catch(error =>
                navigate('/user-overview', { state: { data: error, status: 'error' } })
            )
    }

    const toggleIsChecked = () => {
        setIsChecked(current => !current)
    }

    if (isLoading) return <StyledDivLoading><img src={hangingMonkey} alt="spinning-monkey" /></StyledDivLoading>

    return (
        <form>
            <StyledDivInputs>
                {formInputs.map(input => {
                    const { code, defaultValue, fieldType, valueList, name, required, validators } = input

                    return (
                        <FormInputBase
                            control={control}
                            defaultValue={defaultValue}
                            fieldType={fieldType}
                            getValues={getValues}
                            id={code}
                            key={code}
                            name={code}
                            options={valueList}
                            placeholder={name}
                            required={required}
                            validators={validators}
                        />
                    )
                })}
            </StyledDivInputs>
            <CheckboxInput
                color="success"
                label={locales.readAndAgree}
                onChange={toggleIsChecked}
                size="small" url={TERMS_AND_COND}
                urlText={locales.termsAndConditions}
            />
            <RegistrationFormButton
                disabled={!isChecked}
                label={locales.submit}
                onClick={handleSubmit(onSubmit)}
                style={GREEN}
            />
        </form>
    )
}

const StyledDivLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  `;
const StyledDivInputs = styled.div`
    margin-bottom: 18px;
`
