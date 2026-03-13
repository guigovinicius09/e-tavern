import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Brewery extends Model {
  public id!: number;
  public name!: string;
  public country!: string;
  public website!: string;
  // Campos de data para o TypeScript reconhecer
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Brewery.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    country: { type: DataTypes.STRING, allowNull: false },
    website: { type: DataTypes.STRING, allowNull: true },

    // Adicionando os guardiões do tempo ⏳
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Faz o banco colocar a data atual automaticamente
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "breweries",
    timestamps: true, // Mantém a gestão automática do Sequelize ativa
  },
);

export default Brewery;

// import { DataTypes, Model } from "sequelize";
// import sequelize from "../config/database";

// class Brewery extends Model {
//   public id!: number;
//   public name!: string;
//   public country!: string;
//   public website!: string;
// }

// Brewery.init(
//   {
//     id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     country: { type: DataTypes.STRING, allowNull: false },
//     website: { type: DataTypes.STRING, allowNull: true },
//   },
//   { sequelize, tableName: "breweries" },
// );

// export default Brewery;
