import React from "react";
import { Routes, Route } from "react-router-dom";
import { FormPage } from "../pages/FormPage";
import { OverviewPage } from "../pages/OverviewPage";

export const RegistrationFormRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<FormPage />} />
            <Route path='/user-overview' element={<OverviewPage />} />
        </Routes>
    )
}