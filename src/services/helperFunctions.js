import {
    MSG_LETTER_NUMBER_CHAR,
    MSG_NO_MATCH,
    MSG_CONTAIN_AT_LEAST,
    REG_LETTER_NUM_CHAR,
    REG_LETTER_NUM_CHAR_8,
    REG_EMAIL,
    EMAIL_VAL,
    LENGTH,
    MATCHES_FIELD,
    MAX_LENGTH,
    MIN_LENGTH,
    MIN,
    PASS_STRENGTH,
    REGEX
} from "../constants";

export const transformErrorMsg = (string) => {
    const errorString =
        (string.charAt(0).toUpperCase() + string.slice(1)).replaceAll('_', ' ') + '.';
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


const generateRegex = (reg, modifier) => new RegExp(reg.source, reg.flags + modifier)


export const generateRules = (validators, required, getValues) => {
    const validationParams = validators.map(validator => {
        const { name, parameters } = validator

        const targetValue = getValues(parameters.target)

        switch (name) {
            case EMAIL_VAL:
                if (parameters.regex || parameters.regex && parameters.modifiers) {
                    const reg = new RegExp(parameters.regex)
                    return (
                        parameters.modifiers
                            ? { pattern: generateRegex(reg, parameters.modifiers) }
                            : { pattern: reg }
                    )
                }
                return { pattern: REG_EMAIL }

            case LENGTH:
                return {
                    maxLength: parameters.targetLength,
                    minLength: parameters.targetLength
                }

            case MATCHES_FIELD:
                if (parameters.target) {
                    return { validate: value => value === targetValue }
                }

            case MAX_LENGTH:
                return { maxLength: parameters.targetLength }

            case MIN_LENGTH:
                return { minLength: parameters.targetLength }

            case MIN:
                return { min: parameters.age }

            case PASS_STRENGTH:
                const passwordReg = new RegExp(parameters.regex)
                return { pattern: passwordReg }

            case REGEX:
                const reg = new RegExp(parameters.regex)
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