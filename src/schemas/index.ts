import { z } from "zod"

export const ProductsSchema = z.object({
  name: z.string().min(4).max(100),
  price: z.number().min(0),
  description: z.string().min(10).max(500),
  availability: z.boolean().optional(),
})

export const UpdateProductsSchema = ProductsSchema.partial()
export const IdParamSchema = z.object({
  id: z.coerce.number().int().positive(),
})

export type IdParam = z.infer<typeof IdParamSchema>
