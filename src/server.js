const express = require("express");
const path = require("path"); // Importando o módulo path para gerenciar os caminhos de arquivos
const userRoutes = require("./routes/userRoutes"); // Importando as rotas de usuários

const app = express();

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Usando as rotas de usuários
app.use("/api", userRoutes); // Todas as rotas de users estarão sob o prefixo /api

// Rota para a página inicial, garantindo que o index.html será servido corretamente
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// Inicializando o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
