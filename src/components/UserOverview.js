import React from "react";
import styled from 'styled-components'
import dancingBanana from "../assets/dancing-banana.gif"
import { useLocale } from '../context/LocaleContext'

export const UserOverview = ({ overviewData }) => {

    const { localeState } = useLocale()
    const { locales } = localeState

    const username = overviewData.find(el => el.label === "username")

    return (
        <StyledMainContainer>
            <StyledDivOverview>
                <StyledDivUser>
                    <StyledSpanGreeting>{locales.dear}</StyledSpanGreeting>
                    <StyledSpanUsername>{username.value}</StyledSpanUsername>
                    <StyledComma>,</StyledComma>
                </StyledDivUser>
                <StyledDivMessage>
                    <span>{locales.thankYouForCreatingAnAcc}</span>
                    <StyledSpanEnjoy>{locales.enjoy}</StyledSpanEnjoy>
                </StyledDivMessage>
                <StyledImg src={dancingBanana} alt="dancing-banana" />
            </StyledDivOverview>
        </StyledMainContainer>
    )
}

const StyledMainContainer = styled.main`
    align-items: center;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    max-width: 100vw;
`
const StyledDivOverview = styled.div`
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 18px;
    margin-top: 60px;
    max-height: 82vh;
    overflow-y: auto;
    padding-right: 36px;
    text-align: left;

    &::-webkit-scrollbar {
        background: #F9F2ED;
        border-radius: 12px;
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background: #377D71;
        border-radius: 12px;
    &:hover {
        background: #224B0C;
        border-radius: 12px;
    }
}
`
const StyledDivUser = styled.div`
    display: flex;
    align-items: center;
`
const StyledSpanGreeting = styled.span`
    font-size: 20px;
    margin-right: 6px; 
`
const StyledComma = styled.span`
    font-size: 20px;
`
const StyledSpanUsername = styled.span`
    font-weight: 600;
    font-style: italic;
    font-size: 28px
`
const StyledDivMessage = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    margin-top: 12px;
`
const StyledSpanEnjoy = styled.span`
    margin-top: 12px; 
`
const StyledImg = styled.img`
    margin-top: 30px;
    max-height: 400px;
    max-width: 400px;
`
