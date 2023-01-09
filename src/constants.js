const ButtonStyle = {
    GREEN: 'green',
    YELLOW: 'yellow',
}
export const { GREEN, YELLOW } = ButtonStyle


const FieldType = {
    DATE: 'date',
    DROPDOWN: 'dropdown',
    PASSWORD: 'password',
}
export const { DATE, DROPDOWN, PASSWORD } = FieldType


const ErrorMsg = {
    MSG_BIRTHDAY: (value) => `You must be ${value} or older.`,
    MSG_EMAIL: "Please enter a valid email address.",
    MSG_INPUT_REQUIRED: 'Input required',
    MSG_INVALID_INPUT: 'Invalid input',
    MSG_LETTER_NUMBER_CHAR: "Input can only consists of lowercase letters (a-z), digits (0-9), hyphens (-), and underscores (_)",
    MSG_MAX_LENGTH: (value) => `The input must not be more than ${value} characters long.`,
    MSG_MIN_LENGTH: (value) => `The input must be at least ${value} characters long.`,
    MSG_NO_MATCH: "Passwords do not match.",
    MSG_STRONG_PASS: "Password must be at least 8 characters long and contain at least one digit, one special character (!@#$%^&*), one uppercase letter, and one lowercase letter.",
}
export const { MSG_INVALID_INPUT, MSG_BIRTHDAY, MSG_MAX_LENGTH, MSG_MIN_LENGTH, MSG_INPUT_REQUIRED, MSG_EMAIL, MSG_LETTER_NUMBER_CHAR, MSG_NO_MATCH, MSG_STRONG_PASS } = ErrorMsg


const regexString = {
    REG_EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    REG_LETTER_NUM_CHAR: "^[a-z0-9\\-\\_]+$",
    REG_STRONG_PASS: "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
}
export const { REG_EMAIL, REG_LETTER_NUM_CHAR, REG_STRONG_PASS } = regexString


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
export const { EMAIL_VAL, LENGTH, MATCHES_FIELD, MAX_LENGTH, MIN_LENGTH, OLDER_THAN, PASS_STRENGTH, REGEX } = validatorTypes