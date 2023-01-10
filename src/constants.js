import enLocale from "./locales/english.json"
import moLocale from "./locales/monkey.json"
import noLocale from "./locales/norwegian.json"

// locale 
export const languages = {
    EN: 'EN',
    MO: 'MO',
    NO: 'NO',
}

export const localeValues = {
    [languages.EN]: enLocale,
    [languages.MO]: moLocale,
    [languages.NO]: noLocale,
}

const ButtonStyle = {
    BEIGE: 'beige',
    GREEN: 'green',
    YELLOW: 'yellow'
}
export const { BEIGE, GREEN, YELLOW } = ButtonStyle

const FieldType = {
    DATE: 'date',
    DROPDOWN: 'dropdown',
    PASSWORD: 'password',
}
export const { DATE, DROPDOWN, PASSWORD } = FieldType

const validatorTypes = {
    EMAIL_VAL: 'emailValidator',
    LENGTH: 'length',
    MATCHES_FIELD: 'matchesField',
    MAX_LENGTH: 'maxLength',
    MIN_LENGTH: 'minLength',
    OLDER_THAN: 'olderThan',
    PASS_STRENGTH: 'passwordStrength',
    REGEX: 'regex',
}
export const { EMAIL_VAL, LENGTH, MATCHES_FIELD, MAX_LENGTH, MIN_LENGTH, OLDER_THAN, PASS_STRENGTH, REGEX } = validatorTypes;

export const TERMS_AND_COND = "https://www.termsfeed.com/live/0314683a-803a-40d5-b011-1331734136c3"

export const REG_EMAIL = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/