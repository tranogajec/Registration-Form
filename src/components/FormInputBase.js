import React from "react";
import { useController } from "react-hook-form";
import { Input } from "./Input.js";

export const FormInputBase = ({ control, defaultValue, fieldType, id, name, options, placeholder }) => {

    const { field: { onChange, value } }
        = useController({ control, defaultValue, name })


    return (
        <>
            <h5>{name}</h5>
            <Input
                fieldType={fieldType}
                id={id}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
                value={value}
            />
        </>
    )
}