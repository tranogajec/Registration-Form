import { rest } from 'msw'
import { BASE_URL } from '../api'
import { initialFormResponse } from '../apiJsonResponse'

const resolveGetForm = (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.delay(500),
        ctx.json(initialFormResponse)
    )
}

const resolvePostForm = (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.delay(2000),
        ctx.json(req.body)
    )
}

export const handlers = [
    rest.get(BASE_URL, resolveGetForm),
    rest.post(BASE_URL + '/overview', resolvePostForm)
]