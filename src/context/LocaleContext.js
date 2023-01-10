import React, { createContext, useContext, useReducer } from 'react';
import { localeValues, languages } from '../constants';

const initialState = { locales: localeValues[languages.EN] }
const LocaleContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_LOCALE": {
            return {
                ...state,
                locales: localeValues[action.payload.language]
            };
        }
        default:
            return state;
    }
};

export const LocaleProvider = ({ children }) => {
    const [stateLocale, dispatch] = useReducer(reducer, initialState)

    return (
        <LocaleContext.Provider value={{ stateLocale, dispatch }}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => useContext(LocaleContext);