import React from "react";
import { Routes, Route } from "react-router-dom";
import { FormPage } from "../pages/FormPage";
import { UserOverviewPage } from "../pages/UserOverviewPage";

export const RegistrationFormRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<FormPage />} />
            <Route path='/user-overview' element={<UserOverviewPage />} />
        </Routes>
    )
}