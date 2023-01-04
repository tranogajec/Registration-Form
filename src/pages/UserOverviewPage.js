import React from "react";
import { useLocation } from 'react-router-dom'

export const UserOverviewPage = () => {

    const userOverview = useLocation()
    console.log(userOverview, 'userOverview')

    return (
        <>
            {
                userOverview.state.status === 'success'
                    ? <div>User overview page</div>
                    : <h2>Error</h2>
            }
        </>
    )
}