import React, { useEffect, useState } from "react";
import { BASE_URL, getFormInputs } from "../services/api";
import { Oval } from "react-loader-spinner";
import { RegistrationForm } from "../components/RegistrationForm";

export const FormPage = () => {

    const [formInputs, setFormInputs] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getFormInputs(BASE_URL)
            .then(res => {
                console.log(res)
                setFormInputs(res);
                setIsLoading(false)
            })
            .catch(error => console.log(error, 'err'))
    }, [setFormInputs])

    return (
        <div>
            {isLoading
                ? <Oval color='#8EC3B0' height={60} secondaryColor='#DEF5E5' width={60} />
                : <RegistrationForm formInputs={formInputs} />
            }
        </div>
    )
}
