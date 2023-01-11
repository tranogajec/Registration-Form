import React from "react";
import { useLocation } from 'react-router-dom'
import { useLocale } from "../context/LocaleContext";
import { Error } from "../components/Error";
import { UserOverview } from "../components/UserOverview";


export const UserOverviewPage = () => {

    const userOverview = useLocation()
    const overviewData = userOverview.state.data

    const { localeState } = useLocale();
    const { currentLang } = localeState;

    if (userOverview.state.status === 'error') {
        return <Error error={overviewData[currentLang].error} />
    }

    return <UserOverview overviewData={overviewData} />
}