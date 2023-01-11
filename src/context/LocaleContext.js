import React, { createContext, useContext, useReducer } from 'react';
import { localeValues, languages } from '../constants';

const initialState = {
    currentLang: languages.EN,
    locales: localeValues[languages.EN]
}
const LocaleContext = createContext()

const localeContextReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_LOCALE": {
            return {
                ...state,
                currentLang: action.payload.language,
                locales: localeValues[action.payload.language]
            };
        }
        default:
            return state;
    }
};

export const LocaleProvider = ({ children }) => {
    const [localeState, localeDispatch] = useReducer(localeContextReducer, initialState)

    return (
        <LocaleContext.Provider value={{ localeState, localeDispatch }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => useContext(LocaleContext);