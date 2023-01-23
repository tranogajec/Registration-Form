import React from "react";
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components'

export const CheckboxInput = ({ checked, color, label, onChange, size, url, urlText }) =>
    <StyledDivCheckbox>
        <Checkbox checked={checked} color={color} onChange={onChange} size={size} />
        <StyledDivText>
            <StyledSpanText>{label}</StyledSpanText>
            <a href={url}>{urlText}</a>
        </StyledDivText>
    </StyledDivCheckbox>

const StyledDivCheckbox = styled.div`
    align-items: center;
    display: flex;
    font-size: 12px;
    margin-bottom: 18px;
    margin-top: 6px;
`
const StyledDivText = styled.span`
    margin-top: 3px;
`
const StyledSpanText = styled.span`
    margin-right: 6px;
`