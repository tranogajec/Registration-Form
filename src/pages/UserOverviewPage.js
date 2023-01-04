import React from "react";
import { useLocation } from 'react-router-dom'

export const UserOverviewPage = () => {

    const userOverview = useLocation()
    console.log(userOverview, 'userOverview')

    return <div>User overview page</div>
}