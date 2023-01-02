import { rest } from 'msw'
import { initialFormResponse } from '../apiJsonResponse'

const resolveGetForm = (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(initialFormResponse))
}

export const handlers = [
    rest.get('/api/registration-form', resolveGetForm)
]