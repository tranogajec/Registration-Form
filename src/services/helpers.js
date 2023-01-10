import {
    EMAIL_VAL,
    LENGTH,
    MATCHES_FIELD,
    MAX_LENGTH,
    MIN_LENGTH,
    OLDER_THAN,
    PASS_STRENGTH,
    REG_EMAIL,
    REGEX
} from "../constants";

const generateRegex = (reg, modifier) => new RegExp(reg.source, reg.flags + modifier)

export const generateRules = (validators, required, getValues, locales) => {
    const validationParams = validators.map(validator => {

        const { key, parameters } = validator
        const targetValue = getValues(parameters.target)

        switch (key) {
            case EMAIL_VAL:
                if (parameters.regex || parameters.regex && parameters.modifiers) {
                    const reg = new RegExp(parameters.regex)
                    return {
                        required: { value: required, message: locales.inputRequired },
                        pattern: {
                            value: parameters.modifiers
                                ? generateRegex(reg, parameters.modifiers)
                                : reg,
                            message: locales.validationMail
                        }
                    }
                }
                return {
                    required: { value: required, message: locales.inputRequired },
                    pattern: { value: REG_EMAIL, message: locales.validationEmail }
                }

            case LENGTH:
                return {
                    required: { value: required, message: locales.inputRequired },
                    maxLength: {
                        value: parameters.targetLength,
                        message: locales.validationMaxLengthA + parameters.targetLength + locales.validationMaxLengthB
                    },
                    minLength: {
                        value: parameters.targetLength,
                        message: locales.validationMinLengthA + parameters.targetLength + locales.validationMinLengthB
                    }
                }

            case MATCHES_FIELD:
                if (parameters.target) {
                    return {
                        required: { value: required, message: locales.inputRequired },
                        validate: value => value === targetValue || locales.validationNoMatch
                    }
                }

            case MAX_LENGTH:
                return {
                    required: { value: required, message: locales.inputRequired },
                    maxLength: {
                        value: parameters.targetLength,
                        message: locales.validationMaxLengthA + parameters.targetLength + locales.validationMaxLengthB
                    }
                }

            case MIN_LENGTH:
                return {
                    required: { value: required, message: locales.inputRequired },
                    minLength: {
                        value: parameters.targetLength,
                        message: locales.validationMinLengthA + parameters.targetLength + locales.validationMinLengthB
                    }
                }

            case OLDER_THAN:
                return {
                    required: { value: required, message: locales.inputRequired },
                    validate: value => {
                        const currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';

                        const age = ~~((Date.now(currentDate) - value.$d) / 31557600000);

                        if (age < parameters.age)
                            return locales.validationBirthdayA + parameters.age + locales.validationBirthdayB;
                        return true
                    }

                }

            case PASS_STRENGTH:
                const passwordReg = new RegExp(parameters.regex)
                return {
                    required: { value: required, message: locales.inputRequired },
                    pattern: { value: passwordReg, message: locales.validationStrongPass }
                }

            case REGEX:
                const reg = new RegExp(parameters.regex)
                return (
                    parameters.modifiers
                        ? {
                            required: { value: required, message: locales.inputRequired },
                            pattern: { value: generateRegex(reg, parameters.modifiers), message: locales.validationLettersAndNum }
                        }
                        : {
                            required: { value: required, message: locales.inputRequired },
                            pattern: { value: reg, message: locales.invalidInput }
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