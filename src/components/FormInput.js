import React from "react";
import PasswordField from "material-ui-password-field";
import { TextField } from "@material-ui/core";
import { DATE, DROPDOWN, PASSWORD } from "../constants";
import { DateInput } from "./DateInput";
import { DropdownInput } from "./DropdownInput";

export const FormInput = ({ fieldType, id, onChange, options, placeholder, value }) => {

    switch (fieldType) {
        case DATE:
            return <DateInput id={id} onChange={onChange} value={value} />
        case DROPDOWN:
            return <DropdownInput id={id} onChange={onChange} options={options} value={value} />
        case PASSWORD:
            return <PasswordField id={id} onChange={onChange} value={value} />
        default:
            return <TextField id={id} onChange={onChange} placeholder={placeholder} value={value} variant="outlined" />
    }
}
