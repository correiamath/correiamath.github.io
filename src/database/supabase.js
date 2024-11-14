// Carregar variáveis do arquivo .env
require("dotenv").config();

const { createClient } = require("@supabase/supabase-js");

// URL do Supabase
const supabaseUrl = "https://bbcjzlrghcwhaowfrxsg.supabase.co";

// Pegar a chave do Supabase do arquivo .env
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJiY2p6bHJnaGN3aGFvd2ZyeHNnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTU1NTYyOSwiZXhwIjoyMDQ3MTMxNjI5fQ.SNM5aHUpLNCVi4HKzJ8e7iRZXPEGX2yC-7efP5aS7cU";

const supabase = createClient(supabaseUrl, supabaseKey);
