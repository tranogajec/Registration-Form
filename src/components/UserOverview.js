import React from "react";
import styled from 'styled-components'
import monkeySilhouette from '../assets/monkey-silhouette.png'

export const UserOverview = ({ overviewData }) =>
    <StyledMainContainer>
        <StyledDivOverview>
            {overviewData.map((data, index) =>
                <StyledDivContainer key={index}>
                    <StyledImg src={monkeySilhouette} alt="monkey-icon" />
                    <StyledDivData>
                        <StyledH5Label>{data.label}</StyledH5Label>
                        <StyledSpanValue>{data.value}</StyledSpanValue>
                    </StyledDivData>
                </StyledDivContainer>
            )}
        </StyledDivOverview>
    </StyledMainContainer>


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
    margin-bottom: 18px;
    margin-top: 18px;
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
const StyledDivContainer = styled.div`
    display: flex;
    margin-top: 30px;
`
const StyledDivData = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledImg = styled.img`
    height: 24px;
    margin-right: 12px;
    width: 24px;
`
const StyledH5Label = styled.h5`
    font-size: 20px;
    margin-bottom: 12px;
    margin-top: 0;
`
const StyledSpanValue = styled.span`
    font-size: 18px;
    font-style: italic;
`
