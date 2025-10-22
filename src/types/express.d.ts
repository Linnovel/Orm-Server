import { Request } from "express"
import { z } from "zod"

declare module "express" {
  interface Request {
    validateId?: number
    validatedBody?: z.infer<
      typeof import("../schemas").ProductsSchema
    >
  }
}
