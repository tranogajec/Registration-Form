import React from "react";
import { FormInput } from "./FormInput";

export const RegistrationForm = ({ formInputs }) => {
    return (
        <div>
            {formInputs.map(input => {
                const { code, defaultValue, fieldType, name, order, required, step, Updatable, validators, valueList } = input
                return (
                    <FormInput
                        defaultValue={defaultValue}
                        fieldType={fieldType}
                        key={code}
                        name={name}
                        order={order}
                        required={required}
                        step={step}
                        updatable={Updatable}
                        validators={valueList}
                        valueList={validators}
                    />
                )
            })}
        </div>
    )
}