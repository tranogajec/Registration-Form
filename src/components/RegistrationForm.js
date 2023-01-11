import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import { useLocale } from "../context/LocaleContext";
import hangingMonkey from "../assets/hanging-monkey.gif"
import { BASE_URL, postFormInputs } from "../services/api.js";
import { BEIGE, GREEN, TERMS_AND_COND } from "../constants.js";
import { CheckboxInput } from "./CheckboxInput";
import { FormInputBase } from "./FormInputBase.js";
import { RegistrationFormButton } from "./RegistrationFormButton.js";

export const RegistrationForm = ({ formInputs }) => {

    const { localeState } = useLocale();
    const { locales } = localeState;

    const [isLoading, setIsLoading] = useState(false)
    const { control, handleSubmit, getValues, formState: { isValid } } = useForm()

    const navigate = useNavigate()
    const [formStep, setFormStep] = useState(1)

    // only two steps for now
    const step1 = formInputs.filter(input => input.step === 1)
    const step2 = formInputs.filter(input => input.step === 2)

    const onBlur = () => setFormStep(2)

    const onSubmit = async (data) => {
        if (isValid) {
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

    }

    if (isLoading) return <StyledDivLoading><img src={hangingMonkey} alt="spinning-monkey" /></StyledDivLoading>

    return (
        <form>
            <StyledDivInputs>
                {formStep === 1
                    ?
                    <>{step1.map(input =>
                        <FormInputBase
                            isValid={isValid}
                            control={control}
                            defaultValue={input.defaultValue}
                            fieldType={input.fieldType}
                            getValues={getValues}
                            id={input.code}
                            key={input.code}
                            name={input.code}
                            options={input.valueList}
                            placeholder={input.name}
                            required={input.required}
                            validators={input.validators}
                        />)}
                        <RegistrationFormButton label={locales.next} onClick={handleSubmit(onBlur)} style={GREEN} />
                    </>
                    :
                    <>{step2.map(input =>
                        <FormInputBase
                            isValid={isValid}
                            control={control}
                            defaultValue={input.defaultValue}
                            fieldType={input.fieldType}
                            getValues={getValues}
                            id={input.code}
                            key={input.code}
                            name={input.code}
                            options={input.valueList}
                            placeholder={input.name}
                            required={input.required}
                            validators={input.validators}
                        />)}
                        <CheckboxInput
                            checked={isValid}
                            color="success"
                            disabled={!isValid}
                            label={locales.readAndAgree}
                            size="small"
                            url={TERMS_AND_COND}
                            urlText={locales.termsAndConditions}
                        />
                        <StyledDivButtons>
                            <RegistrationFormButton label={locales.back} onClick={() => setFormStep(1)} style={BEIGE} />
                            <RegistrationFormButton label={locales.submit} onClick={handleSubmit(onSubmit)} style={GREEN} />
                        </StyledDivButtons>
                    </>
                }
            </StyledDivInputs>
        </form>
    )
}

const StyledDivLoading = styled.div`
    align-items: center;
    display: flex;
    height: 80vh;
    justify-content: center;
  `;
const StyledDivInputs = styled.div`
    margin-bottom: 18px;
`
const StyledDivButtons = styled.div`
    display: flex;
    justify-content: space-between;
`
