import React, { useEffect, useState } from "react";
import { BASE_URL, getFormInputs } from "../services/api";
import { Oval } from "react-loader-spinner";

export const FormPage = () => {

    const [formInputs, setFormInputs] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getFormInputs(BASE_URL)
            .then(res => {
                setFormInputs(res.fields);
                setIsLoading(false)
            })
            .catch(error => console.log(error, 'err'))
    }, [setFormInputs])

    return (
        <div>
            {isLoading
                ? <Oval color='#8EC3B0' height={60} secondaryColor='#DEF5E5' width={60} />
                : <div>{formInputs.map(input => <div key={input.name}>{input.name}</div>)}</div>
            }
        </div>
    )
}
