import React from "react";
import { useForm } from "react-hook-form";
import { FormInputBase } from "./FormInputBase.js";

export const RegistrationForm = ({ formInputs }) => {

    const { control, formState: { errors } } = useForm();

    return (
        <div>
            {formInputs.map(input => {
                const { code, fieldType, name, defaultValue } = input
                return (
                    <FormInputBase
                        control={control}
                        defaultValue={defaultValue}
                        fieldType={fieldType}
                        id={code}
                        key={code}
                        name={name}
                    />
                )
            })}
        </div>
    )
}