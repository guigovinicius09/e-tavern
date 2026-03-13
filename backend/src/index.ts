import express, { Request, Response } from "express";
import statusRoutes from "./routes/status.routes";
import sequelize from "./config/database";
import "./models/label.model";
import beerRoutes from "./routes/beer.routes";

const app = express();
const PORT = 3030;

app.use(express.json());

app.use("/api", beerRoutes);

app.use(statusRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).json({ error: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Conexão com o MySQL estabelecida com sucesso!");
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Não foi possível conectar ao banco de dados:', err");
  });

sequelize
  .sync({ force: false }) // 'force: false' evita apagar os dados se a tabela já existir
  .then(() => {
    console.log("✅ Tabelas sincronizadas com o banco de dados!");
    app.listen(PORT, () =>
      console.log(`🚀 Servidor em http://localhost:${PORT}`),
    );
  });
