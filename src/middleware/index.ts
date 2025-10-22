import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"
import { IdParamSchema, ProductsSchema } from "../schemas"

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

export const validateIdParam = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const parsed = IdParamSchema.safeParse(req.params)
  if (!parsed.success) {
    return res
      .status(400)
      .json({ message: "El id proporcionado no es válido" })
  }

  req.validateId = parsed.data.id

  next()
}

export const validateProductBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bodyParse = ProductsSchema.safeParse(req.body)
  if (!bodyParse.success) {
    return res.status(400).json({
      message: "El cuerpo proporcionado no es válido",
    })
  }

  req.validatedBody = bodyParse.data
  next()
}
