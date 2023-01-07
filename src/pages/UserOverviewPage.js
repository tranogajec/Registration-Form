import React from "react";
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Error } from "../components/Error";

export const UserOverviewPage = () => {

    const userOverview = useLocation()
    const overviewData = userOverview.state.data
    console.log(userOverview, 'userOverview')

    return (
        <StyledMainContainer>
            {
                userOverview.state.status === 'success'
                    ?
                    <StyledDivOverview>
                        {overviewData.map((data, index) =>
                            <div key={index}>
                                <h5>{data.label}</h5>
                                <span>{data.value}</span>
                            </div>
                        )}
                    </StyledDivOverview>
                    : <Error error={overviewData} />
            }
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
    max-height: 82vh;
    padding-left: 36px;
    padding-right: 36px;
    margin-bottom: 18px;
    margin-top: 18px;
    overflow-y: auto;
    text-align: left;

    &::-webkit-scrollbar {
        width: 6px;
  }

    &::-webkit-scrollbar-thumb {
        background: #cfd2cf;
        border-radius: 6px;
    &:hover {
        background: #cfd2cf;
        border-radius: 12px;
    }
    }
`