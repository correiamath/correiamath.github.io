// Carregar variáveis do arquivo .env
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

// URL do Supabase
const supabaseUrl = "https://bbcjzlrghcwhaowfrxsg.supabase.co";

// Pegar a chave do Supabase do arquivo .env
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
