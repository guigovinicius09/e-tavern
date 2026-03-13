import { Request, Response } from "express";
import Brewery from "../models/brewery.model";

//Função para CRIAR uma cervejaria
export const createBrewery = async (req: Request, res: Response) => {
  try {
    const { name, country, website } = req.body;
    const newBrewery = await Brewery.create({ name, country, website });
    return res.status(201).json(newBrewery);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar cervejaria." });
  }
};

//Função para LISTAR todas as cervejarias cadastradas
export const getAllBreweries = async (req: Request, res: Response) => {
  try {
    const breweries = await Brewery.findAll();
    return res.json(breweries);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar cervejarias." });
  }
};

//Função para ATUALIZAR as cervejarias cadastradas
//Manter a integridade do rótulo vinculado ao brewery_id sem necessidade de exclusão
export const updateBrewery = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, country, website } = req.body;
    const breweryID = Number(id);

    //Busca pela ID da cervejaria
    const brewery = await Brewery.findByPk(breweryID);

    if (!brewery) {
      return res.status(404).json({ message: "Cervejaria não encontrada." });
    }

    //Atualiza o campo (o Sequelize só altera o que foi enviado)
    await brewery.update({ name, country, website });

    return res.json({
      message: "Cervejaria atualizada com sucesso! 📝",
      data: brewery,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao atualizar cervejaria." });
  }
};
