import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import { useLocale } from "../context/LocaleContext";
import hangingMonkey from "../assets/hanging-monkey.gif"
import { BASE_URL, postFormInputs } from "../services/api.js";
import { BEIGE, GREEN, TERMS_AND_COND, YELLOW } from "../constants.js";
import { FormStep } from "./FormStep";

export const RegistrationForm = ({ formInputs }) => {

    const { localeState } = useLocale();
    const { locales } = localeState;

    const [isLoading, setIsLoading] = useState(false)
    const { control, handleSubmit, getValues, formState: { isValid } } = useForm()

    const navigate = useNavigate()

    const [formStep, setFormStep] = useState(1)
    const numberOfSteps = Math.max(...formInputs.map(input => input.step))

    const steps = Object.values(formInputs.reduce((acc, current) => {
        acc[current.step] = acc[current.step] ?? []
        acc[current.step].push(current)
        return acc
    }, {}))

    const copySteps = [...steps]
    const firstStep = copySteps.shift()
    const lastStep = copySteps.pop()

    const generateStepLabel = (stepNum) => stepNum + ' / ' + numberOfSteps

    const onBlur = () => setFormStep(prevState => prevState + 1)

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

                {(() => {
                    switch (formStep) {
                        case 1:
                            return <FormStep
                                control={control}
                                firstStep={firstStep}
                                getValues={getValues}
                                isValid={isValid}
                                labelNext={locales.next}
                                onClickNext={handleSubmit(onBlur)}
                                stepInputs={firstStep}
                                stepLabel={generateStepLabel(formStep)}
                                stepPosition={firstStep}
                                styleNext={GREEN}
                            />

                        case numberOfSteps:
                            return <FormStep
                                checkboxLabel={locales.readAndAgree}
                                checked={isValid}
                                color="success"
                                control={control}
                                disabled={!isValid}
                                getValues={getValues}
                                isValid={isValid}
                                labelBack={locales.back}
                                labelSubmit={locales.submit}
                                lastStep={lastStep}
                                onClickBack={() => setFormStep(prevState => prevState - 1)}
                                onClickSubmit={handleSubmit(onSubmit)}
                                size="small"
                                stepInputs={lastStep}
                                stepLabel={generateStepLabel(formStep)}
                                stepPosition={lastStep}
                                styleBack={BEIGE}
                                styleSubmit={YELLOW}
                                url={TERMS_AND_COND}
                                urlText={locales.termsAndConditions}
                            />

                            {/* case (formStep > 1 && formStep < numberOfSteps): */ }
                        default:
                            return <FormStep
                                control={control}
                                getValues={getValues}
                                isValid={isValid}
                                labelBack={locales.back}
                                labelNext={locales.next}
                                onClickBack={() => setFormStep(prevState => prevState - 1)}
                                onClickNext={handleSubmit(onBlur)}
                                stepInputs={steps[formStep - 1]}
                                stepLabel={generateStepLabel(formStep)}
                                stepPosition
                                style={GREEN}
                                styleBack={BEIGE}
                                styleNext={GREEN}
                            />

                    }
                })()}

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
