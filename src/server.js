const express = require("express");
const userRoutes = require("./routes/userRoutes"); // Importando as rotas de usuários

const app = express();

// Usando as rotas de usuários
app.use("/api", userRoutes); // Todas as rotas de users estarão sob o prefixo /api

// Rota padrão para garantir que o servidor esteja funcionando
app.get("/", (req, res) => {
  res.send("Servidor rodando com Supabase!");
});

// Inicializando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
