export const BASE_URL = "/api/registration-form"

export const getFormInputs = async (url) => {
    const response = await fetch(url);
    const jsonResponseData = await response.json();
    const dataSortedByOrder = jsonResponseData.fields.sort((a, b) => a.order - b.order)

    return dataSortedByOrder;
}

export const postFormInputs = async (url, data) => {
    const userData = Object.keys(data).map(key => (
        {
            label: key,
            value: data[key]
        }
    ));
    const payload = { data: { userData } }

    const response = await fetch(url, { method: "POST", body: JSON.stringify(payload) });
    const jsonResponseData = await response.json();

    return jsonResponseData;
}