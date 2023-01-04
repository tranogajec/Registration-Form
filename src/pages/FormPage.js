import React, { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";
import { BASE_URL, getFormInputs } from "../services/api";
import { RegistrationForm } from "../components/RegistrationForm";

export const FormPage = () => {

    const [formInputs, setFormInputs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState()

    useEffect(() => {
        setIsLoading(true)
        getFormInputs(BASE_URL)
            .then(res => {
                setFormInputs(prevState => [...prevState, ...res]);
                setIsLoading(false);
            })
            .catch(error => {
                setError(prevState => ({ ...prevState, error }));
                setIsLoading(false);
            })
    }, [setIsLoading, setFormInputs, setError])

    if (isLoading) return <Oval color='#8EC3B0' height={60} secondaryColor='#DEF5E5' width={60} />

    return (
        <>
            {error
                ? <h2>Error</h2>
                : <RegistrationForm formInputs={formInputs} />
            }
        </>
    )
}
