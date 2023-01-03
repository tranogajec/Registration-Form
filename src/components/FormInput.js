import React from "react";
import { DropdownInput } from "./formInputComponents/DropdownInput";
import { PasswordInput } from "./formInputComponents/PasswordInput";
import { TextInput } from "./formInputComponents/TextInput";

const FIELD_TYPE = {
    date: 'date',
    dropdown: 'dropdown',
    password: 'password',
    string: 'string'
}

const { date, dropdown, password, string } = FIELD_TYPE

export const FormInput = ({ fieldType, name, onChange, options, value, id }) => {

    if (fieldType === date) return <input type='date' />
    if (fieldType === dropdown) return <DropdownInput id={id} onChange={onChange} options={options} value={value} />
    if (fieldType === password) return <PasswordInput id={id} onChange={onChange} value={value} />
    if (fieldType === string) return <TextInput id={id} onChange={onChange} placeholder={name} type={fieldType} value={value} />
}