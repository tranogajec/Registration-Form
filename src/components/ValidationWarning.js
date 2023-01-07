import React from "react";
import styled from 'styled-components'
import { generateErrorMsg, transformErrorMessage } from "../helperFunctions";

export const ValidationWarning = ({ validator }) =>
    <StyledPValidation>
        {validator.parameters.regex || validator.parameters.target
            ? generateErrorMsg(validator)
            : transformErrorMessage(validator.invalid_message)
        }
    </StyledPValidation>

const StyledPValidation = styled.div`
    color: #f44336;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 0.03333em;
    line-height: 1.66;
    margin-top: 3px;
    margin: 0;
    text-align: left;
`
