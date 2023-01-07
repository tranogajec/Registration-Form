import { SPECIAL_CHAR, NO_MATCH } from "./constants";

export const transformErrorMessage = (string) => {
    const errorString =
        (string.charAt(0).toUpperCase()
            + string.slice(1)).replaceAll('_', ' ') + '.';
    return errorString
}

export const generateErrorMsg = (validation) => {
    const { parameters } = validation

    if (parameters.regex === "^[a-z0-9\\-\\_]+$"
        && parameters.modifiers === 'i') {
        return SPECIAL_CHAR
    }
    if (parameters.target === "password") {
        return NO_MATCH
    }
}

export const generateRules = (validators, required) => {

    const validationParams = validators.map(validator => {
        const { name, parameters } = validator

        switch (name) {
            // case 'emailValidator':
            //     return {}
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
                return { pattern: parameters.regex }
            case 'regex':
                return parameters.modifiers
                    ? { pattern: parameters.regex + '/' + parameters.modifiers }
                    : { pattern: parameters.regex }
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