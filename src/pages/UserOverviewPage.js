import React from "react";
import { useLocation } from 'react-router-dom'
import { Error } from "../components/Error";
import { UserOverview } from "../components/UserOverview";

export const UserOverviewPage = () => {

    const userOverview = useLocation()
    const overviewData = userOverview.state.data

    if (userOverview.state.status === 'error')
        return <Error error={overviewData} />

    return <UserOverview overviewData={overviewData} />
}