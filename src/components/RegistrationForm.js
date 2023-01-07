import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import { BASE_URL, postFormInputs } from "../services/api.js";
import hangingMonkey from "../assets/hanging-monkey.gif"
import { Button, submit } from "./Button.js";
import { FormInputBase } from "./FormInputBase.js";

export const RegistrationForm = ({ formInputs }) => {

    const [isLoading, setIsLoading] = useState(false)
    const { control, handleSubmit } = useForm();
    const navigate = useNavigate();

    const formValidators = formInputs.map(input => input.validators)

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
                ? <img src={hangingMonkey} alt="spinning-monkey" />
                :
                <form>
                    <StyledDivInputs>
                        {
                            formInputs.map(input => {
                                return (
                                    <FormInputBase
                                        control={control}
                                        defaultValue={input.defaultValue}
                                        fieldType={input.fieldType}
                                        id={input.code}
                                        key={input.code}
                                        name={input.name}
                                        options={input.valueList}
                                        placeholder={input.name}
                                        required={input.required}
                                        validators={input.validators}
                                        formValidators={formValidators}
                                    />
                                )
                            })
                        }
                    </StyledDivInputs>
                    <Button label={submit} onClick={handleSubmit(onSubmit)} />
                </form>
            }
        </>
    )
}

const StyledDivInputs = styled.div`
    margin-bottom: 18px;
`