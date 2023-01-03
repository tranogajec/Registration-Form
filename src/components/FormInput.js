import React from "react";
import { TextInput } from "./TextInput";

const FIELD_TYPE = {
    date: 'date',
    dropdown: 'dropdown',
    password: 'password',
    string: 'string'
}

const { date, dropdown, password, string } = FIELD_TYPE

export const FormInput = ({ fieldType, name, value, onChange }) => {

    if (fieldType === date) {
        return (
            <input type='date' />
        )
    }
    if (fieldType === dropdown) {
        return (
            <select></select>
        )
    }
    if (fieldType === password) {
        return (
            <input type='password' />
        )
    }
    if (fieldType === string) {
        return (
            <TextInput
                onChange={onChange}
                placeholder={name}
                type={fieldType}
                value={value}
            />
        )
    }
}
