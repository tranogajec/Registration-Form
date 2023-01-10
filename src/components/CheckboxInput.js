import React from "react";
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components'

export const CheckboxInput = ({ color, label, onChange, size, url, urlText }) =>
    <StyledDivTermsAndCond>
        <Checkbox size={size} color={color} onChange={onChange} />
        <StyledDivText>
            <StyledSpanText>{label}</StyledSpanText>
            <a href={url}>{urlText}</a>
        </StyledDivText>
    </StyledDivTermsAndCond>

const StyledDivTermsAndCond = styled.div`
    align-items: center;
    display: flex;
    font-size: 14px;
    margin-bottom: 18px;
    margin-top: 6px;
`
const StyledDivText = styled.span`
    margin-top: 3px;
`
const StyledSpanText = styled.span`
    margin-left: 6px;
    margin-right: 6px;
`