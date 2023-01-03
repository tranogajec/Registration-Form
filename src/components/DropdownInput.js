import React from "react";
import { Select, MenuItem } from "@material-ui/core";

export const DropdownInput = ({ onChange, value, options }) => {

    const generateSelectOptions = () => {
        return options.map((option) => {
            const { value, name } = option

            return <MenuItem key={value} value={value}>{name}</MenuItem>
        });
    };

    return (
        <Select onChange={onChange} value={value}>
            {generateSelectOptions()}
        </Select>
    )
}
