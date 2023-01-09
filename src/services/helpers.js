import {
    EMAIL_VAL,
    LENGTH,
    MATCHES_FIELD,
    MAX_LENGTH,
    MIN_LENGTH,
    MSG_EMAIL,
    MSG_INPUT_REQUIRED,
    MSG_LETTER_NUMBER_CHAR,
    MSG_MAX_LENGTH,
    MSG_MIN_LENGTH,
    MSG_NO_MATCH,
    MSG_STRONG_PASS,
    OLDER_THAN,
    PASS_STRENGTH,
    REG_EMAIL,
    REGEX,
    MSG_BIRTHDAY,
    MSG_INVALID_INPUT,
} from "../constants";

export const transformErrorMsg = (string) => {
    const errorString =
        (string.charAt(0).toUpperCase() + string.slice(1)).replaceAll('_', ' ') + '.';
    return errorString
}

const generateRegex = (reg, modifier) => new RegExp(reg.source, reg.flags + modifier)

export const generateRules = (validators, required, getValues) => {
    const validationParams = validators.map(validator => {

        const { key, parameters } = validator
        const targetValue = getValues(parameters.target)

        switch (key) {
            case EMAIL_VAL:
                if (parameters.regex || parameters.regex && parameters.modifiers) {
                    const reg = new RegExp(parameters.regex)
                    return {
                        required: { value: required, message: MSG_INPUT_REQUIRED },
                        pattern: {
                            value: parameters.modifiers
                                ? generateRegex(reg, parameters.modifiers)
                                : reg,
                            message: MSG_EMAIL
                        }
                    }
                }
                return {
                    required: { value: required, message: MSG_INPUT_REQUIRED },
                    pattern: { value: REG_EMAIL, message: MSG_EMAIL }
                }

            case LENGTH:
                return {
                    required: { value: required, message: MSG_INPUT_REQUIRED },
                    maxLength: { value: parameters.targetLength, message: MSG_MAX_LENGTH(parameters.targetLength) },
                    minLength: { value: parameters.targetLength, message: MSG_MIN_LENGTH(parameters.targetLength) }
                }

            case MATCHES_FIELD:
                if (parameters.target) {
                    return {
                        required: { value: required, message: MSG_INPUT_REQUIRED },
                        validate: value => value === targetValue || MSG_NO_MATCH
                    }
                }

            case MAX_LENGTH:
                return {
                    required: { value: required, message: MSG_INPUT_REQUIRED },
                    maxLength: { value: parameters.targetLength, message: MSG_MAX_LENGTH(parameters.targetLength) }
                }

            case MIN_LENGTH:
                return {
                    required: { value: required, message: MSG_INPUT_REQUIRED },
                    minLength: { value: parameters.targetLength, message: MSG_MIN_LENGTH(parameters.targetLength) }
                }

            case OLDER_THAN:
                return {
                    required: { value: required, message: MSG_INPUT_REQUIRED },
                    validate: (value) => {
                        const currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';

                        const age = ~~((Date.now(currentDate) - value.$d) / 31557600000);

                        if (age < parameters.age) return MSG_BIRTHDAY(parameters.age);
                        return true
                    }

                }

            case PASS_STRENGTH:
                const passwordReg = new RegExp(parameters.regex)
                return {
                    required: { value: required, message: MSG_INPUT_REQUIRED },
                    pattern: { value: passwordReg, message: MSG_STRONG_PASS }
                }

            case REGEX:
                const reg = new RegExp(parameters.regex)
                return (
                    parameters.modifiers
                        ? {
                            required: { value: required, message: MSG_INPUT_REQUIRED },
                            pattern: { value: generateRegex(reg, parameters.modifiers), message: MSG_LETTER_NUMBER_CHAR }
                        }
                        : {
                            required: { value: required, message: MSG_INPUT_REQUIRED },
                            pattern: { value: reg, message: MSG_INVALID_INPUT }
                        }
                )

            default: return {}
        }
    })

    const rules = {};
    for (let i = 0; i < validationParams.length; i++) {
        Object.assign(rules, validationParams[i]);
    }

    const rulesObject = { ...rules }
    return rulesObject
}