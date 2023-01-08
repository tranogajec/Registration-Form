import { rest } from 'msw'
import { BASE_URL } from './api'
import { errorResponse, initialFormResponse } from './apiJsonResponse'

const generateRandomNumber = (max) => Math.floor(Math.random() * max)
const MAX_NUMBER = 6

const resolveGetForm = (req, res, ctx) => {
    if (generateRandomNumber(MAX_NUMBER) === 0) { // random number for status 500
        return res(
            ctx.status(500),
            ctx.delay(2000),
            ctx.json(errorResponse)
        )
    }

    return res(
        ctx.status(200),
        ctx.delay(2000),
        ctx.json(initialFormResponse)
    )
}

const resolvePostForm = (req, res, ctx) => {
    if (generateRandomNumber(MAX_NUMBER) === 0) { // random number for status 500
        return res(
            ctx.status(500),
            ctx.delay(2000),
            ctx.json(errorResponse)
        )
    }

    const userDataResponse = JSON.parse(req.body)
    const userData = userDataResponse.data.userData

    return res(
        ctx.status(201),
        ctx.delay(2000),
        ctx.json(userData)
    )
}

export const MSWHandlers = [
    rest.get(BASE_URL, resolveGetForm),
    rest.post(BASE_URL + '/overview', resolvePostForm)
]