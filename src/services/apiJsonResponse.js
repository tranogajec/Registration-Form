export const initialFormResponse = {
    EN: {
        "fields": [
            {
                "code": "phone",
                "name": "Phone",
                "fieldType": "string",
                "dataType": "string",
                "order": 11,
                "defaultValue": "",
                "required": true,
                "step": 2,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 8 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 26 }
                    }
                ]
            },
            {
                "code": "address",
                "name": "Address",
                "fieldType": "string",
                "dataType": "string",
                "order": 8,
                "defaultValue": "",
                "required": true,
                "step": 2,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 1 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 50 }
                    }
                ]
            },
            {
                "code": "username",
                "name": "Username",
                "fieldType": "string",
                "dataType": "string",
                "order": 0,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 4 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 20 }
                    },
                    {
                        "key": "regex",
                        "name": "regex",
                        "warning": false,
                        "invalid_message": "regex_failed",
                        "description": "Checks input value against a regex",
                        "parameters": { "regex": "^[a-z0-9\\-\\_]+$", "modifiers": "i" }
                    }
                ]
            },
            {
                "code": "fname",
                "name": "First name",
                "fieldType": "string",
                "dataType": "string",
                "order": 1,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 2 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 25 }
                    }
                ]
            },
            {
                "code": "lname",
                "name": "Last name",
                "fieldType": "string",
                "dataType": "string",
                "order": 2,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 2 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 25 }
                    }
                ]
            },
            {
                "code": "email",
                "name": "E-mail",
                "fieldType": "string",
                "dataType": "string",
                "order": 3,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "emailValidator",
                        "name": "emailValidator",
                        "warning": false,
                        "invalid_message": "email_validation_failed",
                        "description": "Check if email is provided in valid format",
                        "parameters": {}
                    }
                ]
            },
            {
                "code": "birthdate",
                "name": "Birthdate",
                "fieldType": "date",
                "dataType": "date",
                "order": 4,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "olderThan",
                        "name": "olderThan",
                        "warning": false,
                        "invalid_message": "too_young",
                        "description": "Checks if player is older than provided number of years. This validator accepts input as date, year or timestamp. Default is date",
                        "parameters": { "age": 18, "inputType": "date" }
                    }
                ]
            },
            {
                "code": "gender",
                "name": "Gender",
                "fieldType": "dropdown",
                "dataType": "dropdown",
                "order": 5,
                "defaultValue": "",
                "required": false,
                "step": 1,
                "Updatable": true,
                "valueList": [
                    { "order": 0, "value": "M", "name": "male", "isNumber": false },
                    { "order": 1, "value": "F", "name": "female", "isNumber": false }
                ],
                "validators": [
                    {
                        "key": "regex",
                        "name": "regex",
                        "warning": false,
                        "invalid_message": "regex_failed",
                        "description": "Checks input value against a regex",
                        "parameters": { "regex": "^[M,F]$" }
                    }
                ]
            },
            {
                "code": "password",
                "name": "Password",
                "fieldType": "password",
                "dataType": "password",
                "order": 6,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 6 }
                    },
                    {
                        "key": "passwordStrength",
                        "name": "passwordStrength",
                        "warning": false,
                        "invalid_message": "password_strength_failed",
                        "description": "",
                        "parameters": {
                            "regex": "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                        }
                    }
                ]
            },
            {
                "code": "password_confirm",
                "name": "Password Confirmation",
                "fieldType": "password",
                "dataType": "password",
                "order": 7,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "matchesField",
                        "name": "matchesField",
                        "warning": false,
                        "invalid_message": "matchesField_failed",
                        "description": "Check if input value matches target field's value",
                        "parameters": {
                            "target": "password"
                        }
                    }
                ]
            },
            {
                "code": "city",
                "name": "City",
                "fieldType": "string",
                "dataType": "string",
                "order": 9,
                "defaultValue": "",
                "required": true,
                "step": 2,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 1 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 50 }
                    }
                ]
            },
            {
                "code": "countrycode",
                "name": "Countrycode",
                "fieldType": "dropdown",
                "dataType": "dropdown",
                "order": 10,
                "defaultValue": "hr",
                "required": true,
                "step": 2,
                "valueList": [
                    { "order": 1, "value": "me", "name": "Montenegro" },
                    { "order": 1, "value": "hr", "name": "Croatia" },
                    { "order": 1, "value": "mt", "name": "Malta" }
                ],
                "validators": [
                    {
                        "key": "length",
                        "name": "length",
                        "warning": false,
                        "invalid_message": "length_mismatch",
                        "description": "Checks if input value length is equal to targetLength. In case if length is different, method will return an error",
                        "parameters": { "targetLength": 2 }
                    },
                    {
                        "key": "regex",
                        "name": "regex",
                        "warning": false,
                        "invalid_message": "regex_failed",
                        "description": "Checks input value against a regex",
                        "parameters": { "regex": "^[a-z]{2}$" }
                    }
                ]
            }
        ]
    },
    MO: {
        "fields": [
            {
                "code": "phone",
                "name": "Ook eek",
                "fieldType": "string",
                "dataType": "string",
                "order": 11,
                "defaultValue": "",
                "required": true,
                "step": 2,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 8 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 26 }
                    }
                ]
            },
            {
                "code": "address",
                "name": "Ree ree",
                "fieldType": "string",
                "dataType": "string",
                "order": 8,
                "defaultValue": "",
                "required": true,
                "step": 2,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 1 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 50 }
                    }
                ]
            },
            {
                "code": "username",
                "name": "He eek eek",
                "fieldType": "string",
                "dataType": "string",
                "order": 0,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 4 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 20 }
                    },
                    {
                        "key": "regex",
                        "name": "regex",
                        "warning": false,
                        "invalid_message": "regex_failed",
                        "description": "Checks input value against a regex",
                        "parameters": { "regex": "^[a-z0-9\\-\\_]+$", "modifiers": "i" }
                    }
                ]
            },
            {
                "code": "fname",
                "name": "Hee uee ue",
                "fieldType": "string",
                "dataType": "string",
                "order": 1,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 2 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 25 }
                    }
                ]
            },
            {
                "code": "lname",
                "name": "Heeh ooh",
                "fieldType": "string",
                "dataType": "string",
                "order": 2,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 2 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 25 }
                    }
                ]
            },
            {
                "code": "email",
                "name": "Eek ook",
                "fieldType": "string",
                "dataType": "string",
                "order": 3,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "emailValidator",
                        "name": "emailValidator",
                        "warning": false,
                        "invalid_message": "email_validation_failed",
                        "description": "Check if email is provided in valid format",
                        "parameters": {}
                    }
                ]
            },
            {
                "code": "birthdate",
                "name": "Hee eek uee",
                "fieldType": "date",
                "dataType": "date",
                "order": 4,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "olderThan",
                        "name": "olderThan",
                        "warning": false,
                        "invalid_message": "too_young",
                        "description": "Checks if player is older than provided number of years. This validator accepts input as date, year or timestamp. Default is date",
                        "parameters": { "age": 18, "inputType": "date" }
                    }
                ]
            },
            {
                "code": "gender",
                "name": "Uuu umm eek",
                "fieldType": "dropdown",
                "dataType": "dropdown",
                "order": 5,
                "defaultValue": "",
                "required": false,
                "step": 1,
                "Updatable": true,
                "valueList": [
                    { "order": 0, "value": "M", "name": "male", "isNumber": false },
                    { "order": 1, "value": "F", "name": "female", "isNumber": false }
                ],
                "validators": [
                    {
                        "key": "regex",
                        "name": "regex",
                        "warning": false,
                        "invalid_message": "regex_failed",
                        "description": "Checks input value against a regex",
                        "parameters": { "regex": "^[M,F]$" }
                    }
                ]
            },
            {
                "code": "password",
                "name": "Umm ook",
                "fieldType": "password",
                "dataType": "password",
                "order": 6,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 6 }
                    },
                    {
                        "key": "passwordStrength",
                        "name": "passwordStrength",
                        "warning": false,
                        "invalid_message": "password_strength_failed",
                        "description": "",
                        "parameters": {
                            "regex": "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                        }
                    }
                ]
            },
            {
                "code": "password_confirm",
                "name": "Umm ook eer",
                "fieldType": "password",
                "dataType": "password",
                "order": 7,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "matchesField",
                        "name": "matchesField",
                        "warning": false,
                        "invalid_message": "matchesField_failed",
                        "description": "Check if input value matches target field's value",
                        "parameters": {
                            "target": "password"
                        }
                    }
                ]
            },
            {
                "code": "city",
                "name": "Ook ook",
                "fieldType": "string",
                "dataType": "string",
                "order": 9,
                "defaultValue": "",
                "required": true,
                "step": 2,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 1 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 50 }
                    }
                ]
            },
            {
                "code": "countrycode",
                "name": "Hee eek uee",
                "fieldType": "dropdown",
                "dataType": "dropdown",
                "order": 10,
                "defaultValue": "hr",
                "required": true,
                "step": 2,
                "valueList": [
                    { "order": 1, "value": "me", "name": "Moo eek uee" },
                    { "order": 1, "value": "hr", "name": "Cro ee" },
                    { "order": 1, "value": "mt", "name": "Maa eek" }
                ],
                "validators": [
                    {
                        "key": "length",
                        "name": "length",
                        "warning": false,
                        "invalid_message": "length_mismatch",
                        "description": "Checks if input value length is equal to targetLength. In case if length is different, method will return an error",
                        "parameters": { "targetLength": 2 }
                    },
                    {
                        "key": "regex",
                        "name": "regex",
                        "warning": false,
                        "invalid_message": "regex_failed",
                        "description": "Checks input value against a regex",
                        "parameters": { "regex": "^[a-z]{2}$" }
                    }
                ]
            }
        ]
    },
    NO: {
        "fields": [
            {
                "code": "phone",
                "name": "Telefon",
                "fieldType": "string",
                "dataType": "string",
                "order": 11,
                "defaultValue": "",
                "required": true,
                "step": 2,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 8 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 26 }
                    }
                ]
            },
            {
                "code": "address",
                "name": "Adresse",
                "fieldType": "string",
                "dataType": "string",
                "order": 8,
                "defaultValue": "",
                "required": true,
                "step": 2,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 1 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 50 }
                    }
                ]
            },
            {
                "code": "username",
                "name": "Brukernavn",
                "fieldType": "string",
                "dataType": "string",
                "order": 0,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 4 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 20 }
                    },
                    {
                        "key": "regex",
                        "name": "regex",
                        "warning": false,
                        "invalid_message": "regex_failed",
                        "description": "Checks input value against a regex",
                        "parameters": { "regex": "^[a-z0-9\\-\\_]+$", "modifiers": "i" }
                    }
                ]
            },
            {
                "code": "fname",
                "name": "Fornavn",
                "fieldType": "string",
                "dataType": "string",
                "order": 1,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 2 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 25 }
                    }
                ]
            },
            {
                "code": "lname",
                "name": "Etternavn",
                "fieldType": "string",
                "dataType": "string",
                "order": 2,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 2 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 25 }
                    }
                ]
            },
            {
                "code": "email",
                "name": "E-post",
                "fieldType": "string",
                "dataType": "string",
                "order": 3,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "emailValidator",
                        "name": "emailValidator",
                        "warning": false,
                        "invalid_message": "email_validation_failed",
                        "description": "Check if email is provided in valid format",
                        "parameters": {}
                    }
                ]
            },
            {
                "code": "birthdate",
                "name": "Bursdag",
                "fieldType": "date",
                "dataType": "date",
                "order": 4,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "olderThan",
                        "name": "olderThan",
                        "warning": false,
                        "invalid_message": "too_young",
                        "description": "Checks if player is older than provided number of years. This validator accepts input as date, year or timestamp. Default is date",
                        "parameters": { "age": 18, "inputType": "date" }
                    }
                ]
            },
            {
                "code": "gender",
                "name": "Kjønn",
                "fieldType": "dropdown",
                "dataType": "dropdown",
                "order": 5,
                "defaultValue": "",
                "required": false,
                "step": 1,
                "Updatable": true,
                "valueList": [
                    { "order": 0, "value": "M", "name": "mann", "isNumber": false },
                    { "order": 1, "value": "F", "name": "hunn", "isNumber": false }
                ],
                "validators": [
                    {
                        "key": "regex",
                        "name": "regex",
                        "warning": false,
                        "invalid_message": "regex_failed",
                        "description": "Checks input value against a regex",
                        "parameters": { "regex": "^[M,F]$" }
                    }
                ]
            },
            {
                "code": "password",
                "name": "Passord",
                "fieldType": "password",
                "dataType": "password",
                "order": 6,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 6 }
                    },
                    {
                        "key": "passwordStrength",
                        "name": "passwordStrength",
                        "warning": false,
                        "invalid_message": "password_strength_failed",
                        "description": "",
                        "parameters": {
                            "regex": "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                        }
                    }
                ]
            },
            {
                "code": "password_confirm",
                "name": "Bekreft passord",
                "fieldType": "password",
                "dataType": "password",
                "order": 7,
                "defaultValue": "",
                "required": true,
                "step": 1,
                "valueList": [],
                "validators": [
                    {
                        "key": "matchesField",
                        "name": "matchesField",
                        "warning": false,
                        "invalid_message": "matchesField_failed",
                        "description": "Check if input value matches target field's value",
                        "parameters": {
                            "target": "password"
                        }
                    }
                ]
            },
            {
                "code": "city",
                "name": "By",
                "fieldType": "string",
                "dataType": "string",
                "order": 9,
                "defaultValue": "",
                "required": true,
                "step": 2,
                "valueList": [],
                "validators": [
                    {
                        "key": "minLength",
                        "name": "minLength",
                        "warning": false,
                        "invalid_message": "min_length_not_met",
                        "description": "Checks if input value length is greater than targetLength. In case it is less, method will return an error",
                        "parameters": { "targetLength": 1 }
                    },
                    {
                        "key": "maxLength",
                        "name": "maxLength",
                        "warning": false,
                        "invalid_message": "max_length_not_met",
                        "description": "Checks if input value length is less than targetLength. In case it is greater than that, method will return an error",
                        "parameters": { "targetLength": 50 }
                    }
                ]
            },
            {
                "code": "Countrycode",
                "name": "Landskode",
                "fieldType": "dropdown",
                "dataType": "dropdown",
                "order": 10,
                "defaultValue": "hr",
                "required": true,
                "step": 2,
                "valueList": [
                    { "order": 1, "value": "me", "name": "Montenegro" },
                    { "order": 1, "value": "hr", "name": "Kroatia" },
                    { "order": 1, "value": "mt", "name": "Malta" }
                ],
                "validators": [
                    {
                        "key": "length",
                        "name": "length",
                        "warning": false,
                        "invalid_message": "length_mismatch",
                        "description": "Checks if input value length is equal to targetLength. In case if length is different, method will return an error",
                        "parameters": { "targetLength": 2 }
                    },
                    {
                        "key": "regex",
                        "name": "regex",
                        "warning": false,
                        "invalid_message": "regex_failed",
                        "description": "Checks input value against a regex",
                        "parameters": { "regex": "^[a-z]{2}$" }
                    }
                ]
            }
        ]
    }
}



export const errorResponse = {
    EN: {
        "error":
        {
            "title": "Internal Server Error",
            "message": "Something went wrong... We're working on it!"
        }
    },
    MO: {
        "error":
        {
            "title": "Ugga oee ee",
            "message": "Hee hee... Eek!"
        }
    },
    NO: {
        "error":
        {
            "title": "Intern server feil",
            "message": "Noe gikk galt... Vi jobber med det!"
        }
    }
}

