import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { BASE_URL, postFormInputs } from "../services/api.js";
import { Button } from "./Button.js";
import { FormInputBase } from "./FormInputBase.js";

export const RegistrationForm = ({ formInputs }) => {

    const [isLoading, setIsLoading] = useState(false)
    const { control, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data, 'formData')
        setIsLoading(true)
        await postFormInputs(BASE_URL + '/overview', data)
            .then(res => { console.log(res); setIsLoading(false) })
    }

    return (
        <>
            {isLoading
                ? <Oval color='#8EC3B0' height={60} secondaryColor='#DEF5E5' width={60} />
                :
                <div>
                    {
                        formInputs.map(input => {
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
                        })
                    }
                    <Button onClick={handleSubmit(onSubmit)} icon={<ReceiptLongIcon />} />
                </div>
            }
        </>
    )
}