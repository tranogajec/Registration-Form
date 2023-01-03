import React from "react";
import { TextField } from "@material-ui/core";

export const TextInput = ({ onChange, placeholder, type, value }) => {
    return <TextField value={value} onChange={onChange} placeholder={placeholder} type={type} />
}