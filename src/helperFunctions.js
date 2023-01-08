import {
    MSG_LETTER_NUMBER_CHAR,
    MSG_NO_MATCH,
    MSG_CONTAIN_AT_LEAST,
    REG_LETTER_NUM_CHAR,
    REG_LETTER_NUM_CHAR_8,
    REG_EMAIL
} from "./constants";

export const transformErrorMsg = (string) => {
    const errorString =
        (string.charAt(0).toUpperCase()
            + string.slice(1)).replaceAll('_', ' ') + '.';
    return errorString
}

export const generateErrorMsg = (validation) => {
    const { parameters, name } = validation

    if (parameters.regex === REG_LETTER_NUM_CHAR && parameters.modifiers === 'i')
        return MSG_LETTER_NUMBER_CHAR

    if (parameters.regex === REG_LETTER_NUM_CHAR_8)
        return MSG_CONTAIN_AT_LEAST

    if (name === 'emailValidator')
        return MSG_CONTAIN_AT_LEAST

    if (parameters.target === "password")
        return MSG_NO_MATCH
}

export const generateRules = (validators, required) => {

    const validationParams = validators.map(validator => {
        const { name, parameters } = validator

        switch (name) {
            case 'emailValidator':
                return {
                    pattern: REG_EMAIL
                }
            case 'length':
                return {
                    maxLength: parameters.targetLength,
                    minLength: parameters.targetLength
                }

            // case 'matchesField':
            //     return {}

            case 'maxLength':
                return { maxLength: parameters.targetLength }

            case 'minLength':
                return { minLength: parameters.targetLength }

            case 'min':
                return { min: parameters.age }

            case 'passwordStrength':
                const passwordReg = new RegExp(parameters.regex)
                return { pattern: passwordReg }

            case 'regex':
                const reg = new RegExp(parameters.regex)
                const generateRegex = (reg, modifier) =>
                    new RegExp(reg.source, reg.flags + modifier)
                return (
                    parameters.modifiers
                        ? { pattern: generateRegex(reg, parameters.modifiers) }
                        : { pattern: reg }
                )

            default: return {}
        }
    })

    const rules = {};
    for (let i = 0; i < validationParams.length; i++) {
        Object.assign(rules, validationParams[i]);
    }

    const rulesObject = { ...rules, required: required }
    return rulesObject
}