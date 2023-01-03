import React from "react";
import { useForm } from "react-hook-form";
import { FormInputBase } from "./FormInputBase.js";

export const RegistrationForm = ({ formInputs }) => {

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data, 'formData')
    }

    return (
        <div>
            {formInputs.map(input => {
                const { code, defaultValue, fieldType, name, valueList } = input
                return (
                    <FormInputBase
                        control={control}
                        defaultValue={defaultValue}
                        fieldType={fieldType}
                        id={code}
                        key={code}
                        name={name}
                        options={valueList}
                    />
                )
            })}
            <button onClick={handleSubmit(onSubmit)}>Submit</button>
        </div>
    )
}