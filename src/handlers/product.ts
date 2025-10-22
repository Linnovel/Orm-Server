import { Request, Response } from "express"
import Products from "../models/Products.model"
import {
  IdParamSchema,
  ProductsSchema,
  UpdateProductsSchema,
} from "../schemas"

export async function createProducts(
  req: Request,
  res: Response
) {
  try {
    const product = await Products.create(req.validatedBody)
    res.json({ data: product })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: "Error creando el producto" })
  }
}

export async function getProducts(
  req: Request,
  res: Response
) {
  try {
    //Traerlo de diferentes formas
    // const products = await Products.findAll({
    //     order: [['createdAt', 'DESC'], ['name', 'ASC'], ['price', 'ASC']], attributes: ['createdAt', 'updatedAt',]
    // })
    const products = await Products.findAll()
    res.json({ data: products })
  } catch (error) {
    console.log("Error al obtener los productos", error)
  }
}

export async function getProductById(
  req: Request,
  res: Response
) {
  try {
    const { id } = req.params
    const product = await Products.findByPk(id)
    if (!product) {
      return res
        .status(404)
        .json({ message: "Producto no encontrado" })
    }
    res.json({ data: product })
  } catch (error) {
    console.log(
      "Error al obtener el producto por id",
      error
    )
    res.status(500).json({
      message: "Error al obtener el producto por id",
    })
  }
}

export async function updateProduct(
  req: Request,
  res: Response
) {
  try {
    //Se deja este para validar el body
    const bodyParse = UpdateProductsSchema.safeParse(
      req.body
    )

    if (!bodyParse.success) {
      return res.status(400).json({
        message: "No se pudo actualizar el producto",
      })
    }

    // const idParse = IdParamSchema.safeParse(req.params)
    // if (!idParse.success) {
    //   return res.status(400).json({
    //     message: "El id proporcionado no es válido",
    //   })
    // }

    // const { id } = idParse.data
    const id = req.validateId!
    const product = await Products.findByPk(id)
    if (!product) {
      return res
        .status(404)
        .json({ message: "Producto no encontrado" })
    }
    await product.update(bodyParse.data)
    res.json({ data: product })
  } catch (error) {
    console.log(
      "Error al actualizar el producto por ",
      error
    )
    res.status(500).json({
      message: "Error al actualizar el producto por id",
    })
  }
}

export async function updateProductAvailability(
  req: Request,
  res: Response
) {
  try {
    const parsed = IdParamSchema.safeParse(req.params)
    if (!parsed.success) {
      return res.status(400).json({
        message: "El id proporcionado no es válido",
      })
    }

    const { id } = parsed.data
    const product = await Products.findByPk(id)
    if (!product) {
      return res
        .status(404)
        .json({ message: "Producto no encontrado" })
    }
    product.availability = !product.availability
    await product.save()
    res.json({ data: product })
  } catch (error) {
    console.log(
      "Error al actualizar el producto por ",
      error
    )
    res.status(500).json({
      message: "Error al actualizar el producto por id",
    })
  }
}

export async function deleteProduct(
  req: Request,
  res: Response
) {
  try {
    const parsed = IdParamSchema.safeParse(req.params)
    if (!parsed.success) {
      return res.status(400).json({
        message: "El id proporcionado no es válido",
      })
    }
    const { id } = parsed.data
    const product = await Products.findByPk(id)
    if (!product) {
      return res
        .status(404)
        .json({ message: "Producto no encontrado" })
    }
    await product.destroy() // La respuesta de éxito debe ir aquí
    res.json({
      message: "Producto eliminado correctamente",
    })
  } catch (error) {
    console.log("Error al eliminar el producto", error)
    res
      .status(500)
      .json({ message: "Error al eliminar el producto" }) // Y el error 500 aquí
  }
}
