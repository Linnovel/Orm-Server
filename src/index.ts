import server from "./server"
import colors from "colors"

const PORT = 4000

//Se ejecuta el servidor y lo que se manda
server.listen(4000, () => {
  console.log(
    colors.cyan.bold(
      "Server running on http://localhost:" + PORT
    )
  )
})
