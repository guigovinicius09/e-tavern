import express, { Request, Response } from "express";
import statusRoutes from "./routes/status.routes";

const app = express();
const PORT = 3030;

app.use(express.json());

app.use(statusRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
