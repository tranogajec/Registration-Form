import React from "react";
import { useController } from "react-hook-form";
import styled from 'styled-components'
import { Input } from "./Input.js";

export const FormInputBase = ({ control, defaultValue, fieldType, id, name, options, placeholder }) => {

    const { field: { onChange, value } }
        = useController({ control, defaultValue, name })


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