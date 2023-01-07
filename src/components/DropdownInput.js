import React from "react";
import { MenuItem, Select } from "@material-ui/core";

export const DropdownInput = ({ id, onChange, options, value }) =>
    <Select id={id} onChange={onChange} value={value}>
        {options.map((option) =>
            <MenuItem key={option.value} value={option.value}>{option.value}</MenuItem>
        )}
    </Select>
