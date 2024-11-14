const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const connection = require("./db");

const app = express();
const PORT = 3000;

// Configurar o middleware para processar o corpo das requisições
app.use(bodyParser.urlencoded({ extended: true }));

// Servir arquivos estáticos da pasta "public" (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Rota para a página de login - Serve o arquivo index.html da raiz
app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "..", "index.html"); // Corrige o caminho para a raiz
  console.log("Caminho para o index.html:", indexPath);
  res.sendFile(indexPath); // Serve o arquivo index.html
});

// Rota de autenticação (POST)
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  connection.execute(query, [username, password], (err, results) => {
    if (err) {
      return res.status(500).send("Erro no servidor");
    }

    if (results.length > 0) {
      res.send("Login bem-sucedido!");
    } else {
      res.send("Usuário ou senha incorretos");
    }
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
