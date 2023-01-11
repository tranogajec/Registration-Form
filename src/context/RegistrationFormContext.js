import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
    forms: {},
};

const RegistrationFormContext = createContext();

const registrationFormReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FORM': {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    [action.payload.language]: action.payload.form,
                },
            };
        }
        default:
            return state;
    }
};

export const RegistrationFormProvider = ({ children }) => {
    const [registrationFormState, registrationFormDispatch] = useReducer(registrationFormReducer, initialState);

    return (
        <RegistrationFormContext.Provider value={{ registrationFormState, registrationFormDispatch }}>
            {children}
        </RegistrationFormContext.Provider>
    );
};

export const useRegistrationForm = () => useContext(RegistrationFormContext);