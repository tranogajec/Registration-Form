const ButtonStyle = {
    YELLOW: 'yellow',
    GREEN: 'green',
}
export const { YELLOW, GREEN } = ButtonStyle


const FieldType = {
    DATE: 'date',
    DROPDOWN: 'dropdown',
    PASSWORD: 'password',
}
export const { DATE, DROPDOWN, PASSWORD } = FieldType


const ErrorMsg = {
    MSG_LETTER_NUMBER_CHAR: "Input can contain only letters from A-Z (a-z), numbers from 0-9 and characters _ and -.",
    MSG_NO_MATCH: "Passwords do not match.",
    MSG_CONTAIN_AT_LEAST: "Password must contain at least one digit, one special character (!@#$%^&*), a lowercase letter, an uppercase letter, and a minimum of 8 characters.",
    MSG_EMAIL: "Email must contain at least one . or - ..."
    // TODO - add validation msg for email address
}
export const { MSG_LETTER_NUMBER_CHAR, MSG_NO_MATCH, MSG_CONTAIN_AT_LEAST } = ErrorMsg


const regexString = {
    REG_LETTER_NUM_CHAR: "^[a-z0-9\\-\\_]+$",
    REG_LETTER_NUM_CHAR_8: "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
    REG_EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
}
export const { REG_LETTER_NUM_CHAR, REG_LETTER_NUM_CHAR_8, REG_EMAIL } = regexString