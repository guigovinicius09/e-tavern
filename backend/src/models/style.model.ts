import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Style extends Model {
  public id!: number;
  public name!: string;
  public family!: string;
  // Adicionando as datas para o TypeScript não reclamar
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Style.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    family: { type: DataTypes.STRING, allowNull: false },

    // Agora o MySQL assume a responsabilidade de preencher o tempo ⏳
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "styles",
    timestamps: true,
  },
);

export default Style;

// import { DataTypes, Model } from "sequelize";
// import sequelize from "../config/database";

// class Style extends Model {
//   public id!: number;
//   public name!: string;
//   public family!: string;
// }

// Style.init(
//   {
//     id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     family: { type: DataTypes.STRING, allowNull: false },
//   },
//   { sequelize, tableName: "styles", timestamps: true },
// );

// export default Style;
