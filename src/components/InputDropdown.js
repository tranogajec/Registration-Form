import React from "react";
import { MenuItem, Select } from "@material-ui/core";

export const InputDropdown = ({ id, onChange, options, value }) => {
    return (
        <Select id={id} onChange={onChange} value={value}>
            {options.map((option) =>
                <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
            )}
        </Select>
    )
}
