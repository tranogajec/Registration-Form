import React from "react";
import { useLocation } from 'react-router-dom'
import { useLocale } from "../context/LocaleContext";
import { Error } from "../components/Error";
import { Overview } from "../components/Overview";

export const OverviewPage = () => {

    const overview = useLocation()
    const overviewData = overview.state.data

    const { localeState } = useLocale();
    const { currentLang } = localeState;

    if (overview.state.status === 'error') {
        return <Error error={overviewData[currentLang].error} />
    }

    return <Overview overviewData={overviewData} />
}