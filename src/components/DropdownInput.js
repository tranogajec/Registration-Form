import React from "react";
import { MenuItem, Select } from "@material-ui/core";

export const DropdownInput = ({ id, onChange, options, value }) =>
    <Select id={id} onChange={onChange} value={value}>
        {options.map((option) => {
            const { value, name } = option

            return <MenuItem key={value} value={value}>{name}</MenuItem>
        })}
    </Select>
