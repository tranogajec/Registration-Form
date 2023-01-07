import React from "react";
import { useController } from "react-hook-form";
import styled from 'styled-components'
import { Input } from "./Input.js";

// const validatorTypes = {
//     minLength: 'minLength',
//     maxLength: 'maxLength',
//     regex: 'regex',
//     emailValidator: 'emailValidator',
//     olderThan: 'olderThan',
//     passwordStrength: 'passwordStrength',
//     matchesField: 'matchesField',
//     length: 'length'
// }

const ERROR_MSG_SPECIAL_CHAR = "Input should contain letters from A-Z numbers from 0-9 and _ symbol. Should not contain special characters (. , + , * , ? , ^ , $ , ( , ) , [ , ] , { , } , | ) and empty space."
const ERROR_MSG_NO_MATCH = "Passwords do not match"

const transformErrorMessage = (string) => {
    const errorString = (string.charAt(0).toUpperCase() + string.slice(1)).replaceAll('_', ' ') + '.';
    return errorString
}

const generateRules = (validators, required) => {

    const validationParams = validators.map(validator => {
        const { name, parameters } = validator

        switch (name) {
            // case 'emailValidator':
            //     return {}
            case 'length':
                return {
                    maxLength: parameters.targetLength,
                    minLength: parameters.targetLength
                }
            case 'matchesField':
                return {}
            case 'maxLength':
                return { maxLength: parameters.targetLength }
            case 'minLength':
                return { minLength: parameters.targetLength }
            case 'min':
                return { min: parameters.age }
            case 'passwordStrength':
                return { pattern: parameters.regex }
            case 'regex':
                return parameters.modifiers
                    ? { pattern: parameters.regex + '/' + parameters.modifiers }
                    : { pattern: parameters.regex }
            default: return {}
        }
    })

    const rules = {};
    for (let i = 0; i < validationParams.length; i++) {
        Object.assign(rules, validationParams[i]);
    }

    const rulesObject = { ...rules, required: required }
    console.log(rulesObject)
    return rulesObject
}

const generateErrorMsg = (validation) => {

    if (validation.parameters.regex === "^[a-z0-9\\-\\_]+$"
        && validation.parameters.modifiers === 'i') {
        return ERROR_MSG_SPECIAL_CHAR
    }
    if (validation.parameters.target === "password") {
        return ERROR_MSG_NO_MATCH
    }
}

export const FormInputBase = ({ control, defaultValue, fieldType, id, name, options, placeholder, required, validators }) => {

    const { field: { onChange, value }, fieldState: { error } }
        = useController({
            control,
            defaultValue,
            name,
            rules: generateRules(validators, required)
        })

    return (
        <StyledDivField>
            <StyledH5Label>{name}</StyledH5Label>
            <Input
                fieldType={fieldType}
                id={id}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                value={value}
            />
            {error
                ? <>
                    {validators.map((validator, index) =>
                        <StyledPValidation key={index}>
                            {validator.parameters.regex || validator.parameters.target
                                ? generateErrorMsg(validator)
                                : transformErrorMessage(validator.invalid_message)
                            }
                        </StyledPValidation>

                    )}
                </>
                : null}
        </StyledDivField>
    )
}

const StyledDivField = styled.div`
    border: 1px solid green;
    border-radius: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 12px;
`
const StyledH5Label = styled.h5`
    margin-top: 0;
`

const StyledPValidation = styled.div`
    color: #f44336;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.03333em;
    line-height: 1.66;
    margin-top: 3px;
    margin: 0;
    text-align: left;
`