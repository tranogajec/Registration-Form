import React from "react";
import PasswordField from "material-ui-password-field";
import { TextField } from "@material-ui/core";
import { DateInput } from "./DateInput";
import { DropdownInput } from "./DropdownInput";


const FIELD_TYPE = {
    date: 'date',
    dropdown: 'dropdown',
    password: 'password',
}

const { date, dropdown, password } = FIELD_TYPE

export const FormInput = ({ fieldType, id, name, onChange, options, value }) => {

    switch (fieldType) {
        case date:
            return <DateInput id={id} onChange={onChange} value={value} />
        case dropdown:
            return <DropdownInput id={id} onChange={onChange} options={options} value={value} />
        case password:
            return <PasswordField id={id} onChange={onChange} value={value} />
        default:
            return <TextField id={id} onChange={onChange} placeholder={name} value={value} />
    }
}
