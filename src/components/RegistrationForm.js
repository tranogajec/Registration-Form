import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Oval } from "react-loader-spinner";
import { BASE_URL, postFormInputs } from "../services/api.js";
import { Button } from "./Button.js";
import { FormInputBase } from "./FormInputBase.js";

export const RegistrationForm = ({ formInputs }) => {

    const [isLoading, setIsLoading] = useState(false)
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setIsLoading(true)
        await postFormInputs(BASE_URL + '/overview', data)
            .then(res => {
                setIsLoading(false);
                navigate('/user-overview', { state: { data: res, status: 'success' } })
            })
            .catch(error =>
                navigate('/user-overview', { state: { data: error, status: 'error' } }))
    }

    return (
        <>
            {isLoading
                ? <Oval color='#8EC3B0' height={60} secondaryColor='#DEF5E5' width={60} />
                :
                <form>
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
                                    placeholder={name}
                                />
                            )
                        })
                    }
                    <Button onClick={handleSubmit(onSubmit)} />
                </form>
            }
        </>
    )
}