import React from "react";
import PasswordField from "material-ui-password-field";

export const PasswordInput = ({ onChange, value, id }) => {

    return (
        <div id={id}>
            <PasswordField onChange={onChange} value={value} />
        </div>
    )
}