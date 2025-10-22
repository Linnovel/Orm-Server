import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Default,
} from "sequelize-typescript"

@Table({
  tableName: "products",
  // La tabla tendrá timestamps: El tiempo de creación y actualización se manejará automáticamente
  timestamps: true,
})
class Products extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER })
  id!: number
  //Definir el tipo de dato de cada columna
  //AlowNull: Indica si el campo puede ser nulo o no

  @AllowNull(false)
  @Column({ type: DataType.STRING(100) })
  name!: string

  @AllowNull(false)
  @Column({
    type: DataType.FLOAT(100),
    allowNull: false,
  })
  price!: number

  @AllowNull(false)
  @Column({ type: DataType.STRING(500) })
  description!: string

  //No necesito pasarlo en el request porque tiene un valor por defecto
  @Default(true)
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  availability!: boolean
}

export default Products
