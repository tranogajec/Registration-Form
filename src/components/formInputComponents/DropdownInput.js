import React from "react";
import { Select, MenuItem } from "@material-ui/core";

export const DropdownInput = ({ onChange, options, value, id }) => {

    const generateSelectOptions = () => {
        return options.map((option) => {
            const { name, value } = option

            return <MenuItem key={value} value={value}>{name}</MenuItem>
        });
    };

    return (
        <Select id={id} onChange={onChange} value={value}>
            {generateSelectOptions()}
        </Select>
    )
}
