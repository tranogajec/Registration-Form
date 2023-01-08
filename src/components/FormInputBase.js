import React from "react";
import { useController } from "react-hook-form";
import styled from 'styled-components'
import { generateRules } from "../helperFunctions.js";
import { FormInput } from "./FormInput.js";
import { ValidationWarning } from "./ValidationWarning.js";

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
            <StyledH4Label>{name}</StyledH4Label>
            <FormInput
                fieldType={fieldType}
                id={id}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                value={value}
            />
            {error
                ? <>{validators.map((validator, index) => <ValidationWarning key={index} validator={validator} index={index} />)} </>
                : null
            }
        </StyledDivField>
    )
}

const StyledDivField = styled.div`
    border-radius: 6px;
    margin-top: 6px;
    margin-bottom: 18px;
    padding-right: 12px;
    padding-top: 12px;
`
const StyledH4Label = styled.h4`
    margin-bottom: 12px;
    margin-top: 0;
`