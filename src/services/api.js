export const BASE_URL = "/api/registration-form"

export const getFormInputs = async (url) => {
    const response = await fetch(url);
    const jsonResponseData = await response.json();

    return jsonResponseData;
}