const express = require("express");
const supabase = require("../database/supabase"); // Importando o cliente Supabase

const router = express.Router();

// Rota para obter dados dos usuários
router.get("/users", async (req, res) => {
  try {
    // Buscando todos os usuários da tabela "users"
    const { data, error } = await supabase
      .from("users") // Nome da tabela
      .select("*"); // Seleciona todas as colunas

    if (error) throw error;

    // Retorna os dados encontrados
    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

module.exports = router;
