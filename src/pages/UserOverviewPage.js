import React from "react";
import { useLocation } from 'react-router-dom'
import { UserOverview } from "../components/UserOverview";

export const UserOverviewPage = () => {

    const userOverview = useLocation()
    const overviewData = userOverview.state.data

    return <UserOverview overviewData={overviewData} />
}