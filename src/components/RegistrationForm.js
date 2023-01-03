import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button.js";
import { FormInputBase } from "./FormInputBase.js";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

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
            <Button onClick={handleSubmit(onSubmit)} icon={<ReceiptLongIcon />} />
        </div>
    )
}