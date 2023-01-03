import React from "react";
import { useController } from "react-hook-form";
import { FormInput } from "./FormInput.js";

export const FormInputBase = ({ control, fieldType, id, name, defaultValue }) => {

    const { field } = useController({ name, control, defaultValue })

    return (
        <>
            <div>
                {name}
            </div>
            <FormInput
                onChange={field.onChange}
                value={field.value}
                fieldType={fieldType}
            />
        </>
    )
}