import { Request, Response } from "express";
import Style from "../models/style.model";

//Função para CRIAR o estilo da cerveja
export const createStyle = async (req: Request, res: Response) => {
  try {
    const { name, family } = req.body;
    const newStyle = await Style.create({ name, family });
    return res.status(201).json(newStyle);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao criar estilo." });
  }
};

//Função para LISTAR todos os estilos cadastrados
export const getAllStyles = async (req: Request, res: Response) => {
  const styles = await Style.findAll();
  return res.json(styles);
};

//Função para ATUALIZAR os estilos cadastrados
export const updateStyles = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, family } = req.body;
    const styleID = Number(id);
    //Buscar o ID do estilo
    const style = await Style.findByPk(styleID);

    if (!style) {
      return res.status(404).json({ message: "Estilo não encontrado" });
    }
    //Atualiza o campo (o Sequelize só altera o que foi enviado)
    await style.update({ name, family });

    return res.json({
      message: "estilo atualizado com Sucesso! 📝",
      data: style,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro ao atualizar cervejaria." });
  }
};
