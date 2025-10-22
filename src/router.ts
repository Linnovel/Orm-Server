import { Router } from "express"
import {
  createProducts,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
  updateProductAvailability,
} from "./handlers/product"
import { body, param } from "express-validator"
import {
  handleInputErrors,
  validateIdParam,
  validateProductBody,
} from "./middleware"

const router = Router()

router.get("/", getProducts)

router.get(
  "/:id",
  // param("id", "El id debe ser un numero").isInt(),
  validateIdParam,
  getProductById
)

router.post(
  "/",
  // Validar los datos de entrada
  body("name", "El nombre es obligatorio").not().isEmpty(),
  body("price", "El precio debe ser un numero")
    .not()
    .isEmpty()
    .withMessage("El precio es obligatorio")
    .custom((value) => value > 0)
    .withMessage("El precio no es valido")
    .isNumeric(),
  handleInputErrors,
  validateProductBody,
  createProducts
)

router.put(
  "/:id",
  body("name", "El nombre es obligatorio").not().isEmpty(),
  body("price", "El precio debe ser un numero")
    .not()
    .isEmpty()
    .withMessage("El precio es obligatorio")
    .custom((value) => value > 0)
    .withMessage("El precio no es valido")
    .isNumeric(),
  body(
    "availability",
    "Valor para disponibilidad no es valido"
  ).isBoolean(),
  validateIdParam,
  updateProduct
)

router.patch(
  "/:id",
  body(
    "availability",
    "Valor para disponibilidad no es valido"
  ).isBoolean(),
  validateIdParam,
  updateProductAvailability
)

router.delete("/:id", validateIdParam, deleteProduct)

export default router
