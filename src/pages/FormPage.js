import React, { useEffect } from "react";
import { BASE_URL, getFormInputs } from "../services/api";

export const FormPage = () => {

    useEffect(() => {
        getFormInputs(BASE_URL).then(res => console.log(res))
    }, [])

    return <div>Form page</div>
}