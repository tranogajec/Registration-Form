import React from "react";
import { useController } from "react-hook-form";
import styled from 'styled-components'
import { generateRules } from '../services/helperFunctions.js'
import { FormInput } from "./FormInput.js";
import { ValidationWarning } from "./ValidationWarning.js";

export const FormInputBase = ({ control, defaultValue, fieldType, getValues, id, name, options, placeholder, required, validators }) => {

    const { field: { onChange, value }, fieldState: { error } }
        = useController({
            control,
            defaultValue,
            name,
            rules: generateRules(validators, required, getValues)
        })

    return (
        <StyledDivField>
            <StyledH4Label>{placeholder}</StyledH4Label>
            <FormInput
                fieldType={fieldType}
                id={id}
                name={name}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                value={value}
            />
            {error
                ?
                <StyledDivValidations>
                    {validators.map((validator, index) =>
                        <ValidationWarning key={index} validator={validator} index={index} />
                    )}
                </StyledDivValidations>
                : null
            }
        </StyledDivField>
    )
}

const StyledDivField = styled.div`
    border-radius: 6px;
    margin-bottom: 18px;
    margin-top: 6px;
    padding-right: 12px;
    padding-top: 12px;
`
const StyledH4Label = styled.h4`
    margin-bottom: 12px;
    margin-top: 0;
`
const StyledParagraphValidation = styled.p`
    color: #f44336;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.66;
    margin-bottom: 0;
    margin-top: 3px;
    padding-left: 1px;
    text-align: left;
`
const StyledDivValidations = styled.div`
    margin-top: 3px;
`