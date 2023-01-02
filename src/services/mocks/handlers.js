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

export const handlers = [
    rest.get(BASE_URL, resolveGetForm)
]