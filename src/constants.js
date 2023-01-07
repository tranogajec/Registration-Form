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
    SPECIAL_CHAR: "Input can contain letters from A-Z numbers from 0-9, @ and _ symbol. It can't contain special characters (. , + , * , ? , ^ , $ , ( , ) , [ , ] , { , } , | ) and empty space.",
    NO_MATCH: "Passwords do not match."
}
export const { SPECIAL_CHAR, NO_MATCH } = ErrorMsg