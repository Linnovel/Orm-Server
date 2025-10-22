import express from "express"
import router from "./router"
import db from "./config/db"
import colors from "colors"

//Conectar a base de datos
async function connectDb() {
  try {
    await db.authenticate()
    db.sync()
    console.log(
      colors.bgBlack.green(
        "Conexion exitosa  a la base datos"
      )
    )
  } catch (error) {
    console.log(error)
    console.log(
      colors.bgRed.bold(
        "Hubo un error al conectar a la base de datos"
      )
    )
  }
}

connectDb()

//instancia de express par a leer el tipo de json
const server = express()

server.use(express.json())

server.use("/api/products", router)

export default server
