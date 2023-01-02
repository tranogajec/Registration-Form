import React from "react";

const FIELD_TYPE = {
    date: 'date',
    dropdown: 'dropdown',
    password: 'password',
    string: 'string'
}

const { date, dropdown, password, string } = FIELD_TYPE
const REQUIRED_STAR = " * "

export const FormInput = ({
    code,
    dataType,
    defaultValue,
    fieldType,
    name,
    order,
    required,
    step,
    validators,
    valueList,
    Updatable,
}) => {

    const renderInputType = () => {
        if (fieldType === date) return <input type={date} />
        if (fieldType === dropdown) return <input type={dropdown} />
        if (fieldType === password) return <input type={password} />
        if (fieldType === string) return <input type={string} />
    }

    return (
        <div>
            <div>
                {name} {required ? REQUIRED_STAR : null}
            </div>
            <div>
                {renderInputType()}
            </div>
        </div>
    )
}

