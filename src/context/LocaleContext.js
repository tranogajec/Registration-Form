import React, { useContext, createContext, useReducer } from 'react';
import { LOCALE_STRINGS, LANGUAGES } from '../constants';

const initialState = { strings: LOCALE_STRINGS[LANGUAGES.EN] }
const LocaleContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_LOCALE": {
            return {
                ...state,
                strings: LOCALE_STRINGS[action.payload.region]
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