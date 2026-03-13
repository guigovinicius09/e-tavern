import express, { Request, Response } from "express";

export const getStatus = (req: Request, res: Response) => {
  res.json({
    Status: "Operacional",
    timestamp: new Date().toISOString(),
    message: "o servidor eTavern está funcionando perfeitamente!",
  });
};
