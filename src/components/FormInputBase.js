import React from "react";
import { useController } from "react-hook-form";
import { Input } from "./Input.js";

export const FormInputBase = ({ control, defaultValue, fieldType, id, name, options }) => {

    const { field } = useController({ control, defaultValue, name })

    return (
        <>
            <div>
                {name}
            </div>
            <Input
                fieldType={fieldType}
                id={id}
                name={name}
                onChange={field.onChange}
                options={options}
                value={field.value}
            />
        </>
    )
}