import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import { BASE_URL, postFormInputs } from "../services/api.js";
import { Button, submit } from "./Button.js";
import { FormInputBase } from "./FormInputBase.js";
import hangingMonkey from "../hanging-monkey.gif"

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
                ? <img src={hangingMonkey} alt="spinning-monkey" />
                :
                <>
                    <StyledDivInputs>
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
                    </StyledDivInputs>
                    <Button label={submit} onClick={handleSubmit(onSubmit)} />
                </>
            }
        </>
    )
}

// const StyledForm = styled.form`
//     background-color: blue;
//     border: none;
//     max-height: 86vh;
//     margin-bottom: 18px;
//     margin-top: 18px;
//     padding-left: 36px;
//     padding-right: 36px;
//     overflow-y: auto;
//     text-align: left;

//     &::-webkit-scrollbar {
//         width: 6px;
//   }

//     &::-webkit-scrollbar-thumb {
//         background: #cfd2cf;
//         border-radius: 6px;
//     &:hover {
//         background: #cfd2cf;
//         border-radius: 12px;
//     }
// }
// `

const StyledDivInputs = styled.div`
    margin-bottom: 18px;
`