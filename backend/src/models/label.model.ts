import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import Style from "./style.model";
import Brewery from "./brewery.model";

class Label extends Model {
  public id!: number;
  public name!: string;
  public style_id!: number;
  public brewery_id!: number;
  public abv!: number;
  public ibu!: number;
  // Guardiões do tempo para o TypeScript
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Label.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    style_id: {
      type: DataTypes.INTEGER,
      references: { model: Style, key: "id" },
    },
    brewery_id: {
      type: DataTypes.INTEGER,
      references: { model: Brewery, key: "id" },
    },
    abv: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
    ibu: { type: DataTypes.DECIMAL(5, 2), allowNull: false },

    // --- ADICIONANDO AS DATAS AUTOMÁTICAS ---
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
    tableName: "labels",
    timestamps: true,
  },
);

// --- CONFIGURAÇÃO DOS RELACIONAMENTOS ---
Style.hasMany(Label, { foreignKey: "style_id" });
Label.belongsTo(Style, { foreignKey: "style_id" });

Brewery.hasMany(Label, { foreignKey: "brewery_id" });
Label.belongsTo(Brewery, { foreignKey: "brewery_id" });

export default Label;

// import { DataTypes, Model } from "sequelize";
// import sequelize from "../config/database";
// import Style from "./style.model";
// import Brewery from "./brewery.model";

// class Label extends Model {
//   public id!: number;
//   public name!: string;
//   public style_id!: number;
//   public brewery_id!: number;
//   public abv!: number;
//   public ibu!: number;
// }

// Label.init(
//   {
//     id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//     name: { type: DataTypes.STRING, allowNull: false },
//     style_id: {
//       type: DataTypes.INTEGER,
//       references: { model: Style, key: "id" },
//     },
//     brewery_id: {
//       type: DataTypes.INTEGER,
//       references: { model: Brewery, key: "id" },
//     },
//     abv: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
//     ibu: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
//   },
//   { sequelize, tableName: "labels" },
// );

// // --- CONFIGURAÇÃO DOS RELACIONAMENTOS (Associações) ---
// // Um Estilo possui muitos Rótulos
// Style.hasMany(Label, { foreignKey: "style_id" });
// Label.belongsTo(Style, { foreignKey: "style_id" });

// // Uma Cervejaria produz muitos Rótulos
// Brewery.hasMany(Label, { foreignKey: "brewery_id" });
// Label.belongsTo(Brewery, { foreignKey: "brewery_id" });

// export default Label;
