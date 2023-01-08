import React from "react";
import styled from 'styled-components'
import { generateErrorMsg, transformErrorMsg } from "../helperFunctions";

export const ValidationWarning = ({ validator }) =>
    <StyledParagraphValidation>
        {validator.parameters.regex
            || validator.parameters.target
            || Object.keys(validator.parameters).length === 0

            ? generateErrorMsg(validator)
            : transformErrorMsg(validator.invalid_message)
        }
    </StyledParagraphValidation>

const StyledParagraphValidation = styled.p`
    color: #f44336;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.66;
    margin-bottom: 0;
    margin-top: 3px;
    padding-left: 1px;
    text-align: left;
`
