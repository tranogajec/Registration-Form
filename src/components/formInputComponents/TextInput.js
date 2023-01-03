import React from "react";
import { TextField } from "@material-ui/core";

export const TextInput = ({ onChange, placeholder, type, value, id }) => {

    return <TextField id={id} onChange={onChange} placeholder={placeholder} type={type} value={value} />

}