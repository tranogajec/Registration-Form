import React from "react";
import PasswordField from "material-ui-password-field";
import { TextField } from "@material-ui/core";
import { InputDate } from "./InputDate";
import { InputDropdown } from "./InputDropdown";

const FieldType = {
    DATE: 'date',
    DROPDOWN: 'dropdown',
    PASSWORD: 'password',
}

const { DATE, DROPDOWN, PASSWORD } = FieldType

export const Input = ({ fieldType, id, name, onChange, options, placeholder, value }) => {

    switch (fieldType) {
        case DATE:
            return <InputDate id={id} onChange={onChange} value={value} />
        case DROPDOWN:
            return <InputDropdown id={id} onChange={onChange} options={options} value={value} />
        case PASSWORD:
            return <PasswordField id={id} onChange={onChange} value={value} />
        default:
            return <TextField id={id} onChange={onChange} placeholder={placeholder} value={value} />
    }
}
