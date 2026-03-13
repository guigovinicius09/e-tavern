import { Request, Response } from "express";
import Label from "../models/label.model";
import Brewery from "../models/brewery.model";
import Style from "../models/style.model";

//Função para LISTAR todos os rótulos cadastrados
export const getAllLabels = async (req: Request, res: Response) => {
  try {
    const labels = await Label.findAll({
      include: [
        { model: Style, attributes: ["name", "family"] },
        { model: Brewery, attributes: ["name", "country"] },
      ],
    });
    return res.json(labels);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar catálogo." });
  }
};

//Função para CRIAR um rótulo
export const createLabel = async (req: Request, res: Response) => {
  try {
    const { name, style_id, brewery_id, abv, ibu } = req.body;

    //O "Check" de Duplicidade de registro
    const existingLabel = await Label.findOne({
      where: {
        name: name,
        brewery_id: brewery_id,
      },
    });

    if (existingLabel) {
      return res.status(409).json({
        message: `Conflito! A cerveja "${name}" já está cadastrada para esta cervejaria.`,
      });
    }

    //Criação do novo registro
    const newLabel = await Label.create({
      name,
      style_id,
      brewery_id,
      abv,
      ibu,
    });

    return res.status(201).json({
      message: "Rótulo cadastrado com sucesso! 🍺",
      data: newLabel,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro interno ao cadastrar o rótulo." });
  }
};
//Função de DELETAR um rótulo
export const deleteLabel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const labelId = Number(id);
    const label = await Label.findByPk(labelId);

    if (!label) {
      return res.status(404).json({ message: "Rótulo não encontrado." });
    }

    await label.destroy();
    return res.json({ message: "Rótulo deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro interno ao deletar o rótulo." });
  }
};

//Função para ATUALIZAR um rótulo que foi cadastrado errado
export const updateLabel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, style_id, brewery_id, abv, ibu } = req.body;
    const labelID = Number(id);

    //Busca pela ID da cervejaria
    const label = await Label.findByPk(labelID);

    if (!label) {
      return res.status(404).json({ message: "Cervejaria não encontrada." });
    }

    //Atualiza o campo (o Sequelize só altera o que foi enviado)
    await label.update({ name, style_id, brewery_id, abv, ibu });

    return res.json({
      message: "Rótulo atualizado com sucesso! 📝",
      data: label,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao atualizar rótulo." });
  }
};
