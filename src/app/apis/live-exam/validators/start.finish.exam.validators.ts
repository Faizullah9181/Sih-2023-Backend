import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import JoiValidator from '../../../utils/JoiValidator'

export const startFinishExamValidator = async (req: Request, _res: Response, next: NextFunction) => {
    const schema = Joi.object({
        examId: Joi.number().required(),
    })
    JoiValidator.validate(req.body, schema, next)
}
