import { Sequelize } from "sequelize-typescript"
import dotenv from "dotenv"

dotenv.config()

const databaseUrl = process.env.DATABASE_URL
if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL is not defined in environment variables"
  )
}
//Especificar en la instancia de Sequelize la URL de conexión y los modelos
const db = new Sequelize(databaseUrl, {
  models: [__dirname + "/../models"],
})

export default db
