import React from "react"
import styled from "styled-components";
import { CheckboxInput } from "./CheckboxInput";
import { FormInputBase } from "./FormInputBase"
import { RegistrationFormButton } from "./RegistrationFormButton"

export const FormStep = ({ checkboxLabel, checked, color, control, disabled, firstStep, getValues, isValid, labelBack, labelNext,
    labelSubmit, lastStep, onClickBack, onClickNext, onClickSubmit, size, stepInputs, stepLabel, stepPosition, styleBack, styleNext,
    styleSubmit, url, urlText }) => {

    return (
        <>
            <StyledH5Step>{stepLabel}</StyledH5Step>
            <>{stepInputs.map(input =>
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

                {(() => {
                    switch (stepPosition) {
                        case firstStep:
                            return <RegistrationFormButton label={labelNext} onClick={onClickNext} style={styleNext} />

                        case lastStep:
                            return <>
                                <CheckboxInput checked={checked} color={color} disabled={disabled} label={checkboxLabel} size={size} url={url} urlText={urlText} />
                                <StyledDivButtons>
                                    <RegistrationFormButton label={labelBack} onClick={onClickBack} style={styleBack} />
                                    <RegistrationFormButton label={labelSubmit} onClick={onClickSubmit} style={styleSubmit} />
                                </StyledDivButtons>
                            </>

                            {/* case middleStep: */ }
                        default:
                            return <StyledDivButtons>
                                <RegistrationFormButton label={labelBack} onClick={onClickBack} style={styleBack} />
                                <RegistrationFormButton label={labelNext} onClick={onClickNext} style={styleNext} />
                            </StyledDivButtons>

                    }

                })()}
            </>
        </>
    )
}

const StyledH5Step = styled.h5`
    display: flex;
    flex-direction: row-reverse;
    font-weight: 600;
    margin: 0;
`
const StyledDivButtons = styled.div`
    display: flex;
    justify-content: space-between;
`