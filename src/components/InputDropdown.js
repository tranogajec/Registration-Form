import React from "react";
import { MenuItem, Select } from "@material-ui/core";

export const InputDropdown = ({ id, onChange, options, value }) => {

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
